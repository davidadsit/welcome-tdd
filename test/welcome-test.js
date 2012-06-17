"use strict";

buster.testCase("Greeter", {

    "uses voice to greet": function() {
        var voice = this.stub();
        var greeter = CreateGreeter(voice);
        greeter.greet();
        assert.called(voice);
        assert.match(voice.firstCall.args[0], /Hello/);
    }
});

buster.testCase("Voice", {
    "speaks to the DOM": function() {
        this.stub(jQuery.prototype, "html");
        voice('sup');
        assert.calledWith(jQuery.prototype.html, 'sup');
    },
    
    "shows the voicebox": function() {
        this.stub(jQuery.prototype, "html");
        this.stub(jQuery.prototype, "show");
        voice("howdy, y'all");
        assert.called(jQuery.prototype.show);
    },
    
    "hides the voicebox after 10 seconds": function() {
        var clock = this.useFakeTimers();
        this.stub(jQuery.prototype, "html");
        this.stub(jQuery.prototype, "show");
        this.stub(jQuery.prototype, "slideUp");
        
        voice("howdy, y'all");
        refute.called(jQuery.prototype.slideUp);
        clock.tick(10000)
        assert.called(jQuery.prototype.slideUp);
        
   }
});