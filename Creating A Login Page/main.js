function login() {
  var uname = document.getElementById("username").value;
  var passname = document.getElementById("password").value;
  if (uname == "lol" && passname == "123") {
    location.assign(
      "https://reactjs.org/"
    );
  } else {
    window.alert("Login Failed");
  }
}
