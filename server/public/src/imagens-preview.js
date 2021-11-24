let imgContainer = document.querySelector('.Pacote-ImgContainer');
let imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
let imgFirst = document.querySelector('.Pacote-ImgContainer__Img-first.upload');
let imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
let PrevSelected = imgItem[0];
let inputFile = document.querySelector('#upload-img');
let imgFirstId = document.querySelector('#noInputImg');
let img1 = document.querySelector('#upload-img');
let img2 = document.querySelector('#upload-img2');
let img3 = document.querySelector('#upload-img3');
let img4 = document.querySelector('#upload-img4');
let img5 = document.querySelector('#upload-img5');
let img6 = document.querySelector('#upload-img6');
let img7 = document.querySelector('#upload-img7');

if (imgItem.length != 0) {
  PrevSelected.style.border = '2px solid #3e60bf';
}

// function imgSelect(item) {
//   imgFirst.src = item.getAttribute('src');

//   if (PrevSelected != item) {
//     item.classList.add('selected');
//     PrevSelected.classList.remove('selected');
//     PrevSelected = item;
//   }
// }

function imgSelect(item) {
  imagemAtual = item.getAttribute('src');
  if (imgFirstId.src === imagemAtual) {
    imgFirstId.src = img1.src;
  } else {
    imgFirstId.src = '/assets/img/Upload.png';
  }

  if (PrevSelected) {
    item.parentElement.remove();
    item.querySelector(className ^ 'imagem').remove();
  }
}

let i = 2;

function uploadPreview(item) {
  console.log(item.files);
  var noInputImgFisrt = document.querySelector('#noInputImg');
  let inputAcess = document.querySelector('#imgInputAcess');

  let reader = new FileReader();
  reader.onload = function () {
    let newLi = document.createElement('li');
    let newImg = document.createElement('img');

    inputAcess.setAttribute('for', `upload-img${i}`);
    i++;

    if (imgItem.length < 7) {
      newImg.src = `${reader.result}`;

      newImg.className = 'Pacote-ImgContainer__Img';
      newLi.appendChild(newImg);
      imgUl.insertBefore(newLi, document.querySelector('#input'));

      if (imgItem.length == 1) {
        document.querySelector('#noImgInput').style.display = 'none';
        document.querySelector('#input').style.display = 'block';
        noInputImgFisrt.style.display = 'block';
        imgFirst = noInputImgFisrt;
      }
    }
    if (imgItem.length >= 7) {
      document.querySelector('#input').style.display = 'none';
      inputFiles.push(item.target.files[i]);
    }

    imgFirst.src = `${reader.result}`;
    newImg.classList.add('selected');
    newImg.classList.add(`imagem${i}`);
    if (PrevSelected != null) {
      PrevSelected.classList.remove('selected');
    }
    PrevSelected = newImg;

    imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
    newImg.setAttribute('onclick', 'imgSelect(this)');
    imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
  };

  reader.readAsDataURL(item.target.files[0]);
}
