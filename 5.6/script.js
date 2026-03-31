const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input[data-function="toFilterStreamers"]');
  
  if (!input) {
    console.error('Input no encontrado');
    return;
  }

  input.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    
    const filteredStreamers = streamers.filter(streamer => 
      streamer.name.toLowerCase().includes(searchText)
    );
    
    console.log(`Buscando: "${event.target.value}"`);
    console.log(filteredStreamers);
  });
});

