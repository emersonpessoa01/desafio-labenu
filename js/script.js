let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const botao = document.querySelector("#botao");

botao.addEventListener("click", (event) => {
  //desabilita a funcao padrão do botao
  event.preventDefault();
  //define as variaveis dos inputs
  const userEmail = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem");
  const [user] = userEmail.value.split("@");

  //define as variaveis dos "spans" usados para mensagem de erro e sucesso
  const spanEmail = document.querySelector("#spanEmail");
  const spanMensagem = document.querySelector("#spanMensagem");
  const textoSucesso = document.querySelector("#textoSucesso");

  //define o regex do email
  const regTeste = /^[a-z0-9A-Z.]{1,32}@[a-z0-9]{1,16}\.[a-z]+$/;

  //verifica se os campos estao de acordo com a validacao
  if (userEmail.value === "") {
    classLisspanEmail.t.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerText = "";
  } else if (!regTeste.test(userEmail.value)) {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerText = "";
  } else if (mensagem.value === "") {
    spanMensagem.classList.add("erro");
    mensagem.classList.add("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = "";
  } else {
    spanMensagem.classList.remove("erro");
    mensagem.classList.remove("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = `Obrigado pelo contato, ${user}!`;
  }
});
