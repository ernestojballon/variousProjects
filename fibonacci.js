// fibonacci

function fib(x){
    if (typeof(x)!= "number"){
        return "you didn't give me a number";
    }else{
        if (x==0 || x==1) return x

        return fib(x-1)+fib(x-2)
    }

    return "is a number"
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
// 0 1 1 2 3 5 8 13