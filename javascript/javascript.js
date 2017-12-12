function UserAction() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://random-quote-generator.herokuapp.com/api/quotes/random", true);
  xhttp.onload = function (e) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        var response = JSON.parse(xhttp.responseText);
        document.getElementById("quote-text").innerHTML = response.quote;
        document.getElementById("author-text").innerHTML = response.author;
        if (response.quote == undefined) {
          UserAction();
        }
      } else {
        console.error(xhttp.statusText);
      }
    }
  };
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}