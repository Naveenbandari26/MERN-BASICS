function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
    }
    flexibleFunction(1);
    flexibleFunction(1, 2);
    flexibleFunction(1, 2, 3, 4, 5);