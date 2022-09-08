const fecthResponse = fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
});

fecthResponse
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });

const pokemonResponse = fetch('https://pokeapi.co/api/v2/pokemon/240', {
  method: 'GET'
});

pokemonResponse
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
