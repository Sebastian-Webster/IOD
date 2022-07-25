//https://pokeapi.co/docs/v2
//PokeAPI documentation

function getPromise(URL) {
  return new Promise(function (resolve, reject) {
    fetch(URL).then(response => response.json()).then(result => resolve(result)).catch(error => reject(error))
  });
}

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=99999999';

// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);
const pokemonConsumer = () => {
  promise.then(
    async (result) => {
        for (pokemon of result.results) {
            let cardTemplate = document.getElementById('cardTemplate');
            let card = cardTemplate.content.cloneNode(true);
            let pokemonName = pokemon.name
            pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
            card.querySelector('.pokemon-name').textContent = pokemonName
            const urlSegments = pokemon.url.split('/')
            const pokemonNumber = urlSegments[urlSegments.length - 2]
            card.querySelector('.pokemon-best-number').textContent = pokemonNumber
            await getPromise(pokemon.url).then(result => {
                const imageUrl = result.sprites.front_default;
                const stats = result.stats;
                const hpStat = stats[0].base_stat;
                const attackStat = stats[1].base_stat;
                const defenseStat = stats[2].base_stat;
                const specialAttackStat = stats[3].base_stat;
                const specialDefenseStat = stats[4].base_stat;
                const speedStat = stats[5].base_stat;
                card.querySelector('.pokemon-image').setAttribute('src', imageUrl)
                card.querySelector('.pokemon-hp-stat').textContent = `${pokemonName}'s HP stat: ${hpStat}`
                card.querySelector('.pokemon-attack-stat').textContent = `${pokemonName}'s Attack stat: ${attackStat}`
                card.querySelector('.pokemon-defense-stat').textContent = `${pokemonName}'s Defense stat: ${defenseStat}`
                card.querySelector('.pokemon-special-attack-stat').textContent = `${pokemonName}'s Special Attack stat: ${specialAttackStat}`
                card.querySelector('.pokemon-special-defense-stat').textContent = `${pokemonName}'s Special Defense stat: ${specialDefenseStat}`
                card.querySelector('.pokemon-speed-stat').textContent = `${pokemonName}'s Speed stat: ${speedStat}`
                document.getElementById('cardContainer').appendChild(card)
            }).catch(error => {
                alert(error);
            })
        }
        const congratulations = document.createElement('h1')
        congratulations.classList.add('text-center')
        congratulations.textContent = 'All Pokemon have now been loaded!'
        document.body.appendChild(congratulations)
    },
    (error) => {
      // As the URL is a valid one, this will not be called.
      alert(error); // Log an error
      console.error(error)
    }
  );
}
pokemonConsumer();

fetch('https://pokeapi.co/api/v2/pokemon/1/').then(result => result.json()).then(response => console.log(response))