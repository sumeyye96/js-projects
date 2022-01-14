const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
for (let i = 0; i < companies.length; i++) {
 console.log(companies[i])
  
}
for (const key in companies) {
  console.log(companies[key])
}
for (const iterator of companies) {
  console.log(iterator)

}

let tekDize =companies.map( item=> [item.name, item.start, item.end])
console.log(tekDize)
let sortStart = companies.sort (item => item.start)
console.log(sortStart)
