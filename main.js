
var counter = document.getElementById('counter')
var countM = document.getElementsByClassName('col1')[0], a = 0;
countM.onclick = function() {
    a += 1;
    document.getElementById('counter').innerHTML = "Attendees: " + a;
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
    x = 0
    counter.disabled = false;
    document.getElementById('counter').innerHTML = 'Click on Surface to Count';
    
}

var saveMe = document.getElementById('saveMe').disabled = true;
