
let phonenum = "123456";

const phoneArr1 = phonenum.split("").join("-");
console.log(phoneArr1)
phonenum = "12485245656";

const phoneArr = phonenum.split("");
console.log(phoneArr);

phoneArr.unshift("+")
console.log(phoneArr);

phoneArr.splice(2,0," (")
console.log(phoneArr);

phoneArr.splice(6,0,") ")
console.log(phoneArr);

phoneArr.splice(10,0," ")
console.log(phoneArr);

console.log(phoneArr.join(""));



