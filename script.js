// prompt numero 1 e numero 2
// risultato num1 operazione num2

const oneNum = parseInt(prompt("inserisci il primo numero")); //parseInt per trasformare da stringa a numero
const twoNum = parseInt(prompt("inserisci il secondo numero"));

function sum(oneNum, twoNum) {
  //per somma
  return oneNum + twoNum;
}

function sub(oneNum, twoNum) {
  //per sottrazione
  return oneNum - twoNum;
}

function mul(oneNum, twoNum) {
  //per moltiplicazione
  return oneNum * twoNum;
}

function div(oneNum, twoNum) {
  //per divisione
  return oneNum / twoNum;
}

//se il segno è uguale a + restituisci onenum + two num
//se il segno è uguale a - restituisci onenum - two num
//se il segno è uguale a * restituisci onenum * two num
//se il segno è uguale a / restituisci onenum / two num
//switchare il segno? (prompt per il segno)

const sign = prompt("inserisci il segno dell'operazione (+, -, *, /)");

function calc(oneNum, sign, twoNum) {
  switch (sign) {
    case "+":
      return oneNum + twoNum;
    case "-":
      return oneNum - twoNum;
    case "*":
      return oneNum * twoNum;
    case "/":
      return oneNum / twoNum;

      break;
  }
}

//methods objects
const person = {
  name: "Roberta",
  surname: "Rizzuto",
  age: 24,
  nationality: "italian",
  getName: function () {
    return this.name.toLocaleUpperCase();
  },
  getSurname: function () {
    return this.surname.toLocaleLowerCase();
  },
  getFullName: function () {
    return this.name + this.surname;
  },
  modifiedAge: function () {
    return this.age + 3;
  },
  getNationality: function () {
    console.log("unknown");
  }
};

console.log(person.getName());
console.log(person.getSurname());
console.log(person.getFullName());
console.log(person.modifiedAge());
console.log(person.getNationality());

const number = {
  a: 12.6,
  b:13.98,
  
}
//delete number['b'] //per irmuovere b dall'oggetto number


const personUnionNumber = Object.assign(person, number); //unione oggetti

console.log(personUnionNumber); 