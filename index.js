const coffeeMenu = require('./coffee_data');

//test export

const drinks = Object.values(coffeeMenu);

console.log(drinks);

//print an array of the drinks on the menu

function extractValue(array, key){
    let extractValue = array.map(item => item[key]);
    return extractValue;
}

const drinkNames = extractValue(coffeeMenu, 'name');
console.log(drinkNames);

//print an array of drinks that cost 5 and under

function under5(value){
    return value.price <= 5;
}
const priceUnder5 = coffeeMenu.filter(under5);

console.log(priceUnder5);

//print an array of drinks that are priced at an even number

function even(value){
    return value.price % 2 === 0
}
const evenPrice = coffeeMenu.filter(even);

console.log(evenPrice);
//print the total if you were to order one of every drink

const totalPrice = coffeeMenu.reduce((total, item) => {
    return total + item.price;
}, 0);

console.log(totalPrice);

//print an array with all the drinks that are seasonal

function seasonal(value){
    return value.seasonal;
}
const seasonalDrinks = coffeeMenu.filter(seasonal);

console.log(seasonalDrinks);

//print all the seasonal drinks with the words "with imported beans"


const importedBeans = extractValue(seasonalDrinks, 'name');

function addBeans(value){
    return value + ' with imported beans';
}
const withBeans = importedBeans.map(addBeans);

console.log(withBeans);