const removeDublicate = (numbers) => {
    const uniquElem = new Set(numbers);
    return uniquElem;
}

const numbers = [1, 2, 3, 4, 3, 2, 5]
console.log(removeDublicate(numbers));
