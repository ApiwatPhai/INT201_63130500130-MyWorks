// สร้าง array เก็บ object ของ car 
export let car = [
    {
        carId:'h001',
        carName:'Honda City e:HEV',
        color:'Blue',
        price:'839,000',
        image: 'image/h001.png'
    },

    {
        carId:'h002',
        carName:'Honda Civic 2021',
        color:'Red',
        price:'964,000',
        image: 'image/h002.png'
    },

    {
        carId:'h003',
        carName:'Honda Jazz',
        color:'Black',
        price:'555,000',
        image: 'image/h003.png'
    },

    {
        carId:'h004',
        carName:'Honda Accord',
        color:'White',
        price:'1,475,000',
        image: 'image/h004.png'
    },

    {
        carId:'h005',
        carName:'Honda Civic EG3',
        color:'Red',
        price:'860,000',
        image: 'image/h005.png'
    }
]

//เลือก div ที่มี id ชื่อว่า car ที่อยู่ในหน้า index
export const divCarsEle = document.querySelector("#car");

    // const form =document.createElement("form")
    // const input =document.createElement("input")
    // input.setAttribute("type","text")
    // input.appendChild(form)


//วนลูปเเสดงรายการของรถ
for (let i = 0; i < car.length; i++) {
    //สร้าง div กําหนด attribute ของ id เเละตกเเต่งจัดระยะด้วย bootstrap
    const divCarEle = document.createElement("div");
    divCarEle.setAttribute("class", "px-1 mx-1 div-link");
    divCarEle.setAttribute("id", car[i].carId);

    //สร้าง tag img กําหนด attribute src เพื่อนํา path file ของรูปภาพมาใส่ เเละกําหนดความกว้างความสูงของรูป
    //กําหนดให้ pCarImageEle เป็น child ของ div divCarEle
    const pCarImageEle = document.createElement("img");
    pCarImageEle.setAttribute("src", car[i].image);
    pCarImageEle.setAttribute("height", 150);
    pCarImageEle.setAttribute("width", 270);
    divCarEle.appendChild(pCarImageEle);

    //สร้าง tag h3 เพื่อแสดงชื่อของรถเป็น heading3
    //กําหนดให้ h3CarNameEle เป็น child ของ div divCarEle
    const h3CarNameEle = document.createElement("h3");
    h3CarNameEle.textContent = car[i].carName;
    divCarEle.appendChild(h3CarNameEle);

    //สร้าง tag p เพื่อแสดง id ของรถเป็น p
    //กําหนดให้ pCarIdEle เป็น child ของ div divCarEle
    const pCarIdEle = document.createElement("p");
    pCarIdEle.textContent = "Car Id: " + car[i].carId;
    divCarEle.appendChild(pCarIdEle);

    //สร้าง tag p เพื่อแสดง color ของรถเป็น p
    //กําหนดให้ pCarColorEle เป็น child ของ div divCarEle
    const pCarColorEle = document.createElement("p");
    pCarColorEle.textContent = "Color: " + car[i].color;
    divCarEle.appendChild(pCarColorEle);

    //สร้าง tag p เพื่อแสดง price ของรถเป็น p
    //กําหนดให้ pCarPriceEle เป็น child ของ div divCarEle
    const pCarPriceEle = document.createElement("p");
    pCarPriceEle.textContent = "Price: " + car[i].price;
    divCarEle.appendChild(pCarPriceEle);

    //กําหนดให้ divCarEle เป็น child ของ div divCarsEle
    divCarsEle.appendChild(divCarEle);

}




// const searchBar = document.getElementById('search');
// let  carList = [];

// searchBar.addEventListener('keyup', (s) => {
//     const searchString = s.target.value.toLowerCase();

//     const filteredCar = carList.filter((car) => {
//         return (
//             car.name.toLowerCase().includes(searchString) ||
//             car.color.toLowerCase().includes(searchString)
//         );
//     });
//     display(filteredCar);
// });

// const loadCar = async () => {
//     try {
//         const res = await fetch(car);
//         carList = await res.json();
//         display(carList);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const display = (characters) => {
//     const htmlString = characters
//         .map((car) => {
//             return `
//             <li class="car">
//                 <h2>Name: ${car.name}</h2>
//                 <p>Color: ${car.color}</p>
//                 <p>Price: ${car.price}</p>
//                 <img src="${car.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     carList.innerHTML = htmlString;
// };

// loadCar();


const searchBar = document.getElementById('search');
// let  carList = [];

searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    // const searchString = e.target.value.toLowerCase();

    // const filteredCar = carList.filter((car) => {
    //     return (
    //         car.carName.toLowerCase().includes(searchString) ||
    //         car.color.toLowerCase().includes(searchString)
    //     );
    // });
    // display(filteredCar);
});
const loadCar = async () => {
    try {
        // carList = car;
        carList = loopCar;
        display(carList);
    } catch (err) {
        console.error(err);
    }
};
const display = (car) => {
    const htmlString = car
        .map((car) => {
            return `
            <li class="car">
                <h2>Name: ${car.carName}</h2>
                <p>Color: ${car.color}</p>
                <p>Price: ${car.price}</p>
                <img src="${car.image}"></img>
            </li>
        `;
        })
        .join('');
    carList.innerHTML = htmlString;
};

loadCar();

function loopCar(){
    for (let i = 0; i < car.length; i++){
        return `${car[i].carName} + ${car[i].color} + ${car[i].price}`
    }
}

// const searchBar = document.getElementById('search');

// searchBar.addEventListener('keyup', (s) => {
//     console.log(s)
// });



// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();



function myFunction() {
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
  
    for (i = 0; i < car.length; i++) {
      a = car[i].getElementsByTagName("a")[0];
      txtValue = car.textContent || car.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        car[i].style.display = "";
      } else {
        car[i].style.display = "none";
      }
    }
  }