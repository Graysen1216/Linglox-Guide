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
        color: "#8C5B9F",
        theme: "Creation",
        high: "The sound the hint's object would make. (cow → moo)",
        middle: "The action the hint can do, usually a verb. (plant → grow)",
        low: "What the hint can physically produce. (chicken → eggs)",
        checker: "N/A"
    },

    {
        name: "Alder",
        color: "#B480FF",
        theme: "Gender swapping",
        high: "Gender-swap the spelling, then find a homophone.",
        middle: "Literal gender swap of spelling.",
        low: "\"Gender\" swap of the concept.",
        checker: "Really Blue adds gender; Really Red removes gender."
    },

    {
        name: "Cork",
        color: "#BC9B5D",
        theme: "Slurring / smearing",
        high: "Slur/smear the sound.",
        middle: "Slur/smear the letters.",
        low: "Slur/smear the concept.",
        checker: "N/A"
    },

    {
        name: "Burgundy",
        color: "#883E3E",
        theme: "Simplicity",
        high: "Simpler homophone of the prompt.",
        middle: "Simplified spelling.",
        low: "Simpler synonym of the prompt.",
        checker: "N/A"
    },

    {
        name: "Wheat",
        color: "#F1E7C7",
        theme: "Gentrification",
        high: "Gentrify pronunciation — compress it into a more basic/direct sound.",
        middle: "Gentrify spelling — rewrite to match pronunciation.",
        low: "Gentrify the concept — replace with a more literal version.",
        checker: "N/A"
    },

    {
        name: "Dark Green",
        color: "#287F47",
        theme: "Intensifying",
        high: "Intensified version sound-wise.",
        middle: "Intensified/more extreme noun.",
        low: "Intensified version using verbs.",
        checker: "N/A"
    },

    {
        name: "Oyster",
        color: "#BBB3B2",
        theme: "Simplest form",
        high: "Simplest sound-wise form.",
        middle: "Simplest letter-wise form.",
        low: "Simplest conceptual form.",
        checker: "N/A"
    },

    {
        name: "Dark Orange",
        color: "#A05F35",
        theme: "Binary code",
        high: "Homophone of the prompt, then translated to binary.",
        middle: "Prompt translated directly to binary.",
        low: "Same as Low Hot Pink's answer, then translated to binary.",
        checker: "N/A"
    },

    {
        name: "Ghost Grey",
        color: "#CACBD1",
        theme: "Messiness",
        high: "Mondegreen-style split; resulting words must be valid.",
        middle: "Deliberate typo of the hint.",
        low: "Messy/degraded real-world outcome of the hint.",
        checker: "N/A"
    },

    {
        name: "Pastel Blue-Green",
        color: "#81F3E9",
        theme: "Environmental",
        high: "WIP.",
        middle: "WIP.",
        low: "WIP.",
        checker: "WIP."
    },

    {
        name: "Gold",
        color: "#EFB838",
        theme: "Adding value",
        high: "Value added via a phonetic change.",
        middle: "Value added via a spelling change.",
        low: "Value added via a concept change.",
        checker: "N/A"
    },

    {
        name: "Cadet Blue",
        color: "#9FADC0",
        theme: "Endings",
        high: "Homophone of the end of the hint.",
        middle: "End spelling of the hint, sometimes its suffix.",
        low: "Physical/conceptual end of the hint.",
        checker: "Restricts the primary mechanic to only affect the end."
    },

    {
        name: "Royal Purple",
        color: "#6225D1",
        theme: "Modifying / elevating status",
        high: "Sound modification into a more complex/refined word.",
        middle: "Letter modification/adjustment into a new word.",
        low: "Conceptual modification to a more elevated/higher-status concept.",
        checker: "N/A"
    },

    {
        name: "Sunrise",
        color: "#D490BD",
        theme: "Sharing",
        high: "Shared sound between the prompt's words.",
        middle: "Shared letter(s) between the prompt's words.",
        low: "Shared concept between the prompt's words.",
        checker: "N/A"
    },

    {
        name: "Storm Blue",
        color: "#335882",
        theme: "Destabilizing",
        high: "The hint's sound destabilized.",
        middle: "The hint's spelling destabilized.",
        low: "The hint's concept destabilized.",
        checker: "N/A"
    },

    {
        name: "Grime",
        color: "#7F8E64",
        theme: "Restricting",
        high: "Restrict jaw and lip movement while saying the word aloud.",
        middle: "Restrict letters to construct a new, valid word.",
        low: "Restrict conceptually — add a limit, regulate/moderate.",
        checker: "N/A"
    },

    {
        name: "Smoky Grey",
        color: "#5B5D69",
        theme: "Interpretation",
        high: "Result of interpreting the hint's sounds into letters.",
        middle: "Result of interpreting letters from leetspeak/symbols in the hint.",
        low: "Result of interpreting the concept the hint conveys.",
        checker: "Neon and clue-color variants exist."
    },

    {
        name: "Shamrock",
        color: "#5B9A4C",
        theme: "Checker deception",
        high: "May lie about the base block's height or color.",
        middle: "May lie about the base block's height or color.",
        low: "May lie about the base block's height or color.",
        checker: "Checker-exclusive color."
    },

    {
        name: "Seashell",
        color: "#E9DADA",
        theme: "Tracking",
        high: "N/A.",
        middle: "Track keyboard key movement to spell out letters/words.",
        low: "Track patterns between connected prompts.",
        checker: "N/A"
    },

    {
        name: "Sea Green",
        color: "#348E40",
        theme: "Duplication",
        high: "Duplication of a sound in the hint's phonetics.",
        middle: "Duplication of any letter(s) in the hint's spelling.",
        low: "Duplication of the hint conceptually.",
        checker: "N/A"
    },

    {
        name: "Quill Grey",
        color: "#DFDFDE",
        theme: "Sharper similarity",
        high: "Near homophone via a small letter edit, or a sharper sound.",
        middle: "Undiscovered.",
        low: "Sharper conceptual version of the hint.",
        checker: "N/A"
    },

    {
        name: "Sand Red",
        color: "#957977",
        theme: "Lime Green → Hot Pink",
        high: "Combination via sounds.",
        middle: "Combination via words.",
        low: "Combination via concepts.",
        checker: "N/A"
    },

    {
        name: "Sand Blue",
        color: "#74869D",
        theme: "Holes",
        high: "Number of holes/gaps in the prompt's sound.",
        middle: "Number of holes/gaps in the prompt's spelling.",
        low: "Number of holes in the prompt conceptually.",
        checker: "N/A"
    },

    {
        name: "Sand Green",
        color: "#789082",
        theme: "Describing mechanics",
        high: "Names the High mechanic of the color mentioned.",
        middle: "Names the Middle mechanic of the color mentioned.",
        low: "Names the Low mechanic of the color mentioned.",
        checker: "N/A"
    },

    {
        name: "Salmon",
        color: "#FF9495",
        theme: "Identifying mechanics",
        high: "Which High color defines the given mechanic.",
        middle: "Which Middle color defines the given mechanic.",
        low: "Which Low color defines the given mechanic.",
        checker: "N/A"
    },

    {
        name: "Medium Green",
        color: "#A1C48C",
        theme: "Adding equally on both sides",
        high: "Add the same amount of sounds to both sides of the word.",
        middle: "Add the same amount of letters to both sides of the word.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Fossil",
        color: "#9FA1AC",
        theme: "Shifting",
        high: "Shift of the hint's sound.",
        middle: "Shift of the hint's spelling.",
        low: "Shift of the hint conceptually.",
        checker: "N/A"
    },

    {
        name: "Dusty Rose",
        color: "#A34B4B",
        theme: "Removing equally on both sides",
        high: "Remove the same amount of sounds from both sides.",
        middle: "Remove the same amount of letters from both sides.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Cyan",
        color: "#04AFEC",
        theme: "Keeping structures",
        high: "Word with the same phonetic structure as the prompt.",
        middle: "Word with the same spelling structure as the prompt.",
        low: "Word that is conceptually similar in structure.",
        checker: "N/A"
    },

    {
        name: "Rust",
        color: "#8F4C2A",
        theme: "Damage",
        high: "N/A.",
        middle: "N/A.",
        low: "The prompt, conceptually damaged in some way.",
        checker: "N/A"
    },

    {
        name: "Bronze",
        color: "#7E683F",
        theme: "Shared components",
        high: "Answer shares sound components with the prompt.",
        middle: "Answer shares letter components with the prompt.",
        low: "Answer shares conceptual components with the prompt.",
        checker: "N/A"
    },

    {
        name: "Tawny",
        color: "#965555",
        theme: "Segmentation",
        high: "Phonetic spelling-out / chunking by sound.",
        middle: "Re-segmentation into two or more valid words.",
        low: "Categorical decomposition.",
        checker: "N/A"
    },

    {
        name: "Medium Red",
        color: "#DA867A",
        theme: "Removing uniqueness",
        high: "Removal of the prompt's phonetic uniqueness.",
        middle: "Removal of the prompt's letter uniqueness.",
        low: "Removal of the prompt's conceptual uniqueness.",
        checker: "N/A"
    },

    {
        name: "Bright Violet",
        color: "#6B327C",
        theme: "Definitions",
        high: "Definition of a sound.",
        middle: "The word matching a given definition.",
        low: "Combination of concepts into a specific word/concept.",
        checker: "N/A"
    },

    {
        name: "Beige",
        color: "#CABFA3",
        theme: "TEOR",
        high: "Answer per the TEOR symbol(s) shown.",
        middle: "Answer per the TEOR symbol(s) shown.",
        low: "Answer per the TEOR symbol(s) shown.",
        checker: "N/A"
    },

    {
        name: "Pastel Light Blue",
        color: "#AFDDFF",
        theme: "Puns",
        high: "Pun created by adding sounds to the prompt.",
        middle: "Pun created by adding letters to the prompt.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Maroon",
        color: "#750000",
        theme: "Context-dependent",
        high: "Sound/expressive shift constrained by a nearby descriptor box.",
        middle: "Apply an opcode from a nearby box to the hint.",
        low: "Constrained by a theme/palette/topic shown on a nearby box.",
        checker: "N/A"
    },

    {
        name: "Linen",
        color: "#AF9483",
        theme: "Outlines",
        high: "The prompt is the phonetic outline of the answer.",
        middle: "The prompt is the lexical/spelling outline of the answer.",
        low: "The prompt is the conceptual outline of the answer.",
        checker: "N/A"
    },

    {
        name: "Fog",
        color: "#C7D4E4",
        theme: "Obscuring",
        high: "Replace sounds in the prompt with question marks.",
        middle: "Replace characters in the hint with question marks.",
        low: "Replace concepts in the prompt with question marks.",
        checker: "N/A"
    },

    {
        name: "Buttermilk",
        color: "#FEF3BB",
        theme: "Substitution",
        high: "Acts as a different color.",
        middle: "Acts as a different color.",
        low: "Acts as a different color.",
        checker: "Minimal documentation."
    },

    {
        name: "Cashmere",
        color: "#D3BE96",
        theme: "Holiness / religion",
        high: "Sound of the word changed to be more holy.",
        middle: "Letters of the word changed to be more holy.",
        low: "Concept of the word changed to be more holy.",
        checker: "Strips diacritics, restoring letters to their original form."
    },

    {
        name: "Light Stone Grey",
        color: "#E5E4DF",
        theme: "Irrelevance",
        high: "Answer is completely irrelevant to the prompt.",
        middle: "Answer is completely irrelevant to the prompt.",
        low: "Answer is completely irrelevant to the prompt.",
        checker: "N/A"
    },

    {
        name: "Pink",
        color: "#FF66CC",
        theme: "Height shifting",
        high: "Acts as a +/- height shift applied to a nearby prompt.",
        middle: "Acts as a +/- height shift applied to a nearby prompt.",
        low: "Acts as a +/- height shift applied to a nearby prompt.",
        checker: "N/A"
    },

    {
        name: "Pine Cone",
        color: "#6C584B",
        theme: "Color-list shifting",
        high: "Acts as a +/- shift along the color-list order.",
        middle: "Acts as a +/- shift along the color-list order.",
        low: "Acts as a +/- shift along the color-list order.",
        checker: "N/A"
    },

    {
        name: "Pastel Yellow",
        color: "#FFFFCC",
        theme: "Cursed scrambling",
        high: "Sounds scrambled internally.",
        middle: "Letters scrambled internally.",
        low: "Concept scrambled internally.",
        checker: "N/A"
    },

    {
        name: "Light Orange",
        color: "#EAB892",
        theme: "Hexadecimal",
        high: "Homophone of the prompt, then converted using hexadecimal.",
        middle: "Prompt's text converted using hexadecimal.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Black",
        color: "#1B2A35",
        theme: "Absolute reversal",
        high: "Reverse the phonics' order, then flip the phonics/glyphs upside down.",
        middle: "Reverse the letter order, then flip the letters over.",
        low: "Find the opposite of the concept, then flip the letters over.",
        checker: "N/A"
    },

    {
        name: "Persimmon",
        color: "#FF5959",
        theme: "Avoidance",
        high: "Similar concept that entirely avoids the sounds used in the hint.",
        middle: "Similar concept that entirely avoids the letters used in the hint.",
        low: "Avoiding the hint conceptually.",
        checker: "Forces exclusion of the prompt word's letters."
    },

    {
        name: "Bright Blue",
        color: "#0D69AC",
        theme: "Baconian cipher",
        high: "Prompt's sound converted to letters, then encoded to Baconian.",
        middle: "Prompt encoded directly to Baconian.",
        low: "Number of concepts in the prompt encoded to Baconian.",
        checker: "N/A"
    },

    {
        name: "Cocoa",
        color: "#562424",
        theme: "WIP",
        high: "WIP.",
        middle: "WIP.",
        low: "WIP.",
        checker: "WIP."
    },

    {
        name: "Pastel Violet",
        color: "#B1A7FF",
        theme: "Cipher decryption",
        high: "Decryption of the cipher text.",
        middle: "Decryption of the cipher text.",
        low: "Decryption of the cipher text.",
        checker: "N/A"
    },

    {
        name: "Pastel Brown",
        color: "#FFCC99",
        theme: "Un-Linglox-Like puzzles",
        high: "Related to non-linguistic puzzles.",
        middle: "Related to non-linguistic puzzles.",
        low: "Related to non-linguistic puzzles.",
        checker: "N/A"
    },

    {
        name: "Pearl",
        color: "#E7E7EC",
        theme: "Avoiding entirely",
        high: "Avoid sounds the prompt uses.",
        middle: "Avoid letters the prompt uses.",
        low: "Avoid the concept entirely.",
        checker: "N/A"
    },

    {
        name: "Cool Yellow",
        color: "#FDEA8D",
        theme: "Rhyming",
        high: "A valid rhyme of the prompt.",
        middle: "A valid rhyme of the prompt.",
        low: "A valid rhyme of the prompt.",
        checker: "N/A"
    },

    {
        name: "Sage Green",
        color: "#B9C4B1",
        theme: "Abbreviation",
        high: "Abbreviation of the sound of the prompt.",
        middle: "Abbreviation of the words of the prompt.",
        low: "Abbreviation of the concept of the prompt.",
        checker: "N/A"
    },

    {
        name: "Pastel Orange",
        color: "#FFC9C9",
        theme: "Leetspeak",
        high: "Convert leetspeak to normal text, then find a homophone.",
        middle: "Convert the prompt from leetspeak into normal text.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Steel Blue",
        color: "#527CAE",
        theme: "Industrialization",
        high: "Phonetical industrialization of the prompt.",
        middle: "Grammatical industrialization, usually adding '-ize'.",
        low: "Conceptual industrialization.",
        checker: "N/A"
    },

    {
        name: "Brick Yellow",
        color: "#D7C59A",
        theme: "Zooming",
        high: "Zoom in (Z key) on the location indicated in the prompt.",
        middle: "Zoom in (Z key) on the location indicated in the prompt.",
        low: "Zoom in (Z key) on the location indicated in the prompt.",
        checker: "N/A"
    },

    {
        name: "Bright Yellow",
        color: "#F5CD30",
        theme: "Making cooler",
        high: "Undiscovered.",
        middle: "Undiscovered.",
        low: "A cooler version of the prompt.",
        checker: "N/A"
    },

    {
        name: "Olive",
        color: "#C1BE42",
        theme: "Affixes",
        high: "Word with a changed suffix.",
        middle: "Word with its prefix and/or suffix removed.",
        low: "Word with a changed prefix.",
        checker: "N/A"
    },

    {
        name: "Bright Bluish Green",
        color: "#008F9C",
        theme: "Music",
        high: "An instrument used in making the hint.",
        middle: "The hint's composer/artist.",
        low: "The hint's genre.",
        checker: "N/A"
    },

    {
        name: "Nougat",
        color: "#CC8E69",
        theme: "Repetition",
        high: "A duplicated sound not present in the hint.",
        middle: "The hint has all repeated letters removed; the answer is the original word.",
        low: "More of the hint, conceptually.",
        checker: "N/A"
    },

    {
        name: "Neon Orange",
        color: "#D5733D",
        theme: "Quantity",
        high: "Number of syllables in the prompt.",
        middle: "Number of letters in the prompt.",
        low: "Number of concepts associated with the prompt.",
        checker: "N/A"
    },

    {
        name: "Mulberry",
        color: "#592259",
        theme: "Proofreading",
        high: "Fix words using pronunciation as the basis.",
        middle: "Fix grammatical mistakes.",
        low: "What the prompt can physically fix.",
        checker: "N/A"
    },

    {
        name: "Bright Orange",
        color: "#DA8541",
        theme: "Alphanumeric positions",
        high: "Homophone/soundalike converted using alphabet positions.",
        middle: "Prompt's letters converted using alphabet positions.",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Fawn Brown",
        color: "#A0844F",
        theme: "Animalizing",
        high: "Animalize the pronunciation.",
        middle: "Animalize the spelling.",
        low: "An animal synonym or animal version of the word.",
        checker: "N/A"
    },

    {
        name: "Moss",
        color: "#7C9C6B",
        theme: "References",
        high: "References a place found in the hint.",
        middle: "References a character found in the hint.",
        low: "References a concept found in the hint.",
        checker: "N/A"
    },

    {
        name: "Plum",
        color: "#7B2F7B",
        theme: "Translation",
        high: "Translate the prompt per the flag/symbol shown.",
        middle: "Translate the prompt per the flag/symbol shown.",
        low: "Translate the prompt per the flag/symbol shown.",
        checker: "N/A"
    },

    {
        name: "Lapis",
        color: "#102ADC",
        theme: "Improvement",
        high: "N/A.",
        middle: "N/A.",
        low: "The prompt, conceptually improved in some way.",
        checker: "N/A"
    },

    {
        name: "Dark Blue",
        color: "#0010B0",
        theme: "Adding words",
        high: "The clue with words added.",
        middle: "The clue with words added.",
        low: "The clue with words added.",
        checker: "Expands prompt logic."
    },

    {
        name: "Dark Red",
        color: "#7B2E2F",
        theme: "Removing words",
        high: "The clue with words removed.",
        middle: "The clue with words removed.",
        low: "The clue with words removed.",
        checker: "N/A"
    },

    {
        name: "Artichoke",
        color: "#8AAB85",
        theme: "Dullness",
        high: "Near homophone via a small letter edit, or duller sound.",
        middle: "Undiscovered.",
        low: "Duller conceptual version of the hint.",
        checker: "N/A"
    },

    {
        name: "Baby Blue",
        color: "#98C2DB",
        theme: "Origins",
        high: "Origin of the pronunciation.",
        middle: "Origin of the word / its etymology.",
        low: "Literal origin of the prompt.",
        checker: "N/A"
    },

    {
        name: "Teal",
        color: "#12EED4",
        theme: "Meta / external sources",
        high: "Refers to outside sources.",
        middle: "Refers to outside sources.",
        low: "Refers to outside sources.",
        checker: "N/A"
    },

    {
        name: "Khaki",
        color: "#E2DCBC",
        theme: "Connected prompts",
        high: "Connected prompts form a word.",
        middle: "Connected prompts form a sentence.",
        low: "Connected prompts form a concept.",
        checker: "N/A"
    },

    {
        name: "Light Reddish Violet",
        color: "#E8BAC8",
        theme: "Conciseness",
        high: "Remove sounds while minimizing size.",
        middle: "Remove letters while minimizing size.",
        low: "Remove concepts while minimizing size.",
        checker: "N/A"
    },

    {
        name: "Burnt Sienna",
        color: "#6A3909",
        theme: "Progress",
        high: "Undiscovered.",
        middle: "Undiscovered.",
        low: "Result of adding progress to the prompt.",
        checker: "N/A"
    },

    {
        name: "Camo",
        color: "#3A7D15",
        theme: "Mimicking",
        high: "Mimics a nearby Camo prompt that is checkered.",
        middle: "Mimics a nearby Camo prompt that is checkered.",
        low: "Mimics a nearby Camo prompt that is checkered.",
        checker: "Uses the checkered color's own base mechanic."
    },

    {
        name: "White",
        color: "#F2F3F3",
        theme: "Similarity",
        high: "Similar sounding to the prompt.",
        middle: "Similar spelling to the prompt.",
        low: "A similar concept to the prompt.",
        checker: "N/A"
    },

    {
        name: "Green Yellow",
        color: "#ADFF2F",
        theme: "Theming",
        high: "The common theme among a group of words/concepts.",
        middle: "The common theme among a group of words/concepts.",
        low: "The common theme among a group of words/concepts.",
        checker: "N/A"
    },

    {
        name: "Pantone 448C",
        color: "#4A412A",
        theme: "Knockoffs / representations",
        high: "A brand or concept associated with the prompt.",
        middle: "A subsidiary of the prompt.",
        low: "A Roblox knockoff or legally-distinct parody name.",
        checker: "N/A"
    },

    {
        name: "Papaya Whip",
        color: "#FFEFD5",
        theme: "Verb qualities",
        high: "Change the verb/sentence to future tense.",
        middle: "Pluralize the verb/sentence.",
        low: "Change the verb/sentence to past tense.",
        checker: "N/A"
    },

    {
        name: "Yellow Green",
        color: "#9ACD32",
        theme: "Meta answers",
        high: "Answer the question pertaining to the prompt in a more meta sense.",
        middle: "Answer the question pertaining to the prompt in a more meta sense.",
        low: "Answer the question pertaining to the prompt in a more meta sense.",
        checker: "N/A"
    },

    {
        name: "Lily White",
        color: "#EDEAEA",
        theme: "Lily White replacement",
        high: "Any word with exactly 3 syllables is replaced with 'lily white'.",
        middle: "Parts containing L or W are replaced with 'lily' or 'white'.",
        low: "Subjects/objects referred to in the prompt are replaced with 'lily white'.",
        checker: "Uses the base color's own name as the replacement."
    },

    {
        name: "Lemon Ice Yellow",
        color: "#F6E2A7",
        theme: "Fantasy",
        high: "Give the hint stylized punctuation.",
        middle: "Fantasy version of the spelling.",
        low: "Fantasy version of the hint.",
        checker: "N/A"
    },

    {
        name: "Lemon Metalic",
        color: "#828A5D",
        theme: "Worsening",
        high: "Worsen the prompt conceptually.",
        middle: "Worsen the prompt conceptually.",
        low: "Worsen the prompt conceptually.",
        checker: "N/A"
    },

    {
        name: "Fire Yellow",
        color: "#F9D62E",
        theme: "Scrambling vowels",
        high: "Scramble vowel phonics, then apply Institutional White High.",
        middle: "Scramble the hint's vowels while preserving consonants.",
        low: "What happens when fire is introduced to the hint conceptually.",
        checker: "Restricts the primary mechanic to vowels."
    },

    {
        name: "Ice Yellow",
        color: "#FDFFC9",
        theme: "Scrambling consonants",
        high: "Scramble consonant phonics, then apply Institutional White High.",
        middle: "Scramble the hint's consonants while preserving vowels.",
        low: "What happens when ice is introduced to the hint conceptually.",
        checker: "Restricts the primary mechanic to consonants."
    },

    {
        name: "Light Yellow",
        color: "#F9E999",
        theme: "Scrambling segments",
        high: "Scramble sound segments, then apply Institutional White High.",
        middle: "Swap parts of the word.",
        low: "A concept swap.",
        checker: "N/A"
    },

    {
        name: "Earth Yellow",
        color: "#685C43",
        theme: "Environmental linking",
        high: "Linked prompts have their prompt words swapped.",
        middle: "Linked prompts can swap prompt words or color+height.",
        low: "Linked prompts have their color and height swapped.",
        checker: "N/A"
    },

    // ============================================================
    // COLORS FROM THE XML EXPORT
    // ============================================================

    {
        name: "Penny Brown",
        color: "#CC7943",
        theme: "Currency substitution",
        high: "Mix between Middle Penny Brown and High Institutional White. Replace $ with the correct currency reference, then find a homophone. ($arue → buckaroo)",
        middle: "Replace $ with the correct currency reference and keep the rest of the prompt unchanged. (es$tric → eccentric)",
        low: "WIP.",
        checker: "N/A"
    },

    {
        name: "Dollar Green",
        color: "#B3EC8A",
        theme: "Currency / dollar sign",
        high: "Replace a currency reference with $, then find a homophone. The answer must be a real word. (buckeye → $igh)",
        middle: "Replace a currency reference with $, with $ acting as S. The answer must be a real word. (cashew → $ew)",
        low: "Effectively the same as Low Hot Pink, except the answer must contain a dollar sign. (rapper → a$ap rocky)",
        checker: "N/A"
    },

    {
        name: "Honey Yellow",
        color: "#EBA937",
        theme: "Stickiness / compound words",
        high: "Phonetically compound word containing the prompt word's sound. (jean → hygiene)",
        middle: "Compound word containing the prompt itself. (flower → sunflower)",
        low: "Prompt object made sticky conceptually. (memo → sticky note)",
        checker: "N/A"
    },

    {
        name: "Super Saiyan Patrick Star",
        color: "#C205E5",
        theme: "Memes",
        high: "Continuation of the hint into a meme. (hawk → hawk tuah)",
        middle: "Meme-ified version of the hint; change letters to make it a meme. (stocks → stonks)",
        low: "A character of the referenced meme present in the hint. (blue hedgehog → sanic)",
        checker: "N/A"
    },

    {
        name: "Brainrot Blue",
        color: "#036EB4",
        theme: "Italian Brainrot",
        high: "Name the Italian Brainrot character shown on the prompt's block.",
        middle: "Name the Italian Brainrot character shown on the prompt's block.",
        low: "Name the Italian Brainrot character shown on the prompt's block.",
        checker: "N/A"
    },

    {
        name: "Yellow Flip/Flop",
        color: "#B48455",
        theme: "Vertical flipping",
        high: "Flip the word vertically, then find a homophone of the result. (comm → cow)",
        middle: "Flip each letter of the hint vertically. (wow → mom)",
        low: "Physically/conceptually flip the hint vertically. (down → up)",
        checker: "N/A"
    },

    {
        name: "Silver Flip/Flop",
        color: "#898788",
        theme: "180-degree rotation",
        high: "Rotate the word 180 degrees, then find a homophone of the result. (plow → mould)",
        middle: "Rotate the word 180 degrees. (loom → wool)",
        low: "Swap each letter with its opposite cardinal direction seen on a compass; ignore other letters. (neas → swan)",
        checker: "N/A"
    },

    {
        name: "Red Flip/Flop",
        color: "#97695B",
        theme: "Horizontal flipping",
        high: "Flip the word horizontally, then find a homophone of the result. (lid → bill)",
        middle: "Flip the word horizontally. (qoq → pop)",
        low: "Physically/conceptually flip the hint horizontally. (right → left)",
        checker: "N/A"
    },

    {
        name: "Cabbage",
        color: "#D3DA13",
        theme: "First half of alphabet",
        high: "Undiscovered.",
        middle: "Near synonym of the clue using only letters from the first half of the alphabet (A-M). (taken over → hijacked)",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Rusty Noon",
        color: "#974C59",
        theme: "Second half of alphabet",
        high: "Undiscovered.",
        middle: "Near synonym of the clue using only letters from the second half of the alphabet (N-Z). (help → support)",
        low: "Undiscovered.",
        checker: "N/A"
    },

    {
        name: "Light Red",
        color: "#EEC4B6",
        theme: "Beginnings",
        high: "Homophone of the start of the hint. (spicy → spy)",
        middle: "Beginning spelling of the hint, sometimes the prefix. (overhang → over)",
        low: "Physical/conceptual beginning of the hint; something that may come at the start of a word. (story → prologue)",
        checker: "Makes the primary color and height's mechanic only affect the beginning of the word."
    },

    {
        name: "Baker Miller Pink",
        color: "#FF91AE",
        theme: "Safety",
        high: "N/A",
        middle: "N/A",
        low: "Less dangerous/hostile version of the prompt. (poison → drink)",
        checker: "N/A"
    },

    {
        name: "Swirly",
        color: "#000000",
        theme: "Meme phrases",
        high: "N/A",
        middle: "Continuation of the meme given. (tung tung tung → sahur)",
        low: "N/A",
        checker: "N/A"
    },

    {
        name: "UPS Brown",
        color: "#330000",
        theme: "Removal of violence",
        high: "Sound of the word changed to a non-violent alternative. (smack → snack)",
        middle: "Prompt with the instance of violence removed. (crosswords → cross)",
        low: "Synonym of the prompt, then apply the Middle rule. (skip → shortcut → short)",
        checker: "N/A"
    },

    {
        name: "Burnt Orange",
        color: "#000000",
        theme: "Numbers to letters",
        high: "Number converted to a homophone. + indicates the sound is combined with adjacent letters. (2day → today)",
        middle: "Number converted to its spelling. (of10 → often)",
        low: "Wordplay between the number and its operations; similar to Low and High Toothpaste combined. (-4 → foregone)",
        checker: "N/A"
    },

    {
        name: "Canary Yellow",
        color: "#FFEF00",
        theme: "Adding fire",
        high: "Homophone of the prompt with fire added to it. (whiled → wildfire)",
        middle: "Prompt with the word fire added to it. (ball → fireball)",
        low: "Result or meaning of adding fire to the prompt, including phrases using fire. (play → play with fire → risk)",
        checker: "N/A"
    },

    {
        name: "John Deere Green",
        color: "#367C2B",
        theme: "Stealing",
        high: "Stolen sound. The original prompt's rules are applied first. (hijack → high, hijack → jack)",
        middle: "Stolen letters. The original prompt's rules are applied first. (daylight → light, daylight → day)",
        low: "Stolen concept. The original prompt's rules are applied first. (purple → blue, purple → red)",
        checker: "N/A"
    },

    {
        name: "Cadbury Purple",
        color: "#3B0084",
        theme: "Actuality / honesty",
        high: "Less misleading spelling of the prompt. (bologna → baloney)",
        middle: "Prompt with silent letters removed. (subtle → sutle)",
        low: "Real version of the concept. (teddy bear → bear)",
        checker: "N/A"
    },

    {
        name: "Tiffany Blue",
        color: "#81D8D0",
        theme: "Surpassing / letter limits",
        high: "Homophone of the new excess sound after applying the numbered letter limit. (parasite (4) → para → lyze → lies)",
        middle: "New excess letters after applying the numbered letter limit. (malleable (3) → mal → function)",
        low: "Synonym of the prompt, then the excess letters. (children (3) → offspring (3) → spring)",
        checker: "N/A"
    },

    {
        name: "Barbie Pink",
        color: "#DA1884",
        theme: "Sequence chaining",
        high: "Uses Institutional White rules by default. Add the previous prompt to the current prompt according to their assigned sequence numbers.",
        middle: "Uses Institutional White rules by default. Add the previous prompt to the current prompt according to their assigned sequence numbers. (3. pen + 2. hap → happen)",
        low: "Uses Institutional White rules by default. Add the previous prompt to the current prompt according to their assigned sequence numbers.",
        checker: "N/A"
    },

    {
        name: "Light Pink",
        color: "#DC9095",
        theme: "Common jokes",
        high: "Write the answer to the joke as shown on the prompt. (a fly with no wings? → walk)",
        middle: "Write the answer to the joke as shown on the prompt. (a fly with no wings? → walk)",
        low: "Write the answer to the joke as shown on the prompt. (a fly with no wings? → walk)",
        checker: "N/A"
    },

    {
        name: "Atrovirens",
        color: "#0F645A",
        theme: "Easier pronunciation / IPA",
        high: "Change consonants to make the word easier to pronounce globally, then apply High Institutional White. (vigor → bigger)",
        middle: "Change consonants to make the word easier to pronounce globally. (think → sink)",
        low: "Transcribe the given IPA into words. (əˈmeɪzɪŋ → amazing)",
        checker: "N/A"
    },

    {
        name: "Lilac",
        color: "#A75E9B",
        theme: "British vocabulary",
        high: "N/A",
        middle: "Translate the hint from a regional/American form to a common British word used in England. (sweater → jumper)",
        low: "N/A",
        checker: "N/A"
    },

    {
        name: "Lemon Fire Yellow",
        color: "#F2B90C",
        theme: "Horror",
        high: "Change the phrase's tone to sound more horrifying or hopeless. (H E L P M E → help me.)",
        middle: "Horror version of the spelling. (spear → fear)",
        low: "Horror version of the hint. (dream → nightmare)",
        checker: "N/A"
    },

    {
        name: "Lemon Light Yellow",
        color: "#F2CC77",
        theme: "Science fiction",
        high: "Add an emoticon to the phrase. (emoticons → emoticons :O)",
        middle: "Sci-fi version of the spelling. (cypress → cyber)",
        low: "Sci-fi version of the hint. (human → cyborg)",
        checker: "N/A"
    },

    {
        name: "Lemon Earth Yellow",
        color: "#613F21",
        theme: "Steampunk",
        high: "Add a stutter to the phrase and make it sound more negative. (how may i help you? → w-what do you w-want)",
        middle: "Steampunk version of the spelling. (google → goggle)",
        low: "Steampunk version of the hint. (ship → airship)",
        checker: "N/A"
    },

    {
        name: "Lemon Yellow",
        color: "#FFF44F",
        theme: "Normalcy",
        high: "Delete stylized punctuation from the hint and make the tone more normal. (W H A T I N THE WORLD?! → what in the world)",
        middle: "More normalized version of the spelling. (blindness → kindness)",
        low: "More normalized version of the hint. (airship → ship)",
        checker: "N/A"
    },

    {
        name: "Vantablack",
        color: "#010101",
        theme: "Outline / material dominance",
        high: "Special color mechanic: Checkers except Really Black and clue colors are ignored; only the Outline Color and Material affect the clue.",
        middle: "Special color mechanic: Checkers except Really Black and clue colors are ignored; only the Outline Color and Material affect the clue.",
        low: "Special color mechanic: Checkers except Really Black and clue colors are ignored; only the Outline Color and Material affect the clue.",
        checker: "Really Black checkers are not ignored. If there is no Outline Color, Vantablack acts as Reflective. Any color in the answer is omitted."
    },

    {
        name: "Dark Magenta",
        color: "#6B1391",
        theme: "Replacing words",
        high: "The clue with words replaced.",
        middle: "The clue with words replaced.",
        low: "The clue with words replaced.",
        checker: "Heightless mechanic; combination of Dark Blue and Dark Red. A Cadet Blue checker can restrict the replacement to ending word(s)."
    },

    {
        name: "Dreamy Gray",
        color: "#D4E1E8",
        theme: "Taxidermizing / preservation",
        high: "Remove all vowels from the hint; removing Y is optional. (posset → psst)",
        middle: "Make a conceptually similar word using letters from the hint. (malevolent → mean)",
        low: "Answer is a way of preserving the hint. (moment → photograph)",
        checker: "N/A"
    }
];
