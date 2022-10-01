console.log("Hello, TypeScript"); //igual a javascript normal

//le ponemos tipado al los argumentos de la funcion
function add(a: number, b: number) {
  return a + b;
}
const sum = add(2, 5);

//tipos boolean
let muted: boolean = true;
muted = false;

//tipos numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//tipos string
let nombre: string = "richard";
let saludo = `me llamo ${nombre}`;

//tipos de arreglos
let people: string[] = [];
people = ["isabel", "nicol", "nicolas"];
people.push("90");

//arreglo de string y numeros
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("ricardo");
peopleAndNumbers.push(88);

// tipos Enum
enum Color {
  rojo = "rojo",
  verde = "verde",
  azul = "azul",
}

let colorFavorito: Color = Color.verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// any
let comodin: any = "joker";
comodin = { type: "wildcard" };

//Object
let someObject: object = { type: "wildcard" };
//end class 25 tipos basicos

//Tipando funciones argumentos y retorno
function addi(a: number, b: number): number {
  return a + b;
}
const sumi = addi(2, 5);

//funcion que retorna otra funcion
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//volver opcional algun argumento con ? antes de :
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}
const richard = fullName("richar");
console.log(richard);

//valor por defecto sin ?
function fullName2(firstName: string, lastName: string = "smith"): string {
  return `${firstName} ${lastName}`;
}
const richard2 = fullName2("richar");
console.log(richard2);
//end class 26 funciones en typescrip

// interfases, nos permiten declara la forma que tiene un objeto
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color; //opcional
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `un rectangulo`;
};

console.log(rect.toString());

// i can use ! operator in the end of a line code to indicate that
// line never will be null
