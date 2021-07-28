console.log(higher(9234));

function higher(num){
    let arr = String(num).split("")
    for(let x = 0;x<=arr.length;x++){
        if(arr[x] < 5 ){
            arr.splice(x,0,5)
            break;
        }
        console.log(arr)
    }
    return Number(arr.join(""))
}