//Lesson7
let car = {
    color: "green",
    maxSpeed: 250,
    audio: {
        brand: "Sony",
        speakers: 12
    },
    cost: 2000,
    update: cupColorReset
};

car.update();

function cupColorReset() {
    console.log(car.maxSpeed);
}

//
function watch(message = 'Some text') {
    return message + ' - 123456';
}

let message = watch('Test text');

console.log(message);

//DZ

color('black');

function color(color = 'red') {
    if (color === 'red') {
        return;
    }
    console.log(color);
}

//Lesson8

// let anonFunc = function (){
//     console.log('We are anonymous');
// }


let anonFunc = (message) => {
    let count = 5;
    return message + count;
};

console.log(anonFunc(995));

