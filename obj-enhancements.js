// 1. Same keys and values

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }



function createInstructor(firstName, lastName){
return {
    firstName,
    lastName
    }
}
console.log(createInstructor('aaron', 'clayton'))

// -----------------------------------------------------

// 2. Computed Property Names

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

// -----------------------------------------------------

// 3. Object Methods

// var teacher = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const teacher = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },

    sayBye(){
      return this.firstName + " says bye!";
    }
  }


// -----------------------------------------------------
 
 // 4. createAnimal function

//  const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, action, sound){
    return {
        species,
        [action](){
            return sound
        }
    }
}

const lion = createAnimal('lion', 'roar', 'meow')
console.log(lion.roar())
