
var counter = document.getElementById('counter')
var countM = document.getElementsByClassName('col1')[0], a = 0;
countM.onclick = function() {
    a += 1;
    var x = "Attendees: " + a;
    document.getElementById('counter').innerHTML = x;
    document.getElementById('counter').style.fontSize = "100px";

    // document.getElementById('counter').innerHTML.fon;
}

var pauseMe = document.getElementById('pauseMe');
pauseMe.onclick = function () {
    counter.disabled = true;
}

var resumeMe = document.getElementById('resumeMe');
resumeMe.onclick = function () {
    counter.disabled = false;
}

var resetMe = document.getElementById('resetMe');
resetMe.onclick = function () {
    // counter.disabled = false;
    // x = 0
    document.location.reload();
    // document.getElementById('counter').innerHTML = reset();
    // document.getElementById('counter').innerHTML = 'Click on Surface to Count';
    
}

var saveMe = document.getElementById('saveMe').disabled = true;
