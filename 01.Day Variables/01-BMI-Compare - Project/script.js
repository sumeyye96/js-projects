let massMark= 80;
let heightMark=1.8;
let massJohn=75;
let heightJohn=1.75;

let BMIJohn;
let BMIMark;

let higherBMI;
let higherBMI1;

BMIJohn= massJohn / (heightJohn * heightJohn);
BMIMark= massMark / (heightMark * heightMark);

console.log ( "John'un kitle endeksi:" , "" , BMIJohn);
console.log ( "Mark'ın kitle endeksi:" , "" , BMIMark);

console.log ( "John'un kitle endeksi:" , "" , Math.floor(BMIJohn) );
console.log ( "Mark'ın kitle endeksi:" , "" ,Math.floor(BMIMark) );

console.log ( "John'un kitle endeksi:" , "" , Math.round(BMIJohn) );
console.log ( "Mark'ın kitle endeksi:" , "" ,Math.round(BMIMark) );

console.log ( "John'un kitle endeksi:" , "" , (BMIJohn).toFixed(2) );
console.log ( "Mark'ın kitle endeksi:" , "" ,(BMIMark).toFixed(2) );

higherBMI= BMIJohn > BMIMark;
higherBMI1= BMIJohn < BMIMark;

console.log (higherBMI);
console.log (higherBMI1);

console.log (`Mark'ın BMI'si John'unkinden daha mı yüksek? Cevap "${higherBMI}". Çünkü "${Math.floor(BMIMark)}"'ın VKİ'si BMIMARK ve ${Math.round(BMIJohn}un VKİ'si BMIJOHN`)





