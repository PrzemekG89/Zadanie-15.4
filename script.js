//Zadanie pierwsze
const sayHello = (hello = "Hello", world = "world!") => console.log(`${hello} ${world}`);
sayHello();

//Zadanie drugie
const multiply = (a, b = 1) => console.log(a*b);
multiply(4, 4);

//Zadanie trzecie
const avarge = (...number) => {
    let sum = 0;
    number.forEach(num => sum+=num);
    return sum/number.length;
}
console.log(avarge(3, 7));

//Zadanie czwarte
const grades = [1, 5, 5, 4, 3, 3, 2, 1];
console.log(avarge(...grades));

//Zadanie piąte
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = data;
console.log(`Firstane: ${firstname}, Lastname: ${lastname}`);

