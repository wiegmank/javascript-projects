// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
    const centered = String((parseInt(shuttleBackground.clientWidth) / 2)-37) + "px";
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = centered;

    takeoff.addEventListener('click', function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (response === true) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "skyblue";
            spaceShuttleHeight.innerHTML = (parseInt(spaceShuttleHeight.innerHTML)) + 10000;
            
        };
    });

    landing.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = '';
        spaceShuttleHeight.innerHTML = 0;

        rocket.style.bottom = "0px";
        rocket.style.left = centered;
    });

    missionAbort.addEventListener('click', function() {
        let response = window.confirm('Confirm that you want to abort the mission');
        if (response === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = '';
            spaceShuttleHeight.innerHTML = 0;

            rocket.style.bottom = "0px";
            rocket.style.left = centered;
        }
    });
    
    up.addEventListener('click', function() {
        if (spaceShuttleHeight.innerHTML < 250000) {
            movement = String(parseInt(rocket.style.bottom)+10)+'px';
            rocket.style.bottom = movement;
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    down.addEventListener('click', function() {
        if (spaceShuttleHeight.innerHTML > 0) {
        movement = String(parseInt(rocket.style.bottom)-10)+'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        }
    });

    left.addEventListener('click', function() {
        if (parseInt(rocket.style.left) > 0) {
        movement = String(parseInt(rocket.style.left) - 10) +'px';
        rocket.style.left = movement;
        };
    });

    right.addEventListener('click', function() {
        if (parseInt(rocket.style.left) < (parseInt(shuttleBackground.clientWidth)) -75) {
        movement = String(parseInt(rocket.style.left) + 10) +'px';
        rocket.style.left = movement;
        };
    });
});