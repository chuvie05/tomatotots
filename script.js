const words = {
  A: { images: ["pics/applecard.png", "pics/antcard.png", "pics/arrowcard.png"], audio: ["words-sounds/apple.wav"] },
  B: { images: ["pics/bananacard.png", "pics/bookcard.png"], audio: ["words-sounds/banana.wav"] },
  C: { images: ["pics/candycard.png", "pics/cupcard.png"], audio: ["words-sounds/candy.wav"] }
};

let currentLetter = null;
let currentIndex = 0;

const card = document.querySelector(".card");
const frontImg = document.getElementById("card-front-img");

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    const letter = key.dataset.letter;

    if (currentLetter !== letter) {
      currentLetter = letter;
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex + 1) % words[letter].images.length;
    }

    frontImg.src = words[letter].images[currentIndex];

    // Only flip once
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
    }

    if (words[letter].audio.length > 0) {
      const audio = new Audio(words[letter].audio[0]);
      audio.play();
    }
  });
});