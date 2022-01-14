
let studentName = prompt('Students Name:');
let note = prompt('Students Note:');
// if else if else

if (note >=80 && note < 100 ) {
  alert(`Student ${studentName} takes the "A" with the note ${note}`);
} else if (note < 80 && note >= 70 ) {
    alert(`Student ${studentName} takes the "B" with the note ${note}`);
} else if (note < 70 && note >= 60) {
    alert(`Student ${studentName} takes the "C" with the note ${note}`);
} else if (note < 60 && note >= 50) {
    alert(`Student ${studentName} takes the "D" with the note ${note}`);
} else if (note < 50 && note >= 0) {
    alert(`Student ${studentName} takes the "F" with the note ${note}`);
} else {
    alert('Please insert a note between 0 and 100');
}

// Switch statement
const month = prompt('Please enter the month?').toLowerCase();
switch (true) {
    case month === "september" || "october" || "november" :
        alert("the season is Autumn");
        break;
    case month === "december" || "january" || "february" :
        alert("the season is Winter");
        break;
    case month === "march" || "april" || "may" :
        alert("the season is Spring");
        break;
    case month === "june" || "july" || "august" :
        alert("the season is Summer");
        break;
    default:
        alert("please write month correct");
}

