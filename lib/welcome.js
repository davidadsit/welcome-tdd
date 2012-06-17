"use strict";

var CreateGreeter = function (voice) {
    return {
        greet: function () {
            voice("Hello, world!");
        }
    };
};

var voice = function (speech) {
    var voiceBox = $("#voiceBox")
    voiceBox.html(speech);
    voiceBox.show();
    setTimeout(function(){voiceBox.slideUp('slow')}, 2000);
};

$(function() {
    CreateGreeter(voice).greet()
});