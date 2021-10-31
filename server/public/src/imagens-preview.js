let imgContainer = document.querySelector('.Pacote-ImgContainer');
let imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
let imgFirst = document.querySelector('.Pacote-ImgContainer__Img-first.upload');
let imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
let PrevSelected = imgItem[0];
 let inputFile=document.querySelector('#upload-img');

if(imgItem.length != 0){
PrevSelected.style.border = "4px solid #3e60bf";
}

 
function imgSelect(item) {
   
    imgFirst.src = item.getAttribute('src');
    
    if (PrevSelected != item) {  
        item.classList.add('selected');
        PrevSelected.classList.remove('selected');
        PrevSelected = item;
    }
    
}
function uploadPreview(item){
    let reader = new FileReader();

    reader.onload = function(){
       
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        
        if(imgItem.length < 6){

        
        newImg.src = `${reader.result}`
        
        newImg.className = 'Pacote-ImgContainer__Img';
        newLi.appendChild(newImg);
        imgUl.appendChild(newLi);
        
        } 
        imgFirst.src = `${reader.result}`;
        
        newImg.classList.add('selected');        
       if(PrevSelected !=null){
        PrevSelected.classList.remove('selected');
       }
        PrevSelected = newImg;

        imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
        newImg.setAttribute('onclick','imgSelect(this)');
    }
    reader.readAsDataURL(item.target.files[0]);
}