const myObject = {
    z: 1,
    a: 2,
    10: 3,
    b: 4,
    2: 5,
    c: 6
    };
    
    for (const key in myObject) {
    console.log(key, myObject[key]);
    }
    
    console.log(Object.keys(myObject));