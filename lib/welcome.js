"use strict";

var CreateGreeter = function (voice) {
    return {
        greet: function () {
            voice.say("Hello, world!");
        }
    };
};

var CreateVoice = function (domElement) {
    return { 
        say: function (speech) {
            //console.log(speech);
            domElement.html(speech)
            domElement.show()
        }
    }
};

var init = function() {

    var voice = CreateVoice(jQuery("#printer"));
    var greeter = CreateGreeter(voice);
    //greeter.greet();

}

$(init);
