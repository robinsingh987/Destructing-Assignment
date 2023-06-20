function getMaxMinValue() {
    let maxValue = Math.max(...arguments);
    let minValue = Math.min(...arguments);
    return {
        maxValue,
        minValue 
    };
}
numbers = [1, 4, 5, 2, 6, 16, 9]
console.log(getMaxMinValue(...numbers)); 
// Output -> { maxValue: 16, minValue: 1 }
