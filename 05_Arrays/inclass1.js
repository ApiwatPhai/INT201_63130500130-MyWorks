//array destructuring assignment + rest parameter

[subject, students, ...listOfStudents] = ['INT201', 50, 'A', 'B', 'C'];

console.log(subject);

console.log(students);

console.log(listOfStudents);

//object destructuring assingment

({ productId, productName } = { productName: 'Coke', productId: 111 });

console.log(productId);

console.log(productName);


//function declaration

function sum(numbers) {

    let total = 0; //local variable
  
    for (let num of numbers) total += num;
  
    return total;
  
  }
  
  console.log(sum([1, 2, 3]));
  
  
  
  //calling function, function execution
  
  sum([1, 2, 5, 10]);

  //function expression

const myFunc = function (numbers) {

    let total = 0; //local variable
  
    for (let num of numbers) total += num;
  
    return total;
  
  };
  
  //calling function, function execution
  
  console.log(myFunc([1, 2, 3]));




  //examples of reduce and map functions

let products = [

    { prodId: 1, price: 10, amount: 2 },
  
    { prodId: 2, price: 5, amount: 10 }
  
  ];
  
  let priceIncludeVat = products.map(
  
    (product) => product.price + product.price * 0.07
  
  );
  
  console.log(priceIncludeVat);
  
  
  
  let totalAmt = products.reduce(
  
    (total, curProd) => (total += curProd.amount),
  
    0
  
  );
  
  console.log(totalAmt);