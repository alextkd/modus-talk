var constraints = { video: true, audio: true };

var successCallback = function(stream) {

    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
    video.onloadedmetadata = function(e) {
        // Do something with the video here.
    };
};

var errorCallback = function(e) {
    console.error("Error occurred : ", e);
}

getUserMedia( constraints, successCallback, errorCallback );