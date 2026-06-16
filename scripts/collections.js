// const products = [{
//   image: 'lasoye-gold.png',
//   name: 'Lasoye Summer Classic 1',
//   priceCent: 2499
// }, {
//   image: 'Pink-perfume.png',
//   name: 'Lasoye Summer Classic 2',
//   priceCent: 2499
// }, {
//   image: 'lasoye-gold.png',
//   name: 'Lasoye Summer Classic 3',
//   priceCent: 2499
// }];

// const added = document.querySelectorAll('.added-to-cart');
// const buttons = document.querySelectorAll('.add-to-cart-button');
// forEach((buttons, added) => {
//   buttons.addEventListener('click', () =>{
//     added.style.opacity = '1';

//     setTimeout(() =>{
//       added.style.opacity = '0';
//     }, 1000)
//   })
// })

document.querySelectorAll('.product-container').forEach(card => {
  const sizeSelect = card.querySelector('.product-size');
  const price = card.querySelector('.product-price');
  const prices = {
    '30ml': '£24.99',
    '50ml': '£39.99',
    '100ml': '£74.99'
  }
  sizeSelect.addEventListener('change', () => {
    price.textContent = prices[sizeSelect.value];
  });
});
document.querySelectorAll('.product-container2').forEach(card => {
  const sizeSelect = card.querySelector('.product-size');
  const price = card.querySelector('.product-price');
  const prices = {
    '30ml': '£24.99',
    '50ml': '£39.99',
    '100ml': '£74.99'
  }
  sizeSelect.addEventListener('change', () => {
    price.textContent = prices[sizeSelect.value];
  });
});

let cartCount = 0;
const cartCounter = document.querySelector('.cart-count');
const buttons = document.querySelectorAll('.add-to-cart-button');
buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    cartCount++;
    cartCounter.textContent = cartCount;
  }); 
});

// const products = [
//   {'id':1,'productName': 'Lasoye Summer Classic 1','image': 'lasoye-gold.png'},
//   {'id':2,'productName': 'Lasoye Summer Classic 2','image': 'lasoye-gold.png'},
//   {'id':3,'productName': 'Lasoye Summer Classic 3','image': 'lasoye-gold.png'},
//   {'id':4,'productName': 'Lasoye Autumn Classic 1','image': 'lasoye-gold.png'},
//   {'id':5,'productName': 'Lasoye Autumn Classic 2','image': 'lasoye-gold.png'},
//   {'id':6,'productName': 'Lasoye Autumn Classic 3','image': 'lasoye-gold.png'},
//   {'id':7,'productName': 'Lasoye Winter Classic 1','image': 'lasoye-gold.png'},
//   {'id':8,'productName': 'Lasoye Winter Classic 2','image': 'lasoye-gold.png'},
//   {'id':9,'productName': 'Lasoye Winter Classic 3','image': 'lasoye-gold.png'},
//   {'id':10,'productName': 'Lasoye Spring Classic 1','image': 'lasoye-gold.png'},
//   {'id':11,'productName': 'Lasoye Spring Classic 2','image': 'lasoye-gold.png'},
//   {'id':12,'productName': 'Lasoye Spring Classic 3','image': 'lasoye-gold.png'},
// ]
// let container = document.querySelectorAll('.product-container');
// let container = document.querySelectorAll('.product-container2');
// container.innerHTML = Object.entries(products)
// const input = document.querySelector('.search-bar');
// input.addEventListener('input').map()
