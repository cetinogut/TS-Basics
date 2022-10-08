let sales = 123_456_789; //ts compiler knows that this is a number, hover over it.
let course:string = "TypeScript";
let is_published : boolean = true;
let level;  //if you don't initialize it , tsc puts it as "any" 

level = 1;
level = 'a';

function render (document: any){
    console.log(document);
}

let numbers:number[] = [1, 2, 3];
let numbers2 = [1, 2, 3];
numbers.forEach( n => n.toString)

//tuples
let user :[ number, string] = [1, 'cetin'];

//enum

const enum Sizes {Small=1, Medium=2, Large=3}

let mySize :Sizes = Sizes.Large;
console.log(mySize);

function calculateTax( income:number, taxYear?: number) : number { // taxYear is optional, for this reason we are having an default value for taxYear if it doesnot come with function call
     //let x ;
    if((taxYear || 2022) < 2022)
        return income * 1.2;
    
    //if we dont write anything for the else then JS will return undefined. that's why without the line below the compiler will cry out.
    return income* 1.4;
}

function calculateTax2( income:number, taxYear: number = 2022) : number { // taxYear is optional,  and default is 2022 this is better than the above option 
    
   if(taxYear < 2022)
       return income * 1.2;
   
   //if we dont write anything for the else then JS will return undefined. that's why without the line below the compiler will cry out.
   return income* 1.4;
}

calculateTax(100_000, 2022);
calculateTax(10000); // taxYear defaults to 2022
calculateTax2(10_000); // taxYear defaults to 2022

//objects

let employee: {
    readonly id: number,
    name:string,
    retire: (date:Date) => void, // a function having one parameter and returning void
} = {
    id:1,
    name:"cetin",
    retire: (date:Date) => {
        console.log(date)
    } }; // or name?:strşng in object decleration

///employee.name = 'cetin'; 

//employee.id = 0; // will complain because you cannot assign a new value to radonly id

// a better way of showing the objects with Type alias

type Employee = {
    id:number,
    name:string,
    retire:(date:Date) => void
}

let employee2 : Employee  = {
    id:1,
    name:'hacer',
    retire: (date:Date) => {
      console.log(date);   
    }
}

//union types

function kgToLbs (weight: number | string): number {
    //narrrowing
    if(typeof weight === 'number') //weight is number
      return  weight * 2.2;
    else{ // weight is string
        return parseInt(weight) * 2.2;
    }
}

 kgToLbs(10);
 kgToLbs('10kg');

 type Draggable ={
    drag: () => void 
 }
 type Resizable ={
    resize: () => void 
 }

 type UIWidget = Draggable & Resizable;

 let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
 }

 let quantitiy: 50 | 100 = 50; // or a better example would be with custom annotation

type Quantity = 50 | 100;
let quantitiy2 : Quantity = 100;

//literals can be any type

type Metric = 'cm' | 'inch';

function greet(name : string){
    console.log(name.toUpperCase);
}
//greet(null);// this is a totally legal call for Vanilla JS, no compilation, but crashes at the run time because  there is no UpperCAse method for null values.

//greet(null); // strictnullcheck = true

//if we want t opass null values and take care the null value with code:
 function greet2(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase);
    else
    console.log('Error on Null!!');
 }

  greet2("cetin");
  greet2(null);
  greet2(undefined) // this works fine if you add Union undefined at the function decleration

//optional property access operator

type Customer = {
    birthday: Date,
}
function getCustomer( id: number): Customer | null |undefined{
    return id===0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log('customer =' + customer.birthday); // there is better way to write this code in one line with 
                                    // OPTIONAL PROPERTY ACCESS OPERATOR
                                    
let customer2 = getCustomer(0); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:0 =' + customer2?.birthday);

let customer3 = getCustomer(1); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:1 =' + customer3?.birthday);

//optional property access operator 2

type CustomerWithOptionalBirthday = {
    birthday?: Date,
}

function getCustomerWithBirthday( id: number): CustomerWithOptionalBirthday | null |undefined{
    return id===0 ? null : {birthday: new Date()}
}

let customer4 = getCustomerWithBirthday(4); // if id=0 returns undefined, if it is id=1 returns date
console.log('customer:1 =' + customer4?.birthday?.getFullYear()); // this code is executed if we have a Customer and that customer has a birthday otherwise this is undefined

// optional element access operator for ARRAYs
// customers?.[0] prints the first customer in the array if it is not null or undefined

  // optional call
  let log: any = (message:string) => console.log(message);
  let log1: any = null;

  log('error message'); // this works fine
  log1('error message'); // our program crashes because log1 is null
  log1?.('error message'); // this will work with optional call operator // this piece of code will work only if the log1 is an actual function. will not do anything  and we will get an undefined
// to compile and run the project type the following comand fron the terminal at project level
// tsc && node dist/index.js