const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function gChannelEvent(projectId,location,channelId,eventId) {
  // Construct request
  const request = {
    name: livestreamServiceClient.eventPath(
      projectId,
      location,
      channelId,
      eventId
    ),
  };
  const [event] = await livestreamServiceClient.getEvent(request);
  return event;
}

module.exports = gChannelEvent;