console.log(longestRep("aabbddddaaacdfree"))

function longestRep(str){
    let arr = str.split("")
    let maxValue = arr[0]
    let maxRep = 1
    let value = arr[0]
    let rep = 1

    for (let x=1;x<arr.length; x++){

        if(arr[x]==value){
            rep++
        }else{
            value = arr[x]
            rep = 1
        }

        if(rep > maxRep){
            maxRep=rep;
            maxValue = value
        }
    }
    return maxValue
}