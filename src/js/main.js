
// window.addEventListener("load", function(){
//     console.log("Desde window y load");
//     console.log(document.querySelector(".header_list"));
// });

// console.log(document.querySelector("h1"));

// document.addEventListener("DOMContentLoaded", function(){
//     console.log("Desde document y DOMContentLoaded");
//     console.log(document.querySelector("h1"));
// });


// function showClick(){
//     const h1=document.querySelector("h1")

//     let i=1;

//     h1.addEventListener("click", function(){
//         console.log(`El usuario hizo ${i++} clicks`);
//     })
// }

// showClick();


function showMenu(){
    const btn=document.querySelector(".header_btn");
    const list=document.querySelector(".header_list");
     btn.addEventListener("click", function(){
         list.classList.toggle("active");
     });
     list.addEventListener("click", function(){
          list.classList.remove("active");
     });
}
showMenu();







