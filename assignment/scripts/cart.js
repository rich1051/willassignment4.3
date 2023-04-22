console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const max = 5;
function addItem(){
    if (basket.length <= 5){
        basket.push('lava lamp');
        return true;
    }
    else{
        return 'I think I have enough.';
    }
}
console.log(`Basket is ${basket}`);
console.log('Adding lava lamp (expect true):', addItem('lava lamp'));
console.log(`Basket is now ${basket}`);

function listItems(){
}