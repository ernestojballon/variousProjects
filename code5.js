console.log("hola")

function fizz(){
    for(let x = 1 ; x <= 20; x++){
        let print = ''
        if ( x % 3 == 0){
            print += 'fizz'
        }
        if ( x % 5 == 0){
            print += 'Buzz'
        }
        if (!print){
            print += x
        }
        console.log(print)
    }
}
fizz()