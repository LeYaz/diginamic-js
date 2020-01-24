function somme(a,  b){
    return a+b;
};

console.log(somme(10,10));

function programme(){
    let nbr;
    do{
        nbr = prompt("Donner un nombre");
   
   }while(isNaN(parseInt(nbr)))

    for(var i=0; i<=nbr; i++){
 
        if(i%15===0){
            console.log("FizzBuzz")
        }else if(i%5 === 0){
            console.log("Buzz");
        }else if(i%3===0){
            console.log("Fizz");
        } else{
            console.log(i);
        }
    }
}




programme();