function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mult(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}     //now in our main file if we want to use this code we can simply make it a module
      //under the module we will have to pass the all function as value in a diffrent key
module.exports = {
    addition : add,
    substraction : sub,
    multiplication : mult,
    division : divide
}
