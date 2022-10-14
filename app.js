const randomPokemon = document.querySelector('.random-pokemon');
const pokeball = document.querySelector('.pokeball');

const url = 'https://pokeapi.co/api/v2/pokemon/';

const generateRandomPokemon = () => {
  randomUrl = url + generateRandomNumber();
  fetch(randomUrl)
    .then((data) => {
      return data.json();
    })
    .then((pokemon) => {
      displayPokemon(pokemon.name, pokemon.sprites.front_default);
    })
    .catch((error) => {
      console.error(error);
    });
};

const displayPokemon = (name, img) => {
  const html = `
        <h2>${name}</h2>
        <img src='${img}' alt='${name}'>
    `;
  randomPokemon.innerHTML = html;
  console.log(name, img);
};

const generateRandomNumber = () => Math.floor(Math.random() * 200 + 1);

pokeball.addEventListener('click', generateRandomPokemon);

generateRandomPokemon();
