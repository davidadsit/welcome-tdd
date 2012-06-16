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
            setTimeout(this.collapse, 2000)
        },
        
        collapse: function() {
            domElement.slideUp()
        }
    }
};

var init = function() {

    var jQueryElement = $("#printer")
    var voice = CreateVoice(jQueryElement)
    var greeter = CreateGreeter(voice)
    greeter.greet()

}

$(init);
