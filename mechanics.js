const mechanics = [

    {
        name: "Institutional White",
        hex: "#F8F8F8",
        theme: "Sameness / similarity",
        high: "Homophone of the hint.",
        highExample: "hi → high",
        middle: "Exact same as the hint, letter for letter.",
        middleExample: "linglox → linglox",
        low: "Synonym of the hint.",
        lowExample: "bottom → low",
        checker: null,
        notes: ""
    },

    {
        name: "Really Black",
        hex: "#111111",
        theme: "Opposite / reversal",
        high: "Reverse the spelling, then sound it out into a new complete word.",
        highExample: "tube → boot",
        middle: "Reverse the spelling. Sometimes a palindrome.",
        middleExample: "wolf → flow",
        low: "Antonym of the hint.",
        lowExample: "hello → goodbye",
        checker: "Makes the primary color/height mechanic run backward.",
        notes: ""
    },

    {
        name: "Really Red",
        hex: "#FF0000",
        theme: "Subtraction",
        high: "Remove letters while preserving sound — answer is a homophone of part of the hint.",
        highExample: "brute → route",
        middle: "Remove letters while preserving the spelling of what remains.",
        middleExample: "remove → emo",
        low: "Reduce the whole to a part conceptually.",
        lowExample: "hand → finger",
        checker: "Lowers or decreases a related property of the primary color + height.",
        notes: "Opposite of Really Blue."
    },

    {
        name: "Really Blue",
        hex: "#0000FF",
        theme: "Addition",
        high: "Answer contains a homophone of the hint.",
        highExample: "eye → idea",
        middle: "Add letters while preserving the spelling of the rest.",
        middleExample: "add → addition",
        low: "Increase a part to the whole conceptually.",
        lowExample: "flower → bouquet",
        checker: "Raises or increases a related property.",
        notes: "Opposite of Really Red."
    },

    {
        name: "New Yeller",
        hex: "#FFFF00",
        theme: "Mixing / scrambling",
        high: "Syllables moved around.",
        highExample: "dark → card",
        middle: "Anagram of the hint.",
        middleExample: "nag a ram → anagram",
        low: "Physically scrambled or taken apart.",
        lowExample: "meat → minced meat",
        checker: "Moves or scrambles a related property.",
        notes: ""
    },

    {
        name: "Magenta",
        hex: "#AA00AA",
        theme: "Change into something similar yet different",
        high: "Rhyme, near-rhyme, or phonetic mutation.",
        highExample: "rhyme → time",
        middle: "Change a few letters while preserving a structural anchor.",
        middleExample: "verdict → predict",
        low: "Replace part of the hint conceptually.",
        lowExample: "orange → grapefruit",
        checker: null,
        notes: ""
    },

    {
        name: "Hot Pink",
        hex: "#FF00BF",
        theme: "Hypernym → hyponym",
        high: "Prototypical or canonical example from a phonetic category.",
        highExample: "diphthong → ow",
        middle: "Prototypical example from a grammatical category or part of speech.",
        middleExample: "article → the",
        low: "Prototypical example from a real-world or semantic category.",
        lowExample: "planet → mars",
        checker: null,
        notes: "Opposite of Lime Green."
    },

    {
        name: "Lime Green",
        hex: "#00FF00",
        theme: "Hyponym → hypernym",
        high: "Phonetic category of the hint.",
        highExample: "fire → triphthong",
        middle: "Grammatical category of the hint.",
        middleExample: "hey → interjection",
        low: "Real-world or semantic category of the hint.",
        lowExample: "peridot → gemstone",
        checker: null,
        notes: "Opposite of Hot Pink."
    },

    {
        name: "Reddish Brown",
        hex: "#694028",
        theme: "Time / modern equivalents",
        high: "Phonetically modern equivalent.",
        highExample: "mistress → missus",
        middle: "Modern equivalent.",
        middleExample: "hath → have",
        low: "Conceptual modern equivalent after time passes.",
        lowExample: "sapling → tree",
        checker: "Really Black checkers flip this to run backward in time instead of forward.",
        notes: ""
    },

    {
        name: "Burlap",
        hex: "#C7AC78",
        theme: "Combination",
        high: "Phonetic combination, portmanteau, or pun.",
        highExample: "oh + pen → open",
        middle: "Combination of words into one, with spelling preserved.",
        middleExample: "for + wards → forwards",
        low: "Combination of the hints physically or conceptually.",
        lowExample: "bread + sausage → hotdog",
        checker: null,
        notes: "The number on the block represents the distance to each part."
    },

    {
        name: "Deep Orange",
        hex: "#FFB000",
        theme: "Numbers and ciphers",
        high: "Combines Middle Deep Orange + High Institutional White: decrypt the cipher, then find a homophone.",
        highExample: "235 → hey → hay",
        middle: "Transliterate numbers into letters using the cipher.",
        middleExample: "5972 → ripe",
        low: "Numerical answer to a math equation.",
        lowExample: "1 + 1 → 2",
        checker: null,
        notes: "Default cipher is 'thecryptic'; other areas may use their own."
    },

    {
        name: "Medium Stone Grey",
        hex: "#A3A2A5",
        theme: "Chain Indicator",
        high: "Chain the hint together — remove spaces between letters/sounds or add hyphens.",
        highExample: "merry go round → merry-go-round",
        middle: "Solve the chain connected via the prompt.",
        middleExample: "",
        low: "Make the prompt more chain-like, conceptually or lexically.",
        lowExample: "rope → chain",
        checker: null,
        notes: "Also known as the Chain Indicator. Can be a standalone color mechanic."
    },

    {
        name: "Earth Green",
        hex: "#27462D",
        theme: "Environmental cues",
        high: "What the hint points to, phonetically.",
        highExample: "back → [letter I on wall] → eye",
        middle: "What the hint points to, letter-wise.",
        middleExample: "back → [letter I on wall] → i",
        low: "What the hint physically or conceptually points to.",
        lowExample: "back → [letter I on wall] → letter",
        checker: "Makes the prompt refer to something in the environment, then applies the primary mechanic.",
        notes: ""
    },

    {
        name: "Dark Stone Grey",
        hex: "#635F62",
        theme: "Literal questions",
        high: "Answer the question pertaining to the prompt.",
        highExample: "what wiki are you on right now? → linglox wiki",
        middle: "Answer the question pertaining to the prompt.",
        middleExample: "",
        low: "Answer the question pertaining to the prompt.",
        lowExample: "",
        checker: null,
        notes: "Height is irrelevant. Does not require a question mark."
    },

    {
        name: "Toothpaste",
        hex: "#00FFFF",
        theme: "Symbols, emoji, and Unicode",
        high: "The symbol's homophone.",
        highExample: "1/2 → have",
        middle: "The symbol or character spelled out.",
        middleExample: "$ → dollar",
        low: "The symbol's meaning.",
        lowExample: "= → equality",
        checker: null,
        notes: ""
    },

    {
        name: "Slime Green",
        hex: "#506D54",
        theme: "Containment",
        high: "Answer contains the hint's sound.",
        highExample: "aisle → file",
        middle: "Answer contains the hint.",
        middleExample: "atom → subatomic",
        low: "Answer contains the hint conceptually.",
        lowExample: "letter → envelope",
        checker: "Forces inclusion of the prompt word's letters in the answer at least once.",
        notes: ""
    },

    {
        name: "Carnation Pink",
        hex: "#FF98DC",
        theme: "Breaking words apart / complexity",
        high: "Phonetic breakup or mondegreen.",
        highExample: "listen → list and",
        middle: "Syllabic breakup / homophonic segmentation.",
        middleExample: "hike → high k",
        low: "More complex conceptual version of the hint.",
        lowExample: "human → cyborg",
        checker: null,
        notes: "Possibly opposite of Burgundy."
    },

    {
        name: "Crimson",
        hex: "#970000",
        theme: "Patterns",
        high: "Type 1: ignores height rules and follows the mechanic of whatever it is tethered to at that height. Type 2: follows a shared pattern/theme with other Crimson prompts in the row.",
        highExample: "",
        middle: "Type 1: follows the tethered mechanic. Type 2: follows the shared row pattern.",
        middleExample: "",
        low: "Type 1: follows the tethered mechanic. Type 2: follows the shared row pattern.",
        lowExample: "",
        checker: null,
        notes: "Two distinct puzzle types."
    },

    {
        name: "Mint",
        hex: "#B1E5A6",
        theme: "Memory",
        high: "Same hint and answer as another High prompt elsewhere.",
        highExample: "",
        middle: "Same hint and answer as another Middle prompt elsewhere.",
        middleExample: "",
        low: "Same hint and answer as another Low prompt elsewhere.",
        lowExample: "",
        checker: null,
        notes: "Variant: Mint Chains mimic another chain elsewhere."
    },

    {
        name: "Pastel Blue",
        hex: "#80BBDB",
        theme: "Environmental / spatial",
        high: "Look the direction the block faces and find the next valid color going upward. Take each color's first letters, counting according to the block's height.",
        highExample: "",
        middle: "Same environmental mechanic regardless of height.",
        middleExample: "",
        low: "Same environmental mechanic regardless of height.",
        lowExample: "",
        checker: null,
        notes: "Glass/transparent blocks are excluded. A block-sized gap represents a space."
    },

    {
        name: "Bright Red",
        hex: "#C4281C",
        theme: "Halving",
        high: "Half of the hint's sounds.",
        highExample: "knight → knee",
        middle: "Half of the hint's spelling.",
        middleExample: "halftime → half",
        low: "Half of the hint semantically or conceptually.",
        lowExample: "ten → five",
        checker: null,
        notes: "Opposite of Deep Blue."
    },

    {
        name: "Deep Blue",
        hex: "#2154B9",
        theme: "Doubling",
        high: "Double the hint's sounds.",
        highExample: "toe → tofu",
        middle: "Double the hint's letters.",
        middleExample: "check → checkpoint",
        low: "Double the hint conceptually.",
        lowExample: "solo → duo",
        checker: null,
        notes: "Opposite of Bright Red."
    },

    {
        name: "Pastel Green",
        hex: "#CCFFCC",
        theme: "Environmental joke",
        high: "Environmental joke.",
        highExample: "prompt above a block reading 'ride' → override",
        middle: "Environmental joke.",
        middleExample: "",
        low: "Environmental joke.",
        lowExample: "",
        checker: null,
        notes: "Single-height/environmental mechanic."
    },

    {
        name: "Mauve",
        hex: "#E0B2D0",
        theme: "Wordplay",
        high: "Use a clue hidden in the hint or adjacent block to determine the transformation.",
        highExample: "northern + Really Red → no 'r' thern → then",
        middle: "Use a clue hidden in the hint or adjacent block.",
        middleExample: "",
        low: "Use a clue hidden in the hint or adjacent block.",
        lowExample: "",
        checker: null,
        notes: "Same general mechanic across heights."
    },

    {
        name: "Reflective",
        hex: null,
        theme: "Exact sameness",
        high: "Answer is exactly the hint.",
        highExample: "this → this",
        middle: "Answer is exactly the hint.",
        middleExample: "",
        low: "Answer is exactly the hint.",
        lowExample: "",
        checker: null,
        notes: "Same rule at every height. Functionally similar to Middle Institutional White."
    },

    {
        name: "Terra Cotta",
        hex: "#BE6862",
        theme: "Association / completion",
        high: "Continuation of a given phrase.",
        highExample: "curiosity killed the → cat",
        middle: "Continuation of a given word.",
        middleExample: "hel → lo",
        low: "Continuation of a concept.",
        lowExample: "cookies and → cream",
        checker: null,
        notes: ""
    },

    {
        name: "Flint",
        hex: "#69665C",
        theme: "Speeding things up",
        high: "Sped-up pronunciation, usually a contraction.",
        highExample: "do not → don't",
        middle: "Sped-up spelling, usually an acronym or text speak.",
        middleExample: "be right back → brb",
        low: "Sped-up version of the concept or object.",
        lowExample: "walking → running",
        checker: null,
        notes: ""
    },

    {
        name: "Lavender",
        hex: "#8C5B9F",
        theme: "Creation",
        high: "The sound the hint's object would make.",
        highExample: "cow → moo",
        middle: "The action the hint can do, usually a verb.",
        middleExample: "plant → grow",
        low: "What the hint can physically produce.",
        lowExample: "chicken → eggs",
        checker: null,
        notes: ""
    },

    {
        name: "Alder",
        hex: "#B480FF",
        theme: "Gender swapping",
        high: "Gender-swap the spelling, then find a homophone.",
        highExample: "",
        middle: "Literal gender swap of spelling.",
        middleExample: "Hernia → Hisnia",
        low: "Gender-swap the concept.",
        lowExample: "",
        checker: "Really Blue adds gender; Really Red removes gender.",
        notes: ""
    },

    {
        name: "Cork",
        hex: "#BC9B5D",
        theme: "Slurring / smearing",
        high: "Slur or smear the sound by pronouncing with a slack jaw.",
        highExample: "bled → blared",
        middle: "Slur or smear the letters by interpreting one character as a similar-looking one.",
        middleExample: "smart → smnamf",
        low: "Slur or smear the concept.",
        lowExample: "purple → blurred",
        checker: null,
        notes: ""
    },

    {
        name: "Burgundy",
        hex: "#883E3E",
        theme: "Simplicity",
        high: "Simpler homophone of the prompt.",
        highExample: "dough → doe",
        middle: "Simplified spelling.",
        middleExample: "asterisk → asterik",
        low: "Simpler synonym of the prompt.",
        lowExample: "above → meta",
        checker: null,
        notes: "Possibly opposite of Carnation Pink."
    },

    {
        name: "Wheat",
        hex: "#F1E7C7",
        theme: "Gentrification / simplification",
        high: "Gentrify pronunciation into a more basic or direct sound.",
        highExample: "hourly → ally",
        middle: "Gentrify spelling to match pronunciation.",
        middleExample: "exponent → eckspownint",
        low: "Gentrify the concept into a more literal version.",
        lowExample: "purple → redblue",
        checker: null,
        notes: "Uses 'gentrification' in a Linglox-specific sense."
    },

    {
        name: "Dark Green",
        hex: "#287F47",
        theme: "Intensifying",
        high: "Intensified version sound-wise.",
        highExample: "sigh → wheeze",
        middle: "Intensified or more extreme noun.",
        middleExample: "watergun → handgun",
        low: "Intensified version using verbs.",
        lowExample: "hit → punch",
        checker: null,
        notes: ""
    },

    {
        name: "Oyster",
        hex: "#BBB3B2",
        theme: "Simplest form",
        high: "Simplest sound-wise form.",
        highExample: "magenta → much",
        middle: "Simplest letter-wise form.",
        middleExample: "purple → purp",
        low: "Simplest conceptual form.",
        lowExample: "machine → lever",
        checker: null,
        notes: "Results may be non-words but must remain recognizable."
    },

    {
        name: "Dark Orange",
        hex: "#A05F35",
        theme: "Binary code",
        high: "Homophone of the prompt, then translated to binary.",
        highExample: "see bee ey → cba → binary",
        middle: "Prompt translated directly to binary.",
        middleExample: "binary → [binary]",
        low: "Same as Low Hot Pink's answer, then translated to binary.",
        lowExample: "the → article → [binary]",
        checker: null,
        notes: "A cipher solver is recommended."
    },

    {
        name: "Ghost Grey",
        hex: "#CACBD1",
        theme: "Messiness",
        high: "Mondegreen-style split into valid words.",
        highExample: "hyperbole → hyper bowl",
        middle: "Deliberate typo of the hint.",
        middleExample: "the → teh",
        low: "Messy or degraded real-world outcome.",
        lowExample: "clean room → mess",
        checker: null,
        notes: "Only seen in The Graveyard."
    },

    {
        name: "Pastel Blue-Green",
        hex: "#81F3E9",
        theme: "Environmental",
        high: "WIP.",
        highExample: "",
        middle: "WIP.",
        middleExample: "",
        low: "WIP.",
        lowExample: "",
        checker: null,
        notes: "Mechanics currently unclear."
    },

    {
        name: "Gold",
        hex: "#EFB838",
        theme: "Adding value",
        high: "Add value through a phonetic change.",
        highExample: "pride → price",
        middle: "Add value through a spelling change.",
        middleExample: "demand → diamond",
        low: "Add value through a concept change.",
        lowExample: "silver medal → gold medal",
        checker: null,
        notes: "The answer must always be 'better' than the hint."
    },

    {
        name: "Cadet Blue",
        hex: "#9FADC0",
        theme: "Endings",
        high: "Homophone of the end of the hint.",
        highExample: "violence → lance",
        middle: "End spelling or suffix of the hint.",
        middleExample: "dividend → end",
        low: "Physical or conceptual end of the hint.",
        lowExample: "pencil → tip",
        checker: "Restricts the primary mechanic to only affect the end of the word.",
        notes: "Opposite of Light Red."
    },

    {
        name: "Royal Purple",
        hex: "#6225D1",
        theme: "Modifying / elevating status",
        high: "Sound modification into a more complex or refined word.",
        highExample: "kite → knight",
        middle: "Letter modification or adjustment into a new word.",
        middleExample: "royal → rural",
        low: "Conceptual modification into a more elevated or higher-status concept.",
        lowExample: "peasant → king",
        checker: null,
        notes: ""
    },

    {
        name: "Sunrise",
        hex: "#D490BD",
        theme: "Sharing",
        high: "Shared sound between the prompt's words.",
        highExample: "play & paper → pay",
        middle: "Shared letters between the prompt's words.",
        middleExample: "finest & refined → fine",
        low: "Shared concept between the prompt's words.",
        lowExample: "purple & green → blue",
        checker: null,
        notes: ""
    },

    {
        name: "Storm Blue",
        hex: "#335882",
        theme: "Destabilizing",
        high: "Destabilize the hint's sound.",
        highExample: "hall → mole",
        middle: "Destabilize the hint's spelling.",
        middleExample: "blueberry → blhoobaerrie",
        low: "Destabilize the hint's concept.",
        lowExample: "order → chaos",
        checker: null,
        notes: "One of the harder colors."
    },

    {
        name: "Grime",
        hex: "#7F8E64",
        theme: "Restricting",
        high: "Restrict jaw and lip movement while saying the word aloud.",
        highExample: "mourn → RNA",
        middle: "Restrict letters to construct a new valid word.",
        middleExample: "and & additive → ad",
        low: "Restrict conceptually by adding a limit or regulation.",
        lowExample: "child → grounded",
        checker: null,
        notes: ""
    },

    {
        name: "Smoky Grey",
        hex: "#5B5D69",
        theme: "Interpretation",
        high: "Interpret the hint's sounds into letters.",
        highExample: "el oh el → lol",
        middle: "Interpret letters from leetspeak or symbols in the hint.",
        middleExample: "{|-|3$$ → chess",
        low: "Interpret the concept the hint conveys.",
        lowExample: "wave → hi",
        checker: null,
        notes: "Has special Neon and Clue-color variants."
    },

    {
        name: "Shamrock",
        hex: "#5B9A4C",
        theme: "Height/color deception",
        high: "May lie about the base block's height or color entirely.",
        highExample: "",
        middle: "May lie about the base block's height or color entirely.",
        middleExample: "",
        low: "May lie about the base block's height or color entirely.",
        lowExample: "",
        checker: null,
        notes: "Checker-exclusive color."
    },

    {
        name: "Seashell",
        hex: "#E9DADA",
        theme: "Tracking",
        high: "N/A.",
        highExample: "",
        middle: "Track keyboard key movement to spell letters or words.",
        middleExample: "zqadec yn → hi",
        low: "Track patterns between connected prompts.",
        lowExample: "mandarin, apple, dragon → fruit",
        checker: null,
        notes: ""
    },

    {
        name: "Sea Green",
        hex: "#348E40",
        theme: "Duplication",
        high: "Duplicate a sound in the hint's phonetics.",
        highExample: "ground → grounded",
        middle: "Duplicate any letter(s) in the hint's spelling.",
        middleExample: "realy bu → really blue",
        low: "Duplicate the hint conceptually.",
        lowExample: "book → duology",
        checker: null,
        notes: ""
    },

    {
        name: "Quill Grey",
        hex: "#DFDFDE",
        theme: "Sharpness",
        high: "Near homophone via a small letter edit, or a sharper sound.",
        highExample: "c → key",
        middle: "Undiscovered.",
        middleExample: "",
        low: "Sharper conceptual version of the hint.",
        lowExample: "wood → spear",
        checker: null,
        notes: "Only seen in The Graveyard. Similar to Magenta; opposite of Artichoke."
    },

    {
        name: "Sand Red",
        hex: "#957977",
        theme: "Lime Green → Hot Pink",
        high: "Apply Lime Green's phonetic mechanic, then Hot Pink's.",
        highExample: "hi → diphthong → bye",
        middle: "Apply Lime Green's grammatical mechanic, then Hot Pink's.",
        middleExample: "the → article → a",
        low: "Apply Lime Green's conceptual mechanic, then Hot Pink's.",
        lowExample: "chocolate → candy → jawbreaker",
        checker: null,
        notes: ""
    },

    {
        name: "Sand Blue",
        hex: "#74869D",
        theme: "Holes / gaps",
        high: "Number of holes or gaps in the prompt's sound.",
        highExample: "metaphysical → 2",
        middle: "Number of holes or gaps in the prompt's spelling.",
        middleExample: "diver → 2",
        low: "Number of holes in the prompt conceptually.",
        lowExample: "donut → 1",
        checker: null,
        notes: "Answers are almost always numbers."
    },

    {
        name: "Sand Green",
        hex: "#789082",
        theme: "Describing mechanics",
        high: "Names the High mechanic of the color mentioned.",
        highExample: "institutional white → homophone",
        middle: "Names the Middle mechanic of the color mentioned.",
        middleExample: "institutional white → same spelling",
        low: "Names the Low mechanic of the color mentioned.",
        lowExample: "institutional white → synonym",
        checker: null,
        notes: ""
    },

    {
        name: "Salmon",
        hex: "#FF9495",
        theme: "Identifying mechanics",
        high: "Names which High color defines the given mechanic.",
        highExample: "top → opp → red",
        middle: "Names which Middle color defines the given mechanic.",
        middleExample: "bled → bleed → blue",
        low: "Names which Low color defines the given mechanic.",
        lowExample: "purple → green → magenta",
        checker: null,
        notes: ""
    },

    {
        name: "Medium Green",
        hex: "#A1C48C",
        theme: "Adding equally on both sides",
        high: "Add the same amount of sounds to both sides of the word.",
        highExample: "mat → antimaterial",
        middle: "Add the same amount of letters to both sides of the word.",
        middleExample: "norm → abnormal",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: "Opposite of Dusty Rose."
    },

    {
        name: "Fossil",
        hex: "#9FA1AC",
        theme: "Shifting",
        high: "Shift the hint's sound by rearranging sounds.",
        highExample: "loaf → foal",
        middle: "Shift the hint's spelling, typically moving the front letter to the back.",
        middleExample: "range → anger",
        low: "Shift the hint conceptually.",
        lowExample: "red → blue",
        checker: null,
        notes: ""
    },

    {
        name: "Dusty Rose",
        hex: "#A34B4B",
        theme: "Removing equally on both sides",
        high: "Remove the same amount of sounds from both sides.",
        highExample: "believer → leave",
        middle: "Remove the same amount of letters from both sides.",
        middleExample: "antimatters → mat",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: "Opposite of Medium Green."
    },

    {
        name: "Cyan",
        hex: "#04AFEC",
        theme: "Keeping structures",
        high: "Word with the same phonetic structure as the prompt.",
        highExample: "hate → shake",
        middle: "Word with the same spelling structure, such as the same vowel/consonant pattern.",
        middleExample: "word → dark",
        low: "Word that is conceptually similar in structure.",
        lowExample: "donut → bagel",
        checker: null,
        notes: ""
    },

    {
        name: "Rust",
        hex: "#8F4C2A",
        theme: "Damage",
        high: "N/A.",
        highExample: "",
        middle: "N/A.",
        middleExample: "",
        low: "Conceptually damage the prompt.",
        lowExample: "mobility → paralyzed",
        checker: null,
        notes: "Low-only color. Opposite of Lapis."
    },

    {
        name: "Bronze",
        hex: "#7E683F",
        theme: "Shared components",
        high: "Answer shares sound components with the prompt.",
        highExample: "solid → losses",
        middle: "Answer shares letter components with the prompt.",
        middleExample: "shots → hotshots",
        low: "Answer shares conceptual components with the prompt.",
        lowExample: "planet → meteor",
        checker: null,
        notes: ""
    },

    {
        name: "Tawny",
        hex: "#965555",
        theme: "Segmentation",
        high: "Phonetic spelling-out or chunking by sound.",
        highExample: "yellow → yee l oh",
        middle: "Re-segmentation into two or more valid words.",
        middleExample: "pushpin → push pin",
        low: "Categorical decomposition into basic components.",
        lowExample: "keyboard → keys",
        checker: null,
        notes: "Found in The Unaffiliated and The Graveyard."
    },

    {
        name: "Medium Red",
        hex: "#DA867A",
        theme: "Removing uniqueness",
        high: "Remove the prompt's phonetic uniqueness.",
        highExample: "meanie → me me",
        middle: "Remove the prompt's letter uniqueness.",
        middleExample: "totem → rotor",
        low: "Remove the prompt's conceptual uniqueness.",
        lowExample: "rainbow → monochrome",
        checker: null,
        notes: ""
    },

    {
        name: "Bright Violet",
        hex: "#6B327C",
        theme: "Definitions",
        high: "Definition of a sound — what makes the sound in the hint.",
        highExample: "rip → paper",
        middle: "The word matching a given definition.",
        middleExample: "a feeling or state of intense excitement → euphoria",
        low: "Combination of concepts into a specific word or concept.",
        lowExample: "black and white → grey",
        checker: null,
        notes: ""
    },

    {
        name: "Beige",
        hex: "#CABFA3",
        theme: "TEOR symbols",
        high: "Answer according to the TEOR symbol(s) shown.",
        highExample: "bay {+} → beige",
        middle: "Answer according to the TEOR symbol(s) shown.",
        middleExample: "",
        low: "Answer according to the TEOR symbol(s) shown.",
        lowExample: "",
        checker: null,
        notes: "Heightless; depends entirely on The Edge of Reality symbols."
    },

    {
        name: "Pastel Light Blue",
        hex: "#AFDDFF",
        theme: "Puns",
        high: "Pun created by adding sounds to the prompt.",
        highExample: "",
        middle: "Pun created by adding letters to the prompt.",
        middleExample: "",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: "Possibly no longer used in-game."
    },

    {
        name: "Maroon",
        hex: "#750000",
        theme: "Context / nearby boxes",
        high: "Sound or expressive shift constrained by a nearby descriptor box.",
        highExample: "gasp [louder] → scream",
        middle: "Apply an opcode from a nearby box.",
        middleExample: "hint [remove] → in",
        low: "Constrained by a theme, palette, or topic shown nearby.",
        lowExample: "shade [red] → maroon",
        checker: null,
        notes: "Only seen in The Graveyard."
    },

    {
        name: "Linen",
        hex: "#AF9483",
        theme: "Outlines",
        high: "The prompt is the phonetic outline — beginning + end — of the answer.",
        highExample: "he → history",
        middle: "The prompt is the spelling outline — beginning + end — of the answer.",
        middleExample: "same → sesame",
        low: "The prompt is the conceptual outline of the answer.",
        lowExample: "red purple → rainbow",
        checker: null,
        notes: ""
    },

    {
        name: "Fog",
        hex: "#C7D4E4",
        theme: "Obscuring words",
        high: "Replace sounds in the prompt with question marks.",
        highExample: "right → ??ite",
        middle: "Replace characters in the hint with question marks.",
        middleExample: "reveal → re??al",
        low: "Replace concepts in the prompt with question marks.",
        lowExample: "purple → red & ?????",
        checker: null,
        notes: ""
    },

    {
        name: "Buttermilk",
        hex: "#FEF3BB",
        theme: "Substitution",
        high: "Acts as a different color.",
        highExample: "",
        middle: "Acts as a different color.",
        middleExample: "",
        low: "Acts as a different color.",
        lowExample: "",
        checker: null,
        notes: "Minimal documentation currently."
    },

    {
        name: "Cashmere",
        hex: "#D3BE96",
        theme: "Making things holy",
        high: "Change the sound of the word to be more holy.",
        highExample: "wrong → right",
        middle: "Change the letters of the word to be more holy.",
        middleExample: "angle → angel",
        low: "Change the concept to be more holy.",
        lowExample: "hell → heaven",
        checker: "Strips diacritics, restoring letters to their original form.",
        notes: ""
    },

    {
        name: "Light Stone Grey",
        hex: "#E5E4DF",
        theme: "Irrelevance",
        high: "Answer is completely irrelevant to the prompt.",
        highExample: "hello → asdfghjkl",
        middle: "Answer is completely irrelevant to the prompt.",
        middleExample: "",
        low: "Answer is completely irrelevant to the prompt.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Pink",
        hex: "#FF66CC",
        theme: "Height shifting",
        high: "Acts as a +/- height shift applied to a nearby prompt.",
        highExample: "Pink +1 next to Institutional White Middle 'hi' → Institutional White High → high",
        middle: "Acts as a +/- height shift applied to a nearby prompt.",
        middleExample: "",
        low: "Acts as a +/- height shift applied to a nearby prompt.",
        lowExample: "",
        checker: null,
        notes: "Heightless environmental color. Sister color to Pine Cone."
    },

    {
        name: "Pine Cone",
        hex: "#6C584B",
        theme: "Color-list shifting",
        high: "Acts as a +/- shift along the color-list order applied to a nearby prompt.",
        highExample: "Pine Cone +1 next to Institutional White Middle → Really Black Middle",
        middle: "Acts as a +/- shift along the color-list order.",
        middleExample: "",
        low: "Acts as a +/- shift along the color-list order.",
        lowExample: "",
        checker: null,
        notes: "Heightless environmental color. Sister color to Pink."
    },

    {
        name: "Pastel Yellow",
        hex: "#FFFFCC",
        theme: "Cursed scrambling",
        high: "Scramble the internal sounds while keeping the beginning and end.",
        highExample: "leaf → a leaf",
        middle: "Scramble the internal letters while keeping the beginning and end.",
        middleExample: "leaf → loaf",
        low: "Scramble the concept internally.",
        lowExample: "egg → sunny side",
        checker: null,
        notes: ""
    },

    {
        name: "Light Orange",
        hex: "#EAB892",
        theme: "Hexadecimal",
        high: "Homophone of the prompt, then converted using a hexadecimal cipher.",
        highExample: "eye → 69",
        middle: "Prompt's text converted using a hexadecimal cipher.",
        middleExample: "hello → 68 65 6c 6c 6f",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Black",
        hex: "#1B2A35",
        theme: "Absolute reversal",
        high: "Reverse the phonics' order, then flip the phonics/glyphs upside down.",
        highExample: "love → lᴉʌǝ",
        middle: "Reverse the letter order, then flip the letters over.",
        middleExample: "wow → mom",
        low: "Find the opposite of the concept, then flip the letters over.",
        lowExample: "black → at!ym",
        checker: null,
        notes: ""
    },

    {
        name: "Persimmon",
        hex: "#FF5959",
        theme: "Avoidance",
        high: "Similar concept that entirely avoids the sounds used in the hint.",
        highExample: "kill → murder",
        middle: "Similar concept that entirely avoids the letters used in the hint.",
        middleExample: "hot → muggy",
        low: "Avoid the hint conceptually.",
        lowExample: "purple → yellow",
        checker: "Forces exclusion of the prompt word's letters from the answer.",
        notes: ""
    },

    {
        name: "Bright Blue",
        hex: "#0D69AC",
        theme: "Baconian cipher",
        high: "Convert the prompt's sound to letters, then encode to Baconian.",
        highExample: "hello → aabbb aabaa ababa abbab babaa",
        middle: "Encode the prompt directly to Baconian.",
        middleExample: "hello → aabbb aabaa ababa ababa abbab",
        low: "Number of concepts in the prompt encoded to Baconian.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Cocoa",
        hex: "#562424",
        theme: "WIP",
        high: "WIP.",
        highExample: "",
        middle: "WIP.",
        middleExample: "",
        low: "WIP.",
        lowExample: "",
        checker: null,
        notes: "Used in-game, but mechanics are poorly understood."
    },

    {
        name: "Pastel Violet",
        hex: "#B1A7FF",
        theme: "Cipher decryption",
        high: "Decrypt the cipher text in the hint.",
        highExample: "... --- ... → sos",
        middle: "Decrypt the cipher text in the hint.",
        middleExample: "",
        low: "Decrypt the cipher text in the hint.",
        lowExample: "",
        checker: null,
        notes: "User must first identify the cipher."
    },

    {
        name: "Pastel Brown",
        hex: "#FFCC99",
        theme: "Un-Linglox-Like puzzles",
        high: "Related to non-linguistic puzzles.",
        highExample: "",
        middle: "Related to non-linguistic puzzles.",
        middleExample: "",
        low: "Related to non-linguistic puzzles.",
        lowExample: "",
        checker: null,
        notes: "Supposedly heightless; mechanics unclear."
    },

    {
        name: "Pearl",
        hex: "#E7E7EC",
        theme: "Avoiding entirely",
        high: "Avoid the sounds used by the prompt.",
        highExample: "eggs → low",
        middle: "Avoid the letters used by the prompt.",
        middleExample: "sound → time",
        low: "Avoid the concept entirely.",
        lowExample: "broom → supernova",
        checker: null,
        notes: "Unlike Persimmon, there is no requirement to remain conceptually similar."
    },

    {
        name: "Cool Yellow",
        hex: "#FDEA8D",
        theme: "Rhyming",
        high: "A valid rhyme of the prompt.",
        highExample: "fairs → bears",
        middle: "A valid rhyme of the prompt.",
        middleExample: "",
        low: "A valid rhyme of the prompt.",
        lowExample: "",
        checker: null,
        notes: "Heightless."
    },

    {
        name: "Sage Green",
        hex: "#B9C4B1",
        theme: "Abbreviation",
        high: "Abbreviation of the sound of the prompt.",
        highExample: "hired → hide",
        middle: "Abbreviation of the words of the prompt.",
        middleExample: "international space station → iss",
        low: "Abbreviation of the concept of the prompt.",
        lowExample: "purple → rb",
        checker: null,
        notes: ""
    },

    {
        name: "Pastel Orange",
        hex: "#FFC9C9",
        theme: "Leetspeak",
        high: "Convert leetspeak to normal text, then find a homophone.",
        highExample: "f10ur → flower",
        middle: "Convert leetspeak to normal text.",
        middleExample: "1337 → leet",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Steel Blue",
        hex: "#527CAE",
        theme: "Industrialization",
        high: "Phonetically industrialize the prompt.",
        highExample: "",
        middle: "Grammatically industrialize the prompt, usually by adding '-ize'.",
        middleExample: "capital → capitalize",
        low: "Conceptually industrialize the prompt.",
        lowExample: "limonite → iron",
        checker: null,
        notes: ""
    },

    {
        name: "Brick Yellow",
        hex: "#D7C59A",
        theme: "Zooming",
        high: "Zoom in using the Z key on the location indicated in the prompt.",
        highExample: "",
        middle: "Zoom in using the Z key on the location indicated in the prompt.",
        middleExample: "",
        low: "Zoom in using the Z key on the location indicated in the prompt.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Bright Yellow",
        hex: "#F5CD30",
        theme: "Making cooler",
        high: "Undiscovered.",
        highExample: "",
        middle: "Undiscovered.",
        middleExample: "",
        low: "A cooler version of the prompt.",
        lowExample: "yellow → cool yellow",
        checker: null,
        notes: "Low-only color."
    },

    {
        name: "Olive",
        hex: "#C1BE42",
        theme: "Affixes",
        high: "Word with a changed suffix.",
        highExample: "gastritis → gastronomy",
        middle: "Word with its prefix and/or suffix removed.",
        middleExample: "possibility → possible",
        low: "Word with a changed prefix.",
        lowExample: "monotheism → polytheism",
        checker: null,
        notes: ""
    },

    {
        name: "Bright Bluish Green",
        hex: "#008F9C",
        theme: "Music and musical artists",
        high: "An instrument used in making the hint.",
        highExample: "hatsune miku → vocaloid",
        middle: "The hint's composer or artist.",
        middleExample: "never gonna give you up → rick astley",
        low: "The hint's genre.",
        lowExample: "september → disco",
        checker: null,
        notes: ""
    },

    {
        name: "Nougat",
        hex: "#CC8E69",
        theme: "Repetition",
        high: "A duplicated sound not present in the hint.",
        highExample: "walk talk → walkie talkie",
        middle: "The hint with all repeated letters removed; answer is the original word.",
        middleExample: "bokeper → bookkeeper",
        low: "More of the hint, conceptually.",
        lowExample: "money → rich",
        checker: null,
        notes: ""
    },

    {
        name: "Neon Orange",
        hex: "#D5733D",
        theme: "Quantity",
        high: "Number of syllables in the prompt.",
        highExample: "orange → 2",
        middle: "Number of letters in the prompt.",
        middleExample: "supercalifragilisticexpialidocious → 34",
        low: "Number of concepts associated with the prompt.",
        lowExample: "purple → 3",
        checker: null,
        notes: "Answers are numbers."
    },

    {
        name: "Mulberry",
        hex: "#592259",
        theme: "Proofreading",
        high: "Fix words using pronunciation as the basis.",
        highExample: "jirow → gyro",
        middle: "Fix grammatical mistakes using American English and Oxford commas.",
        middleExample: "me grammar ain't break → my grammar isn't broken",
        low: "What the prompt can physically fix.",
        lowExample: "plumber → pipe",
        checker: null,
        notes: ""
    },

    {
        name: "Bright Orange",
        hex: "#DA8541",
        theme: "Alphanumeric positions",
        high: "Homophone/soundalike of the prompt, then convert each letter using alphabet positions.",
        highExample: "ey bee sea → abc → 123",
        middle: "Convert the prompt's letters using alphabet positions.",
        middleExample: "words → 231518419",
        low: "Undiscovered.",
        lowExample: "",
        checker: null,
        notes: "A=1, B=2, C=3, etc."
    },

    {
        name: "Fawn Brown",
        hex: "#A0844F",
        theme: "Animalizing",
        high: "Animalize the pronunciation.",
        highExample: "taiga → tiger",
        middle: "Animalize the spelling.",
        middleExample: "mousse → moose",
        low: "Animal synonym or animal version of the word.",
        lowExample: "slob → pig",
        checker: null,
        notes: ""
    },

    {
        name: "Moss",
        hex: "#7C9C6B",
        theme: "References",
        high: "Reference a place found in the hint.",
        highExample: "minecraft → overworld",
        middle: "Reference a character found in the hint.",
        middleExample: "minecraft → steve",
        low: "Reference a concept found in the hint.",
        lowExample: "minecraft → mining",
        checker: null,
        notes: "Usually references media outside Linglox."
    },

    {
        name: "Plum",
        hex: "#7B2F7B",
        theme: "Translation",
        high: "Translate the prompt according to the shown flag or symbol.",
        highExample: "hi [French] → bonjour",
        middle: "Translate the prompt according to the shown flag or symbol.",
        middleExample: "",
        low: "Translate the prompt according to the shown flag or symbol.",
        lowExample: "",
        checker: null,
        notes: "Heightless."
    },

    {
        name: "Lapis",
        hex: "#102ADC",
        theme: "Improvement",
        high: "N/A.",
        highExample: "",
        middle: "N/A.",
        middleExample: "",
        low: "Conceptually improve the prompt.",
        lowExample: "bad weather → good weather",
        checker: null,
        notes: "Low-only color. Opposite of Rust."
    },

    {
        name: "Dark Blue",
        hex: "#0010B0",
        theme: "Adding words",
        high: "The clue with words added.",
        highExample: "words into prompt → add words into prompt",
        middle: "The clue with words added.",
        middleExample: "",
        low: "The clue with words added.",
        lowExample: "",
        checker: "Expands prompt logic and outputs something different depending on the primary color and height.",
        notes: "Heightless."
    },

    {
        name: "Dark Red",
        hex: "#7B2E2F",
        theme: "Removing words",
        high: "The clue with words removed.",
        highExample: "remove words from prompt → remove words",
        middle: "The clue with words removed.",
        middleExample: "",
        low: "The clue with words removed.",
        lowExample: "",
        checker: null,
        notes: "Heightless. Opposite of Dark Blue."
    },

    {
        name: "Artichoke",
        hex: "#8AAB85",
        theme: "Dullness",
        high: "Near homophone via a small letter edit, or a duller sound.",
        highExample: "par → bar",
        middle: "Undiscovered.",
        middleExample: "",
        low: "Duller conceptual version of the hint.",
        lowExample: "knife → butter knife",
        checker: null,
        notes: "Opposite of Quill Grey."
    },

    {
        name: "Baby Blue",
        hex: "#98C2DB",
        theme: "Origins",
        high: "Origin of the pronunciation, usually two words joined by '/'.",
        highExample: "cuttlefish → cuttle/fish",
        middle: "Origin of the word or its etymology.",
        middleExample: "cuttlefish → cudele",
        low: "Literal origin of the prompt.",
        lowExample: "cuttlefish → cambrian explosion",
        checker: null,
        notes: ""
    },

    {
        name: "Teal",
        hex: "#12EED4",
        theme: "Meta / external sources",
        high: "Refers to outside sources such as badge pages, websites, or other games.",
        highExample: "",
        middle: "Refers to outside sources.",
        middleExample: "",
        low: "Refers to outside sources.",
        lowExample: "",
        checker: null,
        notes: "Heightless."
    },

    {
        name: "Khaki",
        hex: "#E2DCBC",
        theme: "Connected environmental prompts",
        high: "Connected prompts form a word.",
        highExample: "",
        middle: "Connected prompts form a sentence.",
        middleExample: "",
        low: "Connected prompts form a concept.",
        lowExample: "",
        checker: null,
        notes: ""
    },

    {
        name: "Light Reddish Violet",
        hex: "#E8BAC8",
        theme: "Conciseness",
        high: "Remove the prompt's sounds while minimizing size.",
        highExample: "knight → eye",
        middle: "Remove the prompt's letters while minimizing size.",
        middleExample: "knight → it",
        low: "Remove the prompt's concepts while minimizing size.",
        lowExample: "purple → &",
        checker: null,
        notes: ""
    },

    {
        name: "Burnt Sienna",
        hex: "#6A3909",
        theme: "Progress",
        high: "Undiscovered.",
        highExample: "",
        middle: "Undiscovered.",
        middleExample: "",
        low: "Result of adding progress to the prompt.",
        lowExample: "easy → medium",
        checker: null,
        notes: "Low-only color."
    },

    {
        name: "Camo",
        hex: "#3A7D15",
        theme: "Mimicking",
        high: "Mimics a nearby checkered Camo prompt while following its own height rule.",
        highExample: "",
        middle: "Mimics a nearby checkered Camo prompt while following its own height rule.",
        middleExample: "",
        low: "Mimics a nearby checkered Camo prompt while following its own height rule.",
        lowExample: "",
        checker: "Uses the checkered color's own base mechanic at that same height.",
        notes: ""
    },

    {
        name: "White",
        hex: "#F2F3F3",
        theme: "Similarity",
        high: "Similar sounding to the prompt.",
        highExample: "knot → not",
        middle: "Similar spelling to the prompt.",
        middleExample: "bloat → boat",
        low: "Similar concept to the prompt.",
        lowExample: "red → blue",
        checker: null,
        notes: "Distinct from Institutional White's sameness."
    },

    {
        name: "Green Yellow",
        hex: "#ADFF2F",
        theme: "Theming",
        high: "Common theme among a group of words or similarity between concepts.",
        highExample: "spring, summer, fall, winter → seasons",
        middle: "Common theme among a group of words or similarity between concepts.",
        middleExample: "",
        low: "Common theme among a group of words or similarity between concepts.",
        lowExample: "",
        checker: null,
        notes: "Heightless."
    },

    {
        name: "Pantone 448C",
        hex: "#4A412A",
        theme: "Knockoffs / media representations",
        high: "A brand or concept associated with the prompt.",
        highExample: "search engine → bing",
        middle: "A subsidiary of the prompt, such as a brand or product.",
        middleExample: "pepsico → frito-lay",
        low: "A Roblox knockoff or legally-distinct parody name of the hint.",
        lowExample: "call of duty → phantom forces",
        checker: null,
        notes: "Also known as Drab Dark Brown / 'the ugliest color in the world'."
    },

    {
        name: "Papaya Whip",
        hex: "#FFEFD5",
        theme: "Verb qualities",
        high: "Change the verb or sentence to future tense.",
        highExample: "I'm seeing you tomorrow → I'll see you tomorrow",
        middle: "Pluralize the verb or sentence.",
        middleExample: "mouse → mice",
        low: "Change the verb or sentence to past tense.",
        lowExample: "I wish I were a bird → I wished I was a bird",
        checker: null,
        notes: "Rules apply across other languages too."
    },

    {
        name: "Yellow Green",
        hex: "#9ACD32",
        theme: "Meta answers",
        high: "Answer the question pertaining to the prompt in a more meta sense.",
        highExample: "tutorial area? → the beginner",
        middle: "Answer the question pertaining to the prompt in a more meta sense.",
        middleExample: "",
        low: "Answer the question pertaining to the prompt in a more meta sense.",
        lowExample: "",
        checker: null,
        notes: "Heightless."
    },

    {
        name: "Lily White",
        hex: "#EDEAEA",
        theme: "Replacing with 'lily white'",
        high: "Replace any word with exactly three syllables with 'lily white'.",
        highExample: "syllable → lily white",
        middle: "Replace parts containing L or W with 'lily' or 'white', right to left.",
        middleExample: "waterlily → whitelilyly",
        low: "Replace subjects or objects referred to in the prompt with 'lily white'.",
        lowExample: "i like colors → i like lily white",
        checker: "Uses the base color's own name as the replacement instead of 'lily white'.",
        notes: ""
    },

    {
        name: "Lemon Ice Yellow",
        hex: "#F6E2A7",
        theme: "Fantasy",
        high: "Give the hint stylized punctuation.",
        highExample: "hello → hello!",
        middle: "Fantasy version of the spelling.",
        middleExample: "lizard → wizard",
        low: "Fantasy version of the hint.",
        lowExample: "tree → ent",
        checker: null,
        notes: ""
    },

    {
        name: "Lemon Metalic",
        hex: "#828A5D",
        theme: "Worsening",
        high: "Worsen the prompt conceptually.",
        highExample: "veteran → rookie",
        middle: "Worsen the prompt conceptually.",
        middleExample: "",
        low: "Worsen the prompt conceptually.",
        lowExample: "",
        checker: null,
        notes: "Single-height mechanic."
    },

    {
        name: "Fire Yellow",
        hex: "#F9D62E",
        theme: "Scrambling vowels",
        high: "Scramble the hint's vowel phonics, preserve consonants, then apply Institutional White High.",
        highExample: "fire → fairy",
        middle: "Scramble the hint's vowels while preserving consonants.",
        middleExample: "cellar → caller",
        low: "What happens when fire is introduced to the hint conceptually.",
        lowExample: "potato → baked potato",
        checker: "Restricts the primary mechanic to vowels only.",
        notes: "Opposite of Ice Yellow."
    },

    {
        name: "Ice Yellow",
        hex: "#FDFFC9",
        theme: "Scrambling consonants",
        high: "Scramble consonant phonics, preserve vowels, then apply Institutional White High.",
        highExample: "fine → knife",
        middle: "Scramble consonants while preserving vowels.",
        middleExample: "parts → tarps",
        low: "What happens when ice is introduced to the hint conceptually.",
        lowExample: "rain → hail",
        checker: "Restricts the primary mechanic to consonants only.",
        notes: "Opposite of Fire Yellow."
    },

    {
        name: "Light Yellow",
        hex: "#F9E999",
        theme: "Scrambling segments",
        high: "Scramble sound segments, then apply Institutional White High.",
        highExample: "burrow → robber",
        middle: "Swap parts of the word.",
        middleExample: "craftspace → spacecraft",
        low: "Swap the concept.",
        lowExample: "tsunami → hurricane",
        checker: null,
        notes: ""
    },

    {
        name: "Earth Yellow",
        hex: "#685C43",
        theme: "Environmental swapping",
        high: "Linked prompts swap their prompt words while preserving color and height.",
        highExample: "",
        middle: "Linked prompts swap prompt words OR color + height depending on the paired prompt.",
        middleExample: "",
        low: "Linked prompts swap their color and height while preserving prompt words.",
        lowExample: "",
        checker: null,
        notes: "Boxes are answerless and use a number indicating distance to a paired prompt."
    }

];
