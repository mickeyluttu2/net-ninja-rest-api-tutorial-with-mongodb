var x: string = "hello";
console.log(x);

var greet = (name: string) => {
    console.log(`Hiii ${name}`);
}

greet('Amal');

var people = ['peter', 'parker', 'aunt may', 'uncle ben'];
var ages = [22, 46, 25, 60];
module.exports = {
    people, ages
};
