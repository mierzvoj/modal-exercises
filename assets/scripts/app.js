const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];

console.log(addMovieModal);

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;

console.log(startAddMovieButton);

const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};
startAddMovieButton.addEventListener("click", toggleMovieModal);

const backDropClickHandler = () => {
  toggleMovieModal();
};

backdrop.addEventListener("click", toggleMovieModal);
