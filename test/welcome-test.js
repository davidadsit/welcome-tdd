var assert = buster.assert;

buster.testCase("welcome tests", {

  setUp: function () {
    buster.assert(true) // buster bug
  },  

  "sends welcome message to the printer": function () {
    sinon.stub(welcomePage, "readUserName").returns("David")
    var mockPrinter = sinon.mock(printer)

    mockPrinter.expects("printWelcome").withArgs("David").once()
    welcome.greet()

    mockPrinter.verify()
    mockPrinter.restore()
    welcomePage.readUserName.restore()
  }

});

