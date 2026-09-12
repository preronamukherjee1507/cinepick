// Database of 8 Genres with 50 Mixed Hollywood & Bollywood Movies Each
const movieDatabase = {
  "Rom-Com": [
    // Hollywood
    { title: "Crazy Stupid Love", industry: "Hollywood", rating: "7.4/10", watch: "Netlflix / Apple TV", desc: "A middle-aged man learns how to pick up women at bars after his wife asks for a divorce." },
    { title: "500 Days of Summer", industry: "Hollywood", rating: "7.7/10", watch: "Disney+ Hotstar", desc: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her." },
    { title: "10 Things I Hate About You", industry: "Hollywood", rating: "7.3/10", watch: "Disney+ Hotstar", desc: "A high-school student tries to land a date with a girl by hiring a bad boy to date her elder sister." },
    { title: "When Harry Met Sally", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "Harry and Sally are good friends who struggle to remain just friends as romance gets in the way." },
    { title: "Notting Hill", industry: "Hollywood", rating: "7.2/10", watch: "Netflix", desc: "The life of a simple bookshop owner changes when he meets the most famous film star in the world." },
    { title: "About Time", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "At 21, Tim discovers he can travel in time and decides to make his world better by getting a girlfriend." },
    { title: "To All the Boys I've Loved Before", industry: "Hollywood", rating: "7.0/10", watch: "Netflix", desc: "A teenage girl's secret love letters are exposed, wreaking havoc on her love life." },
    { title: "Palm Springs", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "Stuck in a time loop at a wedding, two guests form a budding romance while living the same day over." },
    { title: "Set It Up", industry: "Hollywood", rating: "6.5/10", watch: "Netflix", desc: "Two overworked assistants team up to trick their bosses into falling in love with each other." },
    { title: "Always Be My Maybe", industry: "Hollywood", rating: "6.8/10", watch: "Netflix", desc: "Childhood sweethearts reconnect 15 years later and discover their old spark is still alive." },
    { title: "Crazy Rich Asians", industry: "Hollywood", rating: "6.9/10", watch: "JioCinema", desc: "A native New Yorker travels to Singapore to meet her boyfriend's wealthy family." },
    { title: "Proposal", industry: "Hollywood", rating: "6.7/10", watch: "Disney+ Hotstar", desc: "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S." },
    { title: "Pretty Woman", industry: "Hollywood", rating: "7.1/10", watch: "Disney+ Hotstar", desc: "A businessman in need of an escort for several functions hires a prostitute, only to fall in love." },
    { title: "Clueless", industry: "Hollywood", rating: "6.9/10", watch: "Paramount+", desc: "A rich high school student tries to boost a new student's popularity, but stumbles along the way." },
    { title: "The Holiday", industry: "Hollywood", rating: "6.9/10", watch: "Netflix", desc: "Two women troubled with guy-problems swap homes in each other's countries and meet local guys." },
    { title: "Love Actually", industry: "Hollywood", rating: "7.6/10", watch: "Prime Video", desc: "Follows the lives of eight very different couples dealing with love in various interrelated tales." },
    { title: "You've Got Mail", industry: "Hollywood", rating: "6.7/10", watch: "Prime Video", desc: "Rival bookstore owners clash in person while unknowingly falling in love online." },
    { title: "Just Go with It", industry: "Hollywood", rating: "6.4/10", watch: "Netflix", desc: "A plastic surgeon convinces his assistant to pose as his soon-to-be-divorced wife to cover up a lie." },
    { title: "How to Lose a Guy in 10 Days", industry: "Hollywood", rating: "6.5/10", watch: "Paramount+", desc: "A woman writing an article on how to lose a guy meets a man who bets he can make any woman fall in love." },
    { title: "The Ugly Truth", industry: "Hollywood", rating: "6.4/10", watch: "Netflix", desc: "A morning show producer is forced to work with a chauvinistic relationship expert." },
    { title: "Bridget Jones's Diary", industry: "Hollywood", rating: "6.8/10", watch: "Prime Video", desc: "A British woman keeps a personal diary recording her daily struggles with love and career." },
    { title: "She's the Man", industry: "Hollywood", rating: "6.4/10", watch: "Prime Video", desc: "A teenage girl disguises herself as her twin brother to play on a high school soccer team." },
    { title: "Friends with Benefits", industry: "Hollywood", rating: "6.5/10", watch: "Netflix", desc: "Two friends try to add casual physical intimacy to their relationship without getting emotional." },
    { title: "No Strings Attached", industry: "Hollywood", rating: "6.2/10", watch: "Netflix", desc: "A guy and a girl try to keep their relationship strictly physical, but romance complicates things." },
    { title: "Warm Bodies", industry: "Hollywood", rating: "6.7/10", watch: "Prime Video", desc: "A zombie falls in love with the girlfriend of one of his victims, slowly humanizing him again." },

    // Bollywood
    { title: "Jab We Met", industry: "Bollywood", rating: "7.9/10", watch: "Netflix / Prime Video", desc: "A depressed businessman finds his life transformed after meeting a high-spirited Punjabi girl on a train." },
    { title: "Yeh Jawaani Hai Deewani", industry: "Bollywood", rating: "7.2/10", watch: "Netflix", desc: "Bunny and Naina discover love, friendship, and self-discovery across trips and weddings." },
    { title: "Bareilly Ki Barfi", industry: "Bollywood", rating: "7.5/10", watch: "Netflix", desc: "A young woman in a small town searches for the author of a book that changed her outlook on life." },
    { title: "Band Baaja Baaraat", industry: "Bollywood", rating: "7.2/10", watch: "Prime Video", desc: "Two ambitious college grads set up a wedding planning business in Delhi and clash when love gets involved." },
    { title: "Jaane Tu... Ya Jaane Na", industry: "Bollywood", rating: "7.4/10", watch: "Netflix", desc: "Two best friends are convinced they aren't meant for each other, until they try dating other people." },
    { title: "Hum Tum", industry: "Bollywood", rating: "7.0/10", watch: "Prime Video", desc: "Two people meet at various points in their lives and gradually evolve from enemies to lovers." },
    { title: "Break Ke Baad", industry: "Bollywood", rating: "6.0/10", watch: "Disney+ Hotstar", desc: "A young couple takes a temporary break from their long-term relationship to find themselves." },
    { title: "Hasee Toh Phasee", industry: "Bollywood", rating: "6.8/10", watch: "Netflix", desc: "A quirky scientist meets a struggling businessman on the eve of his wedding to her sister." },
    { title: "Shuddh Desi Romance", industry: "Bollywood", rating: "5.8/10", watch: "Prime Video", desc: "Three youngsters navigate commitment phobia and non-traditional relationships in modern India." },
    { title: "Socha Na Tha", industry: "Bollywood", rating: "7.4/10", watch: "YouTube / Zee5", desc: "Two youth refuse an arranged marriage set up by parents, only to form a close friendship." },
    { title: "Cocktail", industry: "Bollywood", rating: "6.3/10", watch: "Eros Now / Prime Video", desc: "A love triangle causes chaos in the lives of three close friends living in London." },
    { title: "Vicky Donor", industry: "Bollywood", rating: "7.8/10", watch: "Eros Now", desc: "A carefree boy becomes a sperm donor for a fertility clinic and faces complications in his married life." },
    { title: "Badrinath Ki Dulhania", industry: "Bollywood", rating: "6.1/10", watch: "Prime Video", desc: "An ambitious girl fights for her independence against an overly traditional suitor." },
    { title: "Khoobsurat", industry: "Bollywood", rating: "6.4/10", watch: "Netflix", desc: "A quirky physiotherapist visits a royal family and falls for a reserved prince." },
    { title: "Sonu Ke Titu Sweety", industry: "Bollywood", rating: "7.1/10", watch: "Prime Video", desc: "A protective best friend tries to expose the seemingly perfect bride of his brotherly friend." },
    { title: "Manmarziyaan", industry: "Bollywood", rating: "6.9/10", watch: "Eros Now / Prime Video", desc: "A tempestuous love triangle unfolds in Amritsar between a free spirit, a rebel, and a settled suitor." },
    { title: "Tanu Weds Manu", industry: "Bollywood", rating: "7.0/10", watch: "Netflix", desc: "A doctor from London falls for a rebellious small-town girl who doesn't want to get married." },
    { title: "Tanu Weds Manu Returns", industry: "Bollywood", rating: "7.6/10", watch: "Eros Now", desc: "A troubled marriage gets even more complex when the husband falls for a athlete lookalike." },
    { title: "Zara Hatke Zara Bachke", industry: "Bollywood", rating: "6.5/10", watch: "JioCinema", desc: "A married couple pretends to seek a divorce to qualify for a government housing scheme." },
    { title: "Tu Jhoothi Main Makkaar", industry: "Bollywood", rating: "6.0/10", watch: "Netflix", desc: "A break-up consultant falls for a fiercely independent woman, unaware she's hiring him." },
    { title: "Satyaprem Ki Katha", industry: "Bollywood", rating: "7.2/10", watch: "Prime Video", desc: "A hopeful romantic marries a girl carrying past trauma and supports her journey." },
    { title: "Luka Chuppi", industry: "Bollywood", rating: "6.3/10", watch: "JioCinema", desc: "A TV reporter and his headstrong partner try live-in relationship culture in a small town." },
    { title: "Pyaar Ka Punchnama", industry: "Bollywood", rating: "7.6/10", watch: "Netflix", desc: "Three bachelor bickering roommates face modern relationship nightmares with their girlfriends." },
    { title: "Pyaar Ka Punchnama 2", industry: "Bollywood", rating: "7.3/10", watch: "Netflix", desc: "Three close friends experience hilarious relational disasters after getting involved with women." },
    { title: "Namastey London", industry: "Bollywood", rating: "7.1/10", watch: "Prime Video", desc: "An NRI woman marries a traditional Punjabi man under family pressure, then plans to annul it." }
  ],

  "Comedy": [
    // Hollywood
    { title: "Superbad", industry: "Hollywood", rating: "7.6/10", watch: "SonyLIV", desc: "Two codependent high school seniors attempt to buy booze for a party, triggering chaotic mishaps." },
    { title: "The Grand Budapest Hotel", industry: "Hollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "A legendary concierge and his lobby boy get involved in a theft and murder mystery." },
    { title: "The Hangover", industry: "Hollywood", rating: "7.7/10", watch: "Netflix", desc: "Three buddies wake up from a bachelor party in Las Vegas with no memory and a missing groom." },
    { title: "Step Brothers", industry: "Hollywood", rating: "6.9/10", watch: "Prime Video", desc: "Two middle-aged spoiled men are forced to live together as stepbrothers when their parents marry." },
    { title: "Anchorman", industry: "Hollywood", rating: "7.1/10", watch: "Paramount+", desc: "A top-rated 1970s news anchor's dominance is challenged by an ambitious new female anchor." },
    { title: "Mean Girls", industry: "Hollywood", rating: "7.1/10", watch: "Paramount+", desc: "A home-schooled teen hits public high school and gets pulled into the top girl clique." },
    { title: "Bridesmaids", industry: "Hollywood", rating: "6.8/10", watch: "Prime Video", desc: "Competition between the maid of honor and a bridesmaid threatens to ruin a best friend's wedding." },
    { title: "Hot Fuzz", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A top London cop is reassigned to a sleepy village that hides a series of dark secrets." },
    { title: "Shaun of the Dead", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "A man decides to turn his life around by winning back his ex during a sudden zombie apocalypse." },
    { title: "Tropic Thunder", industry: "Hollywood", rating: "7.1/10", watch: "Paramount+", desc: "Pampered actors shooting a war movie are forced to become the real soldiers they are portraying." },
    { title: "Groundhog Day", industry: "Hollywood", rating: "8.0/10", watch: "Prime Video", desc: "A cynical TV weatherman finds himself living the exact same day over and over again." },
    { title: "Dumb and Dumber", industry: "Hollywood", rating: "7.3/10", watch: "Prime Video", desc: "Two incredibly dim-witted friends set out on a cross-country trip to return a briefcase." },
    { title: "21 Jump Street", industry: "Hollywood", rating: "7.2/10", watch: "SonyLIV", desc: "Two underachieving cop partners go undercover as high school students to bust a drug ring." },
    { title: "Office Space", industry: "Hollywood", rating: "7.6/10", watch: "Disney+ Hotstar", desc: "Three disgruntled corporate workers decide to rebel against their greedy software company." },
    { title: "The Big Lebowski", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "'The Dude' gets mistaken for a millionaire with the same name and gets pulled into a kidnap scheme." },
    { title: "Game Night", industry: "Hollywood", rating: "6.9/10", watch: "Prime Video", desc: "A group of friends who meet for game nights find themselves solving a real murder mystery." },
    { title: "What We Do in the Shadows", industry: "Hollywood", rating: "7.6/10", watch: "Disney+ Hotstar", desc: "A documentary crew follows four vampires who are roommates living in modern New Zealand." },
    { title: "Pitch Perfect", industry: "Hollywood", rating: "7.1/10", watch: "Netflix", desc: "An all-female acapella group revamps their sound to take on their male rivals." },
    { title: "Zoolander", industry: "Hollywood", rating: "6.5/10", watch: "Paramount+", desc: "A clueless male model is brainwashed to assassinate the Prime Minister of Malaysia." },
    { title: "Dodgeball", industry: "Hollywood", rating: "6.7/10", watch: "Disney+ Hotstar", desc: "A group of misfits enter a Las Vegas dodgeball tournament to save their local gym." },
    { title: "Ferris Bueller's Day Off", industry: "Hollywood", rating: "7.8/10", watch: "Paramount+", desc: "A high school wise guy tricks his parents and plays hooky for a day of fun in Chicago." },
    { title: "Borat", industry: "Hollywood", rating: "7.4/10", watch: "Disney+ Hotstar", desc: "A Kazakh TV journalist travels to the US to report on the 'greatest country in the world'." },
    { title: "Airplane!", industry: "Hollywood", rating: "7.7/10", watch: "Paramount+", desc: "A former pilot with a fear of flying must land a plane safely after the crew falls ill." },
    { title: "Ghostbusters", industry: "Hollywood", rating: "7.8/10", watch: "SonyLIV", desc: "Three former parapsychology professors set up a unique ghost removal business in NYC." },
    { title: "Legally Blonde", industry: "Hollywood", rating: "6.5/10", watch: "Prime Video", desc: "A fashionable sorority queen enrolls at Harvard Law to win back her ex-boyfriend." },

    // Bollywood
    { title: "Hera Pheri", industry: "Bollywood", rating: "8.1/10", watch: "Prime Video", desc: "Three unemployed men land in trouble when a wrong phone call leads to a ransom opportunity." },
    { title: "Phir Hera Pheri", industry: "Bollywood", rating: "7.2/10", watch: "Prime Video", desc: "Raju, Shyam, and Babu Bhaiya lose their wealth in a get-rich-quick scam and struggle to get it back." },
    { title: "Andaz Apna Apna", industry: "Bollywood", rating: "8.0/10", watch: "Netflix", desc: "Two slackers compete for the affection of an heiress and unknowingly protect her from criminals." },
    { title: "3 Idiots", industry: "Bollywood", rating: "8.4/10", watch: "Prime Video", desc: "Two friends search for their long-lost college companion while reflecting on their student days." },
    { title: "Munna Bhai M.B.B.S.", industry: "Bollywood", rating: "8.1/10", watch: "Prime Video", desc: "A local gangster decides to enroll in medical school to satisfy his father's dream." },
    { title: "Lage Raho Munna Bhai", industry: "Bollywood", rating: "8.0/10", watch: "Prime Video", desc: "A gangster uses Gandhian principles to solve modern problems after seeing visions of Mahatma Gandhi." },
    { title: "Welcome", industry: "Bollywood", rating: "7.0/10", watch: "Prime Video", desc: "A man falls in love with a beautiful girl, only to discover her brothers are underworld dons." },
    { title: "Dhamaal", industry: "Bollywood", rating: "7.6/10", watch: "Prime Video", desc: "Four lazy friends race against a cop to find a hidden stash of cash in a Goa garden." },
    { title: "Golmaal: Fun Unlimited", industry: "Bollywood", rating: "7.5/10", watch: "Prime Video", desc: "Four runaway college friends seek refuge in a house owned by a blind old couple." },
    { title: "Bhagam Bhag", industry: "Bollywood", rating: "6.6/10", watch: "Prime Video", desc: "Theatre troupe actors find themselves framed for a murder in London while searching for a heroine." },
    { title: "Chup Chup Ke", industry: "Bollywood", rating: "6.9/10", watch: "Netflix", desc: "A heavily indebted man pretends to be deaf and mute, leading to hilarious confusion in a rich household." },
    { title: "De Dana Dan", industry: "Bollywood", rating: "5.7/10", watch: "Prime Video", desc: "Two broke friends kidnap a wealthy businesswoman's dog to demand a ransom, triggering chaotic hotel events." },
    { title: "Garam Masala", industry: "Bollywood", rating: "6.7/10", watch: "Hotstar", desc: "A photographer juggling three air-hostess girlfriends faces utter disaster when his friend moves in." },
    { title: "Stree", industry: "Bollywood", rating: "7.5/10", watch: "Netflix", desc: "In a small town, a male spirit abducts men at night, leaving only their clothes behind." },
    { title: "Badhaai Ho", industry: "Bollywood", rating: "7.9/10", watch: "Disney+ Hotstar", desc: "A 25-year-old man copes with social embarrassment when his middle-aged mother gets pregnant." },
    { title: "Fukrey", industry: "Bollywood", rating: "6.9/10", watch: "Prime Video", desc: "Four college slackers seeking easy money get involved with a dangerous female don." },
    { title: "Delhi Belly", industry: "Bollywood", rating: "7.5/10", watch: "Netflix", desc: "Three roommates accidentally stumble upon smuggled diamonds belonging to a ruthless mobster." },
    { title: "Piku", industry: "Bollywood", rating: "7.6/10", watch: "SonyLIV", desc: "A road trip from Delhi to Kolkata brings an eccentric father and his headstrong daughter together." },
    { title: "Good Newwz", industry: "Bollywood", rating: "6.8/10", watch: "Prime Video", desc: "Two couples with the same surname discover an in-vitro fertilization mix-up at the clinic." },
    { title: "Bala", industry: "Bollywood", rating: "7.3/10", watch: "Disney+ Hotstar", desc: "A young man suffers from premature balding and deals with societal pressure and self-esteem." },
    { title: "Dulhe Raja", industry: "Bollywood", rating: "6.7/10", watch: "Prime Video", desc: "A dhaba owner clashes with a luxury hotel tycoon while romancing the tycoon's daughter." },
    { title: "Bade Miyan Chote Miyan (1998)", industry: "Bollywood", rating: "5.8/10", watch: "Prime Video", desc: "Two goofy police officers find themselves framed when their criminal doppelgangers pull off heists." },
    { title: "Welcome Back", industry: "Bollywood", rating: "5.2/10", watch: "Eros Now", desc: "Reformed gangsters seek a decent man for their step-sister, leading to more comical blunders." },
    { title: "Housefull", industry: "Bollywood", rating: "5.5/10", watch: "Eros Now", desc: "An unlucky man believes his luck will change after marriage, leading to extreme lies and confusion." },
    { title: "No Entry", industry: "Bollywood", rating: "6.6/10", watch: "Prime Video", desc: "Three married men get entangled in extra-marital lies after an attractive call-girl enters their lives." }
  ],

  "Horror": [
    // Hollywood
    { title: "Get Out", industry: "Hollywood", rating: "7.8/10", watch: "JioCinema", desc: "A young Black man visits his white girlfriend's family estate, uncovering a disturbing truth." },
    { title: "The Conjuring", industry: "Hollywood", rating: "7.5/10", watch: "Netflix", desc: "Paranormal investigators Ed and Lorraine Warren assist a family terrorized by a dark presence." },
    { title: "Hereditary", industry: "Hollywood", rating: "7.3/10", watch: "Prime Video", desc: "A grieving family is haunted by tragic and disturbing occurrences after their matriarch passes." },
    { title: "A Quiet Place", industry: "Hollywood", rating: "7.5/10", watch: "Netflix", desc: "A family must navigate life in silence to avoid mysterious blind creatures that hunt by sound." },
    { title: "The Shining", industry: "Hollywood", rating: "8.4/10", watch: "Prime Video", desc: "A family heads to an isolated hotel for the winter where a sinister presence drives the father insane." },
    { title: "Halloween", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "Fifteen years after murdering his sister, Michael Myers escapes an asylum to stalk a small town." },
    { title: "The Exorcist", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests." },
    { title: "Alien", industry: "Hollywood", rating: "8.5/10", watch: "Disney+ Hotstar", desc: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating a unknown distress signal." },
    { title: "Psycho", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A secretary on the run checks into a remote motel managed by a young man under the dominance of his mother." },
    { title: "A Nightmare on Elm Street", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "Monstrous Freddy Krueger attacks teenagers in their dreams, killing them in real life." },
    { title: "Scream", industry: "Hollywood", rating: "7.4/10", watch: "Paramount+", desc: "A teenage girl and her friends become targets of a masked killer obsessed with horror movies." },
    { title: "The Thing", industry: "Hollywood", rating: "8.2/10", watch: "Prime Video", desc: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims." },
    { title: "It", industry: "Hollywood", rating: "7.3/10", watch: "Netflix", desc: "A group of bullied kids band together to destroy a shape-shifting monster posing as a clown." },
    { title: "Midsommar", industry: "Hollywood", rating: "7.1/10", watch: "Prime Video", desc: "A couple travels to Sweden for a festival, only to find themselves in the clutches of a pagan cult." },
    { title: "Us", industry: "Hollywood", rating: "6.8/10", watch: "JioCinema", desc: "A family's serene beach vacation turns into chaos when their terrifying doppelgängers show up." },
    { title: "The Witch", industry: "Hollywood", rating: "6.9/10", watch: "Prime Video", desc: "A 1630s New England family is torn apart by forces of witchcraft and black magic in the woods." },
    { title: "Barbarian", industry: "Hollywood", rating: "7.0/10", watch: "Disney+ Hotstar", desc: "A woman booking a rental house finds it double-booked by a stranger, with a sinister secret below." },
    { title: "Talk to Me", industry: "Hollywood", rating: "7.1/10", watch: "Prime Video", desc: "Friends discover how to conjure spirits using an embalmed hand, unlocking terrifying forces." },
    { title: "Smile", industry: "Hollywood", rating: "6.5/10", watch: "Netflix", desc: "After witnessing a traumatic incident, a therapist is haunted by unsettling smiling entities." },
    { title: "The Babadook", industry: "Hollywood", rating: "6.8/10", watch: "Prime Video", desc: "A single mother and her child fall into a well of paranoia when a creepy children's book manifests." },
    { title: "It Follows", industry: "Hollywood", rating: "6.8/10", watch: "Prime Video", desc: "A young woman is pursued by a slow-moving supernatural entity after a sexual encounter." },
    { title: "Insidious", industry: "Hollywood", rating: "6.8/10", watch: "SonyLIV", desc: "Parents look to prevent evil spirits from trapping their comatose child in a realm called The Further." },
    { title: "Sinister", industry: "Hollywood", rating: "6.8/10", watch: "Prime Video", desc: "A true-crime writer finds snuff film reels in his new attic, putting his family in danger." },
    { title: "Saw", industry: "Hollywood", rating: "7.6/10", watch: "Prime Video", desc: "Two strangers awaken in a room with no recollection and must play a twisted game to survive." },
    { title: "28 Days Later", industry: "Hollywood", rating: "7.5/10", watch: "Prime Video", desc: "Four survivors navigate a post-apocalyptic UK after a contagious rage virus breaks out." },

    // Bollywood
    { title: "Tumbbad", industry: "Bollywood", rating: "8.2/10", watch: "Prime Video", desc: "A mythological horror tale exploring human greed and a cursed treasure inside a decaying mansion." },
    { title: "Bhoot (2003)", industry: "Bollywood", rating: "6.5/10", watch: "Prime Video", desc: "A couple moves into a haunted apartment where the wife gets possessed by a murdered ghost." },
    { title: "Raaz", industry: "Bollywood", rating: "6.5/10", watch: "YouTube", desc: "A couple moves to Ooty to save their marriage, only to be haunted by a spirit with a past connection." },
    { title: "1920", industry: "Bollywood", rating: "6.4/10", watch: "Prime Video", desc: "A man moves into a grand mansion with his wife, who gets possessed by a demonic entity." },
    { title: "Stree 2", industry: "Bollywood", rating: "7.4/10", watch: "Prime Video", desc: "The town of Chanderi faces a new threat from a headless demon targeting progressive women." },
    { title: "Bhediya", industry: "Bollywood", rating: "6.7/10", watch: "JioCinema", desc: "A contractor gets bitten by a wolf in Arunachal Pradesh and starts transforming into a werewolf." },
    { title: "Munjya", industry: "Bollywood", rating: "6.5/10", watch: "Disney+ Hotstar", desc: "A young man visits his native village and accidentally unleashes a vengeful spirit." },
    { title: "13B", industry: "Bollywood", rating: "7.3/10", watch: "Prime Video", desc: "A man moves into a new apartment where a soap opera on TV predicts his family's exact future." },
    { title: "Bulbbul", industry: "Bollywood", rating: "6.5/10", watch: "Netflix", desc: "A child bride grows into a enigmatic woman guarding her village from mysterious deaths." },
    { title: "Pari", industry: "Bollywood", rating: "6.6/10", watch: "Prime Video", desc: "A kind man attempts to help a abused woman, unaware she is connected to a demonic cult." },
    { title: "Ek Thi Daayan", industry: "Bollywood", rating: "5.8/10", watch: "Prime Video", desc: "A magician undergoes therapy for hallucinations, realizing a witch from his childhood has returned." },
    { title: "Chhorii", industry: "Bollywood", rating: "6.8/10", watch: "Prime Video", desc: "A pregnant woman fleeing danger in a secluded sugarcane field encounters sinister spirits." },
    { title: "Darna Mana Hai", industry: "Bollywood", rating: "6.3/10", watch: "Prime Video", desc: "Six friends stranded in a forest tell each other scary horror stories around a campfire." },
    { title: "Darna Zaroori Hai", industry: "Bollywood", rating: "5.4/10", watch: "Prime Video", desc: "Six short horror stories are narrated to a group of lost kids inside a creepy mansion." },
    { title: "Ragini MMS", industry: "Bollywood", rating: "5.0/10", watch: "AltBalaji", desc: "A weekend getaway turn into a terrifying nightmare when a couple enters a haunted farmhouse." },
    { title: "Pizza (Hindi)", industry: "Bollywood", rating: "6.1/10", watch: "Disney+ Hotstar", desc: "A pizza delivery boy visits a house where supernatural events trapped inside test his sanity." },
    { title: "Phoonk", industry: "Bollywood", rating: "4.1/10", watch: "Prime Video", desc: "An atheist builder's life turns upside down when his daughter is targeted by black magic." },
    { title: "Sangharsh", industry: "Bollywood", rating: "6.7/10", watch: "YouTube", desc: "A rookie officer and a prisoner team up to capture a terrifying religious fanatic kidnapping kids." },
    { title: "Kaalo", industry: "Bollywood", rating: "5.4/10", watch: "Prime Video", desc: "Passengers on a desert bus are terrorized by a centuries-old witch seeking a young girl." },
    { title: "Horror Story", industry: "Bollywood", rating: "5.0/10", watch: "Prime Video", desc: "Seven friends spend a night inside an abandoned haunted hotel to celebrate, with fatal consequences." },
    { title: "Ghost Stories", industry: "Bollywood", rating: "4.4/10", watch: "Netflix", desc: "An anthology of four short horror stories directed by Karan Johar, Dibakar Banerjee, Zoya Akhtar & Anurag Kashyap." },
    { title: "Alone", industry: "Bollywood", rating: "3.7/10", watch: "Prime Video", desc: "A woman returns home to find herself haunted by the vengeful spirit of her conjoined twin." },
    { title: "Shaapit", industry: "Bollywood", rating: "5.1/10", watch: "Prime Video", desc: "A young man seeks to break a generation-old family curse preventing the women from marrying." },
    { title: "Bhoot Police", industry: "Bollywood", rating: "5.6/10", watch: "Disney+ Hotstar", desc: "Two fake exorcists land a real supernatural assignment in a tea estate mansion." },
    { title: "Roohi", industry: "Bollywood", rating: "4.3/10", watch: "Netflix", desc: "Two friends kidnap a bride who turns out to be possessed by a witch demanding a groom." }
  ],

  "Action": [
    // Hollywood
    { title: "Mad Max: Fury Road", industry: "Hollywood", rating: "8.1/10", watch: "JioCinema", desc: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a ruthless warlord." },
    { title: "John Wick", industry: "Hollywood", rating: "7.4/10", watch: "Netflix", desc: "An ex-hitman comes out of retirement to track down the gangsters that killed his puppy." },
    { title: "Die Hard", industry: "Hollywood", rating: "8.2/10", watch: "Disney+ Hotstar", desc: "An NYPD officer tries to save his wife and several others taken hostage by terrorists in a skyscraper." },
    { title: "The Dark Knight", industry: "Hollywood", rating: "9.0/10", watch: "JioCinema", desc: "Batman faces his ultimate test when a sadistic villain named Joker unleashes chaos on Gotham." },
    { title: "Gladiator", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family." },
    { title: "Terminator 2: Judgment Day", industry: "Hollywood", rating: "8.6/10", watch: "Prime Video", desc: "A cyborg is sent back in time to protect a young boy from an advanced shape-shifting killer." },
    { title: "Aliens", industry: "Hollywood", rating: "8.4/10", watch: "Disney+ Hotstar", desc: "Ellen Ripley returns to a terraforming colony to battle an infestation of extraterrestrial creatures." },
    { title: "The Matrix", industry: "Hollywood", rating: "8.7/10", watch: "JioCinema", desc: "A computer hacker learns about the true nature of reality and his role in the war against controllers." },
    { title: "Mission: Impossible - Fallout", industry: "Hollywood", rating: "7.7/10", watch: "Netflix", desc: "Ethan Hunt and his team race against time after a mission goes wrong." },
    { title: "Top Gun: Maverick", industry: "Hollywood", rating: "8.3/10", watch: "Prime Video", desc: "Maverick trains a detachment of Top Gun graduates for a dangerous specialized mission." },
    { title: "Kill Bill: Vol. 1", industry: "Hollywood", rating: "8.2/10", watch: "Prime Video", desc: "A former assassin awakens from a coma and vows vengeance against the team that betrayed her." },
    { title: "The Raid", industry: "Hollywood", rating: "7.6/10", watch: "Prime Video", desc: "A SWAT team becomes trapped in a high-rise building run by a ruthless mobster and his army." },
    { title: "Heat", industry: "Hollywood", rating: "8.3/10", watch: "Prime Video", desc: "A high-stakes clash between a master thief and an obsessive detective in Los Angeles." },
    { title: "The Bourne Identity", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "A man with amnesia tries to discover his identity while avoiding deadly assassins." },
    { title: "Extraction", industry: "Hollywood", rating: "6.8/10", watch: "Netflix", desc: "A black-market mercenary is hired to rescue the kidnapped son of an international crime lord." },
    { title: "Sicario", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "An idealistic FBI agent is enlisted to aid an escalating drug war at the US-Mexico border." },
    { title: "Edge of Tomorrow", industry: "Hollywood", rating: "7.9/10", watch: "JioCinema", desc: "A soldier fighting aliens gets trapped in a time loop, restarting the day every time he dies." },
    { title: "1917", industry: "Hollywood", rating: "8.2/10", watch: "SonyLIV", desc: "Two World War I soldiers are assigned a mission to deliver a message across enemy territory." },
    { title: "Avengers: Endgame", industry: "Hollywood", rating: "8.4/10", watch: "Disney+ Hotstar", desc: "The remaining Avengers assemble once more to reverse Thanos' destructive actions." },
    { title: "Logan", industry: "Hollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "In a weary future, an aging Wolverine defends a young mutant girl fleeing dark forces." },
    { title: "Atomic Blonde", industry: "Hollywood", rating: "6.7/10", watch: "Prime Video", desc: "An elite MI6 agent is sent to Berlin during the Cold War to investigate an officer's murder." },
    { title: "Nobody", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "A docile family man unleashes his long-dormant deadly instincts after a home break-in." },
    { title: "Hardcore Henry", industry: "Hollywood", rating: "6.7/10", watch: "Prime Video", desc: "A resurrected cyborg embarks on a first-person POV mission to save his kidnapped wife." },
    { title: "Dredd", industry: "Hollywood", rating: "7.1/10", watch: "Prime Video", desc: "A futuristic law enforcer targets a drug lord inside a 200-story vertical slum tower." },
    { title: "Speed", industry: "Hollywood", rating: "7.3/10", watch: "Disney+ Hotstar", desc: "A young cop must prevent a bomb exploding on a city bus by keeping its speed above 50 mph." },

    // Bollywood
    { title: "Sholay", industry: "Bollywood", rating: "8.2/10", watch: "Prime Video", desc: "Two ex-convicts are hired by a former police officer to capture a ruthless bandit named Gabbar Singh." },
    { title: "Dhoom 2", industry: "Bollywood", rating: "6.5/10", watch: "Prime Video", desc: "A stylish thief steals priceless artifacts while a top cop chases him around the globe." },
    { title: "War", industry: "Bollywood", rating: "6.5/10", watch: "Prime Video", desc: "An Indian soldier is tasked with eliminating his former mentor who has unexpectedly gone rogue." },
    { title: "Pathaan", industry: "Bollywood", rating: "5.9/10", watch: "Prime Video", desc: "An exiled RAW agent steps up to stop a mercenary group planning a biological attack." },
    { title: "Jawan", industry: "Bollywood", rating: "7.0/10", watch: "Netflix", desc: "A prison warden leads a team of women to execute high-stakes vigilante acts across India." },
    { title: "Gangs of Wasseypur", industry: "Bollywood", rating: "8.2/10", watch: "Netflix", desc: "A multi-generational blood feud unfolds in the coal-mining town of Dhanbad." },
    { title: "Don 2", industry: "Bollywood", rating: "7.1/10", watch: "Netflix", desc: "A mastermind kingpin surrenders to the police only to execute a daring prison breakout." },
    { title: "Krrish", industry: "Bollywood", rating: "6.5/10", watch: "SonyLIV", desc: "A young man with inherited superpowers travels to Singapore to rescue his father." },
    { title: "Agneepath (2012)", industry: "Bollywood", rating: "6.9/10", watch: "Prime Video", desc: "A young man seeks vengeance against a ruthless crime lord who killed his father years ago." },
    { title: "Dabangg", industry: "Bollywood", rating: "6.2/10", watch: "Disney+ Hotstar", desc: "A corrupt but charming cop faces off against a local politician seeking power." },
    { title: "Singham", industry: "Bollywood", rating: "6.8/10", watch: "Prime Video", desc: "An honest police officer wages war against a corrupt politician controlling Goa." },
    { title: "Uri: The Surgical Strike", industry: "Bollywood", rating: "8.2/10", watch: "ZEE5", desc: "Indian army special forces execute a covert surgical strike against terrorist launchpads." },
    { title: "Main Hoon Na", industry: "Bollywood", rating: "7.0/10", watch: "Netflix", desc: "An army officer goes undercover as a college student to protect a general's daughter." },
    { title: "Baby", industry: "Bollywood", rating: "7.9/10", watch: "Disney+ Hotstar", desc: "An elite counter-terrorism unit races to neutralize a global terror network planning strikes in India." },
    { title: "Holiday", industry: "Bollywood", rating: "7.2/10", watch: "YouTube", desc: "A military officer on leave discovers a sleeper cell network planning bomb blasts across Mumbai." },
    { title: "Force", industry: "Bollywood", rating: "6.5/10", watch: "Disney+ Hotstar", desc: "A rogue narcotics officer wages a personal war against a ruthless drug cartel leader." },
    { title: "Bang Bang!", industry: "Bollywood", rating: "5.6/10", watch: "Disney+ Hotstar", desc: "A bank receptionist gets swept into a globe-trotting chase with a mysterious secret agent." },
    { title: "Baaghi", industry: "Bollywood", rating: "5.3/10", watch: "Prime Video", desc: "A martial artist trains intensely to rescue his kidnapped girlfriend from a Bangkok don." },
    { title: "Ghayal", industry: "Bollywood", rating: "7.6/10", watch: "Prime Video", desc: "An amateur boxer is framed for his brother's murder and sets out to bring down a corrupt tycoon." },
    { title: "Ek Tha Tiger", industry: "Bollywood", rating: "5.6/10", watch: "Prime Video", desc: "A RAW agent falls in love with an ISI agent while on a sensitive intelligence mission in Dublin." },
    { title: "Phantom", industry: "Bollywood", rating: "5.9/10", watch: "Netflix", desc: "A disgraced Indian soldier conducts a clandestine mission to eliminate perpetrators of 26/11." },
    { title: "Commando", industry: "Bollywood", rating: "6.2/10", watch: "Zee5", desc: "An escaped Indian special forces soldier defends a young woman from a local dictator in Punjab." },
    { title: "Brothers", industry: "Bollywood", rating: "6.5/10", watch: "Netflix", desc: "Two estranged brothers battle out their past issues inside an intense mixed martial arts tournament." },
    { title: "Race", industry: "Bollywood", rating: "6.7/10", watch: "Netflix", desc: "Betrayal, sibling rivalry, and high-stakes twists unfold between two wealthy half-brothers." },
    { title: "KGF: Chapter 1", industry: "Bollywood", rating: "8.2/10", watch: "Prime Video", desc: "A high-ranking assassin goes undercover in a gold mine to eliminate an oppressor." }
  ],

  "Sci-Fi": [
    // Hollywood
    { title: "Interstellar", industry: "Hollywood", rating: "8.7/10", watch: "JioCinema", desc: "Explorers travel through a wormhole in space to ensure humanity's survival." },
    { title: "Inception", industry: "Hollywood", rating: "8.8/10", watch: "JioCinema", desc: "A thief who steals corporate secrets through dream-sharing technology is given an inverse task." },
    { title: "Blade Runner 2049", industry: "Hollywood", rating: "8.0/10", watch: "Prime Video", desc: "A young Blade Runner uncovers a secret that leads him to former Blade Runner Rick Deckard." },
    { title: "Arrival", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "A linguist works with the military to communicate with alien lifeforms that have landed on Earth." },
    { title: "The Martian", industry: "Hollywood", rating: "8.0/10", watch: "Disney+ Hotstar", desc: "An astronaut becomes stranded on Mars and relies on his ingenuity to signal Earth." },
    { title: "Ex Machina", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "A programmer evaluates the human qualities of a highly advanced humanoid AI." },
    { title: "Dune", industry: "Hollywood", rating: "8.0/10", watch: "JioCinema", desc: "A gifted young man travels to the most dangerous planet to ensure his family's future." },
    { title: "Minority Report", industry: "Hollywood", rating: "7.6/10", watch: "Paramount+", desc: "In a future where cops catch murderers before they commit crimes, an officer is accused." },
    { title: "District 9", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "Extraterrestrials forced to live in slum conditions find an ally in a exposed government agent." },
    { title: "Eternal Sunshine of the Spotless Mind", industry: "Hollywood", rating: "8.3/10", watch: "Prime Video", desc: "A couple undergoes a medical procedure to erase each other from their memories." },
    { title: "Gravity", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "Two astronauts work together to survive after an accident leaves them stranded in space." },
    { title: "Her", industry: "Hollywood", rating: "8.0/10", watch: "Prime Video", desc: "A lonely writer develops an unlikely relationship with an operating system designed to meet his needs." },
    { title: "Tenet", industry: "Hollywood", rating: "7.3/10", watch: "Netflix", desc: "A secret agent learns to manipulate the flow of time to prevent World War III." },
    { title: "Children of Men", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "In a infertile future, a bureaucrat helps transport a miraculously pregnant woman to safety." },
    { title: "12 Monkeys", industry: "Hollywood", rating: "8.0/10", watch: "Prime Video", desc: "A convict is sent back in time to gather information about a man-made virus." },
    { title: "Looper", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "A hitman who kills targets sent back in time realizes his next contract is his future self." },
    { title: "Jurassic Park", industry: "Hollywood", rating: "8.2/10", watch: "JioCinema", desc: "A pragmatic paleontologist visiting a theme park must protect two kids from loose dinosaurs." },
    { title: "Avatar", industry: "Hollywood", rating: "7.9/10", watch: "Disney+ Hotstar", desc: "A paraplegic Marine dispatched to Pandora becomes torn between following orders and protecting its world." },
    { title: "Prey", industry: "Hollywood", rating: "7.1/10", watch: "Disney+ Hotstar", desc: "A Comanche warrior protects her tribe from a highly evolved alien predator in 1719." },
    { title: "Star Wars: Episode V", industry: "Hollywood", rating: "8.7/10", watch: "Disney+ Hotstar", desc: "The Empire pursues the Rebels as Luke Skywalker undergoes Jedi training with Yoda." },
    { title: "WALL-E", industry: "Hollywood", rating: "8.4/10", watch: "Disney+ Hotstar", desc: "A small waste-collecting robot embarks on a space journey that will decide mankind's fate." },
    { title: "The Truman Show", industry: "Hollywood", rating: "8.2/10", watch: "Prime Video", desc: "An insurance salesman discovers his whole life is actually a reality TV show." },
    { title: "War of the Worlds", industry: "Hollywood", rating: "6.5/10", watch: "Paramount+", desc: "A dockworker struggles to protect his children as giant alien tripods attack Earth." },
    { title: "Oblivion", industry: "Hollywood", rating: "7.0/10", watch: "Prime Video", desc: "A drone repairman on a desolate Earth questions everything he knows about his mission." },
    { title: "Source Code", industry: "Hollywood", rating: "7.5/10", watch: "Prime Video", desc: "A soldier wakes up in another man's body and discovers he's on a mission to stop a train bomber." },

    // Bollywood
    { title: "Koi... Mil Gaya", industry: "Bollywood", rating: "7.1/10", watch: "Prime Video", desc: "A developmentally disabled young man befriends an alien who grants him extraordinary mental and physical abilities." },
    { title: "Ra.One", industry: "Bollywood", rating: "4.9/10", watch: "Eros Now / Prime Video", desc: "A game developer creates a digital villain who steps out into the real world, forcing the hero to follow." },
    { title: "Robot (Enthiran)", industry: "Bollywood", rating: "7.1/10", watch: "Prime Video", desc: "A scientist builds an android assistant that develops human emotions and falls in love with his girlfriend." },
    { title: "2.0", industry: "Bollywood", rating: "6.1/10", watch: "Prime Video", desc: "Dr. Vaseegaran reassembles Chitti to combat an avian winged entity controlling cell phones." },
    { title: "Kalki 2898 AD", industry: "Bollywood", rating: "7.6/10", watch: "Netflix", desc: "In a dystopian post-apocalyptic future, a bounty hunter tries to capture a pregnant woman carrying hope." },
    { title: "PK", industry: "Bollywood", rating: "8.1/10", watch: "Netflix / SonyLIV", desc: "An alien stranded on Earth loses his communication device and questions dogma to retrieve it." },
    { title: "Mr. India", industry: "Bollywood", rating: "7.7/10", watch: "Zee5", desc: "A kind man inherits an invisibility watch and uses it to fight off a tyrant named Mogambo." },
    { title: "Cargo", industry: "Bollywood", rating: "5.7/10", watch: "Netflix", desc: "A lonely demon works on a spaceship processing dead souls for reincarnation." },
    { title: "Love Story 2050", industry: "Bollywood", rating: "2.7/10", watch: "Prime Video", desc: "A man travels to futuristic Mumbai in 2050 using a time machine to revive his deceased lover." },
    { title: "Action Replayy", industry: "Bollywood", rating: "4.3/10", watch: "Prime Video", desc: "A young man travels back to the 1970s to improve his parents' rocky marriage." },
    { title: "Krrish 3", industry: "Bollywood", rating: "5.3/10", watch: "SonyLIV", desc: "Krrish faces Kaal, a handicapped evil genius manipulating human-animal mutant hybrids." },
    { title: "Taarzan: The Wonder Car", industry: "Bollywood", rating: "5.5/10", watch: "Prime Video", desc: "A futuristic automated car possessed by its inventor's spirit seeks revenge on his murderers." },
    { title: "Aa Dekhen Zara", industry: "Bollywood", rating: "5.5/10", watch: "Prime Video", desc: "A struggling photographer inherits a camera that takes photos of the future." },
    { title: "Phantasma", industry: "Bollywood", rating: "5.0/10", watch: "YouTube", desc: "Scientists create a high-tech Virtual Reality chamber that begins manipulating reality." },
    { title: "JL50", industry: "Bollywood", rating: "7.4/10", watch: "SonyLIV", desc: "A plane crashes in West Bengal, but investigators find it went missing 35 years ago." },
    { title: "Drona", industry: "Bollywood", rating: "2.0/10", watch: "Eros Now", desc: "A young man discovers he comes from an ancient lineage of mythical protectors." },
    { title: "Aladin", industry: "Bollywood", rating: "4.6/10", watch: "Eros Now", desc: "A college student finds a magic lamp and unleashes a modern genie who grants him three wishes." },
    { title: "Carbon: The Story of Tomorrow", industry: "Bollywood", rating: "6.3/10", watch: "YouTube", desc: "A short film set in 2067 where oxygen and water have become commercialized commodities." },
    { title: "Shivaay", industry: "Bollywood", rating: "6.2/10", watch: "Prime Video", desc: "A skilled mountaineer uses high-tech tools and combat skills to rescue his daughter." },
    { title: "Attack: Part 1", industry: "Bollywood", rating: "5.3/10", watch: "Zee5", desc: "A paralyzed soldier undergoes an experimental cybernetic surgery to become a super-soldier." },
    { title: "Baar Baar Dekho", industry: "Bollywood", rating: "5.3/10", watch: "Prime Video", desc: "A mathematician repeatedly jumps forward in time on his wedding day, witnessing his future." },
    { title: "Smart City", industry: "Bollywood", rating: "5.1/10", watch: "YouTube", desc: "A hacker uncovers a cybernetic government surveillance project in futuristic India." },
    { title: "Super 30", industry: "Bollywood", rating: "7.9/10", watch: "Disney+ Hotstar", desc: "A math genius revolutionizes education using unconventional scientific learning methods." },
    { title: "Mission Mangal", industry: "Bollywood", rating: "6.5/10", watch: "Disney+ Hotstar", desc: "Indian scientists overcome obstacles to successfully launch the Mars Orbiter Mission." },
    { title: "Dhoom 3", industry: "Bollywood", rating: "5.4/10", watch: "Prime Video", desc: "A circus entertainer uses high-tech gadgets and bikes to rob banks in Chicago." }
  ],

  "Thriller": [
    // Hollywood
    { title: "Se7en", industry: "Hollywood", rating: "8.6/10", watch: "Netflix", desc: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives." },
    { title: "Gone Girl", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "With his wife's disappearance becoming a media circus, a man sees the spotlight turned on him." },
    { title: "The Silence of the Lambs", industry: "Hollywood", rating: "8.6/10", watch: "Prime Video", desc: "A young FBI cadet must confide in an incarcerated cannibalistic killer to catch another murderer." },
    { title: "Shutter Island", industry: "Hollywood", rating: "8.2/10", watch: "Netflix", desc: "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane." },
    { title: "Prisoners", industry: "Hollywood", rating: "8.1/10", watch: "Netflix", desc: "When his daughter goes missing, a desperate father takes matters into his own hands." },
    { title: "Zodiac", industry: "Hollywood", rating: "7.7/10", watch: "Paramount+", desc: "A cartoonist becomes obsessed with tracking down the Zodiac Killer in San Francisco." },
    { title: "Nightcrawler", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A driven man muscles into the world of LA crime journalism, blurring the line between observer and participant." },
    { title: "Memento", industry: "Hollywood", rating: "8.4/10", watch: "Prime Video", desc: "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer." },
    { title: "The Prestige", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "Two stage magicians engage in a competitive rivalry to create the ultimate illusion." },
    { title: "The Departed", industry: "Hollywood", rating: "8.5/10", watch: "Netflix", desc: "An undercover cop and a mole in the police force attempt to identify each other." },
    { title: "Black Swan", industry: "Hollywood", rating: "8.0/10", watch: "Disney+ Hotstar", desc: "A ballerina struggles to maintain her sanity after winning the lead role in Swan Lake." },
    { title: "Drive", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A stunt driver who moonlights as a getaway driver gets into trouble helping his neighbor." },
    { title: "Uncut Gems", industry: "Hollywood", rating: "7.4/10", watch: "Netflix", desc: "A charismatic jeweler makes a high-stakes bet that could lead to the windfall of a lifetime." },
    { title: "The Sixth Sense", industry: "Hollywood", rating: "8.2/10", watch: "Disney+ Hotstar", desc: "A child psychologist treats a young boy who claims he can see and talk to dead people." },
    { title: "Basic Instinct", industry: "Hollywood", rating: "7.1/10", watch: "Prime Video", desc: "A police detective investigates a brutal murder involving a seductive crime novelist." },
    { title: "Misery", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A famous author is saved from a car crash by an obsessed fan who holds him captive." },
    { title: "Searching", industry: "Hollywood", rating: "7.6/10", watch: "SonyLIV", desc: "A desperate father searches for his missing 16-year-old daughter by tracing her digital footprint." },
    { title: "Nocturnal Animals", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "An art dealer reads her ex-husband's violent manuscript, noticing disturbing parallels." },
    { title: "The Invisible Man", industry: "Hollywood", rating: "7.1/10", watch: "JioCinema", desc: "A woman believes she is being stalked by her abusive ex-boyfriend after he fakes his death." },
    { title: "A Quiet Place", industry: "Hollywood", rating: "7.5/10", watch: "Netflix", desc: "A family lives in total silence to avoid sound-hunting creatures in a post-apocalyptic world." },
    { title: "Split", industry: "Hollywood", rating: "7.3/10", watch: "Netflix", desc: "A man with 23 distinct personalities kidnaps three teenage girls." },
    { title: "Wind River", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "A tracker helps an FBI agent investigate a murder on a Native American reservation." },
    { title: "Hell or High Water", industry: "Hollywood", rating: "7.6/10", watch: "Prime Video", desc: "Two brothers resort to bank robberies to save their family ranch from foreclosure." },
    { title: "The Game", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "A wealthy banker receives a mysterious gift certificate to participate in a real-life game." },
    { title: "Oldboy", industry: "Hollywood", rating: "8.4/10", watch: "Prime Video", desc: "A man held captive for 15 years without explanation is suddenly released and seeks revenge." },

    // Bollywood
    { title: "Andhadhun", industry: "Bollywood", rating: "8.2/10", watch: "Netflix", desc: "A blind pianist gets unexpectedly involved in the murder of a former film actor." },
    { title: "Kahaani", industry: "Bollywood", rating: "8.1/10", watch: "Prime Video", desc: "A pregnant woman searches for her missing husband in Kolkata during Durga Puja." },
    { title: "Drishyam", industry: "Bollywood", rating: "8.2/10", watch: "JioCinema", desc: "A local cable operator uses movie tricks to protect his family from a murder conviction." },
    { title: "Drishyam 2", industry: "Bollywood", rating: "8.2/10", watch: "Prime Video", desc: "Seven years after the original case, Vijay Salgaonkar faces a reopened police investigation." },
    { title: "Badla", industry: "Bollywood", rating: "7.7/10", watch: "Netflix", desc: "A businesswoman accused of murder discusses her defense strategy with a veteran lawyer." },
    { title: "Talaash", industry: "Bollywood", rating: "7.2/10", watch: "Netflix", desc: "A cop investigating a film star's death confronts his own tragic past with a ghost's help." },
    { title: "Special 26", industry: "Bollywood", rating: "8.0/10", watch: "JioCinema", desc: "Conmen pose as CBI officers to execute raids on politicians and businessmen." },
    { title: "A Wednesday!", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "A common man calls the police commissioner threatening to detonate bombs unless terrorists are freed." },
    { title: "NH10", industry: "Bollywood", rating: "7.2/10", watch: "Eros Now", desc: "A couple's road trip turns deadly when they witness an honor killing on a highway." },
    { title: "Gupt: The Hidden Truth", industry: "Bollywood", rating: "7.3/10", watch: "Prime Video", desc: "A man framed for his stepfather's murder breaks out of prison to find the real killer." },
    { title: "Ek Hasina Thi", industry: "Bollywood", rating: "7.5/10", watch: "Prime Video", desc: "A woman framed by her lover plots meticulous revenge against him after surviving prison." },
    { title: "Ittefaq (2017)", industry: "Bollywood", rating: "7.2/10", watch: "Netflix", desc: "A detective interrogates two suspects who have conflicting versions of a double murder night." },
    { title: "Manorama Six Feet Under", industry: "Bollywood", rating: "7.5/10", watch: "Prime Video", desc: "A small-town amateur detective is hired to spy on an official, uncovering a deep conspiracy." },
    { title: "Jaane Jaan", industry: "Bollywood", rating: "7.0/10", watch: "Netflix", desc: "A gifted math teacher helps his neighbor cover up a crime when her husband unexpectedly arrives." },
    { title: "Haseen Dillruba", industry: "Bollywood", rating: "6.9/10", watch: "Netflix", desc: "Under investigation for her husband's murder, a woman narrates their unconventional marriage story." },
    { title: "Sector 36", industry: "Bollywood", rating: "7.1/10", watch: "Netflix", desc: "A cop investigates the serial disappearances of children from a Delhi slum." },
    { title: "Monica, O My Darling", industry: "Bollywood", rating: "7.4/10", watch: "Netflix", desc: "A robotics expert joins a murder plot that spirals completely out of control." },
    { title: "Table No. 21", industry: "Bollywood", rating: "7.1/10", watch: "Eros Now", desc: "A couple wins a vacation to Fiji, only to be forced into playing a live game of secrets." },
    { title: "Ratsasan (Hindi Dubbed)", industry: "Bollywood", rating: "8.3/10", watch: "Prime Video", desc: "A sub-inspector attempts to track down a psycho killer targeting young schoolgirls." },
    { title: "Chup: Revenge of the Artist", industry: "Bollywood", rating: "7.8/10", watch: "ZEE5", desc: "A serial killer targets film critics who give dishonest ratings to artistic films." },
    { title: "Freddy", industry: "Bollywood", rating: "7.6/10", watch: "Disney+ Hotstar", desc: "An introverted dentist turns vengeful when a woman he loves deceives him." },
    { title: "Blurr", industry: "Bollywood", rating: "6.1/10", watch: "ZEE5", desc: "A woman with deteriorating eyesight investigates the suspicious suicide of her blind twin." },
    { title: "Forensic", industry: "Bollywood", rating: "6.3/10", watch: "ZEE5", desc: "A forensic officer and a cop team up to solve a string of kidnappings in Mussoorie." },
    { title: "The Body", industry: "Bollywood", rating: "5.4/10", watch: "Netflix", desc: "The body of a wealthy businesswoman goes missing from a morgue, triggering an investigation." },
    { title: "Bhaag Johnny", industry: "Bollywood", rating: "4.5/10", watch: "Prime Video", desc: "A man is forced to live two different parallel lives to decide his ethical destiny." }
  ],

  "Drama": [
    // Hollywood
    { title: "The Shawshank Redemption", industry: "Hollywood", rating: "9.3/10", watch: "Prime Video", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption." },
    { title: "The Godfather", industry: "Hollywood", rating: "9.2/10", watch: "Paramount+", desc: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son." },
    { title: "Schindler's List", industry: "Hollywood", rating: "9.0/10", watch: "Prime Video", desc: "In German-occupied Poland, industrialist Oskar Schindler saves Jewish workers." },
    { title: "Fight Club", industry: "Hollywood", rating: "8.8/10", watch: "Prime Video", desc: "An insomniac office worker forms an underground fight club with a soap salesman." },
    { title: "Forrest Gump", industry: "Hollywood", rating: "8.8/10", watch: "Prime Video", desc: "The history of the US unfolds through the perspective of an Alabama man with a low IQ." },
    { title: "The Social Network", industry: "Hollywood", rating: "7.8/10", watch: "SonyLIV", desc: "Harvard student Mark Zuckerberg creates Facebook, leading to immense success and personal lawsuits." },
    { title: "Whiplash", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A promising drummer enrolls at a music conservatory where an instructor pushes him to limits." },
    { title: "12 Angry Men", industry: "Hollywood", rating: "9.0/10", watch: "Prime Video", desc: "A jury deliberates a murder trial, forcing one juror to persuade the others of reasonable doubt." },
    { title: "There Will Be Blood", industry: "Hollywood", rating: "8.2/10", watch: "Prime Video", desc: "A ruthless oil prospector turns his business into a empire during the Southern California oil boom." },
    { title: "Parasite", industry: "Hollywood", rating: "8.5/10", watch: "SonyLIV", desc: "Greed and class discrimination threaten the relationship between the wealthy Park family and the destitute Kims." },
    { title: "Manchester by the Sea", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A grieving uncle is appointed guardian of his teenage nephew after his brother passes away." },
    { title: "Marriage Story", industry: "Hollywood", rating: "7.9/10", watch: "Netflix", desc: "A stage director and his actor wife struggle through a grueling, coast-to-coast divorce." },
    { title: "12 Years a Slave", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "A free Black man from upstate New York is kidnapped and sold into slavery." },
    { title: "Oppenheimer", industry: "Hollywood", rating: "8.9/10", watch: "JioCinema", desc: "The story of American scientist J. Robert Oppenheimer and his role in developing the atomic bomb." },
    { title: "The Green Mile", industry: "Hollywood", rating: "8.6/10", watch: "Prime Video", desc: "Death Row guards are affected by one of their charges: a Black man accused of child murder who has a gift." },
    { title: "Dead Poets Society", industry: "Hollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "An English teacher inspires his students to look at poetry from a different perspective." },
    { title: "The Pianist", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto in WWII." },
    { title: "Brokeback Mountain", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "Two cowboys develop a passionate secret love affair that spans two decades." },
    { title: "Good Will Hunting", industry: "Hollywood", rating: "8.3/10", watch: "Lionsgate Play", desc: "Will Hunting, a janitor at M.I.T., has a gift for math, but needs help from a psychologist." },
    { title: "Pulp Fiction", industry: "Hollywood", rating: "8.9/10", watch: "Prime Video", desc: "The lives of two mob hitmen, a boxer, and a gangster's wife intertw in four tales of violence." },
    { title: "Room", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "A young boy and his mother gain freedom after being held captive in an enclosed space." },
    { title: "The Whale", industry: "Hollywood", rating: "7.7/10", watch: "SonyLIV", desc: "A reclusive English teacher attempts to reconnect with his estranged teenage daughter." },
    { title: "Aftersun", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father 20 years ago." },
    { title: "Spotlight", industry: "Hollywood", rating: "8.1/10", watch: "Prime Video", desc: "The Boston Globe's investigative team uncovers a massive cover-up of child abuse within the local Archdiocese." },
    { title: "Boyhood", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "The life of Mason, from early childhood to his arrival at college, filmed over 12 real years." },

    // Bollywood
    { title: "Dangal", industry: "Bollywood", rating: "8.3/10", watch: "Prime Video", desc: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita for Commonwealth gold." },
    { title: "Swades", industry: "Bollywood", rating: "8.2/10", watch: "Netflix", desc: "A successful NASA scientist visits his childhood village in India and decides to transform it." },
    { title: "Taare Zameen Par", industry: "Bollywood", rating: "8.3/10", watch: "Netflix", desc: "An unconventional art teacher helps an 8-year-old boy overcome his hidden dyslexia." },
    { title: "Lagaan", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "Villagers in Victorian India bet their tax burden on a game of cricket against British officers." },
    { title: "Rang De Basanti", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "A British filmmaker casts Delhi students in a movie about freedom fighters, inspiring political awareness." },
    { title: "Anand", industry: "Bollywood", rating: "8.3/10", watch: "Prime Video", desc: "A terminally ill man spreads joy and positivity among everyone around him before his death." },
    { title: "Black", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "A deaf-blind girl develops a deep relationship with her teacher who later contracts Alzheimer's." },
    { title: "Udta Punjab", industry: "Bollywood", rating: "7.7/10", watch: "ZEE5", desc: "Four lives intersect around a drug epidemic in the state of Punjab." },
    { title: "Haider", industry: "Bollywood", rating: "8.0/10", watch: "ZEE5", desc: "A young man returns to Kashmir after his father's disappearance, seeking answers and vengeance." },
    { title: "Gully Boy", industry: "Bollywood", rating: "7.9/10", watch: "Prime Video", desc: "A street rapper from the Mumbai slums fights social hurdles to realize his musical dreams." },
    { title: "Udaan", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "A teenager expelled from boarding school returns home to face an abusive, authoritarian father." },
    { title: "Article 15", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "An upright IPS officer investigates the murder of three girls in a caste-sensitive rural town." },
    { title: "Thappad", industry: "Bollywood", rating: "7.0/10", watch: "Prime Video", desc: "A woman reconsider her seemingly happy marriage after her husband slaps her at a party." },
    { title: "Sardar Udham", industry: "Bollywood", rating: "8.4/10", watch: "Prime Video", desc: "Freedom fighter Udham Singh assassinates Michael O'Dwyer to avenge the Jallianwala Bagh massacre." },
    { title: "Chak De! India", industry: "Bollywood", rating: "8.1/10", watch: "Prime Video", desc: "A disgraced hockey player leads the underdog Indian women's team to World Cup glory." },
    { title: "Rockstar", industry: "Bollywood", rating: "7.7/10", watch: "Eros Now", desc: "A musician achieves global stardom but suffers intense heartbreak that fuels his music." },
    { title: "Pink", industry: "Bollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "A retired lawyer defends three young women accused of a crime after being assaulted by political heirs." },
    { title: "Masaan", industry: "Bollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "Two parallel stories in Varanasi trace individuals navigating grief, love, and strict caste structures." },
    { title: "My Name Is Khan", industry: "Bollywood", rating: "7.9/10", watch: "Prime Video", desc: "An autistic Muslim man embarks on a journey across America to meet the US President." },
    { title: "Dear Zindagi", industry: "Bollywood", rating: "7.6/10", watch: "Netflix", desc: "A young cinematographer seeks guidance from a therapist to overcome her sleep insomnia and perspective." },
    { title: "Bhaag Milkha Bhaag", industry: "Bollywood", rating: "8.2/10", watch: "Disney+ Hotstar", desc: "The life story of Milkha Singh, an Olympian who overcame post-partition trauma to become a track legend." },
    { title: "Tamasha", industry: "Bollywood", rating: "7.3/10", watch: "ZEE5", desc: "A man dealing with corporate monotony rediscovers his inner artistic self through love." },
    { title: "Kapoor & Sons", industry: "Bollywood", rating: "7.7/10", watch: "Netflix", desc: "Two estranged brothers return home to visit their sick grandfather and uncover deep family secrets." },
    { title: "Barfi!", industry: "Bollywood", rating: "8.1/10", watch: "Netflix", desc: "A deaf-mute young man forms a bond with two women in 1970s Darjeeling and Kolkata." },
    { title: "The Sky Is Pink", industry: "Bollywood", rating: "7.6/10", watch: "Netflix", desc: "The love story of a couple spans 25 years, narrated by their terminally ill teenage daughter." }
  ],

  "Mystery": [
    // Hollywood
    { title: "Knives Out", industry: "Hollywood", rating: "7.9/10", watch: "Lionsgate Play", desc: "Detective Benoit Blanc investigates the death of a patriarch of an eccentric family." },
    { title: "Glass Onion", industry: "Hollywood", rating: "7.1/10", watch: "Netflix", desc: "Benoit Blanc travels to a private Greek island to unravel a tech billionaire's game." },
    { title: "Sherlock Holmes", industry: "Hollywood", rating: "7.6/10", watch: "Prime Video", desc: "Detective Sherlock Holmes and Dr. Watson fight a enemy threatening all of England." },
    { title: "Clue", industry: "Hollywood", rating: "7.2/10", watch: "Paramount+", desc: "Six guests are invited to a mansion where their host is murdered, forcing them to find the killer." },
    { title: "Murder on the Orient Express", industry: "Hollywood", rating: "6.5/10", watch: "Disney+ Hotstar", desc: "Hercule Poirot investigates a murder onboard a luxury train traveling across Europe." },
    { title: "Death on the Nile", industry: "Hollywood", rating: "6.3/10", watch: "Disney+ Hotstar", desc: "Poirot's Egyptian vacation turns into a search for a murderer on a river steamer." },
    { title: "The Girl with the Dragon Tattoo", industry: "Hollywood", rating: "7.8/10", watch: "Prime Video", desc: "A journalist and a computer hacker search for a woman missing for forty years." },
    { title: "The Usual Suspects", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A sole survivor tells the twisting tale of five criminals who met in a police lineup." },
    { title: "Rear Window", industry: "Hollywood", rating: "8.5/10", watch: "Prime Video", desc: "A wheelchair-bound photographer spies on his neighbors and becomes convinced one committed murder." },
    { title: "Vertigo", industry: "Hollywood", rating: "8.3/10", watch: "Prime Video", desc: "A former detective with acrophobia is hired to investigate the peculiar activities of a friend's wife." },
    { title: "Chinatown", industry: "Hollywood", rating: "8.2/10", watch: "Paramount+", desc: "A private detective hired to expose an adulterer finds himself caught in corruption and murder." },
    { title: "L.A. Confidential", industry: "Hollywood", rating: "8.2/10", watch: "Prime Video", desc: "Three LAPD officers investigate a series of murders with their own brand of justice." },
    { title: "The Name of the Rose", industry: "Hollywood", rating: "7.7/10", watch: "Prime Video", desc: "An 14th-century friar investigates a series of mysterious deaths at an isolated abbey." },
    { title: "Brick", industry: "Hollywood", rating: "7.2/10", watch: "Prime Video", desc: "A teenage loner investigates the sudden disappearance of his ex-girlfriend in a high school underworld." },
    { title: "Kiss Kiss Bang Bang", industry: "Hollywood", rating: "7.5/10", watch: "Prime Video", desc: "A petty thief posing as an actor gets entangled in a real murder case alongside a private eye." },
    { title: "The Nice Guys", industry: "Hollywood", rating: "7.4/10", watch: "Prime Video", desc: "In 1970s LA, a mismatched pair of private eyes investigate a missing girl and a dead porn star." },
    { title: "See How They Run", industry: "Hollywood", rating: "6.5/10", watch: "Disney+ Hotstar", desc: "In 1950s London, plans for a movie version of a smash-hit play come to an abrupt halt after a murder." },
    { title: "Decision to Leave", industry: "Hollywood", rating: "7.3/10", watch: "MUBI", desc: "A detective investigating a man's death in the mountains meets the dead man's mysterious wife." },
    { title: "The Maltese Falcon", industry: "Hollywood", rating: "8.0/10", watch: "Prime Video", desc: "Private detective Sam Spade deals with three eccentric criminals who search for a jewel-encrusted statuette." },
    { title: "The Big Sleep", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "Private eye Philip Marlowe is hired by a wealthy general to resolve the gambling debts of his daughter." },
    { title: "Laura", industry: "Hollywood", rating: "7.9/10", watch: "Prime Video", desc: "A police detective falls in love with the portrait of a woman whose murder he is investigating." },
    { title: "Double Indemnity", industry: "Hollywood", rating: "8.3/10", watch: "Prime Video", desc: "An insurance salesman gets seduced into a scheme of murder and insurance fraud." },
    { title: "Identity", industry: "Hollywood", rating: "7.3/10", watch: "SonyLIV", desc: "Ten strangers stranded at a remote Nevada motel are killed off one by one." },
    { title: "Secret in Their Eyes", industry: "Hollywood", rating: "6.3/10", watch: "Prime Video", desc: "A tight-knit team of investigators is torn apart when they discover one of their daughters was murdered." },
    { title: "Under the Silver Lake", industry: "Hollywood", rating: "6.5/10", watch: "Prime Video", desc: "Sam investigates the sudden disappearance of his neighbor, leading to a surreal LA conspiracy." },

    // Bollywood
    { title: "Detective Byomkesh Bakshy!", industry: "Bollywood", rating: "7.7/10", watch: "Prime Video", desc: "In 1940s Kolkata, a fresh college graduate takes on his first case involving a missing chemist." },
    { title: "Gupt: The Hidden Truth", industry: "Bollywood", rating: "7.3/10", watch: "Prime Video", desc: "Framed for his stepfather's murder, Sahil escapes from prison to track down the true killer." },
    { title: "100 Days", industry: "Bollywood", rating: "6.7/10", watch: "Prime Video", desc: "A woman with extrasensory vision sees murder flashes and attempts to stop them before they happen." },
    { title: "Kaun?", industry: "Bollywood", rating: "7.8/10", watch: "YouTube", desc: "A woman alone in a house during a rainstorm receives a mysterious visitor claiming to seek shelter." },
    { title: "36 China Town", industry: "Bollywood", rating: "5.7/10", watch: "Prime Video", desc: "A casino owner is murdered in her mansion, leaving behind multiple suspects with distinct motives." },
    { title: "Teesri Manzil", industry: "Bollywood", rating: "7.5/10", watch: "Prime Video", desc: "A musician is blamed for a girl's fatal fall from a hotel balcony and sets out to prove his innocence." },
    { title: "Jewel Thief", industry: "Bollywood", rating: "7.9/10", watch: "Prime Video", desc: "A young man is mistaken for an infamous jewel thief and gets drawn into a web of deceit." },
    { title: "Gumnaam", industry: "Bollywood", rating: "7.0/10", watch: "Prime Video", desc: "Eight people win a trip to an isolated island, where they get killed off one by one following a song." },
    { title: "Samay: When Time Strikes", industry: "Bollywood", rating: "7.3/10", watch: "YouTube", desc: "A top CID officer races against time to catch a meticulous serial killer leaving countdown clues." },
    { title: "Rahasya", industry: "Bollywood", rating: "7.6/10", watch: "ZEE5", desc: "A CBI officer investigates the murder of an 18-year-old girl found dead in her bedroom." },
    { title: "Silence... Can You Hear It?", industry: "Bollywood", rating: "6.6/10", watch: "ZEE5", desc: "An impatient undercover cop heads a special team investigating the murder of a politician's daughter." },
    { title: "Cuttputlli", industry: "Bollywood", rating: "5.8/10", watch: "Disney+ Hotstar", desc: "A small-town rookie cop uses his knowledge of serial killers to track a murderer targeting schoolgirls." },
    { title: "Kahaani 2", industry: "Bollywood", rating: "6.6/10", watch: "ZEE5", desc: "A woman wanted for kidnapping and murder gets hit by a car, opening up an inspector's past." },
    { title: "Bob Biswas", industry: "Bollywood", rating: "6.8/10", watch: "ZEE5", desc: "An insurance agent wakes up from an extended coma with amnesia, forgetting he was a hitman." },
    { title: "Benaam", industry: "Bollywood", rating: "6.5/10", watch: "Prime Video", desc: "A man saves an ambassador's life and receives anonymous extortion calls threatening his child." },
    { title: "Khakee", industry: "Bollywood", rating: "7.4/10", watch: "Prime Video", desc: "A police team transporting a dangerous prisoner comes under attack by a mysterious gunman." },
    { title: "Talvar", industry: "Bollywood", rating: "8.1/10", watch: "Disney+ Hotstar", desc: "An experienced investigator deals with conflicting theories surrounding a double murder case." },
    { title: "The Tashkent Files", industry: "Bollywood", rating: "7.3/10", watch: "ZEE5", desc: "A journalist investigates the mysterious death of India's second Prime Minister, Lal Bahadur Shastri." },
    { title: "Forensic (Hindi)", industry: "Bollywood", rating: "6.3/10", watch: "ZEE5", desc: "A forensic scientist uses small physical clues to trace a killer abducting young girls." },
    { title: "Bypass Road", industry: "Bollywood", rating: "5.5/10", watch: "Prime Video", desc: "A paraplegic fashion photographer becomes the primary target of a killer linked to a model's murder." },
    { title: "Fox", industry: "Bollywood", rating: "4.8/10", watch: "Prime Video", desc: "A successful criminal lawyer gets trapped in a cat-and-mouse game after taking a strange case." },
    { title: "Chehre", industry: "Bollywood", rating: "6.5/10", watch: "Prime Video", desc: "An executive stranded in a blizzard takes shelter in a house where retired lawyers conduct a mock trial." },
    { title: "Dobaaraa", industry: "Bollywood", rating: "6.4/10", watch: "Netflix", desc: "A woman saves a boy's life during a storm through a TV set 25 years ago, altering her present." },
    { title: "Nail Polish", industry: "Bollywood", rating: "7.3/10", watch: "ZEE5", desc: "A high-profile defense lawyer takes on a murder case where the accused suffers a personality split." },
    { title: "Hit: The First Case", industry: "Bollywood", rating: "6.8/10", watch: "Netflix", desc: "A cop battling PTSD races against the clock to locate a missing young woman on a highway." }
  ]
};

// DOM Elements
const selectionScreen = document.getElementById("selectionScreen");
const shufflingScreen = document.getElementById("shufflingScreen");
const resultScreen = document.getElementById("resultScreen");

const bubblesGrid = document.getElementById("bubblesGrid");
const shuffleDisplay = document.getElementById("shuffleDisplay");

const resGenre = document.getElementById("resGenre");
const resIndustry = document.getElementById("resIndustry");
const resTitle = document.getElementById("resTitle");
const resRating = document.getElementById("resRating");
const resWatch = document.getElementById("resWatch");
const resDesc = document.getElementById("resDesc");
const pickAgainBtn = document.getElementById("pickAgainBtn");

const beepAudio = document.getElementById("beepSound");

// Initialize Bubbles
function initBubbles() {
  const genres = Object.keys(movieDatabase);
  bubblesGrid.innerHTML = "";

  genres.forEach(genre => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = genre;
    bubble.addEventListener("click", () => startShuffling(genre));
    bubblesGrid.appendChild(bubble);
  });
}

// Shuffling Logic
function startShuffling(genre) {
  selectionScreen.classList.add("hidden");
  shufflingScreen.classList.remove("hidden");

  const moviePool = movieDatabase[genre];
  let counter = 0;
  const totalShuffles = 25; // How many titles flash before stopping
  const speed = 80; // Delay between shuffles (ms)

  const shuffleInterval = setInterval(() => {
    const randomTempIndex = Math.floor(Math.random() * moviePool.length);
    shuffleDisplay.innerText = moviePool[randomTempIndex].title;
    counter++;

    if (counter >= totalShuffles) {
      clearInterval(shuffleInterval);
      
      // Select Final Pick
      const finalPick = moviePool[Math.floor(Math.random() * moviePool.length)];
      
      // Play Sound
      if (beepAudio) {
        beepAudio.currentTime = 0;
        beepAudio.play().catch(e => console.log("Audio play deferred:", e));
      }

      // Trigger Confetti
      triggerConfetti();

      // Show Result
      setTimeout(() => {
        showResult(genre, finalPick);
      }, 400);
    }
  }, speed);
}

// Display Result Details
function showResult(genre, movie) {
  shufflingScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  resGenre.innerText = genre;
  resIndustry.innerText = movie.industry;
  resTitle.innerText = movie.title;
  resRating.innerText = movie.rating;
  resWatch.innerText = movie.watch;
  resDesc.innerText = movie.desc;
}

// Confetti Effect Function
function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#0284c7', '#7dd3fc', '#ffffff', '#3874ff']
    });
  }
}

// Restart Pick
pickAgainBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  selectionScreen.classList.remove("hidden");
});

// Run Setup on Load
initBubbles();
