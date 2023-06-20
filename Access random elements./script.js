const firstSecondLastElem = (numbers) => {
    const [first, secont, ...rest] = numbers;
    const last = rest.pop(); //get last element from rest array 
    return [first, secont, last];
}
numbers = [1, 2, 3, 4, 5, 6]
console.log(firstSecondLastElem(numbers)); 
// output - [1, 2, 6]
