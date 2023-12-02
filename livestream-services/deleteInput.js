const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

const livestreamServiceClient = new LivestreamServiceClient();

async function dInput() {

  const request = {
    name: livestreamServiceClient.inputPath(projectId, location, inputId),
  };

  const [Operation] = await livestreamServiceClient.deleteInput(request);
  await Operation.promise();
  console.log('Deleted input');
}

module.exports = dInput;