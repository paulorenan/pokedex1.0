let pokemon150 = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

const mainDiv = document.getElementById('main');
const divAttack = document.getElementById('ataques');

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

const addAttacks = async (move) => {
  const atackURL = await (await fetch(move.move.url)).json();
  const divata = document.createElement('div')
  divata.className = 'divata';
  divAttack.appendChild(divata);
  const aName = document.createElement('p');
  aName.className = 'ataque ataqueName';
  const aType = document.createElement('p');
  aType.className = 'ataque atype';
  const aPower = document.createElement('p');
  aPower.className = 'ataque apower';
  const aPP = document.createElement('p');
  aPP.className = 'ataque app';
  const aCcuracy = document.createElement('p');
  aCcuracy.className = 'ataque';
  const aDamage = document.createElement('p');
  aDamage.className = 'ataque damage';
  aName.innerText = `${atackURL.name.replace('-', ' ').capitalize()}`
  aType.innerText = `${atackURL.type.name.capitalize()}`
  aPower.innerText = `Power: ${(atackURL.power === null? '--' : atackURL.power)}`
  aPP.innerText = `PP: ${atackURL.pp}`
  aCcuracy.innerText = `Accuracy: ${(atackURL.accuracy === null? '--' : atackURL.accuracy)}`
  aDamage.innerText = `${atackURL.damage_class.name.capitalize()}`
  if (atackURL.type.name === 'normal') aType.classList.add('normal');
  if (atackURL.type.name === 'grass') aType.classList.add('grass');  
  if (atackURL.type.name === 'fire') aType.classList.add('fire'); 
  if (atackURL.type.name === 'poison') aType.classList.add('poison');
  if (atackURL.type.name === 'water') aType.classList.add('water');
  if (atackURL.type.name === 'bug') aType.classList.add('bug');
  if (atackURL.type.name === 'electric') aType.classList.add('electric');
  if (atackURL.type.name === 'ghost') aType.classList.add('ghost');
  if (atackURL.type.name === 'dark') aType.classList.add('dark');
  if (atackURL.type.name === 'water') aType.classList.add('water');
  if (atackURL.type.name === 'steel') aType.classList.add('steel');
  if (atackURL.type.name === 'ground') aType.classList.add('ground');
  if (atackURL.type.name === 'rock') aType.classList.add('rock');
  if (atackURL.type.name === 'dragon') aType.classList.add('dragon');
  if (atackURL.type.name === 'fairy') aType.classList.add('fairy');
  if (atackURL.type.name === 'flying') aType.classList.add('flying');
  if (atackURL.type.name === 'ice') aType.classList.add('ice');
  if (atackURL.type.name === 'fighting') aType.classList.add('fight');
  if (atackURL.type.name === 'psychic') aType.classList.add('psychic');
  if (atackURL.damage_class.name === 'physical') aDamage.classList.add('physical');
  if (atackURL.damage_class.name === 'status') aDamage.classList.add('status');
  if (atackURL.damage_class.name === 'special') aDamage.classList.add('special');
  divata.appendChild(aName);  
  divata.appendChild(aType);
  divata.appendChild(aDamage);
  divata.appendChild(aPower);
  divata.appendChild(aPP);
  divata.appendChild(aCcuracy);
}

const getPokemon = async (pokemon) => {
  const pokURLJson = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)).json();
  pokName(pokURLJson.id, pokURLJson.name.capitalize());
  sessionStorage.clear()
  localStorage.setItem('pokNumber', pokURLJson.id)
  createPokImage(pokURLJson.sprites.front_default);
  addTypes(pokURLJson.types);
  addAbility(pokURLJson.abilities)
  divAttack.innerHTML = ''
  pokURLJson.moves.forEach((move) => {
    addAttacks(move)
  })
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
  if (number === 898) {
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