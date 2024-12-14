// Arrays provides you an ordered collection of data 

var id = [1, 'sourabh' ,true, 18]
console.log(id)

// accesing the element from this array
var a = id[1]
console.log(a)
console.log(id[1])

//we can also replace elemnets from this array

id[1] = 'ANIKET'
console.log(id)

//To Check The Length of an array we use arr.length method
console.log('the length of the array is',id.length)

// some methods of array

// pop method (it removes last element from the arry we do not have to pass anything under ())
id.pop()
console.log('Poped array',id)

//push method (it will add an element to the lst , here we have to pass the value that we want to add under ())
id.push(20)
console.log('Pushed array',id)

//shift method (it will remove the first element from an array)
a = id.shift()
console.log('removed element',a)
console.log('shifted array',id)

//unshift method (it will add an element in front side of an array )
d = id.unshift(1)
console.log('unshifted element',d) //here it will print the new length after adding an array
console.log('unshifted array',id)
