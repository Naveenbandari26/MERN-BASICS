function counter() {
    let count = 0;
    function increment() {
        count += 1;
        return count;
    }
    return increment;
}

const counterA = counter();
console.log("counterA", counterA());
console.log("counterA", counterA());
const counterB = counter();
console.log("counterB :", counterB());
console.log("counterB :", counterB());
