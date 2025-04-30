Thought: 
    
See in this code, we are consoling the `mysteryVarible` 

see javascript will proveide a feature called the `Hoisting` that makes the all variables declaration to the top.

but this not brings the initialization to the top.

so first the console.log() will give the output as defined.

then, after the initialization, the console will get the value as `10`

Then in the function `revealMystery()` we again console the `mysteryVarible` but same it gives the `undefined` because of same reason.

After the initialization the output is `20`.

see the `var` is the fuctional scope, so its value will be `20` only inside the function.

so if we console the `mysteryVarible` outside the function then it will return the value as `10`.


