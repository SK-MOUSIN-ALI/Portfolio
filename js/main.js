

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})
// Typing Animation
var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Graphic Designer"],
    typeSpeed: 150,
    backkSpeed: 1000,
    loop:true
  })


// /Gsap animation
gsap.from(".brand, .nav-link", {
  x: "-30px",
  opacity: "0",
  ease: "power-1 ",
  stagger:0.2

})

gsap.from(".greet, h1, .desc, .cv ",  {
  y: 50,
  opacity: 0,
  ease: "power2",
  delay: 1.5,
  stagger:0.2
})
gsap.from(" .social-links>a ",  {
  y: 50,
  opacity: 0,
  ease: "slow",
  delay: 2.2,
  stagger:0.3
})

gsap.from(".box", {
  transform:"scale(0)",
  opacity: 0,
  ease: "power-1 ",
  delay: 2.95,
  stagger:0.3

})
  




