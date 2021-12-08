let car = [
    {
        carId:'h001',
        carName:'Honda City e:HEV',
        color:'Blue',
        price:'839,000'
    },
    {
        carId:'h002',
        carName:'Honda Civic 2021',
        color:'Red',
        price:'964,000'
    },
    {
        carId:'h003',
        carName:'Honda Jazz',
        color:'Black',
        price:'555,000'
    }
]

const divCarsEle = document.querySelector('#car');
  
console.log(divCarsEle);

const divCarEle = document.createElement('div');
for(i=0;i<car.length;i++){
    divCarEle.setAttribute('id',car[i].carId);
    const pCarIdEle = document.createElement('p');
    pCarIdEle.textContent = 'Car Id: ' + car[i].carId;
    divCarEle.appendChild(pCarIdEle);

    const pCarNameEle = document.createElement('p');
    pCarNameEle.textContent = 'Car Name: ' + car[i].carName;
    divCarEle.appendChild(pCarNameEle);

    const pCarColorEle = document.createElement('p');
    pCarColorEle.textContent = 'Color: ' + car[i].color;
    divCarEle.appendChild(pCarColorEle);

    const pCarPriceEle = document.createElement('p');
    pCarPriceEle.textContent = 'Price: ' + car[i].price;
    divCarEle.appendChild(pCarPriceEle);
}
