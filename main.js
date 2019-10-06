var countM = document, a = 0;
countM.onclick = function() {
    a += 1
    document.getElementById('counter').innerHTML = "Attendees: " + a;
}

