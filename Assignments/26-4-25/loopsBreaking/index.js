console.log("first loop");
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
    continue;
    }
    if (i === 7) {
    break;
    }
    console.log(i);
    }
    console.log("second loop");
    //2nd
    for (let i = 1; i <= 20; i++) {
        if (i % 5 === 0) {
            continue;
        }
        if (i > 15) {
            break;
        }
        console.log(i);
    }

console.log("Challenge loop");
const numbers = [10, 5, 8, 20, 3, 15, 25];

for (const num of numbers) {
    if (num === 5) {
        console.log("Skipping 5!");
        continue;
    }
    if (num > 12) {
        console.log("Found a large number!");
        break;
    }
    console.log(num);
}