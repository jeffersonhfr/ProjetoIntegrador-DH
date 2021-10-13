
var senha1 = document.getElementById("senha")
var senha2 = document.getElementById("confimar-senha");



senha2.addEventListener('blur', () => {
  if( senha1.value !== senha2.value){
    alert("As Senhas não conferem!")
  }
})
