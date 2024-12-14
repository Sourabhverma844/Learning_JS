//The destructuring assignment syntax is a JavaScript Expression That Makes it Possible to Unpack values From arrays, or properties from objects, into distinct variables.
 
//here is what we dp generally or simply when we try to acess any element from an array list
let arr = ['Universe','Is','There','To','Help','Me']
let a = arr[4]
let b = arr[5]
let c = arr[0]
console.log(a)
console.log(b)
console.log(c)


let [d,e,f,g,h,i,j] = arr  // here we give all variable as a list then array give them value sequentialy thats how destructuring work
console.log(arr)
console.log(j)