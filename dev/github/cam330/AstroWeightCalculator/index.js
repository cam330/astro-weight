var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

var selects = document.getElementById('planet');
for(var i = 0; i<planets.length; i++){
  var planetName = planets[i].planet;
  var opt = document.createElement('option');
  opt.innerHTML = planetName;
//  opt.value = planets[i];
  selects.appendChild(opt);
}

function calculate(){
  var weight = document.getElementById("weight").value; 
  var planetIndex = document.getElementById("planet").selectedIndex;
  var gravity = planets[planetIndex].gravity;
  document.getElementById("myp").innerHTML =("If you were on " +planets[planetIndex].planet + " you would weigh " + weight*gravity+ " pounds!");
  
}