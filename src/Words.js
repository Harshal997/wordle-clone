import words from './valid-wordle-words.txt';

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];

export const generateWordSet = async () => {
    let wordSet, todaysWord;
    await fetch(words).then((response) => response.text()).then((result) => {
        const wordArr = result.split('\n');
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
    })
        return {wordSet, todaysWord};
};
