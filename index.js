function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        sentenceLength++;

        // Check if the character is a letter (part of a word)
        if (char.match(/[a-zA-Z]/)) {
            // Increment word count if a space is encountered after a word
            if (char === ' ') {
                wordCount++;
            }
        }

        // Check if the character is a vowel (case-insensitive)
        if (char.match(/[aeiouAEIOU]/)) {
            vowelCount++;
        }
    }

    // Account for the last word after the loop ends (assuming the last word is followed by a period)
    if (sentence.charAt(sentence.length - 1) !== '.') {
        wordCount++;
    }

    // Display the results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage:
let inputSentence = "This is a sample sentence with some vowels.";
analyzeSentence(inputSentence);
