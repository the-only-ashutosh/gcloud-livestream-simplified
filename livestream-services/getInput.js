const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function gInput(projectId,location,inputId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.inputPath(projectId, location, inputId),
  };
  const [input] = await livestreamServiceClient.getInput(request);
  return input;
}

module.exports = gInput;