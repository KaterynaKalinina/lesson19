const units = [new Unit('Virus', 200, 500)];


console.log(units[0].isReadyToFight());
units.push(units[0].clone());
console.log(units);

const squad = new Squad(units);
console.log(squad);