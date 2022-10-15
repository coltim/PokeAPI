const card = document.querySelector('#card');
const button = document.querySelector('#btn');

const url = 'https://pokeapi.co/api/v2/pokemon/';

const typeColor = {
  bug: '#26de81',
  dragon: '#ffeaa7',
  electric: '#fed330',
  fairy: '#FF0069',
  fighting: '#30336b',
  fire: '#f0932b',
  flying: '#81ecec',
  grass: '#00b894',
  ground: '#EFB549',
  ghost: '#a55eea',
  ice: '#74b9ff',
  normal: '#95afc0',
  poison: '#6c5ce7',
  psychic: '#a29bfe',
  rock: '#2d3436',
  water: '#0190FF',
};

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

  const themeColor = typeColor[data.types[0].type.name];

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
  setTypeColor(themeColor);
};

const generateRandomNumber = () => Math.floor(Math.random() * 600 + 1);

const appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement('span');
    span.textContent = item.type.name;
    document.querySelector('.types').appendChild(span);
  });
};

const setTypeColor = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
  card.querySelectorAll('.types span').forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};

btn.addEventListener('click', generateRandomPokemon);

generateRandomPokemon();
