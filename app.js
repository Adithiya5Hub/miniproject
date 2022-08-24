

document.getElementById("submit").onclick = function() {
    var anw1 = document.getElementById("q1a")
    var anw2 = document.getElementById("q2a")
    var anw3 = document.getElementById("q3a")
    var anw4 = document.getElementById("q4a")
    var anw5 = document.getElementById("q5a")
    
    var marks = 0;
    if(anw1.checked){
        marks+=1;
    }
    if(anw2.checked){
        marks+=1;
    }
    if(anw3.checked){
        marks+=1;
    }
    if(anw4.checked){
        marks+=1;
    }
    if(anw5.checked){
        marks+=1;
    }
    
    document.getElementById("mark").innerHTML = "<h4>Total Marks = "+marks+"</h4>";
}
document.getElementById("reload").onclick = function(){
    location.reload();
}
