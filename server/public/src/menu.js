var iconUser = document.querySelector('.menu__desk');
var menuUser = document.querySelector('.menu__desk-conteudo');

iconUser.addEventListener('mouseover',function() {
  menuUser.classList.toggle('mostrar-menu');
})


menuUser.addEventListener('mouseout', function() {
  menuUser.classList.toggle('mostrar-menu');
})