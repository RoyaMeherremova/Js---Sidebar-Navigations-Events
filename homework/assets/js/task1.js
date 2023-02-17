"use strict";

let input1 = document.querySelector("#header .inputs input:nth-child(1)");
let input2 = document.querySelector("#header .inputs input:nth-child(2)");
let sum =document.querySelector("#header .custmath button:nth-child(1)")
let minus =document.querySelector("#header .custmath button:nth-child(2)")
let multiply =document.querySelector("#header .custmath button:nth-child(3)")
let divide =document.querySelector("#header .custmath button:nth-child(4)")
let response =document.querySelector("#header .footer input")



sum.addEventListener("click",function(){

    input1=Number(input1.value)
    input2=Number(input2.value)

    response.value=input1 + input2
    
   
})



minus.addEventListener("click",function(){

 response.value=input1.value - input2.value

})

multiply.addEventListener("click",function(){

    response.value=input1.value * input2.value
    
})


divide.addEventListener("click",function(){

  if(input2.value==0){
    alert("Dont divide by zero")
    input1.value="";
    input2.value="";
  }
 
 response.value=input1.value / input2.value
    
})
   
   



