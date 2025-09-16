const words = {
  A: { 
    images: ["pics/applecard.png", "pics/antcard.png", "pics/arrowcard.png"], 
    audio: ["words-sounds/apple.wav", "words-sounds/ant.wav"] 
  },
  B: { 
    images: ["pics/bananacard.png", "pics/bookcard.png"], 
    audio: ["words-sounds/banana.wav", "words-sounds/book.wav"] 
  },
  C: { 
    images: ["pics/candycard.png", "pics/cupcard.png"], 
    audio: ["words-sounds/candy.wav", "words-sounds/cup.wav"] 
  }
};

let currentLetter = null;

const card = document.querySelector(".card");
const frontImg = document.getElementById("card-front-img");

document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    const letter = key.dataset.letter;
    const letterData = words[letter];

    if (!letterData) return;

    // pick random index
    const randomIndex = Math.floor(Math.random() * letterData.images.length);

    // set image
    frontImg.src = letterData.images[randomIndex];

    // flip card if not already flipped
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
    }

    // try to play matching audio if exists
    const audioFile = letterData.audio[randomIndex];
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play();
    }
  });
});