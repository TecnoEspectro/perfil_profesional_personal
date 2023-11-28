// alert("FUNCTION ACTIVO");
alert("FUNCTION ACTIVO");
// ########### TIPO DE VARIABLES
// CONST para valores constantes
const p1 = 3.1416;
const pull = 2.54;
// VAR para variables constantes
var days = 10;
var name = "Wilder Duarte";
// LET para variables de bloque o locales
let count = 1;

// ############## FORMAS DE IMPRESION
// ALERT
// alert(name);
// CONSOLE.LOG
console.log(name);
//BODY - PANTALLA
document.write(name + "###Wilder Duarte")
document.getElementById("box_one").innerHTML = "<h1>Wilder Duarte</h1>";
document.getElementById("box_two").innerText = "<h1>Wilder Duarte</h1>";

// LIBRERIAS
//Swal.fire(
//  'The Internet?',
//    'That thing is still around?',
//    'question'
// )
//  swal.fire(
//   {
//      icon: 'error',
//      showConfirmeButton: false,
//      title: name,
//      text: name,
//      footer: "footer: " + name,
//      background: 'green',
//      position: 'center'
//   }
// );

// ########### TIPOS DE DATOS
// NUMERICOS
var number_one = 20;
var number_two = 5.5;
// TEXTO
var class_type = "Electiva tecnica";
// BOOLEANOS
var boolean = true; //false
// ARRAYS - VECTORES
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array_text = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_mix = [1, "a", 2, "c"];
var array_null = [
  { name: "Wilder", last_name: "Duarte", age: "34" },
  { name: "Anyi", last_name: "Martines", age: "32" },
  { name: "Celeste", last_name: "Duarte", age: "9" },
  { name: "Antonella", last_name: "Duarte", age: "6" },
];

// ######### OPERADORES BASICOS
// SUMA
var suma = number_one + number_two;
console.log("suma = " + suma);
// RESTA
var resta = number_one - number_two;
console.log("resta = " + resta);
// MULTIPLICACION
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
// DIVISION
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
// MODULO
var modulo = number_one % number_two;
console.log("modulo = " + modulo);

// OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (INVERSE, INCREMENTO Y DECREMENTO)
// AND && con if - Ampersand
var bool = false;
var numeric = 10;
if (!bool && numeric == "10") { //BOOL == TRUE    ! = negacion
  console.log("ENTRA IF");
}
else {
  console.log("ENTRA ELSE");
}

if (!bool || numeric == 7) {
  console.log("ENTRA IF");;
  numeric++;
} else {
  console.log("ENTRA ELSE");
  numeric--;
}
console.log(numeric);

// FOR
for (j = 0; j < array_text.length; j++){
  console.log(array_text[j] + j + 1);
}

// WHILE
let f = 0;
while (f < array_text.length) {
  console.log(array_text[f] + (f + 1))
  f++
}

// DO WHILE
let m = 0;
do {
  console.log(array_text[m] + (m + 1));
  m++;
} while (m < array_text.length)

//FUNCIONES Y EVENTOS
function load_page() {
  // alert("LA PAGINA SE HA CARGADO CORRECTAMENTE");
}

function change_color() {
  document.body.style.backgroundColor = "red"
  document.body.style.color = "#fff"
}

const btn_limpiar = document.querySelector("#clear_color");

btn_limpiar.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000"
});

// REGISTRO FORMULARIO
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const information = document.getElementById("information");

form_register.addEventListener("submit", name_event =>{
    name_event.preventDefault();
    let info = "";
    console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <=2){
        info += "NOMBRES Y/O APELLIDOS INVALIDOS";
        information.style.color= "red";
    }
    else{
        alert(nombres.value + " " + apellidos.value)
    }
    information.innerText = info;
})

function load_page(){
  document.getElementById("nombres").focus();
  document.getElementById("apellidos").disabled = true;
  // let date = new Date();
  // console.log(date).get();
  let date = new Date();
  console.log(date.getMinutes());
  for(let j=0; j<array_mul.length;j++){
      console.log(array_mul[j].name);
  }
}

function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style = document.getElementById("nombres");
    if (nombres.length > 2){
        nombres_style.border = "2px solid green";
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        alert(nombres.concat("Duarte"));
    }
}