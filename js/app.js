'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};


function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

$(document).ready(function() {
  var video = document.querySelector('video');
  navigator.getUserMedia(constraints, successCallback, errorCallback);
});
