const myFuction = (a = 10, b = 5) => {
    return a + b;
}

console.log(myFuction()); 

console.log(myFuction(5));

console.log(myFuction(10, 5));