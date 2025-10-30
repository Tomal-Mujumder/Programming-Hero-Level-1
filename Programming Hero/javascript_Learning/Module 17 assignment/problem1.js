
const prompt = require('prompt-sync')();
let TotalNumber = 
        prompt("How much money do you have before Shopping: ");
let ShoppingCost = 
    prompt("How much cost you for 1kg of oranges and apples: ");
const MoneyLeft = TotalNumber - ShoppingCost;
console.log(`You would have ${MoneyLeft}tk`);