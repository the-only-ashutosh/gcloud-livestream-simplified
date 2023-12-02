const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function stChannel(projectId,location,channelId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.channelPath(projectId, location, channelId),
  };
  const [Operation] = await livestreamServiceClient.stopChannel(request);
  await Operation.promise();
  console.log('Stopped channel');
}

module.exports = stChannel;