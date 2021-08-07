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
function watch(message = 'Some text'){
    return message;
}

console.log(watch('Test text'));
