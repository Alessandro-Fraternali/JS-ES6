class Enemy{

  constructor(race = 'Alien', rank = 'Minor', health = 100, weapons = 'Plasma pistol'){
    this.race = race;
    this.rank = rank;
  }
  weapons(){
    return 'Weapons: ';
  }
  health(){
    return 'Health: ';
  }
  shield(){
    return 'Shield: ';
  }
}

// Creazione Sangheili Zealot
class Sangheilis extends Enemy{
  constructor(race, rank, health, weapons){
    super(race, rank, health);
  }
  health(){
    console.log(super.health()+'350');
  }
  shield(){
    console.log(super.shield()+'600');
  }
  weapons(){
    console.log(super.weapons()+'Plasma rifle');
  }
}

// Creazione Unggoy Minor
class Unggoys extends Enemy{
 constructor(race, rank, health = '200', weapons = 'asdasd'){
   super(race, health, weapons = 'ababa');
 }
 // health(){
 //   console.log(super.health()+'123');
 // }
 shield(){
   console.log(super.shield()+'-');
 }
 weapons(){
   console.log(super.weapons()+'Plasma pistol');
 }
}

var unggoy = new Unggoys('Unggoy', 'Minor', 'Health: 900', 'shield', 'weapons');
console.log(unggoy.race);
console.log(unggoy.rank);
console.log(unggoy.health());
console.log(unggoy.shield());
console.log(unggoy.weapons());

var sangheili = new Sangheilis('Sangheili', 'Zealot', 'health', 'shield', 'weapons');
console.log(sangheili.race);
console.log(sangheili.rank);
console.log(sangheili.health());
console.log(sangheili.shield());
console.log(sangheili.weapons());
