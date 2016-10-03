// fennecFox //'Franz', 'Female', 'dateOfBirth', 'Able', 'Desert'
// atlanticPuffin
//    sex: sex,
//    habitat: habitat,

Animal.prototype = {
    birthAbility: function() {
        var animal = this.name;
        if ('Franz' === animal) {
            return 'mammal';
        } else {
            return 'bird';
        }
    },

    dateOfBirth: function(age) {
        var currentYear = new Date().getFullYear();
        var birthYear = this.age.split("/")[2];
        return (currentYear - birthYear);
    },

    nameIs: function() {
        var name = this.name;
        return name;
    },

    habitatIs: function() {
        var habitat = this.habitat;
        return habitat;
    },

    dietIs: function() {
      var diet = this.diet;
      return diet;
    },

    speak: function() {
        return ("My name is " + this.nameIs() + " and I am " + this.dateOfBirth() + " years old. I am a " + this.birthAbility() + ". I live in the " + this.habitatIs() + ". I love to eat " + this.dietIs() + ".");
    }
};

function Animal(name, age, habitat, diet) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
    this.diet = diet;
}

var fennecFox = new Animal('Franz', '09/09/1999', 'desert', 'rodents, eggs, reptiles, and insects');
document.getElementById('foxInfo').innerHTML = fennecFox.speak();
//Testing
// console.assert(fennecFox.name === "Franz");
// console.assert(fennecFox.age === "09/09/1999");
// console.assert(fennecFox.habitat === "desert");
// console.assert(fennecFox.diet === "rodents, eggs, reptiles, and insects");


var atlanticPuffin = new Animal('Pablo', '08/09/2010', 'ocean', 'little fish and sometimes crustaceans');
document.getElementById('puffinInfo').innerHTML = atlanticPuffin.speak();
//Testing
// console.assert(atlanticPuffin.name === "Pablo");
// console.assert(atlanticPuffin.age === "08/09/2010");
// console.assert(atlanticPuffin.habitat === "ocean");
// console.assert(atlanticPuffin.diet === "little fish and sometimes crustaceans");
