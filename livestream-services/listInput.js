const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function lInputs(projectId,location) {
  const iterable = livestreamServiceClient.listInputsAsync({
      parent: livestreamServiceClient.locationPath(projectId, location),
  });
 return iterable;
}

module.exports = lInputs;