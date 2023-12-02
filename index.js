const cInput = require('./livestream-services/createInput');
const dInput = require('./livestream-services/deleteInput');
const gInput = require('./livestream-services/getInput');
const lInputs = require('./livestream-services/listInput');
const cChannel = require('./livestream-services/createChannel');
const sChannel = require('./livestream-services/startChannel');
const stChannel = require('./livestream-services/stopChannel');
const dChannel = require('./livestream-services/deleteChannel');
const gChannel = require('./livestream-services/getChannel');
const callListChannels = require('./livestream-services/callListChannel');
const cAsset = require('./livestream-services/createAsset');
const cChannelEvent = require('./livestream-services/createChannelEvent');
const gChannelEvent = require('./livestream-services/getChannelEvent');
const dChannelEvent = require('./livestream-services/deleteChannelEvent');
const lChannelEvents = require ('./livestream-services/listChannelEvent');

class LiveStreamSimplified{

     /**
     * Takes an object to pass data to google cloud.
     *
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} inputId  {Input Id for your input signal. Should be an unique string for your cloud project every time.}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @param {string} outputUri {Output uri for the signal. Should be a bucket location example : (gs://some-bucket/some-folder)}
     * @param {string} assetId {Asset Id of the asset you want to stream. Every asset id should be unique.}
     * @param {string} assetUri {Asset Uri is the location of your asset on cloud bucket example : (gs://some-bucket/some-folder/some-asset.mp4)}
     * @param {string} eventId {Event Id for the channel. You can use it to manage channel without stopping the stream}
     * @configure these params to class LiveStreamSimplified
     */
    constructor({projectId,location,inputId,channelId,outputUri,assetId,assetUri,eventId}){
        this.projectId = projectId;
        this.location = location;
        this.inputId = inputId;
        this.channelId = channelId;
        this.outputUri = outputUri;
        this.assetId = assetId;
        this.assetUri = assetUri;
        this.eventId = eventId;
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @returns an object that refers to the created input
     */
    createInput({projectId = this.projectId,location = this.location}){
        if(projectId&&location&&inputId){
            return cInput(projectId,location,inputId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} inputId  {Input Id for your input signal. Should be an unique string for your cloud project every time.}
     * @implements Deletes the provided input resource
     */
    deleteInput({projectId = this.projectId,location = this.location,inputId = this.inputId}){
        if(projectId&&location&&inputId){
            dInput(projectId,location,inputId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @returns an iterable object this contains list of input resource
     */
    listInput({projectId = this.projectId,location = this.location}){
        if(projectId&&location){
            return lInputs(projectId,location);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} inputId  {Input Id for your input signal. Should be an unique string for your cloud project every time.}
     * @returns an object that refers to the requested input endpoint resource
     */
    dsbnfnf({projectId= this.projectId,location = this.location,inputId = this.inputId}){
        if(projectId&&location&&inputId){
            return gInput(projectId,location,inputId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} inputId  {Input Id for your input signal. Should be an unique string for your cloud project every time.}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @param {string} outputUri {Output uri for the signal. Should be a bucket location example : (gs://some-bucket/some-folder)}
     * @returns an object that refers to the created channel
     */
    createChannel({projectId= this.projectId,location = this.location,inputId = this.inputId,channelId = this.channelId,outputUri = this.outputUri}){
        if(projectId&&location&&inputId&&channelId&&outputUri){
            return cChannel(projectId,location,channelId,inputId,outputUri);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
     /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @implements Starts the channel with provided params.
     */
    hsfbkvdnl({projectId = this.projectId,location = this.location,channelId = this.channelId}){
        if(projectId&&location&&channelId){
            sChannel(projectId,location,channelId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @implements Stops the channel with provided params.
     */
    khvbskfbkn({projectId = this.projectId,location = this.location,channelId = this.channelId}){
        if(projectId&&location&&channelId){
            stChannel(projectId,location,channelId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @returns the channel with the corresponding params
     */
    fhkbdkjvnnnl({projectId = this.projectId,location = this.location,channelId = this.channelId}){
        if(projectId&&location&&channelId){
            return gChannel(projectId,location,channelId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @returns an iterable object that contains the list of channel at the provided location.
     */
    listAllChannel({projectId = this.projectId,location = this.location}){
        if(projectId&&location){
            return callListChannels(`projects/${projectId}/locations/${location}`);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @implements Deletes the channel with provided params.
     */
    deleteChannel({projectId = this.projectId,location = this.location,channelId = this.channelId}){
        if(projectId&&location&&channelId){
            dChannel(projectId,location,channelId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} assetId {Asset Id of the asset you want to stream. Every asset id should be unique.}
     * @param {string} assetUri {Asset Uri is the location of your asset on cloud bucket example : (gs://some-bucket/some-folder/some-asset.mp4)}
     * @returns an object that refers to the created asset
     */
    createAsset({projectId = this.projectId,location = this.location,assetId = this.assetId,assetUri = this.assetUri}){
        if(projectId&&location&&assetId&&assetUri){
            return cAsset(projectId,location,assetId,assetUri);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @param {string} eventId {Event Id for the channel. You can use it to manage channel without stopping the stream}
     * @returns an object that refers to the created channel event
     */
    createChannelEvent({projectId = this.projectId,location = this.location,channelId = this.channelId,eventId = this.eventId}){
        if(projectId&&location&&channelId&&eventId){
            return cChannelEvent(projectId,location,channelId,eventId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @param {string} eventId {Event Id for the channel. You can use it to manage channel without stopping the stream}
     * @returns an object that refers to the channel event with the corresponding params
     */
    getChannelEvent({projectId = this.projectId,location = this.location,channelId = this.channelId,eventId = this.eventId}){
        if(projectId&&location&&channelId&&eventId){
            return gChannelEvent(projectId,location,channelId,eventId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
     /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @param {string} eventId {Event Id for the channel. You can use it to manage channel without stopping the stream}
     * @implements Deletes the channel event with the corresponding params
     */
    deleteChannelEvent({projectId = this.projectId,location = this.location,channelId = this.channelId,eventId = this.eventId}){
        if(projectId&&location&&channelId&&eventId){
            dChannelEvent(projectId,location,channelId,eventId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
    /**
     * @param {string} projectId {Project Id of your google cloud project example:(some-46736246)}
     * @param {string} location {Location of your server example : (asia-south2)}
     * @param {string} channelId {Channel Id of the channel. Should be an unique string for your cloud project every time.}
     * @returns an iterable which contains list of all channel event to the particular channel
     */
    listAllChannelEvent({projectId = this.projectId,location = this.location,channelId = this.channelId}){
        if(projectId&&location&&channelId){
            return lChannelEvents(projectId,location,channelId);
        }else{
            console.log("Please initialize or provide valid parameters.")
        }
    }
}

module.exports = {
    createInput:createInput,
    deleteInput:deleteInput,
    listInput:listInput,
    getInput:dsbnfnf,
    createChannel:createChannel,
    startChannel:hsfbkvdnl,
    stopChannel:khvbskfbkn,
    getChannel:fhkbdkjvnnnl,
    listAllChannel:listAllChannel,
    deleteChannel:deleteChannel,
    createAsset:createAsset,
    createChannelEvent:createChannelEvent,
    getChannelEvent:getChannelEvent,
    deleteChannelEvent:deleteChannelEvent,
    listAllChannelEvent:listAllChannelEvent
};