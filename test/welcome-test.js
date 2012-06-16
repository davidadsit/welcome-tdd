"use strict";

buster.testCase("Greeter", {

    "uses voice to greet": function() {
        var voice = this.stub({ say: function(){}, collapse: function(){} });
        var greeter = CreateGreeter(voice);
        greeter.greet();
        assert.called(voice.say);
        assert.match(voice.say.firstCall.args[0], /Hello/);
    }
});

buster.testCase("Voice", {

//    "say calls console.log": function() {
//        this.stub(console, "log");
//        voice.say('sup');
//        assert.calledWith(console.log, 'sup');
//    },
    
    "appends message to the DOM": function () {
        var domElement = this.stub({ html: function(){}, show: function(){} });

	var voice = CreateVoice(domElement)
        voice.say("Hey there")

        assert.calledWith(domElement.html, "Hey there")
    },

    "shows the message": function () {
        var domElement = this.stub({ html: function(){}, show: function(){} });

	var voice = CreateVoice(domElement)
        voice.say("This is a test")

        assert.called(domElement.show)
    }
});
