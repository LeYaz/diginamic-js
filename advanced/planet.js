class Planet{
    constructor({name, population}){
        this.name = name;
        this.population = population; 
    }

    static countPlanetsPopulation(planets){
        return planets.reduce(function(acc,val){
            var p =parseInt(val.population);
            if(isNaN(p)){
              return  acc + 0;
            }else{
              return  acc+p;
            }    
        },0);
    }
}

// var a =[{population:6}, {population : 8}, {population: 5}, {population:12}];

// console.log(Planet.countPlanetsPopulation(a));

module.exports= Planet;