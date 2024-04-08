// Get references to DOM elements
const navId = document.getElementById("nav_menu");
const ToggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("close_btn");

// Show menu function
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// Hide menu function
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// Initialize Animate on Scroll library
AOS.init();

// GSAP Animations
// Logo animation
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// Navigation menu items animation
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

// Toggle button animation
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

// Main heading animation
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// Info text animation
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// Call-to-action buttons animation
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// Team image animation
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
