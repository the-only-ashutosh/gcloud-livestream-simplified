const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function cChannelEvent(projectId,location,channelId,eventId) {
  // Construct request
  const request = {
    parent: livestreamServiceClient.channelPath(
      projectId,
      location,
      channelId
    ),
    eventId: eventId,
    event: {
      adBreak: {
        duration: {
          seconds: 30,
        },
      },
      executeNow: true,
    },
  };

  // Run request
  const [event] = await livestreamServiceClient.createEvent(request);
  return event;
}

module.exports = cChannelEvent;