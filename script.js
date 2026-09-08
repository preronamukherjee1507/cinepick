// Preload audio elements
const shuffleSound = new Audio('shuffle.mp3');
const beepSound = new Audio('beep.mp3');

// 50 Movies Per Genre (Hollywood + Bollywood mix)
const movieData = {
  action: [
    "Mad Max: Fury Road", "Die Hard", "The Dark Knight", "John Wick", "Gladiator",
    "Terminator 2: Judgment Day", "Aliens", "Matrix", "Raiders of the Lost Ark", "Top Gun: Maverick",
    "Avengers: Endgame", "Spider-Man: Into the Spider-Verse", "Casino Royale", "Mission: Impossible - Fallout", "Speed",
    "Logan", "Kill Bill: Vol. 1", "Dhoom 2", "Sholay", "War",
    "Pathaan", "Jawan", "Gangs of Wasseypur", "RRR", "KGF: Chapter 1", "KGF: Chapter 2",
    "Don 2", "Agneepath", "Singham", "Uri: The Surgical Strike", "Vikram",
    "The Raid: Redemption", "Baby Driver", "Bourne Ultimatum", "The Dark Knight Rises", "Avengers: Infinity War",
    "Skyfall", "Captain America: The Winter Soldier", "Inception", "Ip Man", "Hard Core Henry",
    "Edge of Tomorrow", "Guardians of the Galaxy", "District 9", "Predator", "First Blood",
    "RoboCop", "Face/Off", "Con Air", "The Rock"
  ],
  comedy: [
    "Superbad", "The Hangover", "Step Brothers", "Mean Girls", "Anchorman",
    "Groundhog Day", "Monty Python and the Holy Grail", "Dumb and Dumber", "Shaun of the Dead", "Tropic Thunder",
    "Bridesmaids", "21 Jump Street", "Ferris Bueller's Day Off", "The Big Lebowski", "Airplane!",
    "Hera Pheri", "Phir Hera Pheri", "3 Idiots", "Chup Chup Ke", "Bhool Bhulaiyaa",
    "Welcome", "Dhamaal", "Golmaal: Fun Unlimited", "Munna Bhai M.B.B.S.", "Lage Raho Munna Bhai",
    "Stree", "Fukrey", "Delhi Belly", "Bala", "Bareilly Ki Barfi",
    "Dolly Ke Doli", "Badhaai Ho", "Vicky Donor", "Piku", "Khosla Ka Ghosla",
    "Hot Fuzz", "Zoolander", "Borat", "Clerks", "Office Space",
    "Game Night", "Booksmart", "The Nice Guys", "What We Do in the Shadows", "Crazy Stupid Love",
    "Easy A", "We're the Millers", "Dodgeball", "Meet the Parents", "School of Rock"
  ],
  crime: [
    "The Godfather", "The Godfather Part II", "Pulp Fiction", "Goodfellas", "Se7en",
    "The Departed", "The Silence of the Lambs", "Usual Suspects", "City of God", "Reservoir Dogs",
    "Heat", "Scarface", "Snatch", "L.A. Confidential", "Zodiac",
    "Gangs of Wasseypur", "Drishyam", "Sacred Games", "Special 26", "Andhadhun",
    "Talvar", "Kahaani", "Badlapur", "Raman Raghav 2.0", "Article 15",
    "Shootout at Lokhandwala", "Once Upon a Time in Mumbaai", "Raees", "Gully Boy", "Gulaal",
    "Shaitan", "Black Friday", "Dev.D", "Company", "Omkara",
    "Casino", "No Country for Old Men", "Primal Fear", "Nightcrawler", "Prisoners",
    "Memories of Murder", "Sicario", "The Irishmen", "American Gangster", "Road to Perdition",
    "Fargo", "The Untouchables", "Training Day", "Donie Brasco", "Drive"
  ],
  drama: [
    "The Shawshank Redemption", "Fight Club", "Forrest Gump", "Whiplash", "12 Angry Men",
    "Schindler's List", "One Flew Over the Cuckoo's Nest", "Good Will Hunting", "The Social Network", "Parasite",
    "Dead Poets Society", "The Prestige", "Requiem for a Dream", "A Beautiful Mind", "Whiplash",
    "Swades", "Taare Zameen Par", "Udaan", "Massoom", "Anand",
    "Gully Boy", "Barfi!", "The Lunchbox", "Bhaag Milkha Bhaag", "Dangal", "October",
    "Sardar Udham", "Lagaan", "Article 15", "Masaan", "Haider",
    "Rockstar", "Tamasha", "Wake Up Sid", "Zindagi Na Milegi Dobara", "Dil Chahta Hai",
    "Green Book", "La La Land", "Marriage Story", "The Truman Show", "Room",
    "Spotlight", "Cast Away", "Before Sunrise", "The Grand Budapest Hotel", "The Revenant",
    "Sound of Metal", "Manchester by the Sea", "Birdman", "The Pianist"
  ],
  horror: [
    "The Conjuring", "Get Out", "Hereditary", "A Quiet Place", "The Exorcist",
    "The Shining", "Halloween", "Alien", "The Thing", "It", "Ring", "Insidious",
    "Paranormal Activity", "The Texas Chain Saw Massacre", "Psycho", "Midsommar",
    "Tumbbad", "Stree", "Bhool Bhulaiyaa", "13B", "Raaz",
    "1920", "Pari", "Bhoot", "Darna Mana Hai", "Ek Thi Daayan",
    "Chhorii", "Pizza", "Ragini MMS", "Ghoul", "Kanchana",
    "Sinister", "Cabin in the Woods", "Scream", "The Babadook", "The Witch",
    "The Blair Witch Project", "Evil Dead Rise", "Talk to Me", "Barbarian", "Smile",
    "Us", "Rec", "28 Days Later", "Dawn of the Dead", "Saw",
    "Conjuring 2", "Lights Out", "Annabelle: Creation", "Don't Breathe"
  ],
  romcom: [
    "When Harry Met Sally", "10 Things I Hate About You", "Crazy Rich Asians", "The Proposal", "Notting Hill",
    "500 Days of Summer", "About Time", "Clueless", "Pretty Woman", "How to Lose a Guy in 10 Days",
    "To All the Boys I've Loved Before", "Crazy Stupid Love", "Set It Up", "Love Actually", "Always Be My Maybe",
    "Jab We Met", "Yeh Jawaani Hai Deewani", "DDLJ", "Cocktail", "Jaane Tu... Ya Jaane Na",
    "Band Baaja Baaraat", "Hum Tum", "Bareilly Ki Barfi", "Hasee Toh Phasee", "Sonu Ke Titu Ki Sweety",
    "Main Tera Hero", "Badrinath Ki Dulhania", "Tanu Weds Manu", "2 States", "Ajab Prem Ki Ghazab Kahani",
    "Socha Na Tha", "Love Aaj Kal", "Shuddh Desi Romance", "Namastey London", "Kal Ho Naa Ho",
    "13 Going on 30", "She's the Man", "My Best Friend's Wedding", "Silver Linings Playbook", "Palm Springs",
    "The Holiday", " Bridget Jones's Diary", "You've Got Mail", "Sleeping With Other People", "Warm Bodies",
    "Roxanne", "Four Weddings and a Funeral", "Forgetting Sarah Marshall", "Midnight in Paris", "Sleepless in Seattle"
  ],
  scifi: [
    "Interstellar", "Inception", "The Matrix", "Blade Runner 2049", "Arrival",
    "2001: A Space Odyssey", "Jurassic Park", "Star Wars: A New Hope", "Terminator", "Back to the Future",
    "Eternal Sunshine of the Spotless Mind", "Ex Machina", "Alien", "Dune", "Avatar",
    "Koi... Mil Gaya", "Krrish", "Ra.One", "PK", "2.0",
    "Robot (Enthiran)", "Cargo", "Cargo", "Subedar Joginder Singh", "Shivam",
    "The Wandering Earth", "Space Sweepers", "Snowpiercer", "Edge of Tomorrow", "Looper",
    "Tenet", "Gravity", "District 9", "Minority Report", "The Martian", "Signs",
    "Her", "Coherence", "Source Code", "Annihilation", "Dark City",
    "Children of Men", "Oblivion", "Contact", "Tron: Legacy", "War of the Worlds",
    "Star Trek", "Everything Everywhere All at Once", "Close Encounters of the Third Kind", "V for Vendetta"
  ],
  thriller: [
    "Gone Girl", "Prisoners", "Shutter Island", "The Silence of the Lambs", "Se7en",
    "Zodiac", "Black Swan", "The Prestige", "The Sixth Sense", "Memento",
    "Oldboy", "Rear Window", "Knives Out", "Parasite", "Get Out",
    "Kahaani", "Andhadhun", "Drishyam", "Talaash", "Race",
    "Gupt", "Ek Hasina Thi", "Badla", "Hate Story", "Darr", "Baazigar",
    "Table No. 21", "A Wednesday!", "Kartik Calling Kartik", "NH10", "Manorama Six Feet Under",
    "Ugly", "404: Error Not Found", "Ratsasan", "Drishyam 2", "Game Over",
    "Uncut Gems", "Nightcrawler", "Sicario", "The Game", "Misery",
    "A Quiet Place", "Ex Machina", "Coherence", "Don't Breathe", "Run",
    "Searching", "Missing", "The Invisible Man", "Identity"
  ]
};

function pickMovie(genre) {
  const display = document.getElementById('movie-display');
  const movies = movieData[genre];

  if (!movies || movies.length === 0) return;

  // 1. Play Shuffle Sound
  shuffleSound.currentTime = 0;
  shuffleSound.play().catch(err => console.log("Audio play allowed after click:", err));

  let counter = 0;
  const maxShuffles = 18;
  
  // 2. Rapidly cycle through random titles
  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    display.innerHTML = `<h2 style="font-size: 1.8rem; color: #93c5fd; transition: all 0.1s ease;">${movies[randomIndex]}</h2>`;
    counter++;

    if (counter >= maxShuffles) {
      clearInterval(interval);
      
      // Final Pick
      const finalPick = movies[Math.floor(Math.random() * movies.length)];
      display.innerHTML = `
        <div style="animation: popIn 0.3s ease;">
          <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: #38bdf8; font-weight: bold;">Your CinePick</span>
          <h2 style="font-size: 2.2rem; margin-top: 8px; color: #ffffff; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);">${finalPick}</h2>
        </div>
      `;

      // 3. Play Beep Sound
      beepSound.currentTime = 0;
      beepSound.play().catch(err => console.log("Beep error:", err));

      // 4. Trigger Canvas Confetti
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  }, 90);
}
