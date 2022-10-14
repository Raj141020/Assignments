const name = "      My name is Raj          "
function name1(){
    console.log("Trim()",name.trim());
    console.log("upper case",name.toUpperCase());
    console.log("lowercase",name.toLowerCase());
}

module.exports.trim =name1;