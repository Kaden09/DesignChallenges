const theme_icon = document.getElementById("theme-icon");
const mask = document.getElementById("mask");
const circle = document.getElementById("circle");
const sun_rays = document.getElementById("sun-rays");

let theme = "dark";

document.documentElement.setAttribute("data-theme", theme);

function handleClick() {
  if (theme === "dark") {
    mask.setAttribute("cx", 150);
    mask.setAttribute("cy", 50);
    circle.setAttribute("r", 13);
    sun_rays.style.transform = "scale(1.1)";
    setTimeout(() => {
      sun_rays.style.transform = "scale(1)";
    }, 300);
  } else {
    mask.setAttribute("cx", 117);
    mask.setAttribute("cy", 80);
    circle.setAttribute("r", 30);
    sun_rays.style.transform = "scale(0)";
  }
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);

  theme_icon.removeEventListener("click", handleClick);
  setTimeout(() => {
    theme_icon.addEventListener("click", handleClick);
  }, 300);
}

theme_icon.addEventListener("click", handleClick);
