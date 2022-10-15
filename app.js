const card = document.querySelector('#card');
const button = document.querySelector('#btn');

const url = 'https://pokeapi.co/api/v2/pokemon/';

const generateRandomPokemon = () => {
  randomUrl = url + generateRandomNumber();
  fetch(randomUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.sprites.other.dream_world.front_default);
      displayPokemon(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const displayPokemon = (data) => {
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokemonName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const html = `
        <p class="hp">
          <span>hp</span>
            ${hp}
        </p>
        <img id="pokeImg" src=${imgSrc}>
        <h2 class="name">${pokemonName}</h2>
        <div class="types">
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
    `;
  card.innerHTML = html;

  appendTypes(data.types);
};

const generateRandomNumber = () => Math.floor(Math.random() * 600 + 1);

const appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement('span');
    span.textContent = item.type.name;
    document.querySelector('.types').appendChild(span);
  });
};

btn.addEventListener('click', generateRandomPokemon);

generateRandomPokemon();
