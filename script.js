// 1. Link the audio files you uploaded
const shuffleSound = new Audio('shuffle.mp3');
const beepSound = new Audio('beep.mp3');
shuffleSound.loop = true; // Makes the shuffling sound repeat while picking

// 2. Movie Database organized by genre
const moviesDatabase = {
  romance: ["About Time", "10 Things I Hate About You", "Pride & Prejudice", "La La Land"],
  comedy: ["Superbad", "The Hangover", "Paddington 2", "Free Guy"],
  true_crime: ["Zodiac", "Memories of Murder", "Nightcrawler", "Knives Out"],
  fantasy: ["Harry Potter", "The Lord of the Rings", "Stardust", "The Chronicles of Narnia"]
};

// 3. Main function called when a genre button is clicked
function pickMovie(selectedGenre) {
  const displayElement = document.getElementById('movie-display');
  const movieList = moviesDatabase[selectedGenre];

  // START: Play shuffle audio
  shuffleSound.currentTime = 0;
  shuffleSound.play();

  // Rapidly cycle random movie names on screen for 2.5 seconds
  let counter = 0;
  const shuffleInterval = setInterval(() => {
    const randomTempIndex = Math.floor(Math.random() * movieList.length);
    displayElement.innerText = `Shuffling... ${movieList[randomTempIndex]}`;
    counter++;
  }, 100);

  // STOP SHUFFLE & SELECT MOVIE after 2.5 seconds (2500 ms)
  setTimeout(() => {
    // Stop shuffle loop & audio
    clearInterval(shuffleInterval);
    shuffleSound.pause();
    shuffleSound.currentTime = 0;

    // Pick final random movie
    const finalMovie = movieList[Math.floor(Math.random() * movieList.length)];
    displayElement.innerText = `🎬 Your Movie: ${finalMovie}`;

    // Play beep sound
    beepSound.currentTime = 0;
    beepSound.play();

    // Trigger confetti explosion
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, 2500);
}
