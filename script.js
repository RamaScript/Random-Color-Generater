let generateBtn = document.querySelector("button");

generateBtn.addEventListener("click", () => {
  let h2 = document.querySelector("h2");
  let randomColor = getRandomColor();
  h2.innerText = randomColor;

  let Canvas = document.querySelector(".Canvas");
  Canvas.style.backgroundColor = randomColor;
});

let getRandomColor = function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r},${g},${b})`;
  return color;
};
