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
