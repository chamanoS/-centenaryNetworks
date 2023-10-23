
// const slideContainer = document.getElementById('slide-container');

// function restartAnimation() {
//     slideContainer.style.animation = 'none';
//     void slideContainer.offsetWidth; 
//     slideContainer.style.animation = 'slide 70s linear infinite'; 
//     slideContainer.style.animation = 'slide 70s ease-in-out infinite'; 
// }

// slideContainer.addEventListener('animationiteration', restartAnimation);

// restartAnimation(); 


const cardWrapper = document.querySelector(".card-wrapper");
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cardIndex = 0;
const cardWidth = cards[0].offsetWidth;

function showCards() {
    cardWrapper.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
}

function slideNext() {
    cardIndex = Math.min(cardIndex + 1, cards.length - 3);
    showCards();
}

function slidePrev() {
    cardIndex = Math.max(cardIndex - 1, 0);
    showCards();
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);

// Initialize the slide
showCards();
