// Javascript original

// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

// ------------------------------------------------------------------------------

// Modificación Mariano's genious brother

// const about = document.querySelector(".about");
// const buttons = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// function removeClassActiveButtons () {
//   // recorre todos los botones y elimina la clase active si existe si no existe no pasa nada
//   for ( i=0; i < buttons.length; i++ ){
//     buttons[i].classList.remove('active');
//   }
// }
// function removeClassActiveArticles(){
//   // recorre todos los articulos y elimina la clase active si existe si no existe no pasa nada

//   for ( i=0; i < articles.length; i++ ){
//     articles[i].classList.remove('active');
//   }
// }

// about.addEventListener("click", function (e) {

//   const id = e.target.dataset.id;

//   if (id) {
//     //llamo a la función para eliminar la clase "active" de los botones
//     removeClassActiveButtons();
//     //agarra el objecto clickeado y le agrega la clase "active"
//     e.target.classList.add("active");
//     //llamo a la funcion para eliminar la clase "active" de los articulos
//     removeClassActiveArticles();
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

// ------------------------------------------------------------------------------
// FUNCION CON ONCLICKS. AÑADO ONCLICKS A LOS BOTONES

// const about = document.querySelector(".about");
// const buttons = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// function removeClassActiveButtons() {
//   // recorre todos los botones y elimina la clase active si existe si no existe no pasa nada
//   for (i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("active");
//   }
// }

// function removeClassActiveArticles() {
//   // recorre todos los articulos y elimina la clase active si existe si no existe no pasa nada

//   for (i = 0; i < articles.length; i++) {
//     articles[i].classList.remove("active");
//   }
// }

// function sel(par) {
//   //llamo a la función para eliminar la clase "active" de los botones
//   removeClassActiveButtons();

//   //llamo a la funcion para eliminar la clase "active" de los articulos
//   removeClassActiveArticles();

//   // activo el boton clickado
//   document.querySelector('[data-id="' + par + '"]').classList.add("active");
//   console.log(document.querySelector('[data-id="' + par + '"]'))


// // activo el contenido correspondiente al boton clickado
//   const element = document.getElementById(par);
//   console.log(element);
//   element.classList.add("active");

// const test1 = document.querySelector("#vision");
// console.log(test1);
// }

// ------------------------------------------------------------------------------
// FUNCION CON ONCLICKS; FOREACH Y FUNCTION ARROW

// const about = document.querySelector(".about");
// const buttons = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");

// // function removeClassActiveButtons() {
// //   // recorre todos los botones y elimina la clase active si existe si no existe no pasa nada
// //   buttons.forEach(element => {
// //     element.classList.remove("active");
// //   });
// // };

// removeClassActiveButtons = () => {
//  // recorre todos los botones y elimina la clase active si existe si no existe no pasa nada
//  buttons.forEach(element => {
//   element.classList.remove("active");
// });

// };

// // function removeClassActiveArticles() {
// //   // recorre todos los articulos y elimina la clase active si existe si no existe no pasa nada
// // articles.forEach(element => {
// //   element.classList.remove("active");
// // });
// // };

// removeClassActiveArticles = () =>{
//    // recorre todos los articulos y elimina la clase active si existe si no existe no pasa nada
//   articles.forEach(element => {
//     element.classList.remove("active");
//   });
// };

// function sel(par) {
//   //llamo a la función para eliminar la clase "active" de los botones
//   removeClassActiveButtons();
//   //llamo a la funcion para eliminar la clase "active" de los articulos
//   removeClassActiveArticles();
//   // activo el boton clickado
//   document.querySelector('[data-id="' + par + '"]').classList.add("active");
//   console.log(document.querySelector('[data-id="' + par + '"]'))
// // activo el contenido correspondiente al boton clickado
//   const element = document.getElementById(par);
//   element.classList.add("active");
// }

// SIN COMENTARIOS

// const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
removeClassActiveButtons = () => {
 buttons.forEach(element => {
  element.classList.remove("active");
});};
removeClassActiveArticles = () =>{
  articles.forEach(element => {
    element.classList.remove("active");
  });};
function sel(par) {
  removeClassActiveButtons();
  removeClassActiveArticles();
  document.querySelector('[data-id="' + par + '"]').classList.add("active");
  console.log(document.querySelector('[data-id="' + par + '"]'))
  const element = document.getElementById(par);
  element.classList.add("active");
}

// GALERIA DE IMAGENES

var textos=[
  "Experimentarás un mundo de ingravidez",
  "Titulación reconocida y valorada a nivel mundial",
  "Podrás bucear a partir de los 12 años",
  "Harás nuevos amigos"
 ]
 
 
 function cargarfoto(img, txt){
 document.getElementById("galeria").src="img/buceo"+img+".jpg";
 document.getElementById("mitexto").innerHTML=textos[txt];
 }
 