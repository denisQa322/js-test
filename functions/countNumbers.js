export function countNumbers(arr){
        let sum = 0;
        const countedNumbers = arr.reduce((accumulator,currentValue) => accumulator + currentValue,sum);
        return countedNumbers;
};