function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
        count++;
        return count;
    }
    function decrement() {
        count--;
        return count;
    }
    return {
        increment: increment,
        decrement: decrement
    };
}
const counterOne = setupCounter(5);
console.log(counterOne.increment());
console.log(counterOne.increment());
const counterTwo = setupCounter(10);
console.log(counterTwo.decrement());

console.log(counterOne.decrement());