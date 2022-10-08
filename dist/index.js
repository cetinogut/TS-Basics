"use strict";
var _a;
let sales = 123456789; //ts compiler knows that this is a number, hover over it.
let course = "TypeScript";
let is_published = true;
let level; //if you don't initialize it , tsc puts it as "any" 
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
numbers.forEach(n => n.toString);
//tuples
let user = [1, 'cetin'];
let mySize = 3 /* Sizes.Large */;
console.log(mySize);
function calculateTax(income, taxYear) {
    //let x ;
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    //if we dont write anything for the else then JS will return undefined. that's why without the line below the compiler will cry out.
    return income * 1.4;
}
function calculateTax2(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    //if we dont write anything for the else then JS will return undefined. that's why without the line below the compiler will cry out.
    return income * 1.4;
}
calculateTax(100000, 2022);
calculateTax(10000); // taxYear defaults to 2022
calculateTax2(10000); // taxYear defaults to 2022
//objects
let employee = {
    id: 1,
    name: "cetin",
    retire: (date) => {
        console.log(date);
    }
}; // or name?:strşng in object decleration
let employee2 = {
    id: 1,
    name: 'hacer',
    retire: (date) => {
        console.log(date);
    }
};
//union types
function kgToLbs(weight) {
    //narrrowing
    if (typeof weight === 'number') //weight is number
        return weight * 2.2;
    else { // weight is string
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantitiy = 50; // or a better example would be with custom annotation
let quantitiy2 = 100;
function greet(name) {
    console.log(name.toUpperCase);
}
//greet(null);// this is a totally legal call for Vanilla JS, no compilation, but crashes at the run time because  there is no UpperCAse method for null values.
//greet(null); // strictnullcheck = true
//if we want t opass null values and take care the null value with code:
function greet2(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Error on Null!!');
}
greet2("cetin");
greet2(null);
greet2(undefined); // this works fine if you add Union undefined at the function decleration
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log('customer =' + customer.birthday); // there is better way to write this code in one line with 
// OPTIONAL PROPERTY ACCESS OPERATOR
let customer2 = getCustomer(0); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:0 =' + (customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday));
let customer3 = getCustomer(1); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:1 =' + (customer3 === null || customer3 === void 0 ? void 0 : customer3.birthday));
function getCustomerWithBirthday(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer4 = getCustomerWithBirthday(4); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:1 =' + ((_a = customer4 === null || customer4 === void 0 ? void 0 : customer4.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear())); // this code is executed if we have a Customer and that customer has a birthday otherwise this is undefined
//# sourceMappingURL=index.js.map