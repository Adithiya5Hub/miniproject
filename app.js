

document.getElementById("submit").onclick = function() {
    
    var a1 = document.getElementById("a1").value;
var a2 = document.getElementById("a2").value;
var a3 = document.getElementById("a3").value;
var a4 = document.getElementById("a4").value;
    var marks = 0;
    if(a1.toLowerCase() == "insects"){
        marks+=1;
    }
    if(a2.toLowerCase() == "africa"){
        marks+=1;
    }
    if(a3.toLowerCase() == "diphu" || a3.toLowerCase() == "assam"){
        marks+=1;
    }
    if(a4.toLowerCase() == "nazi party"){
        marks+=1;
    }
    document.getElementById("mark").innerHTML = "<h3>Total Marks = "+marks+"</h3>";
}
document.getElementById("reload").onclick = function(){
    location.reload();
}