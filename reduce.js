const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 7.1 Suma de TODAS las notas de los exámenes usando .reduce()
const totalScore = exams.reduce((sum, exam) => sum + exam.score, 0);

console.log('=== 7.1 SUMA TOTAL DE TODAS LAS NOTAS ===');
console.log('Suma total:', totalScore);

// 7.2 Suma de notas de los alumnos APROBADOS (nota >= 5) usando .reduce()
const passedScore = exams.reduce((sum, exam) => exam.score >= 5 ? sum + exam.score : sum, 0);

console.log('\n=== 7.2 SUMA DE NOTAS DE APROBADOS ===');
console.log('Suma de aprobados:', passedScore);

// 7.3 Media de todas las notas de los exámenes usando .reduce()
const averageScore = exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length;

console.log('\n=== 7.3 MEDIA DE TODAS LAS NOTAS ===');
console.log('Media de todas las notas:', averageScore.toFixed(2));

