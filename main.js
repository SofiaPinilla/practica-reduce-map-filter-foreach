const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (const company of companies) {

// }
// forEach pintar el nombre de las companies
// companies.forEach(company => console.log(company.name))
// filter

// Pintar las edades que cumplan la mayoría de edad
const mayoresEdad = ages.filter((age) => age >= 18);
// console.log(mayoresEdad)
// Filter
//pintar las companies que tienen la categoría Retail
const companiesRetail = companies.filter(
  (company) => company.category === "Retail"
);
// console.log(companiesRetail);
// Pintar las companies que empezarón en los 80 o para arriba

const companies80start = companies.filter((company) => company.start >= 1980);
// console.log(companies80start);
// map

// Crear Array con los nombres de las companies
const nameCompanies = companies.map((company) => company.name);
console.log(nameCompanies);
// Crear Array con los nombres y categorias de las companies
const nameCompaniesAndCategory = companies.map((company) => {
  const companiesWithNameandCategories = {
    companyName: company.name,
    companyCategory: company.category,
  };
  return companiesWithNameandCategories;
});
console.log(nameCompaniesAndCategory);
// reduce

const sumAges = ages.reduce((a, b) => a + b);
console.log(sumAges)
//sumar todas las edades
