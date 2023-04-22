console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item) {
    basket.push(item);
    return true;
}

console.log(`Basket is (expect nothing): ${basket}`);
console.log('Adding lava lamp (expect true):', addItem('lava lamp'));
console.log(`Basket is now ${basket}`);
console.log('Adding water bed (expect true):', addItem('water bed'));
console.log(`Basket is now ${basket}`);

// Just adding some more items to make the list longer...
addItem('disco ball');
addItem('ABBA album')

function listItems() {
    for (let item of basket) {
    console.log('I went down the aisle and threw',item,'in the cart!');
    }
}

listItems();

function empty() {
    console.log('I dumped out the cart on the dancefloor and the basket is now (expect empty array):',basket = []);
}

empty();
