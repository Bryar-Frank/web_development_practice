// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png

const container = document.querySelector('#container');

for (let i=0; i<151; i++) {
  const pokeCard = document.createElement('div');
  pokeCard.classList.add('pokeCard');
  
  const label = document.createElement('span');
  label.innerText = `#${i+1}`;

  const img = document.createElement('img');
  img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`;

  pokeCard.appendChild(img)
  pokeCard.appendChild(label);
  container.appendChild(pokeCard);
}