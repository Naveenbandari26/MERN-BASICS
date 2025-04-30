<!-- DelayGreet -->

My thought:

1.  The `delayedGreeter` function is called by pasing the array/list of names(strings).
2.  The function will execute the functionality like traversing over the list and by using the `setTimeout()` with the delay of `index * 1000(1sec)`
3.  But the output that i was expected is:
    Hello, Alice! (after 0 seconds)
    Hello, Bob! (after 1 second)
    Hello, Charlie! (after 2 seconds)

the Actual output is :
Hello, undefined! (after 0 seconds)
Hello, undefined! (after 1 second)
Hello, undefined! (after 2 seconds)

I got the reason for this,
this output is because of using `var` as the variable

Reason :
Var doesn't generate a new scope for every loop iteration because it is function-scoped rather than block-scoped. Rather, the same i variable is shared by all iterations.

        It holds the final value—in this case, three—when the loop is complete.

        The callback inside `setTimeout()` tries to use i, but it finds i = 3 because setTimeout() executes after the loop is finished.

        It tries names[3] if you are trying to access something like names[i], but the result will be undefined if the array contains no elements at index 3.

        var failed to capture the loop value per iteration, which is why the output displays undefined rather than a setTimeout error.

Solution:
<!-- first solution -->
       To get the ouput as expected, we have to use the `let` instead of `var`

        Because the let is the block scope , it will assign the new value to the i at every iteration.

        so the i value will be in incremented in every loop.

        then we gets the output as expected like:
        Hello, Alice! (after 0 seconds)
        Hello, Bob! (after 1 second)
        Hello, Charlie! (after 2 seconds)


