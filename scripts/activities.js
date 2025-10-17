document.addEventListener('DOMContentLoaded', () => {
    const englishButtons = document.querySelectorAll('#english button');
    const spanishButtons = document.querySelectorAll('#spanish button');
    const scoreDisplay = document.getElementById('score');

    // Multiple rounds
    const wordSets = [
        {
            english: ["Apple", "House", "Sun", "Book"],
            spanish: ["Manzana", "Casa", "Sol", "Libro"],
            dataWords: ["apple", "house", "sun", "book"]
        },
        {
            english: ["Dog", "Car", "Water", "Tree"],
            spanish: ["Perro", "Coche", "Agua", "Árbol"],
            dataWords: ["dog", "car", "water", "tree"]
        },
        {
            english: ["Music", "Pillow","Flowers","Money"],
            spanish: ["música", "almohada","flores","dinero"],
            dataWords:["music", "pillow", "flowers", "money"]
        }
    ];

 let currentSetIndex = 0;
    let firstChoice = null;
    let score = 0;
    let totalScore = 0;

    // Shuffle array
    function shuffleArray(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    // Load words into buttons
    function loadWordSet(setIndex) {
        const set = wordSets[setIndex];

        const englishShuffled = shuffleArray(set.english.map((word, i) => ({
            word, data: set.dataWords[i]
        })));
        const spanishShuffled = shuffleArray(set.spanish.map((word, i) => ({
            word, data: set.dataWords[i]
        })));

        englishButtons.forEach((btn, i) => {
            btn.textContent = englishShuffled[i].word;
            btn.dataset.word = englishShuffled[i].data;
            btn.className = "";
        });

        spanishButtons.forEach((btn, i) => {
            btn.textContent = spanishShuffled[i].word;
            btn.dataset.word = spanishShuffled[i].data;
            btn.className = "";
        });

        score = 0;
        scoreDisplay.textContent = `Score: ${totalScore}`;
        firstChoice = null;
    }

    // Click logic (either English or Spanish first)
    function handleClick(button) {
        if (!firstChoice) {
            // First click
            firstChoice = { word: button.dataset.word, button };
            button.classList.add('selected');
        } else if (firstChoice.button === button) {
            // Clicked same button, ignore
            return;
        } else {
            // Second click
            if (firstChoice.word === button.dataset.word) {
                // Correct
                firstChoice.button.classList.add('correct');
                button.classList.add('correct');
                score++;
                totalScore++;
                scoreDisplay.textContent = `Score: ${totalScore}`;
            } else {
                // Wrong
                firstChoice.button.classList.add('wrong');
                button.classList.add('wrong');
                setTimeout(() => {
                    firstChoice.button.classList.remove('wrong', 'selected');
                    button.classList.remove('wrong');
                }, 800);
            }
            firstChoice.button.classList.remove('selected');
            firstChoice = null;

            // Check if round complete
            if (score === englishButtons.length) {
                currentSetIndex++;
                if (currentSetIndex < wordSets.length) {
                    setTimeout(() => loadWordSet(currentSetIndex), 1000);
                } else {
                    setTimeout(() => alert(`🎉 You completed all rounds! Total Score: ${totalScore}`), 500);
                }
            }
        }
    }

    // Add click listeners to all buttons
    [...englishButtons, ...spanishButtons].forEach(btn => {
        btn.addEventListener('click', () => handleClick(btn));
    });

    // Initialize first round
    loadWordSet(currentSetIndex);
});
