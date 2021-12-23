let imgPack = document.querySelectorAll('.img-pack');
for (let i = 0; i < imgPack.length; i++) {
  if (imgPack[i].currentSrc == '') {
    imgPack[i].src = '/assets/img/noPhoto.jpg';
  }
}

var loadFileCapa = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagemCapa');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile1 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem01');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile2 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem02');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile3 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem03');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile4 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem04');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile5 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem05');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile6 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imagem06');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
