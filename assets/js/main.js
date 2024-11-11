$(document).ready(function () {
  // Wow Effects
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 80, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});

const wrapper = document.querySelector(".feature-grid");
const cards = document.querySelectorAll(".feature-item");

wrapper.addEventListener("mousemove", function ($event) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = $event.clientX - rect.left;
    const y = $event.clientY - rect.top;

    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
});

document.querySelector("#joinBtn").addEventListener("click", function (e) {
  document.querySelector("#emailInput").focus();
});

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollSection = document.getElementById("scroll-section");
//   const scrollingText = document.querySelector(".scrolling-text");
//   let isScrolled = false; // Prevent re-triggering

//   // Scroll event to trigger fade-in effect
//   window.addEventListener("scroll", function () {
//     const sectionTop = scrollSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     // Trigger when scroll-section comes into view
//     if (sectionTop <= windowHeight * 0.95 && !isScrolled) {
//       isScrolled = true;
//       // document.documentElement.style.overflowY = "hidden"; // Disable scrolling temporarily
//       scrollingText.style.opacity = 1; // Fade in the text

//       // Re-enable scrolling after the fade-in completes
//       setTimeout(() => {
//         // document.documentElement.style.overflowY = "auto";
//       }, 5000); // Matches the fade-in duration
//     }
//   });
// });


