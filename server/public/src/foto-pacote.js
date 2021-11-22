if (document.querySelector('.imagem01')) {
  let imagem01 = document.querySelector('.imagem01').src;
  console.log(imagem01);
  imagem01.addEventListener('click', function () {
    console.log('imagem1');
    document.querySelector(
      '.Pacote-ImgContainer__Img-first',
    ).src = `${imagem01}`;
  });
}
