// Create your global variables below:
var tracklist = ["Rolling Down the Hill", "Bigger Than Me", "Don't Look Back", "Moving On", "I Just Want the Truth, Baby", "Give me a Smile", "Caiti", "Metaphor", "Dirty Money", "Volcano", "Green", "Finding Beauty in a Broken World"];
var volLevels = [];
var currentVolLevel = 2;
var currentTrack = 0;
var currentTime;

function init() {
    // Your code goes here
    for(var i = 0; i<=5; i++){
        volLevels[i]= document.getElementById("vl" + i);
    }
    for(var i = 0; i<=currentVolLevel;i++){
        volLevels[i].className= "volume-bar-filled";
    }
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];
};

function volUp() {
    // Your code goes here
    if(currentVolLevel >= 5){
        return;
    }
    currentVolLevel++;
    volLevels[currentVolLevel].className="volume-bar-filled";
}

function volDown() {
    // Your code goes here
    if(currentVolLevel == -1){
        return;
    }
    volLevels[currentVolLevel].className="volume-bar";
    currentVolLevel--;
}

function switchPlay() {
    // Your code goes here
    var icon = document.getElementById("toggle").innerHTML;
    if(icon == "play_arrow"){
        document.getElementById("toggle").innerHTML = "pause";
        currentTime = setInterval(function(){
            if(document.getElementById("track-timer").value == 180){
                nextSong();
                return;
            }
            document.getElementById("track-timer").value++;
            document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("track-timer").value);
        }, 1000);
    }
    if(icon == "pause") {
        clearInterval(currentTime);
        document.getElementById("toggle").innerHTML = "play_arrow";
    }

}

function nextSong() {
    // Your code goes here
    if(currentTrack == tracklist.length-1){
        currentTrack = 0;

    }
    else{
        currentTrack++;
    }
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];

    document.getElementById("track-timer").value=0;
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
}

function prevSong() {
    // Your code goes here
    if(currentTrack == 0){
        return;
    }
    currentTrack--;
    document.getElementById("player-song-name").innerHTML = tracklist[currentTrack];
    document.getElementById("track-timer").value=0;
    document.getElementById("time-elapsed").innerHTML = secondsToMs(0);
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();