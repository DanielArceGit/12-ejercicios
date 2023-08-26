// function pintar() {
//     ele.style.backgroundColor = "yellow";
//   }
//   const ele = document.getElementById("ele1");
//   ele.addEventListener("click", pintar);

// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función

// Modifica el código anterior para poder pasarle un color como argumento a la
// función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
// párrafo se debe pasar amarillo como color. 

// ---------------------------------------------
// Respuesta
// ---------------------------------------------
const pintar = (ele, color = 'green') => {
    ele.style.backgroundColor = color;
  };
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", () => {
    pintar(ele, 'yellow');
  });