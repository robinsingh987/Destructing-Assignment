function getNameStreet({name, address: {street}}) {
    return {
        name,
        street
    }
}
const person = {
    name: 'robin',
    age: 21,
    address: {
        street: "B8, block B, local Area.",
        city: "Aligarh",
        state: "Uttar Pradesh"
    }
};
// function calling and print here 
console.log(getNameStreet(person));
