const mechanics = [
    {
        name: "Institutional White",
        color: "#F8F8F8",
        theme: "Sameness / similarity",
        high: "Homophone of the hint. (hi → high)",
        middle: "Exact same as the hint, letter for letter. (linglox → linglox)",
        low: "Synonym of the hint. (bottom → low)",
        checker: "N/A"
    },

    {
        name: "Really Black",
        color: "#111111",
        theme: "Opposite / reversal",
        high: "Reverse the spelling, then sound it out into a new complete word. (tube → boot)",
        middle: "Reverse the spelling (sometimes a palindrome). (wolf → flow)",
        low: "Antonym of the hint. (hello → goodbye)",
        checker: "Makes the primary color/height mechanic run backward."
    },

    {
        name: "Really Red",
        color: "#FF0000",
        theme: "Subtraction",
        high: "Remove letters while preserving sound — answer is a homophone of part of the hint. (brute → route)",
        middle: "Remove letters, spelling of what's left preserved — answer is hidden inside the hint. (remove → emo)",
        low: "Reduce whole to part conceptually. (hand → finger)",
        checker: "Lowers/decreases a related property of the primary color+height."
    },

    {
        name: "Really Blue",
        color: "#0000FF",
        theme: "Addition",
        high: "Answer contains a homophone of the hint, spelling not necessarily preserved. (eye → idea)",
        middle: "Add letters, spelling of the rest preserved. (add → addition)",
        low: "Increase part to whole conceptually. (flower → bouquet)",
        checker: "Raises/increases a related property."
    },

    {
        name: "New Yeller",
        color: "#FFFF00",
        theme: "Mixing / scrambling",
        high: "Syllables moved around, spelling not necessarily preserved. (dark → card)",
        middle: "Anagram of the hint. (nag a ram → anagram)",
        low: "Physically scrambled / taken apart. (meat → minced meat)",
        checker: "Moves/scrambles a related property."
    },

    {
        name: "Magenta",
        color: "#AA00AA",
        theme: "Change into something similar yet different",
        high: "Rhyme or near-rhyme / phonetic mutation. (rhyme → time)",
        middle: "Change a few letters while preserving a structural anchor. (verdict → predict)",
        low: "Replace part of the hint conceptually. (orange → grapefruit)",
        checker: "N/A"
    },

    {
        name: "Hot Pink",
        color: "#FF00BF",
        theme: "Hypernym → hyponym",
        high: "Prototypical/canonical example from a phonetic category. (diphthong → ow)",
        middle: "Prototypical example from a grammatical category/part of speech. (article → the)",
        low: "Prototypical example from a real-world/semantic category. (planet → mars)",
        checker: "N/A"
    },

    {
        name: "Lime Green",
        color: "#00FF00",
        theme: "Hyponym → hypernym",
        high: "Phonetic category of the hint. (fire → triphthong)",
        middle: "Grammatical category of the hint. (hey → interjection)",
        low: "Real-world/semantic category of the hint. (peridot → gemstone)",
        checker: "N/A"
    },

    {
        name: "Reddish Brown",
        color: "#694028",
        theme: "Time / modern equivalent",
        high: "Phonetically modern equivalent. (mistress → missus)",
        middle: "Modern equivalent. (hath → have)",
        low: "Conceptual modern equivalent after time passes. (sapling → tree)",
        checker: "Really Black checkers flip this to run backward in time."
    },

    {
        name: "Burlap",
        color: "#C7AC78",
        theme: "Combination",
        high: "Phonetic combination, portmanteau, or pun; spelling not preserved. (oh + pen → open)",
        middle: "Combination of words into one; spelling preserved. (for + wards → forwards)",
        low: "Combination of the hints physically/conceptually. (bread + sausage → hotdog)",
        checker: "N/A"
    },

    {
        name: "Deep Orange",
        color: "#FFB000",
        theme: "Numbers and ciphers",
        high: "Combines Middle Deep Orange + High Institutional White — decrypt the cipher, then find a homophone. (235 → hey → hay)",
        middle: "Transliterate numbers into letters using the cipher. (5972 → ripe)",
        low: "Numerical answer to a math equation. (1 + 1 → 2)",
        checker: "N/A"
    },

    {
        name: "Medium Stone Grey",
        color: "#A3A2A5",
        theme: "Chain Indicator",
        high: "Chain the hint together — remove spaces between letters/sounds or add hyphens.",
        middle: "Solve the chain connected via the prompt.",
        low: "Make the prompt more chain-like, conceptually or lexically. (rope → chain)",
        checker: "N/A"
    },

    {
        name: "Earth Green",
        color: "#27462D",
        theme: "Environmental cues",
        high: "What the hint points to, phonetically.",
        middle: "What the hint points to, letter-wise.",
        low: "What the hint physically/conceptually points to.",
        checker: "Makes the prompt refer to something in the environment."
    },

    {
        name: "Dark Stone Grey",
        color: "#635F62",
        theme: "Literal questions",
        high: "Answer the question pertaining to the prompt.",
        middle: "Answer the question pertaining to the prompt.",
        low: "Answer the question pertaining to the prompt.",
        checker: "N/A"
    },

    {
        name: "Toothpaste",
        color: "#00FFFF",
        theme: "Symbols / emoji / Unicode",
        high: "The symbol's homophone. (1/2 → have)",
        middle: "The symbol/character spelled out. ($ → dollar)",
        low: "The symbol's meaning. (= → equality)",
        checker: "N/A"
    },

    {
        name: "Slime Green",
        color: "#506D54",
        theme: "Containment",
        high: "Answer contains the hint's sound. (aisle → file)",
        middle: "Answer contains the hint. (atom → subatomic)",
        low: "Answer contains the hint conceptually. (letter → envelope)",
        checker: "Forces inclusion of the prompt word's letters in the answer."
    },

    {
        name: "Carnation Pink",
        color: "#FF98DC",
        theme: "Breaking words up / complexity",
        high: "Phonetic breakup / mondegreen. (listen → list and)",
        middle: "Syllabic breakup / homophonic segmentation. (hike → high k)",
        low: "More complex conceptual version of the hint. (human → cyborg)",
        checker: "N/A"
    },

    {
        name: "Crimson",
        color: "#970000",
        theme: "Patterns",
        high: "Ignores height rules; follows the mechanic of whatever it is tethered to at that height.",
        middle: "Every Crimson prompt placed in a row follows a shared theme/pattern.",
        low: "Every Crimson prompt placed in a row follows a shared theme/pattern.",
        checker: "N/A"
    },

    {
        name: "Mint",
        color: "#B1E5A6",
        theme: "Memory",
        high: "Same hint and answer as another High prompt elsewhere.",
        middle: "Same hint and answer as another Middle prompt elsewhere.",
        low: "Same hint and answer as another Low prompt elsewhere.",
        checker: "Variant: Mint Chains mimic another chain elsewhere."
    },

    {
        name: "Pastel Blue",
        color: "#80BBDB",
        theme: "Environmental / spatial",
        high: "Look the direction the block faces; find the next valid color going up from there.",
        middle: "Look the direction the block faces; find the next valid color going up from there.",
        low: "Look the direction the block faces; find the next valid color going up from there.",
        checker: "N/A"
    },

    {
        name: "Bright Red",
        color: "#C4281C",
        theme: "Halving",
        high: "Half of the hint's sounds. (knight → knee)",
        middle: "Half of the hint's spelling. (halftime → half)",
        low: "Half of the hint semantically/conceptually. (ten → five)",
        checker: "N/A"
    },

    {
        name: "Deep Blue",
        color: "#2154B9",
        theme: "Doubling",
        high: "Double the hint's sounds. (toe → tofu)",
        middle: "Double the hint's letters. (check → checkpoint)",
        low: "Double the hint conceptually. (solo → duo)",
        checker: "N/A"
    },

    {
        name: "Pastel Green",
        color: "#CCFFCC",
        theme: "Environmental joke",
        high: "Environmental joke.",
        middle: "Environmental joke.",
        low: "Environmental joke.",
        checker: "N/A"
    },

    {
        name: "Mauve",
        color: "#E0B2D0",
        theme: "Wordplay",
        high: "A clue hidden in the hint or on an adjacent block tells you the transformation.",
        middle: "A clue hidden in the hint or on an adjacent block tells you the transformation.",
        low: "A clue hidden in the hint or on an adjacent block tells you the transformation.",
        checker: "N/A"
    },

    {
        name: "Reflective",
        color: "#FFFFFF",
        theme: "Exact sameness",
        high: "Answer is the hint exactly.",
        middle: "Answer is the hint exactly.",
        low: "Answer is the hint exactly.",
        checker: "N/A"
    },

    {
        name: "Terra Cotta",
        color: "#BE6862",
        theme: "Association / completion",
        high: "Continuation of a given phrase. (curiosity killed the → cat)",
        middle: "Continuation of a given word. (hel → lo)",
        low: "Continuation of a concept. (cookies and → cream)",
        checker: "N/A"
    },

    {
        name: "Flint",
        color: "#69665C",
        theme: "Speeding things up",
        high: "Sped-up pronunciation, usually a contraction. (do not → don't)",
        middle: "Sped-up spelling, usually an acronym/text speak. (be right back → brb)",
        low: "Sped-up version of the concept/object. (walking → running)",
        checker: "N/A"
    },

    {
        name: "Lavender",
        color: "#A55EEA",
        theme: "Subtraction / preservation",
        high: "Remove sounds while preserving the hint; removing Y is optional. (posset → psst)",
        middle: "Make a conceptually similar word using letters from the hint. (malevolent → mean)",
        low: "Answer is a way of preserving the hint. (moment → photograph)",
        checker: "N/A"
    }
];


// ============================================================
// MATERIALS FROM THE LINGLOX OFFICIAL-WIKI XML EXPORT
// ============================================================

const materials = [
    {
        name: "Asphalt",
        type: "material",
        description: "A combination of Plaster and Concrete, meaning that it both ignores the column rule and functions as a different height."
    },

    {
        name: "Clay Roof Tiles",
        type: "material",
        theme: "Motive",
        high: "The answer is the motive for creation. (car → transportation)",
        middle: "The answer is the motive for continuation. (war → justice)",
        low: "The answer is the motive for the prompt happening. (murder → justice)"
    },

    {
        name: "Concrete",
        type: "material",
        description: "Prompts ignore height rules and act as another height instead. It is similar to Shamrock, but leaves room open for other checkers. It must be combined with a color, as Concrete is a secondary addition."
    },

    {
        name: "Glass",
        type: "material",
        description: "Only applies color rules exactly once. It must be combined with a color; for example, Really Red removes exactly one letter."
    },

    {
        name: "Grass",
        type: "material",
        description: "Acts as a new base floor for height-related mechanics. One block above Grass counts as Low, two as Middle, and three as High; it can also work in reverse for prompts below the Grass block."
    },

    {
        name: "Plastic",
        type: "material",
        description: "Will be replaced with another material at some point. Most uses are likely unintentional, but it can communicate that a prompt's solution is simpler than it looks and should not require excessive overthinking."
    },

    {
        name: "Plaster",
        type: "material",
        description: "Prompts ignore the block stacking/column rule. A prompt with Plaster underneath another prompt can therefore have a different answer."
    },

    {
        name: "Ceramic Tiles",
        type: "material",
        theme: "Ancient languages",
        high: "The answer involves translating text into Ancient Greek. (hello → chaire)",
        middle: "The answer involves translating text into Ancient Latin. (hello → salve)",
        low: "The answer involves translating text into Old English. (hello → hal)",
        notes: "Color is resolved before the material for a single block. In a chain, Ceramic Tiles can make color purely aesthetic when it is the second part. High uses Ancient Greek, Middle Latin, and Low Old English; Old English may use þ. Checkered Ceramic Tiles use Reddish Brown rather than Really Black."
    },

    {
        name: "Corroded Metal",
        type: "material",
        theme: "Ruination",
        high: "The answer involves damaging the prompt. (glass → cracked glass)",
        middle: "The answer involves destroying the prompt.",
        low: "The answer involves the reason for destruction. (earth → climate change)"
    },

    {
        name: "Glacier",
        type: "material",
        theme: "Cooling",
        high: "The answer is the result of removing life from the prompt. (zombie → corpse)",
        middle: "The answer is the result of cooling down the prompt. (70° → 56°)",
        low: "The answer is the result of cooling down the substance of the prompt. (water → ice)",
        notes: "Opposite of Cracked Lava."
    },

    {
        name: "Cracked Lava",
        type: "material",
        theme: "Heating",
        high: "The answer is the result of adding life to the prompt. (corpse → zombie)",
        middle: "The answer is the result of heating up or burning the prompt. (paper → ash)",
        low: "The answer is the result of heating up the substance of the prompt. (water → vapor)",
        notes: "Opposite of Glacier."
    },

    {
        name: "Fabric",
        type: "material",
        description: "A color-dependent material with different mechanics depending on its color, generally emphasizing communication and terminology.",

        variants: [
            {
                name: "Dark Taupe Fabric",
                color: "#5A4C42",
                high: "Change to cat/uwu speech. (sorry → sowwy, right now → right neow)",
                middle: "Make things more cat-like/cuter. (hair → fur, :) → :3)",
                low: "Make the prompt softer/cuter. (floor → carpet, knot → bow)"
            },

            {
                name: "Baby Blue Fabric",
                color: "#98C2DB",
                high: "N/A",
                middle: "N/A",
                low: "Translate the hint into its Shakespeare equivalent. (beg → beseech)"
            },

            {
                name: "Fawn Brown Fabric",
                color: "#A0844F",
                high: "N/A",
                middle: "N/A",
                low: "Make the hint relate more to animal communication. (call → chirp)"
            },

            {
                name: "Navy Blue Fabric",
                color: "#002060",
                high: "N/A",
                middle: "N/A",
                low: "Convert the hint into its nautical equivalent. (floor → deck)"
            }
        ]
    },

    {
        name: "Forcefield",
        type: "material",
        description: "Affects colors in various ways, mostly expanding or deconstructing the original color's mechanics.",

        variants: [
            {
                name: "Red Forcefield",
                color: "#FF0000",
                high: "The answer is the absence of the hint. (light → darkness)",
                middle: "The answer is the consequences of avoiding the hint. (sleeping → fatigue)",
                low: "The answer is the act of avoiding the hint. (punch → dodge)"
            },

            {
                name: "Blue Forcefield",
                color: "#0000FF",
                high: "The answer is the presence of the hint. (noise → sound)",
                middle: "The answer is the result of the hint. (studying → knowledge)",
                low: "The answer is the source of the hint. (wool → sheep)"
            },

            {
                name: "Sunrise Forcefield",
                color: "#D490BD",
                high: "The answer is the formula related to the prompt's words.",
                middle: "The answer is related to what the prompt's words is for.",
                low: "The answer is a scientific concept related to the prompt's words."
            },

            {
                name: "Lavender Forcefield",
                color: "#8C5B9F",
                high: "Undiscovered",
                middle: "The answer is a verb associated with the prompt. (food → eat)",
                low: "Undiscovered"
            },

            {
                name: "Lime Green Forcefield",
                color: "#00FF00",
                high: "The answer is the pulmonic consonant of the hint. (fan → labiodental)",
                middle: "Undiscovered",
                low: "Undiscovered"
            },

            {
                name: "Magenta Forcefield",
                color: "#AA00AA",
                high: "Undiscovered",
                middle: "The answer is the result of a change in the prompt. (magnetic flux → electromotive force)",
                low: "The answer is what a change in the prompt is called. (velocity → acceleration)"
            }
        ]
    },

    {
        name: "Neon",
        type: "material",
        description: "Capitalizes the answer. It must be combined with a color and can affect any amount of letters."
    },

    {
        name: "Carpet",
        type: "material",
        description: "Similar to Glass, but the rule can be applied more than once. When a Medium Stone Grey Chain Indicator has the carpet texture, a number prompt indicates how many times the rule should be repeated for the connected prompt."
    },

    {
        name: "Leather",
        type: "material",
        theme: "Removing concepts",
        high: "The answer is removing land conceptually. (land → ocean)",
        middle: "The answer is removing matter conceptually. (planet → dwarf planet)",
        low: "The answer is removing water conceptually. (orange → dried orange)"
    },

    {
        name: "Foil",
        type: "material",
        theme: "Sweetening",
        high: "The answer is the result of sweetening the prompt aesthetically or making it more visually appealing. (bronze → diamond)",
        middle: "The answer is the result of sweetening the prompt grammatically. This may use symbols or emojis. (i love you → i ❤️ you)",
        low: "The answer is the result of sweetening the prompt conceptually. (cracker → cookie)"
    },

    {
        name: "Diamond Plate",
        type: "material",
        theme: "Processes",
        high: "Process of death. (humanity → inbreeding)",
        middle: "Process of change. (humanity → mutation)",
        low: "Process of growth. (humanity → evolution)"
    },

    {
        name: "Roof Shingles",
        type: "material",
        theme: "Causation",
        high: "The answer is the cause that the hint or prompt is carrying out. (soldiers → justice)",
        middle: "The answer is the cause for needing the hint. (gun → self defense)",
        low: "The answer is the cause of the hint. (death → murder)"
    }
];


// Combined data object for mechanics.html
const mechanicsData = {
    colors: mechanics,
    materials: materials
};
