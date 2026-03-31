const pointsList = [32, 54, 21, 64, 75, 43];

const newPointsList = [...pointsList];

console.log(newPointsList);



const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const newToy = {...toy};

console.log(newToy);



const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const newPointsList3 = [...pointsList1, ...pointsList2];

console.log(newPointsList3);



const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const newToy2 = {...toy2, ...toyUpdate};

console.log(newToy2);



const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [
  ...colors.slice(0, 2),
  ...colors.slice(3)    
];
 
console.log(colorsCopy);