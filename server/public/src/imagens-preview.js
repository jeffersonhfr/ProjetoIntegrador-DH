let imgContainer = document.querySelector('.Pacote-ImgContainer');
let imgFirst = document.querySelector('.Pacote-ImgContainer__Img-first');
let imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
let PrevSelected = imgItem[0];
imgItem.forEach((item) => item.addEventListener('click', imgSelect));
function imgSelect(item) {
    selectedImg = item.target;
    imgFirst.src = selectedImg.getAttribute('src');

    
}