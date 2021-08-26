let pokemon150 = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

const main = document.getElementById('main');
const div = document.createElement('div')
div.id = 'mainDiv'
main.appendChild(div);
const mainDiv = document.getElementById('mainDiv');

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function pokName(numero, nome) {
  const pName = document.createElement('p');
  pName.id = 'PokName';
  pName.innerText = `Pokémon: #${numero} ${nome}`
  mainDiv.appendChild(pName);
}

function createPokImage(imageSource) {
  const imgDiv = document.createElement('div');
  imgDiv.id = 'imgDiv';
  mainDiv.appendChild(imgDiv);
  imgDiv.innerHTML = ""
  const img = document.createElement('img');
  img.className = 'pkimg';
  img.src = imageSource;
  imgDiv.appendChild(img);
}

function addTypes(types) {
  const pokTypes = document.createElement('p')
  pokTypes.id = 'tipo';
  mainDiv.appendChild(pokTypes);
  if (types.length > 1) {
    pokTypes.innerText = `Tipo: ${types[0].type.name.capitalize()}, ${types[1].type.name.capitalize()}`
  } else {
    pokTypes.innerText = `Tipo: ${types[0].type.name.capitalize()}`
  }
}

function addAttacks(ataques) {
  const divAttack = document.createElement('div');
  divAttack.id = 'ataques';
  mainDiv.appendChild(divAttack)
  divAttack.innerText = 'Ataques:'
  ataques.forEach((att) => {
    const ataqueName = document.createElement('p');
    ataqueName.className = 'ataqueName';
    ataqueName.innerText = att.move.name.replace('-', ' ').capitalize();
    divAttack.appendChild(ataqueName);
  });
};

function addAbility(habilidade) {
  const habDiv = document.createElement('div');
  habDiv.id = 'habDiv';
  mainDiv.appendChild(habDiv);
  habDiv.innerText = 'Habilidades:'
  habilidade.forEach((hab) => {
    const ability = document.createElement('p');
    ability.className = 'habilidade';
    ability.innerText = hab.ability.name.replace('-', ' ').capitalize();
    habDiv.appendChild(ability)
  })
}

const getPokemon = async (pokemon) => {
  mainDiv.innerText = 'Loading...'
  const pokURLJson = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)).json();
  mainDiv.innerText = ''
  pokName(pokURLJson.id, pokURLJson.name.capitalize());
  createPokImage(pokURLJson.sprites.front_default);
  addTypes(pokURLJson.types);
  addAbility(pokURLJson.abilities)
  addAttacks(pokURLJson.moves)
}

function searchButton() {
  const inpuit = document.getElementById('textInput');
  getPokemon(inpuit.value);
}

const button = document.getElementById('search');
button.addEventListener('click', searchButton);

window.onload = async () => {
  await getPokemon('bulbasaur');
}