const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmMovieButton = cancelAddMovieButton.nextElementSibling;
const title = document.getElementById("title");
const image = document.getElementById("image-url");
const rating = document.getElementById("rating");
const userInputs = addMovieModal.querySelectorAll("input");
const del = document.getElementById("delete-modal");
const deleteMovie = del.querySelector(".btn--danger");
const notdeleteMovie = del.querySelector(".btn--passive");

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const clearInput = () => {
  userInputs[0].value = "";
  userInputs[1].value = "";
  userInputs[2].value = "";
};

const addMovieHandler = () => {
  const films = document.getElementsByTagName("li");
  const li = document.createElement("li");
  const ul = document.getElementById("movie-list");

  console.log(films[0]);

  const titulo = userInputs[0].value;
  const imagem = userInputs[1].value;
  const rating2 = userInputs[2].value;


  const movie = {
    id: new Date().getTime(),
    titulo: titulo,
    imagem: imagem,
    rating2: rating2,
  };

  li.classList.add("movie-element");

  li.innerHTML = 
    `<div class="movie-element__image">
        <img src="${movie.imagem}" alt="${movie.titulo}">
    </div>
    <div class="movie-element__info">
        <h2>${movie.titulo}</h2>
        <p>${movie.rating2}/5 stars</p>
    </div>`;

  ul.append(li);

  clearInput();

  function removeMovie(id){
    if(id===movie.id){
       films[i].remove();
       del.classList.toggle("visible");
    }
   
 }


  for (var i = 0; i < films.length; i++) {
    films[i].addEventListener("click", remove);
    deleteMovie.addEventListener("click", removeMovie.bind(null,movie.id));
};
}


const remove = () => {
  del.classList.toggle("visible");
};

const Notremove = () => {
  del.classList.remove("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmMovieButton.addEventListener("click", addMovieHandler);
notdeleteMovie.addEventListener("click", Notremove);
