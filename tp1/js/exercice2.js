



function exercice2(){
    var a =0;
    var b=1;

    let nbr;
    do{
        nbr = prompt("Donner un nombre");
   
   }while(isNaN(parseInt(nbr)))

    for(var i=0; i<nbr; i++){
        
        var c = a+b;
       // console.log(c);
        document.write(c + "<br/>")
        a=b;
        b=c;
    }
    
    }
    
    exercice2();