const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function gChannel(projectId,location,channelId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.channelPath(projectId, location, channelId),
  };
  const [channel] = await livestreamServiceClient.getChannel(request);
  return channel;
}

module.exports = gChannel;