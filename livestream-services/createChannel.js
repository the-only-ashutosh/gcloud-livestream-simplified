const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

// Instantiates a client
const livestreamServiceClient = new LivestreamServiceClient();

async function cChannel(projectId,location,channelId,inputId,outputUri) {
  // Construct request
  const request = {
    parent: livestreamServiceClient.locationPath(projectId, location),
    channelId: channelId,
    channel: {
      inputAttachments: [
        {
          key: 'my-input',
          input: livestreamServiceClient.inputPath(
            projectId,
            location,
            inputId
          ),
        },
      ],
      output: {
        uri: outputUri,
      },
      elementaryStreams: [
        {
          key: 'es_video',
          videoStream: {
            h264: {
              profile: 'high',
              heightPixels: 720,
              widthPixels: 1280,
              bitrateBps: 3000000,
              frameRate: 30,
            },
          },
        },
        {
          key: 'es_audio',
          audioStream: {
            codec: 'aac',
            channelCount: 2,
            bitrateBps: 160000,
          },
        },
      ],
      muxStreams: [
        {
          key: 'mux_video',
          elementaryStreams: ['es_video'],
          segmentSettings: {
            seconds: 2,
          },
        },
        {
          key: 'mux_audio',
          elementaryStreams: ['es_audio'],
          segmentSettings: {
            seconds: 2,
          },
        },
      ],
      manifests: [
        {
          fileName: 'manifest.m3u8',
          type: 'HLS',
          muxStreams: ['mux_video', 'mux_audio'],
          maxSegmentCount: 5,
        },
      ],
    },
  };

  // Run request
  const [Operation] = await livestreamServiceClient.createChannel(request);
  const response = await Operation.promise();
  const [channel] = response;
  return channel;
}

module.exports = cChannel;