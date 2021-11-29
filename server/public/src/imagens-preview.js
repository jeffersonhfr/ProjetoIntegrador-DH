function uploadPreview(item) {
  console.log('teste');

  console.log(item.files);
  // var noInputImgFisrt = document.querySelector('#noInputImg');
  // let inputAcess = document.querySelector('#imgInputAcess');

  // let reader = new FileReader();
  // reader.onload = function () {
  //   let newLi = document.createElement('li');
  //   let newImg = document.createElement('img');

  //   inputAcess.setAttribute('for', `upload-img${i}`);
  //   i++;

  //   if (imgItem.length < 7) {
  //     newImg.src = `${reader.result}`;

  //     newImg.className = 'Pacote-ImgContainer__Img';
  //     newLi.appendChild(newImg);
  //     imgUl.insertBefore(newLi, document.querySelector('#input'));

  //     if (imgItem.length == 1) {
  //       document.querySelector('#noImgInput').style.display = 'none';
  //       document.querySelector('#input').style.display = 'block';
  //       noInputImgFisrt.style.display = 'block';
  //       imgFirst = noInputImgFisrt;
  //     }
  //   }
  //   if (imgItem.length >= 7) {
  //     document.querySelector('#input').style.display = 'none';
  //     inputFiles.push(item.target.files[i]);
  //   }

  //   imgFirst.src = `${reader.result}`;
  //   newImg.classList.add('selected');
  //   newImg.classList.add(`imagem${i}`);
  //   if (PrevSelected != null) {
  //     PrevSelected.classList.remove('selected');
  //   }
  //   PrevSelected = newImg;

  //   imgUl = document.querySelector('.Pacote-ImgContainer__Img-list');
  //   newImg.setAttribute('onclick', 'imgSelect(this)');
  //   imgItem = document.querySelectorAll('.Pacote-ImgContainer__Img');
  // };

  // reader.readAsDataURL(item.target.files[0]);
}
