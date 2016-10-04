// fennecFox //'Franz', 'Female', 'dateOfBirth', 'Able', 'Desert'
// atlanticPuffin
//    sex: sex,
//    habitat: habitat,

Animal.prototype = {
    birthAbility: function() {
        var animal = this.name;
        if ('Pablo' === animal) {
            return 'bird';
        } else {
            return 'mammal';
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

    speciesIs: function() {
      var species = this.species;
      return species;
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
        return ("My name is " + this.nameIs() + " the " + this.speciesIs() + " and I am " + this.dateOfBirth() + " years old. I am a " + this.birthAbility() + ". I live in the " + this.habitatIs() + ". I love to eat " + this.dietIs() + ".");
    }
};

function Animal(name, age, habitat, diet, species) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
    this.diet = diet;
    this.species = species;
}


//Testing
// console.assert(fennecFox.name === "Franz");
// console.assert(fennecFox.age === "09/09/1999");
// console.assert(fennecFox.habitat === "desert");
// console.assert(fennecFox.diet === "rodents, eggs, reptiles, and insects");
// console.assert(fennecFox.species === "Fennec Fox");


//Testing
// console.assert(atlanticPuffin.name === "Pablo");
// console.assert(atlanticPuffin.age === "08/09/2010");
// console.assert(atlanticPuffin.habitat === "ocean");
// console.assert(atlanticPuffin.diet === "little fish and sometimes crustaceans");
// console.assert(atlanticPuffin.species === "Atlantic Puffin");

//Testing
// console.assert(capybara.name === "Carl");
// console.assert(capybara.age === "01/02/2013");
// console.assert(capybara.habitat === "forest near water");
// console.assert(capybara.diet === "grass and water plants");
// console.assert(capybara.species === "Capybara");


function get(url) {
  return new Promise(function(resolve, reject) {
    var http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.onload = function() {
      if (http.status === 200) {
        resolve(JSON.parse(http.response));
      } else {
        reject(http.statusText);
      }
    };
    http.onerror = function() {
      reject(http.statusText);
    };
    http.send();
  });
}

var promise = $.get('animals.json');

promise.then(function(animal) {
  var fennecFox = new Animal(animal.animals[0].name, animal.animals[0].age, animal.animals[0].habitat, animal.animals[0].diet, animal.animals[0].species);
  document.getElementById('foxInfo').innerHTML = fennecFox.speak();
  return promise;
}).then(function(animal) {
    var atlanticPuffin = new Animal(animal.animals[1].name, animal.animals[1].age, animal.animals[1].habitat, animal.animals[1].diet, animal.animals[1].species);
    document.getElementById('puffinInfo').innerHTML = atlanticPuffin.speak();
    return promise;
  }).then(function(animal) {
    var capybara = new Animal(animal.animals[2].name, animal.animals[2].age, animal.animals[2].habitat, animal.animals[2].diet, animal.animals[2].species);
    document.getElementById('capybaraInfo').innerHTML = capybara.speak();
    return promise;
}).catch(function(error) {
  console.log(error);
});
