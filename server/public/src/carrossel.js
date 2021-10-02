const cards = document.getElementsByClassName('promo');
var arr = Array.prototype.slice.call( cards );
cards[0].remove();
arr[arr.length - 1].parentNode.insertAfter(arr[0],arr[arr.length - 1])
console.log(arr);



// let id = 0;

// const cardTeste = () => {
//   cards[id].style.display
// }