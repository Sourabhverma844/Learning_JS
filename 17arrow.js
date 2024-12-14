let test1 = function(){
    console.log(1)
}

let test2 = function(a){
    console.log(a*2)
}

let test3 = function(a,b){
    console.log(a+b)
}
test1()
test2(2)
test3(3,4)

//Now We Can Write The Same Code Using Arrow Function (=> Also Called FatArrowFunction)

let test4 = ()=>{
    console.log(1)
}

let test5 = a=>{   //we can also remove bracket here and can write it without bracket
    console.log(a*2)
}

let test6 = (a,b)=>{  
    console.log(a+b)
}
test4()
test5(5)
test6(10,5)
