// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(1,2))

const multiplier = {
    numbArray : [1,2,3],
    numb : 4,
    multiply() {
        return this.numbArray.map((number) => number*this.numb);
    }
}

console.log(multiplier.multiply())
