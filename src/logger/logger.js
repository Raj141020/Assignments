const welcome = "Welcome to my application";
const name = "Raj Nagwanshi";

function printdetails(){
    console.log(`${welcome} I am ${name} and a part of FunctionUp Lithium cohort.`)
}

module.exports.name = name;
module.exports.printdetails = printdetails;