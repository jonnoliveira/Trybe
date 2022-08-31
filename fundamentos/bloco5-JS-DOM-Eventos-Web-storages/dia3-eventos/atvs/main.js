const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

selectBox();

function selectBox() {
  document.querySelectorAll("li").forEach(function (add) {
    add.addEventListener("click", function (event) {
      firstLi.classList.remove("tech");
      secondLi.classList.remove("tech");
      thirdLi.classList.remove("tech");
      let element = event.target;
      element.classList.toggle("tech");
    });
  });
}

// OUTRA FORMA DE FAZER <<<<<<<<<<<<<<<<<<<<<<<

// firstLi.addEventListener("click", boxSelect);
// secondLi.addEventListener("click", boxSelect);
// thirdLi.addEventListener("click", boxSelect);

// function boxSelect(selectedLi) {
//   let techElement = document.querySelector(".tech");
//   techElement.classList.remove("tech");
//   selectedLi.target.classList.add("tech");
// }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';


changeTextBox();

function changeTextBox() {
  input.addEventListener("input", function (element) {
    let value = input.value;
    let box = document.querySelector(".tech");
    box.innerHTML = value;
  });
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", function () {
  window.location.replace("https://jonnoliveira.github.io/"),false;
});

// OUTRA FORMA DE FAZER <<<<<<<<<<<<<<<<<<<<<<<

// function doubleClick () {
//   window.location.replace("https://jonnoliveira.github.io/"),false;
// };

// myWebpage.addEventListener("dblclick", doubleClick);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

myWebpage.addEventListener("mouseenter",function (){
  myWebpage.style.color = "red";
});


// Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.