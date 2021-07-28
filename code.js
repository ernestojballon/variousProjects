console.log("hola")
let A = [[9, 9, 7], [9, 7, 2], [6, 9, 5], [9, 1, 2]]
function solution(A) {
    let x = 0
    let y = 0
    let pivot = A[x][y]
    let sequence = []
    sequence.push(pivot)
    while( x+1 <= A[1].length && y+1 <= A.length ){
        console.log(`this is the new pivot: ${pivot} and
        the new x:${x}
        the new y:${y}`)
        
        if(A[x][y+1]>A[x+1][y]){
            pivot = A[x][y+1]
            y++

        }else{
            pivot = A[x+1][y]
            x++
        }
        sequence.push(pivot)
    }
    return sequence
}
console.log(solution(A))