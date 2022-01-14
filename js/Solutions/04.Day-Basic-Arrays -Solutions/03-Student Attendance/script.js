
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]


attendances.push(["John", 9])
attendances.push(["Max", 10])
attendances.push(["Mary", 11])

console.log(attendances)

attendances[2][1]=9;
console.log(`Today ${attendances.length} students came to the class, first student name was ${attendances[0][0]} and last student was ${attendances[attendances.length-1][0]}`)

const averageAge =  (attendances[0][1] +
                    attendances[1][1] +
                    attendances[2][1] +
                    attendances[3][1] +
                    attendances[4][1] +
                    attendances[5][1] +
                    attendances[6][1] +
                    attendances[7][1] +
                    attendances[8][1])/9;

console.log(`average age is ${averageAge.toFixed(2)}`)

attendances.shift();
attendances.splice(2,1);
console.log(attendances)

console.log(`We finished class with ${attendances.length} students.`)



