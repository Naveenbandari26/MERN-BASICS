function delayedGreeter(names) {
  for (var i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello, ${names[i]}!`);
    },i * 1000);
  }
}
delayedGreeter(["Alice", "Bob", "Charlie"]);


// // other ans by using the IIFE (Immediately Invoked Function Expression) pattern
// function delayedGreeterCorrected(names) {
//   for (var i = 0; i < names.length; i++) {
//     (function (index) { // IIFE creates a new scope for each iteration
//       setTimeout(function () {
//         console.log(`Hello, ${names[index]}!`);
//       }, index * 1000);
//     })(i); // Pass the current value of &#39;i&#39; into the IIFE
//   }
// }
// delayedGreeterCorrected(["Alice", "Bob", "Charlie"]);
