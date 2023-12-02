const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function dChannelEvent(projectId,location,channelId,eventId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.eventPath(
      projectId,
      location,
      channelId,
      eventId
    ),
  };

  // Run request
  await livestreamServiceClient.deleteEvent(request);
  console.log('Deleted channel event');
}

module.exports = dChannelEvent;