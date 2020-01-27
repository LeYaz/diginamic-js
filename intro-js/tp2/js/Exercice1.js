var input = document.querySelector('input');
var button = document.querySelector('button');
var tentative = document.querySelector('#tentative');

var nbrMystere =Math.ceil(Math.random()*10);
var nbrTentative = 5;

    button.onclick = function(){
        nbrTentative--;
        if(isNaN(input.value)){
            alert("Veuillez entrer un nombre valide");
            input.value="";
        }else{
            if(input.value == nbrMystere){
                var coup = 5 - nbrTentative;
                alert("Bravo vous avez gagné en " + coup +" tentative(s)");
                reset();
            }else{
                
                if(nbrTentative==0){
                    alert("Vous n'avez plus de tentative, c'est perdu !");
                    reset();
                }else{
                    alert("Veuillez renseigner un nouveau nombre");
                    tentative.textContent = "Il vous reste "+ nbrTentative + " tentative(s)"
                    input.value="";
                }
            }
        }
    }

var reset = function(){
    input.value="";
    nbrTentative =5;
    nbrMystere=Math.ceil(Math.random()*10);
    tentative.textContent = "Il vous reste "+ nbrTentative + " tentatives"   
} 
//console.log(nbrMystere);