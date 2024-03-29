let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let changed = document.querySelectorAll(".navbar > a.link");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/* menu hamburger */
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
});

/* Para mudar cor dos links no scroll */
window.addEventListener("scroll", () => {
  for (item of changed) {
    item.classList.toggle("changed", window.scrollY > 0);
    menu.classList.toggle("color", window.scrollY > 0);
  }
});

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
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerContent = "";
  } else if (!regTeste.test(userEmail.value)) {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerContent = "";
  } else if (mensagem.value === "") {
    spanMensagem.classList.add("erro");
    mensagem.classList.add("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerContentt = "";
  } else {
    spanMensagem.classList.remove("erro");
    mensagem.classList.remove("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = `Obrigado pelo contato, ${user}!`;
  }
});

/* Revelar ao rolar */
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    let windowHeight = window.innerHeight;
    let elementTop = reveal.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", reveal);

//activate button scrolltop

const scrollTop = document.querySelector(".scroll-top");

window.onscroll = () => {
  scrollTop.classList.toggle("active", window.scrollY > 0);
};

scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
