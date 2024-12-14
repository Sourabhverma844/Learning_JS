//Example : 4  varaiable declared by let keywords are block scoped
// if(true){
//     let f = 10
//     console.log(f)
// }
// console.log(f) //here we can not access the variable declared by let keyword inside the block, outside of the block

// //using const keyword
// //const keyword will not allowed redeclaration and reassigning and it always block scoped
// //as name says const keyword means a constant value that you defined
// //Example : 5
// const g = 100
// g = 110     //This will be reslt in an eror
// console.log(g)