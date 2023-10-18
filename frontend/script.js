// document.querySelector(".btn-collapse").addEventListener("click", function () {
//     document.querySelector(".collapse").classList.toggle("show");
// });


// const slideContainer = document.getElementById('slide-container');

// // Adjust the animation duration and timing function as needed
// slideContainer.style.animation = 'slide 40s linear infinite'; // 10s duration, linear timing function

// // To make it speed up and slow down, you can adjust the animation-timing-function like this:
// slideContainer.style.animation = 'slide 25s ease-in-out infinite'; // Speeds up at the beginning and slows down at the end


// const slideContainer = document.getElementById('slide-container');

// function restartAnimation() {
//     slideContainer.style.animation = 'none';
//     void slideContainer.offsetWidth; // Trigger reflow
//     slideContainer.style.animation = 'slide 10s ease-in-out infinite'; // Adjust the duration and timing function as needed
// }

// slideContainer.addEventListener('animationiteration', restartAnimation);

// restartAnimation(); // Start the animation

const slideContainer = document.getElementById('slide-container');

function restartAnimation() {
    slideContainer.style.animation = 'none';
    void slideContainer.offsetWidth; // Trigger reflow
    slideContainer.style.animation = 'slide 30s linear infinite'; // Adjust the duration and timing function as needed
    slideContainer.style.animation = 'slide 25s ease-in-out infinite';
}

// Initially, set a negative delay to ensure the first slide starts immediately
slideContainer.style.animationDelay = '-10s';

slideContainer.addEventListener('animationiteration', restartAnimation);

restartAnimation(); // Start the animation

