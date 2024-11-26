document.addEventListener("DOMContentLoaded", function () {
  const ball = document.getElementById("ball");
  const button = document.querySelector("button");
  const stage = document.getElementById("stage");

  // Initial play state
  let isPaused = false;

  // Toggle play/pause on button click
  button.addEventListener("click", function () {
    isPaused = !isPaused; // Toggle the state
    const playState = isPaused ? "paused" : "running"; // Determine animation state

    // Update animations
    stage.style.animationPlayState = playState;
    ball.style.animationPlayState = playState;

 
  });

  // Add event listeners for the ball animation
  ball.addEventListener("animationstart", function () {
    console.log("Animation started");
  });
  ball.addEventListener("animationiteration", function () {
    console.log("Animation looped");
  });
  ball.addEventListener("animationend", function () {
    console.log("Animation ended");
  });
});
