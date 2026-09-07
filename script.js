// Audio references
const shuffleSound = new Audio('shuffle.mp3');
const beepSound = new Audio('beep.mp3');
shuffleSound.loop = true;

// Database for 8 genres with detailed movie metadata
const moviesDatabase = {
  action: [
    { title: "Mad Max: Fury Road", year: 2015, rating: "8.1/10", platform: "Max / Prime Video", plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners and a drifter named Max." },
    { title: "Jawan", year: 2023, rating: "7.0/10", platform: "Netflix", plot: "A high-octane action thriller highlighting a man's emotional journey to rectify the wrongs in society and settle personal scores." },
    { title: "The Dark Knight", year: 2008, rating: "9.0/10", platform: "Max", plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
    { title: "Pathaan", year: 2023, rating: "5.9/10", platform: "Prime Video", plot: "An Indian agent races against time to stop a rogue mercenary group from unleashing a deadly viral attack on India." },
    { title: "John Wick", year: 2014, rating: "7.4/10", platform: "Peacock / Prime Video", plot: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him." },
    { title: "RRR", year: 2021, rating: "7.8/10", platform: "Netflix", plot: "A fearless revolutionary and an officer in the British force form a friendship prior to discovering each other's true identities." }
  ],
  comedy: [
    { title: "3 Idiots", year: 2009, rating: "8.4/10", platform: "Prime Video", plot: "Two friends search for their long-lost companion while recalling their college days and the eccentric friend who inspired them to think differently." },
    { title: "The Hangover", year: 2009, rating: "7.7/10", platform: "Hulu / Prime Video", plot: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing." },
    { title: "Hera Pheri", year: 2000, rating: "8.1/10", platform: "Prime Video / YouTube", plot: "Three jobless men find an answer to all their financial problems when they receive a wrong number call from a kidnapper." },
    { title: "Superbad", year: 2007, rating: "7.6/10", platform: "Netflix", plot: "Two co-dependent high school seniors deal with separation anxiety after their plan to stage a booze-soaked party goes awry." },
    { title: "Stree", year: 2018, rating: "7.5/10", platform: "Disney+ Hotstar / Netflix", plot: "In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men in the night during festival season." }
  ],
  crime: [
    { title: "Gangs of Wasseypur", year: 2012, rating: "8.2/10", platform: "Netflix", plot: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, igniting a deadly blood feud spanning three generations." },
    { title: "Pulp Fiction", year: 1994, rating: "8.9/10", platform: "Paramount+ / Prime Video", plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
    { title: "Drishyam", year: 2015, rating: "8.2/10", platform: "Disney+ Hotstar / Prime Video", plot: "Desperate measures are taken by a man who tries to save his family from the dark side of the law after they commit an unexpected crime." },
    { title: "The Godfather", year: 1972, rating: "9.2/10", platform: "Paramount+", plot: "The aging patriarch of an organized crime dynasty in New York City transfers control of his clandestine empire to his reluctant youngest son." }
  ],
  drama: [
    { title: "Dangal", year: 2016, rating: "8.3/10", platform: "Apple TV / Prime Video", plot: "Former wrestler Mahavir Singh Phogat trains his young daughters Geeta and Babita to become world-class wrestlers against all social odds." },
    { title: "The Shawshank Redemption", year: 1994, rating: "9.3/10", platform: "Max", plot: "Over the course of several years, two convicts form a friendship, seeking solace and eventual redemption through basic compassion." },
    { title: "Taare Zameen Par", year: 2007, rating: "8.3/10", platform: "Netflix", plot: "An 8-year-old boy with dyslexia is thought to be a lazy trouble-maker until the new art teacher has the patience and compassion to discover the real problem behind his struggles." },
    { title: "Oppenheimer", year: 2023, rating: "8.9/10", platform: "Peacock / Prime Video", plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II." }
  ],
  horror: [
    { title: "Tumbbad", year: 2018, rating: "8.2/10", platform: "Prime Video", plot: "A mythological story about a goddess who created the universe and her firstborn demon Hastar, whose greed leads to tragic consequences across generations." },
    { title: "The Conjuring", year: 2013, rating: "7.5/10", platform: "Max", plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." },
    { title: "Bhool Bhulaiyaa", year: 2007, rating: "7.4/10", platform: "Netflix / Prime Video", plot: "An NRI and his wife decide to stay in his ancestral home, ignoring warnings about a haunted ghost locked in a hidden tower." },
    { title: "Get Out", year: 2017, rating: "7.7/10", platform: "Peacock", plot: "A young African-American visits his white girlfriend's parents for the weekend, where his uneasiness about their reception reaches a boiling point." }
  ],
  romcom: [
    { title: "Jab We Met", year: 2007, rating: "7.9/10", platform: "Prime Video / Netflix", plot: "A depressed businessman finds a new outlook on life after meeting a talkative, free-spirited Punjabi girl on an overnight train." },
    { title: "10 Things I Hate About You", year: 1999, rating: "7.3/10", platform: "Disney+", plot: "A pretty, popular teenager can't go out on a date until her abrasive, older, romance-averse sister gets a boyfriend." },
    { title: "Yeh Jawaani Hai Deewani", year: 2013, rating: "7.2/10", platform: "Netflix", plot: "Kabir and Naina meet during a trekking trip and fall in love, but their paths diverge until they reconnect years later at a friend's wedding." },
    { title: "Crazy Rich Asians", year: 2018, rating: "6.9/10", platform: "Max", plot: "A native New Yorker accompanies her longtime boyfriend to his best friend's wedding in Singapore, discovering he belongs to an extremely wealthy family." }
  ],
  scifi: [
    { title: "Interstellar", year: 2014, rating: "8.7/10", platform: "Paramount+ / Prime Video", plot: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space to ensure humanity's survival." },
    { title: "PK", year: 2014, rating: "8.1/10", platform: "Netflix / SonyLIV", plot: "An alien stranded on Earth loses his communication device and questions dogma and blind superstition through his innocent observations." },
    { title: "Inception", year: 2010, rating: "8.8/10", platform: "Max / Prime Video", plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." },
    { title: "Krrish", year: 2006, rating: "6.5/10", platform: "SonyLIV", plot: "A young man with inherited superhuman abilities falls in love and travels to Singapore, where he conceals his identity to save the world." }
  ],
  thriller: [
    { title: "Andhadhun", year: 2018, rating: "8.2/10", platform: "Netflix", plot: "A series of mysterious events changes the life of a blind pianist, who must report a crime that he technically should not have seen." },
    { title: "Se7en", year: 1995, rating: "8.6/10", platform: "Max", plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives." },
    { title: "Kahaani", year: 2012, rating: "8.1/10", platform: "Prime Video", plot: "A pregnant woman's search for her missing husband in Kolkata leads her into a complex web of deceit and government conspiracy." },
    { title: "Gone Girl", year: 2014, rating: "8.1/10", platform: "Max / Hulu", plot: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent." }
  ]
};

function pickMovie(selectedGenre) {
  const displayElement = document.getElementById('movie-display');
  const movieList = moviesDatabase[selectedGenre];

  if (!movieList) return;

  // Play shuffle sound
  shuffleSound.currentTime = 0;
  shuffleSound.play().catch(e => console.log(e));

  // Rapidly shuffle movie titles on screen for 2.5 seconds
  let counter = 0;
  const shuffleInterval = setInterval(() => {
    const tempMovie = movieList[Math.floor(Math.random() * movieList.length)];
    displayElement.innerHTML = `<div style="font-size:1.4rem;">Shuffling... 🎬 ${tempMovie.title}</div>`;
    counter++;
  }, 100);

  // Stop shuffle & render complete details after 2.5 seconds
  setTimeout(() => {
    clearInterval(shuffleInterval);
    shuffleSound.pause();
    shuffleSound.currentTime = 0;

    // Pick final random movie
    const selected = movieList[Math.floor(Math.random() * movieList.length)];

    // Play completion sound
    beepSound.currentTime = 0;
    beepSound.play().catch(e => console.log(e));

    // Render title, rating, streaming platform, and plot
    displayElement.innerHTML = `
      <div style="text-align: left; width: 100%;">
        <h2 style="color: #7dd3fc; margin-bottom: 0.5rem; font-size: 1.5rem;">🎬 ${selected.title} (${selected.year})</h2>
        <p style="margin-bottom: 0.4rem;"><strong>⭐ IMDb Rating:</strong> ${selected.rating}</p>
        <p style="margin-bottom: 0.4rem;"><strong>📺 Where to Watch:</strong> ${selected.platform}</p>
        <p style="line-height: 1.4; font-size: 0.95rem; opacity: 0.95;"><strong>📖 Plot:</strong> ${selected.plot}</p>
      </div>
    `;

    // Trigger confetti explosion
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, 2500);
}
