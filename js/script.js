console.log("Running....");

const hamburger =   document.querySelector('.hamburger');
const navbarList = document.querySelector('.navbar-list');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarList.classList.toggle("active"); 
});

document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navbarList.classList.remove("active");
}))

// $(document).ready(function(){
//     $(window).scroll(function(){
//         let scroll = $(window).scrollTop();
//         console.log(scroll);
//         if (scroll > 200) {
//           $(".nav-head").css("opacity","0.9");
//         }
  
//         else{
//             $(".nav-head").css("opacity","1");  	
//         }
//     })
//   })