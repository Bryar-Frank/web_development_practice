
const getDadJoke = async() => {
  const config = {
    headers: { Accept: 'application/json'}
  }
  const res = await axios.get(`https://icanhazdadjoke.com/`, config);
  return res.data.joke;
}

const dadJokeButton = document.querySelector('#btnGetJoke');
const jokeList = document.querySelector('#jokeList');

dadJokeButton.addEventListener('click', () =>{
  const joke = getDadJoke()
  .then((data) => {
    console.log(data);
    const newJoke = document.createElement('li');
    newJoke.innerText = data;
    jokeList.appendChild(newJoke);
  })
  .catch((err) => {
    console.log(err);
  })
});