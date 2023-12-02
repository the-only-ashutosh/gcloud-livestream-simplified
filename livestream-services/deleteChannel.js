const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function dChannel(projectId,location,channelId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.channelPath(projectId, location, channelId),
  };

  // Run request
  const [Operation] = await livestreamServiceClient.deleteChannel(request);
  await Operation.promise();
  console.log('Deleted channel');
}

module.exports = dChannel;