"use strict";

var CreateGreeter = function (voice) {
    return {
        greet: function (name) {
            voice("Hello, " + name + "!");
            this.name = name;
        },
        pontificate: function () {
            voice(this.name);
        }
    };
};

var quiet = function (voiceBox) {
    setTimeout(function(){voiceBox.slideUp('slow')}, 2000);
};

var voice = function (speech) {
    var voiceBox = $("#voiceBox")
    voiceBox.html(speech);
    voiceBox.show();
    quiet(voiceBox);
};

