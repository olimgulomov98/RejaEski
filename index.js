// Module package File

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija:", natija);
// console.log("****************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija:", natija2);
// console.log("****************");

// const natija3 = calculate.ayirish(80, 20);
// console.log("Natija:", natija3);

// console.log(arguments);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("===================");

const myAccount = new Account("Martin", 200000, 94949595949845);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// bugatti chiyron 2,4 mln usd
// myAccount.withdrawMoney(400000);

// ferrari 400000 usd
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
