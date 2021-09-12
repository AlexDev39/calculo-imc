const nome = 'Alex';
const sobreNome = 'Almeida';
const idade = 41;
const peso = 70;
const alturaEmM = 1.63;
let imc;
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;


console.log(`${nome} ${sobreNome} tem ${idade} anos, ${peso} kg,`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);