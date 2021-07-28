
function solution(K, M, A) {
    let leaders= []
    for(let i=0;i<=A.length-K;i++){
        let newArr = A.map(x=>x)
        for(let x=0;x<K;x++){
            newArr[x+i]++
        }
        let item = findLeader(M,newArr)
        if(leaders.indexOf(item) === -1) {
            leaders.push(item);
          }
    }
    leaders.sort((a,b)=>a>b)
    return leaders
}
function findLeader(M,A){
    let map1 = new Map()
    for(v in A){
        if(!map1.has(A[v])) {
            map1.set(A[v], 1); 
        }else{
            map1.set(A[v], map1.get(A[v])+1 ); 
        }
    }
    maxkey = 0
    maxvalue = 0
    let get_entries= map1.entries();
    for(let elem of get_entries) {
        if (elem[1]>maxvalue) {
            maxvalue =elem[1]
            maxkey = elem[0]  
        }
    }
    
    return maxkey
}

console.log(solution(4, 2, [1,2,2,1,2]))
// fibonacci

function fib(x){
    if (typeof(x)!= "number"){
        return "you didn't give me a number";
    }else{
        if (x==0 || x==1) return x
        return fib(x-1)+fib(x-2)
    }
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
// 0 1 1 2 3 5 8 13