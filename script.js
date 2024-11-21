//your JS code here. If required.
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Get all circles by their ids
const circles = [
  document.getElementById("circle-1"),
  document.getElementById("circle-2"),
  document.getElementById("circle-3"),
  document.getElementById("circle-4"),
  document.getElementById("circle-5")
];

let currentIndex = 0;

// Function to update the buttons' state
function updateButtons() {
  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === circles.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Function to handle next button click
nextButton.addEventListener("click", () => {
  if (currentIndex < circles.length - 1) {
    circles[currentIndex].classList.remove("active");
    currentIndex++;
    circles[currentIndex].classList.add("active");
    updateButtons();
  }
});

// Function to handle previous button click
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    circles[currentIndex].classList.remove("active");
    currentIndex--;
    circles[currentIndex].classList.add("active");
    updateButtons();
  }
});

// Initialize the buttons' state and the circles
updateButtons();
