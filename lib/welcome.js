var welcome = {
  greet: function() {
    printer.print(welcomePage.readUserName())
  },
  init: function() {
    welcomePage.registerGreeter(welcome.greet)
  }
}

var welcomePage = {
  readUserName: function() {
    return jQuery("#userName").val()
  },
  registerGreeter: function(handler) {
    jQuery("#submitUserName").click(handler)
  }  
}

var printer = {
  print: function (message) {
    jQuery("#printer").html(message)
    jQuery("#printer").show()
  }
}

$(function() {
  welcome.init()
})
