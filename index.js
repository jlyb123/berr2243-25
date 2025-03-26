const { MongoClient } = require('mongodb');

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

// show the data in the console
console.log(drivers);

// TODO: show all the drivers name in the console

// TODO: add additional driver to the drivers array

async function main() {
