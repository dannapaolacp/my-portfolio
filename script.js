let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //se oculta el menu despues de seleccionada una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
