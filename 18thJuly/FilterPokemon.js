//first call npm install xhr2 to install the XMLHTMLRequest library for node.js

const XMLHttpRequest = require("xhr2");

function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
        try{
      let req = new XMLHttpRequest();
      req.open("GET", URL);
      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject("There is an Error!");
        }
      };
      req.send();
    }
      catch(e)
        {
            console.log(e)
        }
    });
    return promise;
  }

const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000000000';

// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);
const consumer = () => {
    promise.then(
        (result) => {
            result = JSON.parse(result);
            let pokemonResults = result.results;
            let pokemonNamesToFilter = ['butterfree', 'weedle', 'kakuna'];
            pokemonResults = pokemonResults.filter(pokemon => {
                return pokemonNamesToFilter.includes(pokemon.name)    
            })
            console.log(pokemonResults)
        },
        (error) => {
            // As the URL is a valid one, this will not be called.
            console.log('We have encountered an Error!'); // Log an error
    });
}
consumer();