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

let brand = document.querySelector('.navbar-brand');
//brand.innerHTML = "Luis Rodriguez";
brand.textContent = "Luis Rodriguez";

// Respuesta 2.

let menu = document.querySelector('.navbar-nav');

let navItemLogin = document.createElement('li')
let navLinkLogin = document.createElement('a');
navItemLogin.classList.add('nav-item');
navLinkLogin.classList.add('nav-link');
navLinkLogin.href = '#!';
navLinkLogin.innerHTML = "Login";
navItemLogin.appendChild(navLinkLogin);

let navItemRegister = document.createElement('li')
let navLinkRegister = document.createElement('a');
navItemRegister.classList.add('nav-item');
navLinkRegister.classList.add('nav-link');
navLinkRegister.href = '#!';
navLinkRegister.innerHTML = "Register";
navItemRegister.appendChild(navLinkRegister);

menu.appendChild(navItemLogin);
menu.appendChild(navItemRegister);

// Respuesta 3.

let img = document.querySelector('img');
img.src = "https://picsum.photos/id/237/900/400"
img.classList.add('shadow');

// Respuesta 4.

let newParapraph = document.createElement('p');
newParapraph.classList.add('text-white', 'm-0');
newParapraph.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi impedit ad repellat blanditiis cupiditate culpa voluptas dolores.'
//console.log(newParapraph);

let currentParagraph = document.querySelector('p.text-white');
//console.log(currentParagraph.innerHTML);

let card = document.querySelector('.card.bg-secondary .card-body');
//console.log(card);

card.insertBefore(newParapraph, currentParagraph); // inserta el elemento antes del elemento indicado

// Respuesta 5.

let titles = document.querySelectorAll('h2.card-title');
console.log(titles);

for(let i = 0; i < titles.length; i++){
    titles[i].innerHTML = 'Content ' + (i+1);
}

// Respuesta 6.

let container = document.querySelector('.container.px-4');
let rowDiv = document.createElement('div');

rowDiv.classList.add('row', 'gx-4', 'gx-lg-5', 'align-items-center', 'my-5');

let colDiv = document.createElement('div');
colDiv.classList.add('col-md-12', 'mb-5');

colDiv.innerHTML="Formulario de Contacto";

/* 
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
*/


let contactForm = document.createElement('form');

// Campo para el nombre
let divInputName = document.createElement('div');
let labelName = document.createElement('label');
let inputName = document.createElement('input');
divInputName.classList.add('mb-3');
labelName.classList.add('form-label');
labelName.htmlFor = "name";
labelName.innerHTML = "Name";
inputName.classList.add('form-control');
inputName.id = "name";
inputName.placeholder = "Insert Name";
inputName.type = "text";
divInputName.appendChild(labelName);
divInputName.appendChild(inputName);

// Campo para el email
let divInputEmail = document.createElement('div');
let labelEmail = document.createElement('label');
let inputEmail = document.createElement('input');
divInputEmail.classList.add('mb-3');
labelEmail.classList.add('form-label');
labelEmail.htmlFor = "email";
labelEmail.innerHTML = "Email"
inputEmail.classList.add('form-control');
inputEmail.id = "email";
inputEmail.placeholder = "Insert Email";
inputEmail.type = "email";
divInputEmail.appendChild(labelEmail);
divInputEmail.appendChild(inputEmail);


// Campo Boton para enviar el formulario

let btnSend = document.createElement('button');
btnSend.classList.add('btn', 'btn-primary', 'btn-sm', 'w-100', 'mb-3')
btnSend.innerHTML = "Enviar Formulario"
btnSend.type = "button";

btnSend.addEventListener('click', () => {
    alert(inputName.value + " " + inputEmail.value);
})

// Añadimos los elementos al formulario 
contactForm.appendChild(divInputName);
contactForm.appendChild(divInputEmail);
contactForm.appendChild(btnSend);

// añadimos el formulario al documento
colDiv.appendChild(contactForm);

rowDiv.appendChild(colDiv);
console.log(rowDiv);
container.appendChild(rowDiv)

console.log(container);

// Respuesta 7.
