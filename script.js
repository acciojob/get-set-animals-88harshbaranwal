//complete this code
class Animal {
	constructor(species) {
    this._species = species;
	}
	
	get species() {
    return this._species;
	}

  makeSound(sound) {
    console.log(sound);
  }
}

class Dog extends Animal {
	constructor(species) {
    super(species);
}
	
  purr() {
    this.makeSound('purr');
  }
}

class Cat extends Animal {
	  constructor(species, color) {
    super(species);
    this._color = color;
  }

  get color() {
    return this._color;
  }

  purr() {
    this.makeSound('purr');
  }

  meow() {
    this.makeSound('meow');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
