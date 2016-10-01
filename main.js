// fennecFox
// atlanticPuffin

//test as prototype method

function Animal(name, sex, dateOfBirth, birthAbility, habitat){
  this.stats = {
    name: name,
    sex: sex,
    dateOfBirth: dateOfBirth,
    birthAbility: birthAbility,
    habitat: habitat,
  };
}

var fennecFox = new Animal('Franz', 'Female', 'dateOfBirth', 'Able', 'Desert');
// fennecFox.init();
var atlanticPuffin = new Animal('Pablo', 'Male', 'dateOfBirth', 'Unable', 'Beach/Ocean');
console.log(fennecFox.stats);
console.log(atlanticPuffin.stats);
