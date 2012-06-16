var assert = buster.assert;

buster.testCase("welcome tests", {

  "sends welcome message to the printer": function () {
    this.stub(welcomePage, "readUserName").returns("David")
    this.stub(printer, "print")

    welcome.greet()

    assert.calledWith(printer.print, "David")
  }

});

buster.testCase("printer tests", {

  "appends message to the DOM": function () {
    stub = this.spy(jQuery.prototype, "append")

    printer.print("This is a test")

    assert.calledWith(stub.html, "This is a test")
    stub.show.restore()
  },

  "shows the message": function () {
    stub = this.spy(jQuery.prototype, "show")

    printer.print("This is a test")

    assert.called(stub.show)
    stub.show.restore()
  }

});

