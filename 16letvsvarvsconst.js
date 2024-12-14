//Example : 1
var a = 1
let b = 2
console.log(a)
console.log(b)

//Example : 2  let is the Solution of Redeclaration Problem
var c = 3
var c = 4
let d = 5    
let d = 6     //here when we try to redeclare the variable that is created by let it is gives us error here only before we actually run the code
console.log(c)
console.log(d)

//Example : 3 we can reassign the value in let keyword because it it is not valid then how our loops can work
let e = 8
e = 9 //here we are not redeclare the variable we are just  reassign the value thats why the code will run and print 9
console.log(e)

//Example : 4  varaiable declared by let keywords are block scoped
if(true){
    let f = 10
    console.log(f)
}
console.log(f) //here we can not access the variable declared by let keyword inside the block, outside of the block

//using const keyword
//const keyword will not allowed redeclaration and reassigning and it always block scoped
//as name says const keyword means a constant value that you defined
//Example : 5
const g = 100
g = 110     //This will be reslt in an eror
console.log(g)