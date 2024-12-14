// In JS are Objects are in key value pair
var person = {
    FirstName : 'Sourabh',
    LastName : 'Verma',
    age : 26,
    OwnsCar : false
}

console.log(person)

// If You Want To acess any value that is inside an object there is 2 methods for this
// First One is dot notation

console.log(person.age)

// Second One is Bracket notation
console.log(person['FirstName'])

var ironman = {
    FirstName : 'Toney',
    LastName : 'Stark',
    HeroName : 'Ironman',
    isalive : true,
    Friends : ['Captain','Natasha','Nick','Spiderman'],
    suits : {
        forhulk : 'hulkbuster',
        forthanos : 'nanosuit'
        }

}
console.log(ironman)
console.log(ironman.Friends)
console.log(ironman['suits'])
console.log(ironman.Friends[3])
console.log(ironman.suits.forhulk)

// we can update any property of an object
ironman.isalive = false

console.log(ironman)

// if we want to add some new prperties in an existing object than
ironman.powers = ['armored suit','ai assistance','genius level intelect']
console.log(ironman)

//we can also delete any property from an object
delete ironman.age

console.log(ironman)