// Active strict mode
"use strict";

// Trigger when document fully loaded
window.onload = function() {

  // Variables
  var i;
  var video = document.getElementById("video");
  var btnPlay = document.getElementById("play");
  var btnMute = document.getElementById("mute");
  var btnFullScreen = document.getElementById("fullscreen");
  var seekBar = document.getElementById("seekbar");
  var sliderVolume = document.getElementById("volumeslider");
  var fillBar = document.getElementById("fillbar");
  var spanList = document.querySelectorAll("span[data-index]");

  // Button images
  btnMute.style.backgroundImage = "url('img/volume-on-icon.png')";
  btnPlay.style.backgroundImage = "url('img/play-icon.png')";
  btnFullScreen.style.backgroundImage = "url('img/fullscreen-icon.png')";


  // Play Button toggle
  var playToggle = function() {
    // If video on pause = true then
    if(video.paused) {
      // Start video
      video.play();
      // Change button image to pause
      btnPlay.style.backgroundImage = "url('img/pause-icon.png')";
    } else {
      // Pause video
      video.pause();
      // Change button image to play
      btnPlay.style.backgroundImage = "url('img/play-icon.png')";
    }
  };

  // Full screen toggle
  var fsToggle = function() {
    // If video request full screen
    if (video.requestFullscreen) {
      // Video request full screen
      video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
      // Video request full screen for IE
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      // Video request full screen for FF
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      // Video request full screen for Chrome and Safari
      video.webkitRequestFullscreen();
    }
  };

  // Mute toggle
  var muteToggle = function() {
    // If video sound mute = true
    if (video.muted === true) {
      // Turn video mute to false
      video.muted = false;
      // Change button image to volume on
      btnMute.style.backgroundImage = "url('img/volume-on-icon.png')";
    } else {
      // Turn video mute to true
      video.muted = true;
      // Change button image to volume off
      btnMute.style.backgroundImage = "url('img/volume-off-icon.png')";
    }
  };

  // Highlight span
  var highlight = function() {
    var hiTime = video.currentTime;
    // Function for index 1 and above
    function hiOn(i) {
      // Set i to get index attribute
      var currentSpan = document.querySelector("span[data-index='"+i+"']").getAttribute("data-index");
      // Count i-1 for previous index remove
      var prevRemove = currentSpan-1;
      // Remove highlight class on previous span
      document.querySelector("span[data-index='"+prevRemove+"']").classList.remove("highlight");
      // Add highlight class on current span
      document.querySelector("span[data-index='"+currentSpan+"']").classList.add("highlight");
    }
    // Track time with below condition
    if (hiTime > 0 && hiTime < 4.130 ) {
      // Add highlight class to first index
      document.querySelector("span[data-index='0']").classList.add("highlight");
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 4.130 && hiTime < 7.535 ) {
      hiOn(1);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 7.535 && hiTime < 11.270 ) {
      hiOn(2);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 11.270 && hiTime < 13.960 ) {
      hiOn(3);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 13.960 && hiTime < 17.940 ) {
      hiOn(4);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 17.940 && hiTime < 22.370 ) {
      hiOn(5);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 22.370 && hiTime < 26.880 ) {
      hiOn(6);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 26.880 && hiTime < 30.920 ) {
      hiOn(7);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 32.100 && hiTime < 34.730 ) {
      hiOn(8);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 34.730 && hiTime < 39.430 ) {
      hiOn(9);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 39.430 && hiTime < 41.190 ) {
      hiOn(10);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 42.350 && hiTime < 46.300 ) {
      hiOn(11);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 46.300 && hiTime < 49.270 ) {
      hiOn(12);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 49.270 && hiTime < 53.760 ) {
      hiOn(13);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 53.760 && hiTime < 57.780 ) {
      hiOn(14);
      // Track time with below condition with function hiOn(i)
    } else if (hiTime > 57.780 && hiTime < 60 ) {
      hiOn(15);
    }
  };


  // Volume slider
  var volumeSlider = function() {
    // Set volume by slider value / 100
    video.volume = sliderVolume.value / 100;
  };

  // Video go to time
  var videoGoTo = function() {
    var i;
    // Select all span with data index attribute
    var spanList = document.querySelectorAll("span[data-index]");
    // Loop throught span with data index attribute
    for (i=0; i<spanList.length; i++) {
      // Loop throught all the span
      var spanLoop = document.querySelector("span[data-index='"+i+"']");
      // Remove all highlight class with loop
      spanLoop.classList.remove("highlight");
    }
    // Get time from video duration * width of seekbar
    var goTo = video.duration * (seekBar.value / 100);
    // Set video current time to goTo value
    video.currentTime = goTo;
  };

  // Video time
  var videoTime = function() {
    var curTime = document.getElementById("curtime");
    var durTime = document.getElementById("durtime");
    // Value for time bar
    var barValue = video.currentTime * (100 / video.duration);
    // Add seekbar value with barValue
    seekBar.value = barValue;
    // Increase time bar width with seekbar value
    fillBar.style.width = seekBar.value+"%";
    // Count current minute
    var curMin = Math.floor(video.currentTime / 60);
    // Count current second
    var curSec = Math.floor(video.currentTime - curMin * 60);
    // Count current minute
    var durMin = Math.floor(video.duration / 60);
    // Count current second
    var durSec = Math.floor(video.duration - durMin * 60);
    if(curSec < 10) {
      curSec = "0" + curSec;
    }
    if(durSec < 10) {
      durSec = "0" + durSec;
    }
    if(curMin < 10) {
      curMin = "0" + curMin;
    }
    if(durMin < 10) {
      durMin = "0" + durMin;
    }
    // Set innerHTML for current time and duration time
    curTime.innerHTML = curMin+":"+curSec;
    durTime.innerHTML = durMin+":"+durSec;
  };

  // Span clickable
  // Loop span list
  for(i=0; i<spanList.length; i++ ) {
    // Function closure start
    (function(i) {
      // Simulate document.querySelector("span[data-index='"+i+"']") from index 0 to 15
      document.querySelector("span[data-index='"+i+"']").addEventListener("click", function() {
        // Get data-time from selected index
        var tsTime = document.querySelector("span[data-index='"+i+"']").getAttribute("data-time");
        // Set video current time with tsTime
        video.currentTime = tsTime;
      });
      // Function closure end
    })(i);
  }


  // Event listener
  btnPlay.addEventListener("click", playToggle);
  btnFullScreen.addEventListener("click", fsToggle);
  btnMute.addEventListener("click", muteToggle);
  seekBar.addEventListener("change", videoGoTo);
  video.addEventListener("timeupdate", highlight);
  video.addEventListener("timeupdate", videoTime);
  sliderVolume.addEventListener("change", volumeSlider);
};
