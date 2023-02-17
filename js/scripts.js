/* 
---- Metodos de Acceso a los Elementos (nodos) -----
getElementById('id') // retorna el elemento segun su ID
getElementsByClassName('class') // retorna una coleccion de elementos segun la clase que contiene
getElementsByTagName('tag') // retorna una coleccion de elementos segun la etiqueta o tag dado
getElementsByName('name') // retorna una coleccion de elementos segun el valor del atributo name
querySelector('selector_css') // retorna el primer elemento con el selector css dado
querySelectorAll('selector_css') // retorna todos los elementos con el selector css dado
---- Metodos de Creacion de Elementos (nodos) -----
createElement('tag') // crear un nuevo elemento segun la etiqueta dada
createTextNode('texto') // crear un nuevo texto segun el valor dado
*/

/* 
1. Modificar el Texto del Logo y escribir su nombre
2. Agregar dos opciones al menu principal ejemplo: (login, register)
3. Modificar el atributo src de la imagen del "Heading Row" y cargar una imagen desde "lorem picsum"
4. Agregar una parrafo nuevo y asignarles las mismas clases que tiene el parrafo actual y agregarlo antes del mismo
5. Modificar todos los cards de la seccion content y cambiar su informacion:
    titulo: Card One por Content 1 y asi cada uno de los titulos.
Bonus:
6. Construir una nueva seccion y agregar antes del footer un formulario de contacto con 3 inputs (name, email, message) y un boton de enviar
7. Crear una funcion que muestre en pantalla (alert) los valores escritos en el formulario al momento de hacer click en el boton (añadir usando "addEventListener").

*/

// Respuesta 1.
let logo = document.querySelector('.navbar-brand');
logo.innerHTML = "Luis J. Rodriguez O."
// Respuesta 2.

// capturar el menu
let navbarNav = document.querySelector('.navbar-nav');

// Crear los elementos de la opcion del menu Login
let loginNavItem = document.createElement('li');
let loginNavLink = document.createElement('a');
loginNavLink.href = '#!';
loginNavLink.innerText = "Login";
loginNavLink.classList.add('nav-link');
loginNavItem.appendChild(loginNavLink);
loginNavItem.classList.add('nav-item');
navbarNav.appendChild(loginNavItem);

// Crear los elementos de la opcion del menu Register
let registerNavItem = document.createElement('li');
let registerNavLink = document.createElement('a');
registerNavLink.href = '#!';
registerNavLink.innerText = "Register";
registerNavLink.classList.add('nav-link');
registerNavItem.appendChild(registerNavLink);
registerNavItem.classList.add('nav-item');
navbarNav.appendChild(registerNavItem);

// Respuesta 3.

let img = document.querySelector('img');
img.src = "https://picsum.photos/id/237/900/400"

// Respuesta 4.

let callActionContent = document.querySelector('.card-body');
let chidren = document.querySelector('.card > .card-body > .text-white');
let p = document.createElement('p');
p.classList.add('text-white', 'm-0');
p.innerHTML = "Hello World";
callActionContent.insertBefore(p, chidren)

// Respuesta 5.

let cards = document.querySelectorAll('.card.h-100');

let i = 1;
for(let card of cards){
    let title = card.querySelector('.card-title');
    title.innerHTML = "Content " + (i)
    i++;
}

// Respuesta 6.

// Respuesta 7.
