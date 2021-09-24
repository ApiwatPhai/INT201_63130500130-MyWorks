const MAX_STUDENT = 50;

// MAX_STUDENT = 100;

let maxStudent = 50;



let player2 = { id: 2, name: 'John' };

const player1 = { id: 1, name: 'Adam' };

// player1 = player2; //memory address, cannot re-assign value

player2 = player1; //player1 address assigns to player2



//setter-mutator methods/mutated (modified property) syntax

//player1.id = 5; or

//player1["id"]=5;



//getter-accessor method/read property

//player.id or

//player["id"]



player1.name = 'Mary';

console.log(player1);

console.log(player2); //?





//#0 variable with single value

let product1 = 'Coke';

let product2 = 'Pepsi';

let price1 = 15;

let price2 = 13;



//#1 array set of mutiple values

let products1 = ['Coke', 'Pepsi'];

let prices1 = [15, 13];



//#2 array of objects

let products = [

  { product: 'Coke', price: 15 },

  { product: 'Pepsi', price: 13 }

];



//#3 object with array value{ propertyKey1: propertyValue1, propertyKey2: propertyValue2}

let product2 = {

  productName:"iPhone6",

  colors: ['green', 'red', 'black'],

  distributers:[x, y, z]

};