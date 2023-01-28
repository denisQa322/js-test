export function countWords(str =''){
    console.log(str);
    const countedWords = str.trim().split(' ');
    console.log(countedWords);
    
    return countedWords.length;
}