function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// >>>>>>>>>>> EXERCICIO 1

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (index of decemberDaysList) {
  let days = document.createElement("li");
  let nameDay = document.createTextNode(index);
  days.appendChild(nameDay);
  document.getElementById("days").appendChild(days);
  days.className = "day";
  if (index === 24 || index === 25 || index === 31) {
    days.classList.add("day", "holiday");
  }
  if (index === 4 || index === 11 || index === 18 || index === 25) {
    days.classList.add("day", "friday");
  }
};

// >>>>>>>>>>> EXERCICIO 2

buttonFeriado("Feriados");

function buttonFeriado(str) {
  let button = document.createElement("button");
  button.innerText = str;
  button.classList.add("btn-holiday");
  document.getElementsByClassName("buttons-container")[0].appendChild(button);
}

// >>>>>>>>>>> EXERCICIO 3

function backgroundHolidays() {
  let holidays = document.getElementsByClassName("holiday");
  for (index in holidays) {
    let color = document.getElementsByClassName("holiday")[index];
    if (color.style.backgroundColor !== "yellow") {
      color.style.backgroundColor = "yellow";
    } else {
      color.style.backgroundColor = "rgb(238,238,238)";
    };
  };
};

let btnFeriado = document.getElementsByClassName("btn-holiday")[0];

btnFeriado.addEventListener("click", backgroundHolidays);

// >>>>>>>>>>> EXERCICIO 4

buttonFriday("Sexta-feira");

function buttonFriday(str) {
  let button = document.createElement("button");
  button.innerText = str;
  button.id = "btn-friday";
  document.getElementsByClassName("buttons-container")[0].appendChild(button);
}

// >>>>>>>>>>> EXERCICIO 5

function textFridays() {
  let fridays = document.getElementsByClassName("friday");
  for (index in fridays) {
    let text = document.getElementsByClassName("friday")[index];
    if (text.innerText !== "SEXTOOU!") {
      text.innerText = "SEXTOOU!";
    } else {
      text.innerText = "???";
    };
  };
};

let btnFriday = document.getElementById("btn-friday");

btnFriday.addEventListener("click", textFridays);

// >>>>>>>>>>> EXERCICIO 6

zoom();

function zoom() {
  let days = document.querySelectorAll(".day");
  days.forEach(function (zoomy) {
    zoomy.addEventListener("mouseenter", function (zumIn) {
      zumIn.target.style.fontSize = "40px";
      zumIn.target.style.transition = "0.3s";
    });
    zoomy.addEventListener("mouseleave", function (zumOut) {
      zumOut.target.style.fontSize = "20px";
    });
  });
}

// >>>>>>>>>>> EXERCICIO 7

function createTask(str) {
  let span = document.createElement("span");
  span.innerText = str;
  document.getElementsByClassName("my-tasks")[0].appendChild(span);
}

createTask("cozinhar");

// >>>>>>>>>>> EXERCICIO 8
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.

function createSubtitle (str) {
  let div = document.createElement("div");
  div.style.backgroundColor = str;
  div.classList.add("task");
  document.getElementsByClassName("my-tasks")[0].appendChild(div);
}

createSubtitle ("green");

// >>>>>>>>>>> EXERCICIO 9
