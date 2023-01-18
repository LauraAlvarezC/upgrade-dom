//2.1 Inserta dinamicamente en un html un div vacio con javascript.

document.createElement("div");

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv = document.createElement("div");
let newP = document.createElement("p");
newDiv.appendChild(newP);

console.log(newDiv);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv1 = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  newDiv1.appendChild(document.createElement("p"));
}

console.log(newDiv1);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newDiv2 = document.createElement("div");
let newP2 = document.createElement("p");
let text = document.createTextNode("Soy dinámico!");

newP2.appendChild(text);
newDiv2.appendChild(newP2);

console.log(newDiv2);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Element = document.getElementsByClassName("fn-insert-here");
let text2 = document.createTextNode("Wubba Lubba dub dub");

h2Element[0].innerText = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const list = document.createElement("ul");

for (let i = 0; i <= apps.length - 1; i++) {
  let innerList = document.createElement("li");
  innerList.innerText = apps[i];
  list.appendChild(innerList);
}

console.log(list);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const cl = document.querySelector(".fn-remove-me").remove();

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

const classes = document.querySelectorAll("div");

const text8 = document.createTextNode("Voy en medio!");

classes[0].appendChild(text8);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase ".fn-insert-here"

const classes1 = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i <= classes.length - 1; i++) {
  let newP9 = document.createElement("p");
  let text9 = document.createTextNode("Voy dentro!");

  newP9.appendChild(text9);
  classes[i].appendChild(newP9);
}
