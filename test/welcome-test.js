var assert = buster.assert;

buster.testCase("welcome tests", {
  mockPrinter: null,

  setUp: function () {
    buster.assert(true) // buster bug
  },  

  tearDown: function () {
    welcomePage.readUserName.restore()
    mockPrinter.restore()
  },  

  "sends welcome message to the printer": function () {
    sinon.stub(welcomePage, "readUserName").returns("David")
    mockPrinter = sinon.mock(printer)

    mockPrinter.expects("printWelcome").withArgs("David").once()
    welcome.greet()

    mockPrinter.verify()
  }

});

