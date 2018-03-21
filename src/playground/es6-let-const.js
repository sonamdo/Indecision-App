var nameVar = 'Sonam';
var nameVar = 'SonamChange';
console.log('nameVar', nameVar); // can change value and redeclare name

let nameLet = 'Julie';
nameLet = 'JulieChange';
console.log('Julie', nameLet); //cannot redeclare let

const nameConst = 'Bob';

console.log('Bob', nameConst); // cannot change const

function getPetName(){
    var petName = 'Mika'
    return petName;
}

getPetName();
console.log(petName)

//block