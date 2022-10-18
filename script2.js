function searchCarros() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let carros = document.getElementsByClassName("carros");

  for (i = 0; i < carros.length; i++) {
    if (!carros[i].innerHTML.toLowerCase().includes(input)) {
      carros[i].style.display = "none";
    } else {
      carros[i].style.display = "list-item";
    }
  }
}
