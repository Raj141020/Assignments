const nameofbatch = "Lithium"
let today = new Date();

function printDate(){
    console.log("date is " +today.getDate() + " and month is " +today.getMonth() + " and my batch is lithium and today week 3 day 5 and our topic is NODEJS module system");

}

module.exports.printDate = printDate;