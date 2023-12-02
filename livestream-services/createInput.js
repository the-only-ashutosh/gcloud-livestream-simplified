const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

const livestreamServiceClient = new LivestreamServiceClient();

async function cInput(projectId,location,inputId) {
  const request = {
    parent: livestreamServiceClient.locationPath(projectId, location),
    inputId: inputId,
    input: {
      type: 'RTMP_PUSH',
    },
  };

  const [Operation] = await livestreamServiceClient.createInput(request);
  const response = await Operation.promise();
  const [input] =  response;
  return input;
}

module.exports = cInput;