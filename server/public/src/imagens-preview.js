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

let inputFiles = []

function uploadPreview(item){
    console.log(item.files);
    var noInputImgFisrt = document.querySelector('#noInputImg');
   
   
   
    for (let i = 0; i < item.target.files.length; i++){

        let reader = new FileReader();
        reader.onload = function(){
        
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        
        if(imgItem.length < 6){

        
        newImg.src = `${reader.result}`
        
        newImg.className = 'Pacote-ImgContainer__Img';
        newLi.appendChild(newImg);
        imgUl.insertBefore(newLi,document.querySelector('#input'));

        if(imgItem.length == 1){
            document.querySelector('#noImgInput').style.display = "none";
            document.querySelector('#input').style.display = "block";
            noInputImgFisrt.style.display = "block";
            imgFirst = noInputImgFisrt;
        }
        
        }
        if(imgItem.length >= 5){
            document.querySelector('#input').style.display = "none";
            inputFiles.push(item.target.files[i]);
        }

        imgFirst.src = `${reader.result}`;
        newImg.classList.add('selected');        
       if(PrevSelected !=null){
        PrevSelected.classList.remove('selected');
       }
        PrevSelected = newImg;

        imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
        newImg.setAttribute('onclick','imgSelect(this)');
        imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
    } 
    
        reader.readAsDataURL(item.target.files[i]);
   
    }   
   
} 