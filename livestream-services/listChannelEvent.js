const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function lChannelEvents(projectId,location,channelId) {
  const iterable = livestreamServiceClient.listEventsAsync({
    parent: livestreamServiceClient.channelPath(
      projectId,
      location,
      channelId
    ),
  });
  return iterable;
}

module.exports = listChannelEvents;