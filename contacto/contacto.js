window.onload = () => {
  let colorForm = document.getElementById("form");

  let boton = document.getElementById("boton");

  let mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function (e) {
    cambiarColor(e);
  });
  //a la variable boton le agrego un evento "click" que ejecuta la funcion cambiarColor, y a la funcion cambiarColor la tengo que llamar con otra funcion para pasarle el evento

  function cambiarColor(evento) {
    evento.preventDefault();

    let respuesta = confirm("¿Enviar Formulario?");

    if (respuesta) {
      colorForm.style.backgroundColor = "#719e4cff";
      // alert("Formulario Enviado");
      mensaje.innerText = "Formulario enviado con éxito";
      mensaje.style.color = "#ffffff";
      colorForm.reset();
    } else {
      // alert("Envío cancelado");
      mensaje.innerText = "Envío cancelado.";
      mensaje.style.color = "#ff0000ff";
    }
  }

};
