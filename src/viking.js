// Soldier


class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength; 
    }
    attack() {
        return  this.strength; 

    }
    receiveDamage(damage) {
       this.health -= damage;  
    }
}







// Viking

class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name; 
    }
    attack() {
        return  this.strength; 

    }
    receiveDamage(damage) {
       this.health -= damage; 
        if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
       } else {
        return `${this.name} has received ${damage} points of damage`;
       }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}









// Saxon
class Saxon  extends Soldier {

    receiveDamage(damage) {
        this.health -= damage; 
         if (this.health <= 0) {
         return `A Saxon has died in combat`;
        } else {
         return `A Saxon has received ${damage} points of damage`;
        }
        }
}








// War
class War {
     constructor() {
        this.vikingArmy = []; 
        this.saxonArmy = []; 
     }
     addViking(Viking) {
        this.vikingArmy.push(Viking);
     }
     addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
     }
     vikingAttack() {
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; // random index

        let saxonIndex =  Math.floor(Math.random()*this.saxonArmy.length)
        let saxon = this.saxonArmy[saxonIndex];

        let attackDamageViking = saxon.receiveDamage(viking.strength);

        if ( saxon.health <= 0 ) {
            this.saxonArmy.splice(saxonIndex, 1); // splice per remoure del exercit tot els morts 1 per 1. [viu,mort,mort,viu,viu,viu,mort,viu], va 1 per 1 comprovant 
        }

        return attackDamageViking; 
     }
     saxonAttack() {

        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length)

        let viking = this.vikingArmy[vikingIndex];
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let attackDamageSaxon = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return attackDamageSaxon; 
        
     }
     showStatus() {





        
     }

}
