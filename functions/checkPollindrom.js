export function checkPollindrom(str =''){
    return str.split('').reverse().join('').toLowerCase() === str;
}