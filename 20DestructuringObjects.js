
let Universe = {
    Friendof : 'Sourabh Verma',
    Helpsin : 'Making Him Expert in Blockchain',
    Before : 'June2025'
}
console.log(Universe) //This is How We Generally Declare The Array

//Now we Destructure This Object
let {a,b,c} = Universe   //here We Get Undefined as output because we cant destructure object with diffrent key names
console.log(a)
console.log(b)
console.log(c)  

let {Friendof,Helpsin,Before} = Universe //We Have To Give Key Values during destructuring
console.log(Friendof)
console.log(Helpsin)
console.log(Before)


// if we wat to give specific names to this key then how we would do that
let Marvel = {
    Richest : 'Toney Stark',
    Strongest : 'Doctor Strange',
    Youngest : 'Spiderman'
}
let {Richest : Smartest ,Strongest : Wizard ,Youngest : Teen} = Marvel //We Simply Put New name after The Key Following By colon

console.log(Smartest)
console.log(Wizard)
console.log(Teen)

// Destructureing Nested Objects means Object Inside an object
let Transformers = {
    Evil : 'Megatron',
    Autobotes : {
        Leader : 'Optimus Prime',
        Doctor : 'Ratchit',
        Fighter : 'Bumblebee'
    } 
}
let {Evil,Autobotes,Autobotes:{Leader}} = Transformers //Here If We Want We Can Target The Leader only from inner object 
console.log(Evil)
console.log(Autobotes)
console.log(Leader)