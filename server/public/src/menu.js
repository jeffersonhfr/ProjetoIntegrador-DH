var iconUser = document.querySelector('.menu__desk');
var menuUser = document.querySelector('.menu__desk-conteudo');
var menuHide = document.querySelector('.header_container');

// iconUser.addEventListener('click',function() {
//   menuUser.classList.toggle('mostrar-menu');
// })

window.addEventListener('click', function(e){   
  if (document.querySelector('.menu__desk').contains(e.target)){
    menuUser.classList.toggle('mostrar-menu');
  } else {
    menuUser.classList.remove('mostrar-menu');
  }
});