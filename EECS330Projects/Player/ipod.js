// Create your global variables below:
var tracklist = ["Rolling Down the Hill", "Bigger Than Me", "Don't Look Back", "Moving On", "I Just Want the Truth, Baby", "Give me a Smile", "Caiti", "Metaphor", "Dirty Money", "Volcano", "Green", "Finding Beauty in a Broken World"];
var volLevels = [];
var currentTrack = 0;           // Current Track 
var currentTime;                // Current Time
var currentVolLevel = 2;        // Current volume level

function init() {

    for(var i = 0; i<=5; i++){      //Populate Volume Array
        volLevels[i]= document.getElementById("vl" + i);
    }
    for(var i = 0; i<=currentVolLevel;i++){         // Fill Volume Bar
        volLevels[i].className= "volume-bar-filled";
    }
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];                // Set current track
};

function volUp() {

    if(currentVolLevel >= 5){}          // If max volume do nothing

    else {                              // Else increment volume one
        currentVolLevel++;
        volLevels[currentVolLevel].className="volume-bar-filled";
    }
}

function volDown() {
    
    if(currentVolLevel == -1){}         // If min volume do nothing
    
    else{                               // Else decrement one
        volLevels[currentVolLevel].className="volume-bar";
        currentVolLevel--;
    }
}

function switchPlay() {
    
    var icon = document.getElementById("toggle").innerHTML; // record current icon
    if(icon == "play_arrow"){                               // If paused
        document.getElementById("toggle").innerHTML = "pause";
        currentTime = setInterval(function(){               // Play
            if(document.getElementById("track-timer").value == 180){
                nextSong();
                return;
            }
            document.getElementById("track-timer").value++;     // Set time
            document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("track-timer").value);
        }, 1000);
    }
    if(icon == "pause") {                                   // If playing
        clearInterval(currentTime);                         // Pause
        document.getElementById("toggle").innerHTML = "play_arrow";
    }

}

function nextSong() {                                      
    
    if(currentTrack == tracklist.length-1){ // If last track
        currentTrack = 0;                   // Loop to first
    }
    
    else{                                   // Else increment track      
        currentTrack++;
    }
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];                  // Set new track

    document.getElementById("track-timer").value=0; // Set time to 0
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
}

function prevSong() {
    
    if(currentTrack == 0){                    // If first track
        currentTrack = tracklist.length-1;    // Loop to last
    }
    
    else {                                    // Else decrement track
        currentTrack--;
    }
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];                    // Set new track
    
    document.getElementById("track-timer").value=0;     // Set time to 0
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();