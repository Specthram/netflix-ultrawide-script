// ==UserScript==
// @name         Netflix Ultrawide
// @namespace    netflix.tld
// @version      1.0
// @Scriptauthor Anthony Ossent
// @match        https://www.netflix.com/*
// @grant        none
// @description  Cropping the video to match differents aspect ratios in full screen without black bars and stuff
// ==/UserScript==

/*

HOW TO :
Press keys from 1 to 7 to choose aspect ratios from 1.78:1 to 2.39:1

*/


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

/*
keycodes :
backspace   8
tab     9
enter   13
shift   16
ctrl    17
alt     18
pause/break     19
caps lock   20
escape  27
page up     33
page down   34
end     35
home    36
left arrow  37
up arrow    38
right arrow     39
down arrow  40
insert  45
delete  46
0   48
1   49
2   50
3   51
4   52
5   53
6   54
7   55
8   56
9   57
a   65
b   66
c   67
d   68
e   69
f   70
g   71
h   72
i   73
j   74
k   75
l   76
m   77
n   78
o   79
p   80
q   81
r   82
s   83
t   84
u   85
v   86
w   87
x   88
y   89
z   90
left window key     91
right window key    92
select key  93
numpad 0    96
numpad 1    97
numpad 2    98
numpad 3    99
numpad 4    100
numpad 5    101
numpad 6    102
numpad 7    103
numpad 8    104
numpad 9    105
multiply    106
add     107
subtract    109
decimal point   110
divide  111
f1  112
f2  113
f3  114
f4  115
f5  116
f6  117
f7  118
f8  119
f9  120
f10     121
f11     122
f12     123
num lock    144
scroll lock     145
semi-colon  186
equal sign  187
comma   188
dash    189
period  190
forward slash   191
grave accent    192
open bracket    219
back slash  220
close braket    221
single quote    222

*/
