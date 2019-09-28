const openCamera=()=> {
    navigator.getUserMedia = navigator.getUserMedia ||
       navigator.webkitGetUserMedia ||
       navigator.mozGetUserMedia;
 
    if (navigator.getUserMedia) {
       navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
          function (stream) {
             var video = document.getElementById('localStream');
             video.srcObject = stream;
             video.onloadedmetadata = function (e) {
                video.play();
             };
          },
          function (err) {
             console.log("The following error occurred: " + err.name);
          }
       );
    } else {
       console.log("getUserMedia not supported");
    }
 }
 
 module.exports = openCamera