const ids = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const buttons = ids.map((id) => document.getElementById(id));

const code = "2586";
let attempt = "";

function animateFail() {
  lock.style.transform = "rotate(15deg)";
  path.style.stroke = "#e36c6c";
  rect.style.fill = "#e36c6c";
  setTimeout(() => {
    lock.style.transform = "rotate(-15deg)";
  }, 200);
  setTimeout(() => {
    lock.style.transform = "rotate(15deg)";
  }, 400);
  setTimeout(() => {
    lock.style.transform = "rotate(-15deg)";
  }, 600);
  setTimeout(() => {
    lock.style.transform = "rotate(0deg)";
    path.style.stroke = "#999";
    rect.style.fill = "#999";
  }, 800);
}

function animatePath() {
  const values = [
    "M 11 7 C 11 0, 21 0, 21 7 M 11 7 L 11 9 M 21 7 L 21 9",
    "M 11 7 C 11 0, 1 0, 1 7 M 11 7 L 11 9 M 1 7 L 1 9",
  ];

  let index = 0;

  function step() {
    path.setAttribute("d", values[index]);
    index++;
    if (index < values.length) {
      path.style.stroke = "#fff";
      rect.style.fill = "#fff";
      lock.style.transform = "scale(1.3)";
      setTimeout(() => {
        lock.style.transform = "scale(1)";
      }, 160);
      setTimeout(() => {
        step();
      }, 350);
    }
  }

  step();
  setTimeout(() => {
    lock.style.transform = "scale(1)";
    rect.style.fill = "#999";
    path.style.stroke = "#999";
    path.setAttribute("d", values[0]);
  }, 2000);
}

function animateBtn(btn) {
  attempt += btn.innerText;
  if (attempt.length === 4) {
    if (attempt === code) {
      animatePath();
      attempt = "";
    } else {
      animateFail();
      attempt = "";
    }
  }
  btn.style.background = "#ffffff20";
  btn.style.transform = "scale(1.05)";
  btn.style.borderColor = "#ffffff80";
  btn.style.boxShadow = "0 0 1px 1px #ffffff50";
  setTimeout(() => {
    btn.style.boxShadow = "0 0 1px 1px transparent";
    btn.style.transform = "scale(1)";
  }, 150);

  setTimeout(() => {
    btn.style.background = "transparent";
    btn.style.borderColor = "transparent";
  }, 500);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => animateBtn(btn));
});
