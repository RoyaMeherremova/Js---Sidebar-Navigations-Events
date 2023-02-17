"use strict";


//  let btn = document.querySelector("#header button");
//  let input = document.querySelector("#header input");
//  let ul =document.querySelector("#header ul");

//  btn.addEventListener("click",function(){

      
//     if(input.value == ""){
//         alert("Dont empty")
//         return;
//     }
//     if(isNaN(input.value)){
//         alert("test");
//         input.value = "";
//         return;
//     }
    
//     ul.innerHTML="";
    
//     for(let i =1;i<=input.value;i++){       //method inputdan gelen reqem geder li yardan 
        
//         let li = document.createElement("li");
//         li.className = "list-group-item mt-2";
//         li.innerText =i;
//         ul.append(li);
//     }
//      input.value = ""


//  })
   

//create sidebar with hamburger icon

//   let sidebar = document.querySelector(".sidebar")  
//   let openIcon = document.querySelector(".sidebar .open-icon")
//   let closeIcon = document.querySelector(".sidebar .close-icon")


//   openIcon.addEventListener("click",function(){    //hamburqer icon basanda hamburqer icon silinsin ve side bar butun cixsin ortaya ve X -icon yaransin
//     sidebar.classList.remove("hide-sidebar")
//     closeIcon.classList.remove("d-none")
//     this.classList.add("d-none")
//   })

//   closeIcon.addEventListener("click",function(){    //hamburqer icon basanda hamburqer icon silinsin ve side bar butun cixsin ortaya ve X -icon yaransin
//     sidebar.classList.add("hide-sidebar")
//     openIcon.classList.remove("d-none")
//     this.classList.add("d-none")
//   })


//NAVIGATIONS -js-de html-elementlerine rahat catmaq novleri

// let h1 = document.querySelector("h1");
// let span = document.querySelector("span");

// console.log(h1.parentNode)  //parentNode- elementin parentine catmaq ucun

// h1.parentNode.parentNode.parentNode.style.backgroundColor="red"  3-cu parente catmaq ucun uzaq olana


// console.log(h1.nextElementSibling) // elementden sonraki elementi verir

// console.log(h1.nextElementSibling.firstElementChild) //elementden sonra gelen elementin icindeki birinci element

// console.log(h1.nextElementSibling.firstElementChild.innerText) //elementden sonra gelen elementin icindeki birinci elementin icindeki yazini goturur


// console.log(h1.nextElementSibling.children[1]) //bize elementden sonra gelen elementin icindeki birinci elementi bize verir

// console.log(h1.previousElementSibling)  //parentin childlari coxdusa hamsin verir birdene childisa null verir yani elementnen paralel hecne yoxdur


// console.log(span.closest(".item").children[0].innerText); //closest- elementin parentlerinin arasindan her hansi dive istesen catmaq olur

// let elems = span.closest(".item").children

// for (const item of elems) {
//    item.style.color="red"
    
// }

// let elem = document.querySelector(".apple ul li:last-child a")

// elem.parentNode.parentNode.parentNode.previousElementSibling.style.backgroundColor = "red";

// elem.closest(".apple").previousElementSibling.style.backgroundColor = "red";  //oz parentinin qonsusuna catmaq ucun

// let button = document.querySelector("button")


// button.addEventListener("click",function(){
//   this.previousElementSibling.style.backgroundColor="blue"   //butonla paralel olan elementin rengin deyismek
// })


//INPUT -EVENTILERI


// let input = document.querySelector("#blog input");

// input.addEventListener("blur",function(){   //bu eventi inputa toxunub sonra qraqa klikleyende isleyir

//  this.value = "";   //meselen bodiye klikleyende inputun valusu silinsin
// })




// input.addEventListener("focus",function(){    //bu eventi inputa basan kimi isleyir,inputa basanda nese istirsense cixsin ekrana
  
//     console.log("focus")
// })

// input.addEventListener("change",function(){    //bu eventi blur-eventesi kimidi ama ferqleri ondadiki blurda input bos olsada qraqa klikleyende isleyir ama change yalniz input valusu ici dolu olmalidi
    
//   console.log("change")
// })


// input.addEventListener("keydown",function(){   //inputa nese daxil edende her keye basanda isleyir
//     console.log("key down")

// })

// input.addEventListener("keyup",function(){   //inputa nese daxil edende her  keyden elvi cekende isleyir
//     console.log("key up")

// })


// input.addEventListener("keypress",function(event){

//     if(event.keyCode === 13){      
//         event.preventDefault();
//         document.querySelector(".test").click();
//     }
// })
// document.querySelector(".test").onclick = function(){
//     alert("trigged")
// }

