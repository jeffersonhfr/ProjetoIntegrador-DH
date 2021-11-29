let imgPack = document.querySelectorAll('.img-pack');
for (let i = 0; i < imgPack.length; i++) {
  if (imgPack[i].currentSrc == '') {
    imgPack[i].src = '/assets/img/noPhoto.jpg';
  }
}

var loadFileCapa = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpackcapa');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile1 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack1');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile2 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack2');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile3 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack3');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile4 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack4');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile5 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack5');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

var loadFile6 = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById('imgpack6');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
