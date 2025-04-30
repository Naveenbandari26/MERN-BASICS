const user = {
    name: "Alice",
    greetDelayed: function () {
        setTimeout( ()=> {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
user.greetDelayed();