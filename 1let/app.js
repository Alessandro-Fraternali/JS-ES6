// il valore di let inserito in un blocco {} non può
// essere richiamato all'esterno

{
  var var1 = "Sono var";
  console.log(var1);
}
console.log(var1);

let let1 = "let fuori dal blocco"
console.log(let1);

{
  let let2 = "let nel blocco";
  console.log(let2);
}
console.log(let2);
