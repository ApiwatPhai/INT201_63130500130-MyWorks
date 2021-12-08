import {car} from "./menus.js";

let carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};

//show menus
showProducts(car)

//const search = document.querySelector('#searchIcon');
const search = document.querySelector('#searchIcon');
const divSearch = document.querySelector('#searchAndCart');
const searchBar = document.querySelector('#searchBar')
const cartAmount = document.querySelector('#amount');
const divcard = document.querySelector('#cart')

let toggle = false;
search.addEventListener('click', checkToggle);

clearBtn.addEventListener('click', clearCarts);

function clearCarts() {
  carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};
  cartAmount.textContent = carts.totalQty;
}

function checkToggle() {
  //switch toggle 
  toggle = !toggle ;
  if(toggle) {
      // const input = document.createElement('input');
      // input.id = 'inputValue'
      // input.type = 'text';
      // input.placeholder = 'search...'
      // searchBar.appendChild(input);

      //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
      searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
      <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;

      //อันนี้จะ add event ให้กับปุ่ม search 
      const searchBtn = document.querySelector('#searchBtn');
      // click เเล้วจะเอา value ที่พิมเข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก้เเสดงออกมา
      searchBtn.addEventListener('click', () => {
        
          let value = document.querySelector('#inputValue').value;
          //console.log(value)

          let pattern = new RegExp(value, 'i')
          //console.log(pattern)

          const searchMenu = car.filter((list) => {return list.carName.match(pattern) != null});
          console.log(searchMenu);
          showProducts(searchMenu);

      })

      let inputValue = document.querySelector('#inputValue');
      inputValue.addEventListener('keyup' , () =>{
          // console.log(inputValue.value)
          if(inputValue.value == ''){
            showProducts(car);
          }
      } 
      )

  } else {
      // searchBar.removeChild(divSearch.lastChild);
      searchBar.innerHTML = '';
  }
}


function showProducts(arr) {
  let allMenu = document.querySelector('#cars');
  allMenu.textContent = '';

  for(let list of arr) {
  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  cardBody.setAttribute('id', list.carId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
  console.log(cardBody);

  //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
  const menuImgEle = document.createElement('img');
  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', list.image);
  menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
  console.log(menuImgEle);

  //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
  const h4MenuNameEle = document.createElement('h4');
  h4MenuNameEle.setAttribute('class', 'card-title');
  h4MenuNameEle.setAttribute('style', 'color:red;');
  h4MenuNameEle.textContent = list.carName;
  console.log(h4MenuNameEle);

  //<div class="btn ">ราคา</button>
  const divPriceEle = document.createElement('div');
  divPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divPriceEle.textContent = '฿' + list.price;
  console.log(divPriceEle);

  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';
  
  // add event to bottonAddEle
  
  buttonAddEle.addEventListener('click', () => {
    // const parent = event.target.parentNode;
    // console.log(event.target.parentNode);
    // alert(`Add Menu ID '${parent.id}' to Your Cart`)

    alert(`Add Menu ID '${list.carId}' to Your Cart`)
  
    const itemAdd = car.find((item) => {return item.carId == list.carId})
    console.log(itemAdd)
    let newItem = {id: itemAdd.carId, name: itemAdd.carName, price: itemAdd.price, qty: 1};
    //console.log(newItem)

    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem)
      carts.itemId.push(newItem.id)

    } else {

        for(let i of carts.items) {
          if(i.id == newItem.id) {
            i.qty++ ;
          }
        }
    }

    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    carts.totalPrice = carts.items.reduce((sum,item) => {return sum += item.price}, 0)
    console.log(carts.itemId);
    console.log(carts.items)
    console.log(carts)

    const cartAmount = document.querySelector('#amount');
    cartAmount.textContent = carts.totalQty;
    
  })


  //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
  cardBody.appendChild(menuImgEle);
  cardBody.appendChild(h4MenuNameEle);
  cardBody.appendChild(divPriceEle);
  cardBody.appendChild(buttonAddEle);
  
  //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
  allMenu.appendChild(cardBody);

  }
}


