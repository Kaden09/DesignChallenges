const g = document.getElementById("points");
const abbreviature = document.querySelector(".abbreviature");
const title = document.querySelector(".title");
const increase = document.querySelector(".increase");
const price = document.querySelector(".price");

const coordinates = [
  { cx: 5, cy: 45 },
  { cx: 15, cy: 45 },
  { cx: 25, cy: 35 },
  { cx: 35, cy: 25 },
  { cx: 45, cy: 35 },
  { cx: 55, cy: 35 },
  { cx: 65, cy: 45 },
  { cx: 75, cy: 45 },
  { cx: 85, cy: 35 },
  { cx: 95, cy: 25 },
  { cx: 105, cy: 15 },
  { cx: 115, cy: 15 },
  { cx: 125, cy: 25 },
  { cx: 135, cy: 35 },
  { cx: 145, cy: 25 },
  { cx: 155, cy: 15 },
  { cx: 165, cy: 15 },
  { cx: 175, cy: 5 },
  { cx: 185, cy: 5 },
  { cx: 195, cy: 15 },
  { cx: 205, cy: 5 },
];

function animateDigits(number, element, duration) {
  let counter = 0;
  const interval = setInterval(() => {
    if (counter >= number) {
      clearInterval(interval);
    }
    counter += number / 100;
    element.innerText = counter.toFixed(2);
  }, duration);
}

function animateText(text, element, duration) {
  let len = 1;
  const interval = setInterval(() => {
    if (len === text.length) {
      clearInterval(interval);
    }
    element.innerText = text.substring(0, len);
    len++;
  }, duration);
}

function animateChart() {
  const radius = 5;
  let i = 0;
  const interval = setInterval(() => {
    if (i === 20) {
      clearInterval(interval);
    }
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", coordinates[i].cx);
    circle.setAttribute("cy", coordinates[i].cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("class", "circle");
    circle.setAttribute("fill", "#00C853");
    g.appendChild(circle);
    i++;
  }, 80);
}

animateDigits(177, increase, 18);
animateDigits(551, price, 17);
animateText("AAPL", abbreviature, 200);
animateText("Apple Inc.", title, 100);
animateChart();
