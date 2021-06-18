console.log("Procesando.......")
var numero = 10
let num1;
let num2 = null
let entero = 10
let decimal = 1.2
let string = "Hello Friend"
let booleano = false
let fecha = new Date()
let dd = fecha.getDate(),
    mm = fecha.getMonth() + 1,
    aa = fecha.getFullYear(),
    hy= `${dd}-${mm}-${aa}`
const pi = 3.1416
// console.log("Numero 1 =",num1)
// console.log(`Numero 2 =${num2}`)
// console.log(`Fecha hoy= ${fecha}`)
// console.log(hy)

let numeros=[1,3,5,7,8];
let colores=["red","green","blue"];

const json = {
    "nombres":["Luis","Guillermo"],
    "genero" : "Masculino"
};
const teacher = {
    nombres: "ana",
    genero: "Femenino",
    juegos: ["Futbol","Tenis"],
    conocimientos:{
        lenjuages:[
            "Js","Pyton","Java","Php",
        ],
        materias:{Nivel1: "Logica", Nivel2: "POO",Nivel3: "POOI"}
    }
};
json.genero="M"
teacher.nombr = "Ana"
teacher.edad = 20
console.log("Json",json);
console.log("Objecto",teacher,teacher,teacher.conocimientos.lenjuages,teacher.conocimientos.materias.Nivel3);

n1=6
n2=7
if (num1===undefined)
    //console.log(`${num2}=null`);
if (num2===null)
    //console.log(`${num2}=null`);
if (n1==0){
    //console.log(n1);
}else if (n1==n2){
    //console.log(`${n1}=${n2}`);
}else{
    //console.log(`${n1}!=${n2}`);
}

let num=5
let rec=num % 2;
switch(rec){
    case 0:
        //console.log(`${rec} .... ${num} PAR`);
        break;
    case 1:
        //console.log(`${rec} .... ${num} IMPAR`)
        break;
    default:
        if (isNaN(rec))
        //console.log(`${rec}=ERROR`);
        break;
}
console.log("Salio del Switch")

let i =0
//console.log("Bucle While", colores)
while (i< colores.length && colores [i] != "blue"){
    //console.log(i, colores[i])
    i=i+1
}

//console.log("Recorrido for en incremento",colores);
for (let i = 0;  i < colores.length;i++){
    //console.log(i, colores[i]);
}

//console.log("Recorrido for in", colores)
for (let j in colores){
    //console.log(j, colores[j])
}

//console.log("Recorrido for of", colores)
for(let color of colores){
    //console.log(color)
}

let nombr="Luis"
for (let caracter of nombr){
    //console.log(caracter)
}

const Personas=[
    {"Nombre": "Marco", "Apellido": "Barco"}, 
    {"Nombre": "Ana", "Apellido": "Garcia"},
    {"Nombre": "Luis", "Apellido": "Coloma"}
]
//console.log("OF")
for(let persona of Personas){
    //console.log(persona.Nombre,persona.Apellido)
}

//console.log("FOREACH");
Personas.forEach(persona => console.log(persona.Nombre))
Personas.forEach(persona => { if ( persona.Nombre !="Ana") console.log(persona.Nombre)})

//Para leer un objecto y extraer algo de ese objecto
//console.log("MAP")
const persons= Personas.map(persons => persons.Nombre)
//console.log("map",persons);

//Filtra el objecto
//console.log("FILTER")
const person = Personas.filter(person => person.Nombre !="Ana")    
//console.log("filter",person);

//Solo filtra un objecto desdeado
//console.log("FIND")
const OnePerson=Personas.find(person => person.Nombre=="Ana")
//console.log("find", OnePerson);

//Funciones
//SUMA
function sumar(){
    console.log("Suma...",10 + 5);
}
sumar()
//ARROWFUNCION
const suma=()=> console.log("Suma con ArrowFuncion...",2 + 8)
suma()
//Multiplicasion
function multiplicar(n1,n2){
    return n1 * n2
}
let resp=multiplicar(4, 5)
console.log("Multiplicasion sin ArrowFuncion..",resp);
//ARROWFUNCION
const multi=(n1, n2)=> n1 * n2 
console.log("Multiplicasion con ArrowFuncion...", multi(6, 5))
//Divicion
function dividir(n1, n2 = 2){
    let resp = 0
    try{
        resp= n1 / n2
    } catch (e){
        console.log("**ERROR**", e.message)
    }
    return resp
}
resp = dividir(6)
console.log("Divicion sin ArrowFuncion...",resp);
resp= dividir(6, 0)
console.log("Divicion  de 6/0...",resp);
//Con ARROWFUNCION
const divi = (n1, n2 = 3)=>{
    let resp = 0
    try{
        resp = n1 / n2
    } catch(e){
        console.log("**ERROR**", e.message)
    }
    return resp
}
console.log("Divicion con ArrowFuncion",divi(6));
//API
// FECTH..sirver para comsumir api....respuesta del servidor que entrega una respuesta del servidor que entrega una respuesta con datos para ser consumidos
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
       //console.log(datos.results)
       //datos.results.forEach(poke => console.log(poke.name,poke.url))
    })
    .catch(error => console.log("ERROR del api:", error))
//async await: devuelve un objecto asincronico

const obtenerDatos = async() => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        //console.log("Async Await");
        //datos.results.forEach(poke =>console.log(poke.name, poke.url))
    } catch(error){
        console.log("Error del API con async...", error)
    }
}
obtenerDatos()
//DON estructura de arbol que tiene cualquier documento html
let contenido = document.getElementById('contenedor')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML='Enteros Decimales String Boleanas Fechas';
variable.style.color='white'
variable.style.background="#000"
console.log(variable);
let concepto = document.querySelector('.concepto')
concepto.innerHTML = "Area de memoria"
concepto.style.color='white'

let conceptos = document.querySelectorAll('.conceptos')
let cont = 1
conceptos.forEach(parrafo => { 
    parrafo.innerHTML= `Area de memoria#${cont}`
    cont = cont + 1
    
})
console.log(conceptos);
let boton= document.getElementById('boton2')
let valor = document.getElementById('valor')
boton.addEventListener('mouseover',() =>{
    console.log("**Has pasado el mouse**");
} )
boton.addEventListener('click', () => {
    let nodo = document.createElement("p")
})
valor.addEventListener('keypress', (e) => {
    console.log(e.target.value);
})