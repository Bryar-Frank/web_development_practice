const searchForm = document.querySelector('#formSearch');
const showArea = document.querySelector('#showArea');

const deleteCurrentList = function() {
  showArea.remove();
  showArea = document.createElement('region');
  showArea.id = 'showArea';
}

const addShowsToList = function (data) {
  
  for (let i=0; i<data.length; i++) {
    console.log(data[i].show.name);

    const showCard = document.createElement('div')
    showCard.className = "showCard";
    const showName = document.createElement('div');
    showName.innerText = data[i].show.name;
    const showImage = document.createElement('IMG');
    showImage.src = data[i].show.image.medium;

    showCard.appendChild(showName);
    showCard.appendChild(showImage);
    showArea.appendChild(showCard);
  }
};

searchForm.addEventListener('submit', async (event)=>{
  event.preventDefault();
  console.log('SUBMITTED!');
// THIS IS HOW YOU ADD MULTIPLE PARAMETERS INTO AN AXIOS REQUEST
  const searchTerm = searchForm.elements.query.value;
  const config = { params : {
    q: searchTerm
  }} 
  // THIS WILL SEND A REQUEST OF: https://api.tvmaze.com/search/shows?q={searchTerm}
  await axios.get(`https://api.tvmaze.com/search/shows`, config)
  .then((res) =>{
    deleteCurrentList();
    addShowsToList(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
});
