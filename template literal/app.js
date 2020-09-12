// i template literal rispettano le spaziature e con ${} ci si
// può mettere qualunque espressione di JS 
// usare ALT0096

let person = {
  name: "Jonny",
  lastname: "Banana"
}

let test = `prima riga
seconda riga
terza "riga"
'quarta riga'
quinta riga`

let fullname =`His name is ${person.name}
  and his lastname is ${person.lastname}.
  He is ${10 + 25} years old.`

console.log(fullname);
