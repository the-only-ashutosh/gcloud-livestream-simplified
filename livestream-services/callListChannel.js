const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamClient = new LivestreamServiceClient();

async function callListChannels(parent) {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = livestreamClient.listChannelsAsync(request);
  return iterable;
}

module.exports = callListChannels;