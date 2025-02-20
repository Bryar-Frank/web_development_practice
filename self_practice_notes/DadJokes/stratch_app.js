// axios.get("https://swapi.dev/api/people/1")
//   .then( (res) => {
//     console.log("Process Complete!", res);
//   })
//   .catch( (e) => {
//     console.log("ERROR!", e);
//   })

let dadJokeButton = document.querySelector("#btnGetJoke");
let jokeList = document.querySelector('#jokeList');

let getDadJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  return res.data.joke;
};

dadJokeButton.addEventListener("click", () => {
  getDadJoke()
    .then((data) => {
      console.log(data);
      const newJoke = document.createElement('li');
      newJoke.innerText = data;
      jokeList.appendChild(newJoke);
    })
    .catch((e) => console.log(e));
});
