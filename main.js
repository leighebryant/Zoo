// fennecFox //'Franz', 'Female', 'dateOfBirth', 'Able', 'Desert'
// atlanticPuffin
//    sex: sex,
//    habitat: habitat,

//test as prototype method
Animal.prototype = {
    birthAbility: function() {
        var animal = this.name;
        if ('Fennec Fox' === animal) {
            return 'This is a mammal.';
        } else {
            return 'This is a bird';
        }
    },

    dateOfBirth: function(age) {
        var currentYear = new Date().getFullYear();
        var birthYear = this.age.split("/")[2];
        console.log(currentYear - birthYear);
    }

}

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

var fennecFox = new Animal('Fennec Fox', '09/07/1999');
console.log(fennecFox.birthAbility());
console.log(fennecFox.dateOfBirth());


var atlanticPuffin = new Animal('Atlantic Puffin', '06/09/2010');
console.log(atlanticPuffin.birthAbility());
console.log(atlanticPuffin.dateOfBirth());


fennecFox.speak = function(line){
  console.log ("My name is Franz and I am" + atlanticPuffin.dateOfBirth()+ "years old.");
}

atlanticPuffin.speak = function(line){
  console.log
}


// console.log(fennecFox);
// console.log(atlanticPuffin);
