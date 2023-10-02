let URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(URL)
.then(response => {
  if (!response.ok) {
    throw new Error('La solicitud no fue exitosa');
  }
  return response.json(); // Si esperas una respuesta JSON del servidor
})
.then(data => {
  console.log('Respuesta del servidor:', data);
})
.catch(error => {
  console.error('Error:', error);
});
