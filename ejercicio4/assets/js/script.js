// ---------------------------------------------
// cambiar color a negro
// ---------------------------------------------

// variables
    const azul = document.getElementById('azul');
    const rojo = document.getElementById('rojo');
    const verde = document.getElementById('verde');
    const amarillo = document.getElementById('amarillo');

// funcion
    function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
  }

// eventos
    azul.addEventListener('click', cambiarColorNegro);
    rojo.addEventListener('click', cambiarColorNegro);
    verde.addEventListener('click', cambiarColorNegro);
    amarillo.addEventListener('click', cambiarColorNegro);

// ---------------------------------------------
// cambiar color
// ---------------------------------------------

// variable
    let colorSeleccionado = '';

// funcion (cambiar color y agregar nuevos divs)
    function cambiarColorDivKey(event) {
    const tecla = event.key;
    const divKey = document.getElementById('key');

    if (tecla === 'a') {
        divKey.style.backgroundColor = 'pink';
      } else if (tecla === 's') {
        divKey.style.backgroundColor = 'orange';
      } else if (tecla === 'd') {
        divKey.style.backgroundColor = 'lightblue';
      } else if (tecla === 'q') {
        crearNuevoDiv('purple');
      } else if (tecla === 'w') {
        crearNuevoDiv('gray');
      } else if (tecla === 'e') {
        crearNuevoDiv('brown');
      } else {
        return;
      }
    }

// evento
    document.addEventListener('keydown', cambiarColorDivKey,);

// ---------------------------------------------
// crear nuevos divs
// ---------------------------------------------

// funcion
    function crearNuevoDiv(color) {
    const contenedor = document.getElementById('contenedor');
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    contenedor.appendChild(nuevoDiv);
  }