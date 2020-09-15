// processare un array con arrow function

var obj = {
  name: "Alessandro",

  displayName: function(){
    console.log(this.name);
  }
};
obj.displayName();

var prova = {
  lastname: "Fraternali",

  displayName: function(){
    setTimeout( () => console.log(this.lastname), 3000);
  }
};
prova.displayName();
