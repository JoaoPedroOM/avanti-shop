document.getElementById("search-button").addEventListener("click", function () {
  var searchText = document.getElementById("search-input").value;

  if (searchText.trim() !== "") {
    document.getElementById("search-result").innerHTML =
      'Você buscou por: "' + searchText + '"';
  } else {
    document.getElementById("search-result").innerHTML = "";
  }
});
