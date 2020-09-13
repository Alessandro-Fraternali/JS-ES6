
function summ(arg1, arg2, arg3, arg4) {
  return [].reduce.call(arguments,(a,b) => a+b);
}

let arr = [4,6,8,9];
console.log(...arr);


function summ2(arg1, arg2, arg3, arg4) {
  return [].reduce.call(arguments,(a,b) => a+b);
}

let arr2 = [4,6,8,9];
console.log(summ2(...arr2));

let obj = {name: 'Shild', color: "Black"};
let {name: Nome, color: Colore} = obj;
console.log(Nome, "color", Colore);

let Ilnome, Ilcognome;
  ({name: Ilnome, lastName:Ilcognome} =
  {name: "Alessandro", lastName: "Fraternali"});
  console.log(Ilnome, Ilcognome);   
