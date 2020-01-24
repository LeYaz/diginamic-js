function exercice1(){
var a =0;
var b=1;
for(var i=0; i<20; i++){
    
    var c = a+b;
    console.log(c);
    a=b;
    b=c;
}

}

exercice1();