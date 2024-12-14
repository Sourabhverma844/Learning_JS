//Why we need let and const keyword 
// Because Here is some problem with var keyword

//Example-1
var a = 21
console.log(a)

//Example-2 (1st issue with var keyword)
var b = 10
var b = 20
console.log(b) //in other language like java and c++ this is not actually allowed there , because here we redeclare the varaible b 
               //and we can not have 2 variables with same name and diffrent value

//Example-3 (2nd issue with this var keyword)
var c = 35
if(c===35){
    var d = 40
    console.log(d)  // here is also a problem kyoki ham kis block ke ander bne variable ko block ke bahr acess nahi kar sakte
}
console.log(d)     // but is case me hum kar pa rahe he , that is also a big security issue this issue is known as "Scopeing issue"
// here in this examp we can use var d outside the block because it is not block scoped

//Example-4 variable declared by var keyword are not block scoped they are function scoped
function test(){
    var e = 100
    console.log(e)
}
test()
console.log(e)
// here we cant acess the variable e because it is declared under he function test() an we are try to acess it outside the function
// but we want block scoped variable for better security.

