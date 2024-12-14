//function in the form of expression

var functionname = function(parameter1,parameter2){
    console.log(parameter1+' '+parameter2)
}
functionname('Hey I am Universe','I am Here To Help You')

//In this eample we dont have the name of function here functions body is assign to the var add, this type of functions are called 
//anonymous functions
var add = function(a,b){
    console.log(a+b)
}
add(5,5)
add(6,6)

//we can also return value here if we dont want to console.log
var multiplication = function(c,d){
    return c*d
}
let res = multiplication(5,5) // when we return a value we have to catch it in an other variable
console.log(res);

// Other Type of Example is in which me are gonna pass variable in another varaible
var substraction = function(e,f){
    return e-f
}
var ans = substraction
var final = ans(5,5)
console.log(final)
