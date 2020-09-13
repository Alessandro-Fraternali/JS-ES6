// fat arrow function
// () per gli argomenti
// => valore ritornato

var test1 = function(){
  var test = "test1 riuscito";
  console.log(test);
}
test1();

var test2 = () => console.log('test2 riuscito');
test2();

var test3 = (test3pt1, test3pt2) => console.log(test3pt1, test3pt2);
test3("test3", "riuscito");

var test4 = () => 2+2;
console.log(test4());

var test5 = (test5pt1) => test5pt1+2;
console.log(test5(8));
