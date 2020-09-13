
function calc(plus, ...a){
  return a.reduce(
    function(x,y){
      return eval(x+plus+y);
  });
}
var risultato = calc('*', 2,2,2,4);
console.log(risultato);
