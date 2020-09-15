// processare un array con arrow function

var arr = [2,5,7,9,6,8,13,15];

var arrPari = arr.filter(function(ele){
  return ele%2 ==0;
});
console.log(arrPari);

arrPari2 = arr.filter(ele => ele%2 ==0);
console.log(arrPari2);
console.log(arrPari2.map(ele => ele*2));
console.log(arrPari2.reduce((ele1, ele2) => ele1*ele2));
