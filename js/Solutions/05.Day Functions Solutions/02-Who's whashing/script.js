let names = ["Ben", "Jenny","Michael", "Chloe", "Timmy"];

function whoIsWashing(names) {
   
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];
    console.log(`You are ${numberOfPeople} people today and:`);
    return randomPerson + " is going to wash today!";
   
  }

  let neighbours = ["Patrick", "AnnMarie","Alisol", "Walton"];
  
  console.log(whoIsWashing(names));
  console.log(whoIsWashing(neighbours));
