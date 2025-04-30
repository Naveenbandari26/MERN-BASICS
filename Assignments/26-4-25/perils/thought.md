Thought: 

See actually the things happen here is that the `greetDelyed` is function that use `setTimeout()` to disply the message `Hello Name`

the expected output is :
    `Hello, Alice!`
but the actual output is :
    `Hello, undefined!`

this happens because the when the `setTimeout()` will start then the binding with the objects will be removed, so then the name becomes undefined

the best way to solve this problem is 
1) using `Arrow Function` in the `setTimeout()` 

like  
        `setTimeout( ()=> {
            console.log(`Hello, ${this.name}!`);
        }, 1000);`

this will not un bind the data, that send into the function then it give the expected output.