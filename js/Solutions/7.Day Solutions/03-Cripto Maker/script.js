
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const special = "* $ & %"
//STEP-1 AND 2
function criptoIdMaker(num) {
  let criptoId = [];
  let alphaNumeric = numeric.concat(alpha.split(" ")).concat(special.split(' '));
  console.log(alphaNumeric)
  for (i = 0; i < num; i++) {
    random = Math.floor(Math.random() * alphaNumeric.length); // it generates between 0 - 40
    criptoId.push(alphaNumeric[random]);
  }
  //criptoId.push("2","-","5");
  return criptoId.join("");
}

givenId = criptoIdMaker(16);

console.log(givenId);

//STEP-3
//version 1
function criptoArray1(data) {
  let arr = data.split('');
  console.log(arr);
    for (i = 0; i < arr.length-1; i++) {
      if (arr[i] % 1 === 0) {   // typeOf arr[i] === "number"
        arr[i] = arr[i] + "-"
      }
    }
    return arr.join('');
  }

console.log(criptoArray1(givenId));

// version 2
function criptoArray2(data) {
  let arr = data.toString().split('');
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0 ; j < numeric.length ; j++) {
        if (parseFloat(arr[i]) === numeric[j]) {
          arr[i] = Number(arr[i]) + "-"
      }
      }
    }
    return arr.join("");
  };

console.log(criptoArray2(givenId));


//version3
function criptoArray3(data) {
  let arr = data.toString().split('');
  // let evenNum = arr.filter(number => number%2 === 0);
  numeric.forEach(element => {
    for (i = 0; i < arr.length - 1; i++) {
      //if (arr[i] === element.toString() && arr[i] % 1 === 0) {   //
      if (arr[i] === element.toString()) {   //
        arr[i] = Number(arr[i]) + "-"
      }
    }
  });
  return arr.join("");
}
console.log(criptoArray3(givenId));


//STEP-4
givenUnwanted = "3 , * , j , q , z"

// version1
function idControl(data, unwantedArr) {
  let arr = data.toString().split('');
  let unArr = unwantedArr.toString().split('');

    unArr.forEach(item => {
      for (i = 0 ; i < arr.length ; i++) {
        if (arr[i] === item) {
          //arr[i] = ""
          arr.splice(i, 1);
      }
      }
    });
    return arr.join("");
  }

console.log(idControl(givenId,givenUnwanted));

//version2
function idControl2(data, unwantedArr) {
  let arr = data.toString().split('');
  let unArr = unwantedArr.toString().split('');

    for (i = 0; i < arr.length; i++) {
      for (j = 0 ; j < unArr.length ; j++) {
        if (arr[i] === unArr[j]) {
          //arr[i] = ""
          arr.splice(i, 1);
      }
      }
    }
    return arr.join("");
  };

console.log(idControl2(givenId,givenUnwanted));

/*
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
//STEP-1
let alphaArr = alpha.split(" ");
let alphaNum = numeric.concat(alphaArr);

function cripto(arr) {
  let size = parseInt(prompt("Please enter size of ID!"));
  let id = "";
  for(let i=0; i< size; i++) {
    id = id + arr[Math.floor(Math.random() * arr.length)];
  }
  return id;
}

// console.log(cripto(alphaNum));

// //STEP 2
const special = "* $ & %";
let specialArr = special.split(" ");

let alphaNumSpecial = alphaNum.concat(specialArr);

console.log(cripto(alphaNumSpecial));

//​STEP 3
function dash() {
  let str = "";
  let id = cripto(alphaNumSpecial);
  for(let i=0; i < id.length-1; i++) {
    if(parseInt(id[i])) {
      str = str + id[i] + "-";
    } else {
      str = str + id[i];
    }
  }
  return str;
}

console.log(dash());

//STEP 4
const givenUnwanted = "3 , * , j , q , z";
let unwantedArr = givenUnwanted.split(" , ");

function unWanted(arr) {
  let newStr = "";
  let id = dash();
  console.log(`Before removing unwanted ->> ${id}`);

  for(let i = 0; i< id.length; i++) {
    let count = 0;
    for(let j=0; j < arr.length; j++) {
      if(id[i] === arr[j]) {
        count++;
      }
    }
    if(count == 0) {
      newStr = newStr + id[i];
    }
  }
  return `After removing unwanted ->> ${newStr}`;
}

console.log(unWanted(unwantedArr));
*/