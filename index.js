var existingAntennas = []
var textInput = document.querySelector("#antenna-height");
var submit = document.querySelector("#submit");
var iterator = document.querySelector("#iterator");
var ul = document.querySelector(".list");
var towerHeightText = document.querySelector("#tower-height");
var towerHeightSubmit = document.querySelector("#tower-height-submit");
var currentTowerHeight = document.querySelector("#current-tower-height");
var initButton = document.querySelector("#init");
var nextLocationsList = document.querySelector(".available-locations");
towerHeight = 0

// Adds an existing antenna to the existing antenna list in the HTML
function addAnother(antenna){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(antenna));
  ul.appendChild(li);
}

// Enters the tower height to the HTML and to the script
towerHeightSubmit.addEventListener("click", function(){
    towerHeight = Number(towerHeightText.value);
    currentTowerHeight.textContent = towerHeight.toString()
})

// Submits the antenna heights and pushes them to the existingAntennas list
submit.addEventListener("click", function(){
  numAntenna = Number(textInput.value)
  addAnother(textInput.value);
  existingAntennas.push(numAntenna);
  console.log(typeof(numAntenna));
});

// Initiates the calculation script and creates a list of the avaliable antenna locations
init.addEventListener("click", function(){
    availableLocationsList = next_antenna_locator(towerHeight, existingAntennas);
    console.log(availableLocationsList);
    availableLocationsList.forEach(function(antenna){
        var availableLevel = document.createElement("li");
        availableLevel.appendChild(document.createTextNode(antenna));
        nextLocationsList.appendChild(availableLevel);
    });
})

// Brute forces through the tower heights and finds the available locations to install the antenna conforming to specs
function next_antenna_locator(towerHeight, existingAntennas){
  validPoints = [];

  existingAntennas.forEach(function(antenna){

    });
    validCounter = 0;
    nextAntennaLocation = towerHeight - 2.6;

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
      nextAntennaLocation -= 0.10
    }
    return validPoints
  }
