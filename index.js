// the geometrizer

const calcCircumfrence = (radius) => {
    return (2*3.1416*radius)
}

const calcArea = (radius) => {
    return (3.1416*(radius)**2)
}

const circumfrence = calcCircumfrence(5);
const area = calcArea(5);

console.log(`The circumfrence is ${circumfrence}`);
console.log(`The area is ${area}`)

// the dog age calculetor

const calculateDogAge = (age, convertor = 7) =>{
    return age * convertor;
}

const valueDogAge1 = calculateDogAge(5);
const valueDogAge2 = calculateDogAge(9);
const valueDogAge3 = calculateDogAge(2);

console.log(`Your dog is ${valueDogAge1} years old`)
console.log(`Your dog is ${valueDogAge2} years old`)
console.log(`Your dog is ${valueDogAge3} years old`)