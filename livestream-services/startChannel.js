const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function sChannel(projectId,location,channelId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.channelPath(projectId, location, channelId),
  };
  await livestreamServiceClient.startChannel(request);
  console.log('Started channel');
}

module.exports = sChannel;