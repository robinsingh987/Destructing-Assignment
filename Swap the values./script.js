function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  
  console.log(swapValues(x, y)); // Output: [10, 5]
  console.log(x); // Output: 10
  console.log(y); // Output: 5

//   or.......................................

const swapValue = (a, b) => {
    a = a + b;  // 10 + 20 => 30
    b = a - b;  // 30 - 20 => 10
    a = a - b;  // 30 - 10 => 20;
    return [a, b] // [20, 10]
}

let a = 10;
let b = 20;
console.log(swapValue(a, b)); // output - [20, 10]
