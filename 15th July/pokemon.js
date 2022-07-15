const dataMap = new Map([['previousPokemon', null], ['nextPokemon', null]]);

function getPromise(URL) {
  return new Promise(function (resolve, reject) {
    fetch(URL).then(response => response.json()).then(result => resolve(result)).catch(error => reject(error))
  });
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1';

// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);
const pokemonConsumer = () => {
  promise.then(
    (result) => {
      console.log(result); // Log the result of 1 Pokemon.
      dataMap.set('previousPokemon', result.previous);
      dataMap.set('nextPokemon', result.next)
      let pokemonName = result.results[0].name
      pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
      document.getElementById('pokemonName').innerHTML = pokemonName;
      getPokemonData(result.results[0].url, pokemonName);
      const urlSegments = result.results[0].url.split('/')
      const pokemonNumber = urlSegments[urlSegments.length - 2]
      document.getElementById('pokemonBestNumber').innerHTML = `${pokemonName} is the number ${pokemonNumber} best pokemon.`
      console.log(dataMap)
      document.getElementById('goToPokemonNumber').reset();
    },
    (error) => {
      // As the URL is a valid one, this will not be called.
      alert(error); // Log an error
      console.error(error)
    }
  );
}
pokemonConsumer();

function showLoading() {
  document.getElementById('pokemonImage').setAttribute('src', 'images/loading_icon.gif')
  document.getElementById('pokemonName').innerHTML = 'Loading...'
  document.getElementById('pokemonBestNumber').innerHTML = 'Checking pokemon status...'
  document.getElementById('hpStat').innerHTML = 'Checking pokemon HP base stat...'
  document.getElementById('attackStat').innerHTML = 'Checking pokemon attack base stat...'
  document.getElementById('defenseStat').innerHTML = 'Checking pokemon defense base stat...'
  document.getElementById('specialAttackStat').innerHTML = 'Checking pokemon special attack base stat...'
  document.getElementById('specialDefenseStat').innerHTML = 'Checking pokemon special defense base stat...'
  document.getElementById('speedStat').innerHTML = 'Checking pokemon speed base stat...'
}

function changePokemon(valueToGet) {
  const url = dataMap.get(valueToGet)
  if (url == undefined || url == null) {
    alert('There is no pokemon to go too.')
    return;
  } else {
    showLoading()
    promise = getPromise(url)
    pokemonConsumer()
  }
}

function getPokemonData(URL, pokemonName) {
  getPromise(URL).then(result => {
    const imageUrl = result.sprites.front_default;
    const stats = result.stats;
    const hpStat = stats[0].base_stat;
    const attackStat = stats[1].base_stat;
    const defenseStat = stats[2].base_stat;
    const specialAttackStat = stats[3].base_stat;
    const specialDefenseStat = stats[4].base_stat;
    const speedStat = stats[5].base_stat;
    document.getElementById('pokemonImage').setAttribute('src', imageUrl)
    document.getElementById('hpStat').innerHTML = `${pokemonName}'s HP: ${hpStat}`
    document.getElementById('attackStat').innerHTML = `${pokemonName}'s Attack: ${attackStat}`
    document.getElementById('defenseStat').innerHTML = `${pokemonName}'s Defense: ${defenseStat}`
    document.getElementById('specialAttackStat').innerHTML = `${pokemonName}'s Special Attack: ${specialAttackStat}`
    document.getElementById('specialDefenseStat').innerHTML = `${pokemonName}'s Special Defense: ${specialDefenseStat}`
    document.getElementById('speedStat').innerHTML = `${pokemonName}'s Speed: ${speedStat}`
  }).catch(error => {
    alert(error);
  })
}

function goToPokemonNumber(e) {
  e.preventDefault();

  const form = document.getElementById('goToPokemonNumber')

  const numberToGoTo = form.pokemonNumber.value;
  if (isNaN(numberToGoTo)) {
    form.reset()
    alert('Pokemon number must be a number.')
  }

  showLoading()
  promise = getPromise(`https://pokeapi.co/api/v2/pokemon?offset=${numberToGoTo - 1}&limit=1`)
  pokemonConsumer()
}

document.getElementById('goToPokemonNumber').addEventListener('submit', goToPokemonNumber)

fetch('https://pokeapi.co/api/v2/pokemon/1/').then(result => result.json()).then(response => console.log(response))