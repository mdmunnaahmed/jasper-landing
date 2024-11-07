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

document.addEventListener("DOMContentLoaded", function () {
  const scrollSection = document.getElementById("scroll-section");
  const scrollingText = document.querySelector(".scrolling-text");
  let isScrolled = false; // Prevent re-triggering

  // Typing effect function
  function typeText(element, text, delay = 100) {
    element.textContent = ''; // Clear initial content
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else {
        // Allow scrolling again after 1 second when typing finishes
        setTimeout(() => {
          document.documentElement.style.overflowY = "auto";
        }, 1000);
      }
    }
    type();
  }

  // Scroll event to trigger typing effect
  window.addEventListener("scroll", function () {
    const sectionTop = scrollSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger when scroll-section comes into view
    if (sectionTop <= windowHeight * .95 && !isScrolled) {
      isScrolled = true;
      document.documentElement.style.overflowY = "hidden"; // Disable scrolling
      scrollingText.style.opacity = 1; // Show the text container
      typeText(scrollingText, scrollingText.dataset.text, 50); // Start typing with 50ms delay between letters
    }
  });
});

