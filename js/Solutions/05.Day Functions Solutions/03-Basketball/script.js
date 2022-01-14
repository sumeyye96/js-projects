
let scoreJohn = [189 , 120 , 103];
let scoreMike = [129 , 94 , 123];


function calcAverage (arr) {
    let total=0;

    for(i=0; i<arr.length; i++) {
        total +=arr[i]
    }

return (total/arr.length).toFixed(2);
}

function whoIsWinner (name1, name2, score1, score2) {

    let average1 = calcAverage(score1);
    let average2 = calcAverage(score2);

    if (average1 > average2) {
        return `${name1} is winner with the average score ${average1} to ${average2} points`;
    } else if (average2 > average1) {
        return `${name2} is winner with the average score ${average2} to ${average1} points`;
    } else {
        return `There is a draw, no one is winner`
    }

}


console.log(whoIsWinner ("John" , "Mike" , scoreJohn , scoreMike));



