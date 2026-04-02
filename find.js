const numbers = [32, 21, 63, 95, 100, 67, 43];

const result = numbers.find(number => number === 100);

console.log(result);



const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const movieFrom2010 = movies.find(movie => movie.date === 2010);

console.log('Película de 2010:', movieFrom2010);



const aliens = [
    { name: 'Zalamero', planet: 'Eden', age: 4029 },
    { name: 'Paktu', planet: 'Andromeda', age: 32 },
    { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];

const mutations = [
    { name: 'Regeneración', power: 8 },
    { name: 'Porompompero', power: 10 },
    { name: 'Telepatía', power: 7 }
];

const ALIEN_NAME = 'Cucushumushu';
const MUTATION_NAME = 'Porompompero';

const alien = aliens.find(a => a.name === ALIEN_NAME);

const mutation = mutations.find(m => m.name === MUTATION_NAME);

const fusedAlien = {
    ...alien,
    mutation
};

console.log('Alien encontrado:', alien);
console.log('Mutación encontrada:', mutation);
console.log('Resultado final:', fusedAlien);
