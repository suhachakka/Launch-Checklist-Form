// loading the events
window.addEventListener("load", function() {
   // launchstatus div
   let status =document.getElementById("launchStatus");
   // list div
   let listItems= document.getElementById("faultyItems"); 
   // listitems li
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus=document.getElementById("copilotStatus")
   let fuelStatus =document.getElementById("fuelStatus")
   let cargoStatus= document.getElementById("cargoStatus")
    //form 
   let form = document.querySelector("form");

   // event handler
   form.addEventListener("submit", function(event) {
       // stop the form submission for validating the input fields.
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput=document.querySelector("input[name=cargoMass]");
      // input fields are empty 
      if (pilotNameInput.value === "" || copilotNameInput.value ==="" || fuelLevelInput.value === "" || cargoMassInput.value===""){
         alert("All fields are required!");
        
      }
      // validating the input data for reuired inputs from user
      else if(!(isNaN(pilotNameInput.value))|| (!(isNaN(copilotNameInput.value)))|| (isNaN(Number(fuelLevelInput.value)))|| (isNaN(Number(cargoMassInput.value)))){
         alert("Make sure enter valid information for each field");
      }
      else{
         // listitems are hidden and updting to visible;  
         listItems.style.visibility = "visible";     
         pilotStatus.innerHTML = `pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-pilot ${copilotNameInput.value} is ready for launch`;
            if((Number(fuelLevelInput.value) >= 10000) && (Number(cargoMassInput.value) > 10000)){
                 

                  status.innerHTML="Shuttle not ready for Launch";             
                  fuelStatus.innerHTML='Fuel level is high enough for launch';
                  cargoStatus. innerHTML='Cargo mass is too much to launch'
                  status.style.color ="red";
                  cargoStatus.style.color="red"

            }else if((Number(fuelLevelInput.value)) < 10000 && (Number(cargoMassInput.value)) <= 10000) {
                  listItems.style.visibility = "visible";     

                  // pilotStatus.innerHTML = `pilot ${pilotNameInput.value} is ready for launch`;
                  // copilotStatus.innerHTML=`Co-pilot ${copilotNameInput.value} is ready for launch`;

                  status.innerHTML="Shuttle not ready for Launch";             
                  fuelStatus.innerHTML='Fuel level is too low enough for launch';
                  cargoStatus.innerHTML='Cargo mass is good enough for  launch'
                  status.style.color ="red";
                  fuelStatus.style.color="red"


            }else if((Number(fuelLevelInput.value) < 10000) && (Number(cargoMassInput.value)) > 10000) {
                  listItems.style.visibility = "visible";     

                  // pilotStatus.innerHTML = `pilot ${pilotNameInput.value} is ready for launch`;
                  // copilotStatus.innerHTML=`Co-pilot ${copilotNameInput.value} is ready for launch`;

                  status.innerHTML="Shuttle not ready for Launch";             
                  fuelStatus.innerHTML='Fuel level is high enough for launch';
                  cargoStatus.innerHTML='Cargo mass is too much for launch';
                  status.style.color ="red";
                  cargoStatus.style.color="red"
            }else{
               status.innerHTML="Shuttle is ready for Launch";             
               fuelStatus.innerHTML='Fuel level is high enough for launch';
               cargoStatus. innerHTML='Cargo mass is low enough for  launch'
               status.style.color ="green";
               fuelStatus.style.color="green"
               cargoStatus.style.color="green"



            }

   }

   });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/
// fetch function to fetch the json data thru api
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
      // acessing the random entries from array of json objects
      let randomObjectsdata=Math.floor(Math.random() * json.length)
      let missionContent ="";
      missionContent +=`
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[randomObjectsdata].name}</li>
         <li>Diameter: ${json[randomObjectsdata].diameter}</li>
         <li>Star: ${json[randomObjectsdata].star}</li>
         <li>Distance from Earth: ${json[randomObjectsdata].distance}</li>
         <li>Number of Moons: ${json[randomObjectsdata].moons}</li>
      </ol>
      <img src=${json[randomObjectsdata].image}>

     `; 
      // json data added to Html Web page
      missionTarget.innerHTML = missionContent;
   });
   });
})


