
console.log("This a example of reverse");
let x = "hola";
const reverse = (word) => {
    let reverse = [];
    let wordArray = [...word];
    while (wordArray.length!=0) {
        reverse.push(wordArray.pop());
    }
    return reverse.join("");
};
console.log(reverse(x));

console.log("This a example of fibonachi");
const fib= (n) => {
    if( n==0 || n==1 ) return n
    let fib = [0,1]
    while (fib.length<=n) {
       fib.push(0)
       fib[fib.length-1] = fib[fib.length-2] + fib[fib.length -3]
    }
    return fib[fib.length-1]
};
    console.log(fib(6));
console.log("This a example of factorial");
const factorial = (n) => {
    if (n == 0){
        return 1
    } 
    return n * factorial(n-1)
};
    console.log(factorial(4));
console.log("this is palindrome");
const palindrome = (w) => {
    
    for(x=0;x<=w.length/2;x++){
        if(w[x]!==w[w.length-1-x]){
            return false
        }
    }
    return true
};
    console.log(palindrome("12021"));
