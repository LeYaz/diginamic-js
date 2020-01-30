const http = require('http');
const axios = require('axios');
var Planet = require('./planet.js');

let apiurl = "https://swapi.co/api/planets/";
let data;
let Planets=[];
let stop = true;



async function getPlanet() {
     do{
        try {
            const response = await axios.get(apiurl);
              data = await response.data;
              if(data.next == null){
                  stop =false;
                  
              }else{
                  apiurl =data.next;
                  console.log(`Chargement de ${data.next}`);
              }
              data.results.forEach(element => {
                  var name = element.name;
                  var population = element.population;
                  var p = new Planet({name, population});
                  Planets.push(p);
              });
              
          } catch (error) {
            console.error(error);
          }

         

     }while(stop)
    Planets.forEach(element =>console.log(`Planete : ${element.name} , Population : ${element.population}`) )    
    console.log(`Population totale des planètes : ${Planet.countPlanetsPopulation(Planets)}`);
  }

getPlanet();
