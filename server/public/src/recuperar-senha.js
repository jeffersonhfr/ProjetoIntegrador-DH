function redireciona() {
  const email = document.querySelector("#email");
  if (email.value === "") {
    return;
  } else {
    alert("O link de recuperação foi enviado ao seu email");
    window.location = "http://localhost:3000/login";
  }
}
