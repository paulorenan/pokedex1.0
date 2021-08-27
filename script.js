let pokemon150 = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

const mainDiv = document.getElementById('main');

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function pokName(numero, nome) {
  const pName = document.getElementById('PokName');
  pName.innerText = `Pokémon: #${numero} ${nome}`
}

function createPokImage(imageSource) {
  const imgDiv = document.getElementById('imgDiv');
  imgDiv.innerHTML = ""
  const img = document.createElement('img');
  img.className = 'pkimg';
  img.src = imageSource;
  imgDiv.appendChild(img);
}

function addTypes(types) {
  const pokTypes = document.getElementById('tipo')
  if (types.length > 1) {
    pokTypes.innerText = `Tipo: ${types[0].type.name.capitalize()}, ${types[1].type.name.capitalize()}`
  } else {
    pokTypes.innerText = `Tipo: ${types[0].type.name.capitalize()}`
  }
}

function addAttacks(ataques) {
  const divAttack = document.getElementById('ataques');
  divAttack.innerHTML = ''
  ataques.forEach((att) => {
    const ataqueName = document.createElement('p');
    ataqueName.className = 'ataqueName';
    ataqueName.innerText = att.move.name.replace('-', ' ').capitalize();
    divAttack.appendChild(ataqueName);
  });
};

function addAbility(habilidade) {
  const habDiv = document.getElementById('habDiv');
  habDiv.innerHTML = ''
  habilidade.forEach((hab) => {
    const ability = document.createElement('p');
    ability.className = 'habilidade';
    ability.innerText = hab.ability.name.replace('-', ' ').capitalize();
    habDiv.appendChild(ability)
  })
}

const getPokemon = async (pokemon) => {
  const pokURLJson = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)).json();
  pokName(pokURLJson.id, pokURLJson.name.capitalize());
  sessionStorage.clear()
  localStorage.setItem('pokNumber', pokURLJson.id)
  createPokImage(pokURLJson.sprites.front_default);
  addTypes(pokURLJson.types);
  addAbility(pokURLJson.abilities)
  addAttacks(pokURLJson.moves)
}

function searchButton() {
  const inpuit = document.getElementById('textInput');
  getPokemon(inpuit.value);
}

function previous() {
  const number = localStorage.getItem('pokNumber')
  if (number === '1') {
    console.log('esse é o primeiro')
  } else getPokemon((number - 1).toString())
}

function next() {
  const number = parseInt(localStorage.getItem('pokNumber'));
  if (number === '898') {
    console.log('esse é o ultimo')
  } else getPokemon((number + 1).toString())
}

const button = document.getElementById('search');
button.addEventListener('click', searchButton);

const anterior = document.getElementById('previous');
anterior.addEventListener('click', previous);

const proximo = document.getElementById('next');
proximo.addEventListener('click', next)

window.onload = async () => {
  await getPokemon('bulbasaur');
}