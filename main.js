var countM = document.getElementsByClassName('col1')[0], a = 0;
countM.onclick = function() {
    a += 1;
    document.getElementById('counter').innerHTML = "Attendees: " + a;
}

// var pauseMe = document.getElementsByClassName('pauseMe')[0];
// pauseMe.onclick = function(e) {
//     e.preventDefault()
//     document.getElementById('test1').disabled = true;
// }

// var nodes = document.getElementById("test2").getElementsByTagName('*');
// for(var i = 0; i < nodes.length; i++){
//      nodes[i].disabled = true;
//      console.log('testing')
// }

// $('#DisableDiv').fadeTo('slow',.6);
// $('#DisableDiv').append('<div style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');


