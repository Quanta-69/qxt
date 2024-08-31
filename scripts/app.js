let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
    }


// RESPONSIVE NAVBAR
let navbar = document.querySelector(".navbar");
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
} 

// sidebar submenu open close js code
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let supportArrow = document.querySelector(".support-arrow");
supportArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let serviceArrow = document.querySelector(".service-arrow");
serviceArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}

//OBSERVER FOR NAV ANIMATION
document.addEventListener("DOMContentLoaded", function() {
  // Select all main sections and sections with the class 'sub-section'
  const sections = document.querySelectorAll(".main-section, section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
          
          if (entry.isIntersecting) {
              navLinks.forEach(link => link.classList.remove("active-slide"));
              if (navLink) {
                  navLink.classList.add("active-slide");
              }
          }
      });
  }, options);// END

  sections.forEach(section => observer.observe(section));
});

//Animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show')
      } else{
          entry.target.classList.remove('show')
      }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// TYPEWRITER FOR HOME PAGE
const texts = ["Crafted By Hand.","Crafted For Success.", "For Your Business.", "Designed For You.", "In Every Detail."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0; // Reset count if at the end of texts array
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => type(), 1500); // Wait before erasing
    } else {
        setTimeout(() => type(), 100); // Typing speed
    }
})(); //END


// PRODUCTS SECTION
// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .template");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
