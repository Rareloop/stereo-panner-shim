"use strict";

var AudioContext = global.AudioContext || global.webkitAudioContext;
/**
 * Because the stereo-panner-node repo (https://github.com/mohayonao/stereo-panner-node)
 * is archived, we are overriding here and have removed the lines that breaks later versions 
 * of Safari (setting `.channelInterpretation`) which cannot be set in Safri any more 
 * (https://www.w3.org/TR/webaudio/) "The channel intepretation can not be 
 * changed from “discrete” and a InvalidStateError exception MUST be thrown 
 * for any attempt to change the value."
*/
var StereoPannerNode = require("./stereo-panner-node-override");

if (AudioContext && !AudioContext.prototype.createStereoPanner) {
  AudioContext.prototype.createStereoPanner = function() {
    return new StereoPannerNode(this);
  };
}
