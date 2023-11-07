//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        response.json().then(function(json) {
            let crew = [];
            for (item in json) {
                //console.log(json[item]);
                crew[item] = {
                    "id": json[item].id,
                    "active": json[item].active,
                    "firstName": json[item].firstName,
                    "lastName": json[item].lastName,
                    "skills": json[item].skills,
                    "hoursInSpace": json[item].hoursInSpace,
                    "picture": json[item].picture
                }    
            };
            let crewContainer = document.getElementById("container");

            for (i=0; i<crew.length; i++) {
                crewContainer.innerHTML += 
                `
                <div class = "astronaut">
                    <div class="bio">
                        <h3>${crew[i].firstName} ${crew[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${crew[i].hoursInSpace}</li>
                            <li>Active: ${crew[i].active}</li>
                            <li>Skills: ${crew[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${crew[i].picture}>
                </div>
                `
            };
        });
    });
});