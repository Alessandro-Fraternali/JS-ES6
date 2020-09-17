class Alien{
   constructor(weapons, ranks){
     this.weapons = weapons || ['Plasma Pistol'];
     this.shield = 100;
     this.ranks = ranks || ['Rank: '];
   }
   getWeapons(){
     return this.weapons;
   }

   getRanks(){
     return this.ranks;
   }

   increaseShield(shield){
     this.shield += shield;
   }
   getShield(){
     return this.shield;
   }
 };

 var alien = new Alien(['Plasma Pistol', 'Plasma Rifle']);

 Alien.prototype.addWeapon = function(weapon){
   this.weapons.push(weapon);
 }

 Alien.prototype.addRank = function(rank){
   this.ranks.push(rank);
 }

 alien.addRank('Zealot'),
 alien.addWeapon('Energy Sword'),
 alien.increaseShield(150);
 console.log(alien.getRanks());
 console.log(alien.getShield());
 console.log(alien.getWeapons());
