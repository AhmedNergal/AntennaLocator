console.log("HEEEEEEEEEEY GUYS");
var existingAntennas = []
var textInput = document.querySelector("#height");
var submit = document.querySelector("#submit");
var iterator = document.querySelector("#iterator");
var ul = document.querySelector(".list");
var towerHeightText = document.querySelector("#tower-height");
var towerHeightSubmit = document.querySelector("#tower-height-submit");
var currentTowerHeight = document.querySelector("#current-tower-height");
var initButton = document.querySelector("#init");
var nextLocationsList = document.querySelector(".available-locations");
towerHeight = 0

function addAnother(antenna){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(antenna));
  ul.appendChild(li);
}

towerHeightSubmit.addEventListener("click", function(){
    towerHeight = Number(towerHeightText.value);
    currentTowerHeight.textContent = towerHeight.toString()
})


submit.addEventListener("click", function(){
  numAntenna = Number(textInput.value)
  console.log(numAntenna);
  addAnother(textInput.value);
  existingAntennas.push(numAntenna);
  console.log(typeof(numAntenna));
});

init.addEventListener("click", function(){
    availableLocationsList = next_antenna_locator(towerHeight, existingAntennas);
    console.log(availableLocationsList);
    availableLocationsList.forEach(function(antenna){
        var availableLevel = document.createElement("li");
        availableLevel.appendChild(document.createTextNode(antenna));
        nextLocationsList.appendChild(availableLevel);
    });
})

function next_antenna_locator(towerHeight, existingAntennas){
  validPoints = [];
  antennaRanges = {};

  existingAntennas.forEach(function(antenna){
    antennaRanges.base = antenna;
    antennaRanges.range = [antenna, antenna + 4];

    });
    validCounter = 0;
    nextAntennaLocation = towerHeight - 2.6;
    nextAntennaRange = [towerHeight, towerHeight + 4];

    while (nextAntennaLocation > 0){
      existingAntennas.forEach(function(antenna){
          if (Math.abs(nextAntennaLocation - antenna) < 4){

          } else {
            validCounter++;
          }
      });
      if (validCounter === existingAntennas.length){
        validPoints.push(nextAntennaLocation);
      }
      validCounter = 0
      nextAntennaLocation -= 0.25
    }
    return validPoints
  }
