<!-- Closure  -->

My thought:

1. At first, the counter function is assigned to the variable counterA -> that starts the count at 0
2. Then, the increment is called in the form of `counterA()`. The `counterA` variable actually holds the increment function, so calling `counterA()` executes the increment function and returns the updated count.

On the first call to `counterA()`
console.log(counterA()) output will be `1`
On the second call to `counterA()`
console.log(counterA()) output will be `2`

When `counterB` is called, it invokes `createCounter()` again, which reinitializes the count to 0.
so at the time of console.log(counterB()) the output will be 1

if in case the `count` is declared as global/outside the function , then the count variable will not behave as independent/private for both `counterA` and `counterB`
then output will be like
counterA 1
counterA 2
counterB : 3
counterB : 4