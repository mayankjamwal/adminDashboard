console.log("Running....");

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});

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