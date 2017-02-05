// ==UserScript==
// @namespace    netflix.tld
// @name         Netflix Ultrawide Script
// @version      1.0
// @author       Anthony Ossent
// @match        https://www.netflix.com/*
// @grant        none
// @description  Cropping the video to match differents aspect ratios in full screen without black bars and stuff
// ==/UserScript==


(function() {

    // height is the size of the redimensionned player and top the distance of the top of the screen. If it's negative then it go over the screen.
    var screenAdjustment = function(height, top){
        var player = document.getElementsByClassName('player-video-wrapper')[0];
        player.style.height = height + '%';
        player.style.top= top + '%';
        //if you want to contribute, you can set subtitles height etc..
    };

    document.onkeydown = function(evt) {
        switch (evt.keyCode){
            case 49: // 1
                screenAdjustment(100, 0);
                break;
            case 50; // 2
                screenAdjustment(104, -2);
                break;
            case 51: // 3
                screenAdjustment(113, -6.5);
                break;
            case 52: // 4
                screenAdjustment(127, -14.5);
                break;
            case 53: // 5
                screenAdjustment(133, -16.5);
                break;
            case 54: // 6
                screenAdjustment(135, -17.5);
                break;
            case 55: // 7
                screenAdjustment(136, -18.5);
                break;
        // you can add preset here with a case and break like:
        //  case 00:
        //      screenAdjustment(00, 00);
        //      break;

    };

    console.log("Netflix Ultrawide script activated");
})();
