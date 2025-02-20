// const button = document.querySelector('.btn');
// const label = document.querySelector('#label')

// button.addEventListener('click', function () {
//   const color = makeRandomColor();

//   document.body.style.backgroundColor = color;
//   label.innerText = color;
// });

const allButtons = document.querySelectorAll('.btn');

const makeRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

for (let button of allButtons) {
  
  button.addEventListener('click', function (evt) {
    const newColor = makeRandomColor();
    button.style.backgroundColor = newColor;
    button.innerText = newColor;
    console.log(evt);
  });
} 