// concat 
/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); */
/* onst array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6)); */
/* words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter((word, index, arr) => {
    //arr.push('new')
    console.log(word,index,arr);
    return word.length < 6
})

console.log(appendedWords) */
/* const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

inventory.find(({ name }) => name === 'cherries');

//console.log(result)
console.log(inventory); */
var numbers = [4, 2, 5, 1, 3,100];
console.log(numbers.sort((a,b)=>b-a));