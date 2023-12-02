const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function cAsset(projectId,location,assetId,assetUri) {
  // Construct request
  const request = {
    parent: livestreamServiceClient.locationPath(projectId, location),
    assetId: assetId,
    asset: {
      video: {
        uri: assetUri,
      },
    },
  };

  // Run request
  const [operation] = await livestreamServiceClient.createAsset(request);
  const response = await operation.promise();
  const [asset] = response;
  return asset;
}

module.exports = cAsset;