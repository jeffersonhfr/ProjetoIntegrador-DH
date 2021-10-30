let imgContainer = document.querySelector('.Pacote-ImgContainer');
let imgFirst = document.querySelector('.Pacote-ImgContainer__Img-first.upload');
let imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
let PrevSelected = imgItem[0];
 let inputFile=document.querySelector('#upload-img');

if(imgItem.length != 0){
PrevSelected.style.border = "4px solid #3e60bf";
}

imgItem.forEach((item) => item.addEventListener('click', imgSelect));
function imgSelect(item) {
    selectedImg = item.target;
    imgFirst.src = selectedImg.getAttribute('src');
    selectedImg.style.border="4px solid #3e60bf";
    if (PrevSelected != selectedImg) {
        PrevSelected.style.border = "none";
        PrevSelected = selectedImg
    }
}
function uploadPreview(item){
    let reader = new FileReader();

    reader.onload = function(){
        imgFirst.src = `${reader.result}`;
    }
    reader.readAsDataURL(item.target.files[0]);
}