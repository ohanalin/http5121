// Define variables for the infinity shape and button
let infinityShape = document.getElementById("infinity");
let animateButton = document.getElementById("animateButton");

// Add a click event listener to the button to start the animation
animateButton.addEventListener("click", () => {
  // Add the animate class to trigger scaling, rotation, and color change
  infinityShape.classList.add("animate");
});

// Transition event listeners for debugging and reset
infinityShape.addEventListener("transitionstart", function () {
  console.log("Animation STARTED");
});

infinityShape.addEventListener("transitionrun", function () {
  console.log("Animation RUNNING");
});

infinityShape.addEventListener("transitioncancel", function () {
  console.log("Animation ABORTED");
});

// Reset after the transition completes
infinityShape.addEventListener("transitionend", function () {
  console.log("Animation COMPLETED");
  // Remove the animate class to reset the shape for the next click
  infinityShape.classList.remove("animate");
});
