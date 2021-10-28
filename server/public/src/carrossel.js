const sliderTema = document.querySelector('.itemsTema');

sliderTema.addEventListener('drag', (e) => {
  e.preventDefault();
});

sliderTema.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderTema.classList.add('active');
  startX = e.pageX - sliderTema.offsetLeft;
  scrollLeft = sliderTema.scrollLeft;
});
sliderTema.addEventListener('mouseleave', () => {
  isDown = false;
  sliderTema.classList.remove('active');
});
sliderTema.addEventListener('mouseup', () => {
  isDown = false;
  sliderTema.classList.remove('active');
});
sliderTema.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTema.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  sliderTema.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

const sliderPromo = document.querySelector('.itemsPromo');
let isDown = false;
let startX;
let scrollLeft;

sliderPromo.addEventListener('drag', (e) => {
  e.preventDefault();
});

sliderPromo.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderPromo.classList.add('active');
  startX = e.pageX - sliderPromo.offsetLeft;
  scrollLeft = sliderPromo.scrollLeft;
});
sliderPromo.addEventListener('mouseleave', () => {
  isDown = false;
  sliderPromo.classList.remove('active');
});
sliderPromo.addEventListener('mouseup', () => {
  isDown = false;
  sliderPromo.classList.remove('active');
});
sliderPromo.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderPromo.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  sliderPromo.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
