"use strict";

//create navbar with hamburger icon



  let nav = document.querySelector("#navbar .nav ")  
  let openIcon = document.querySelector("#navbar .nav .open-icon")
  let closeIcon = document.querySelector("#navbar .nav .close-icon")


  openIcon.addEventListener("click",function(){
    this.classList.add("d-none");
    closeIcon.classList.remove("d-none");
    nav.classList.remove("hide-sidebar")
  })
  closeIcon.addEventListener("click",function(){
    this.classList.add("d-none");
    openIcon.classList.remove("d-none");
    nav.classList.add("hide-sidebar")
  })