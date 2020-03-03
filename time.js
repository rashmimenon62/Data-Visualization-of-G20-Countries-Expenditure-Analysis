var countdowndate = new Date("Nov 21, 2020 00:00:00").getTime(); 
var interval = setInterval(function() { 
var currentdate = new Date().getTime(); 
var diff = countdowndate - currentdate; 
var d = Math.floor(diff/ (1000 * 60 * 60 * 24)); 
var h = Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
var s = Math.floor((diff % (1000 * 60)) / 1000); 
document.getElementById("demo").innerHTML = d + "d "  
+ h + "h " + m + "m " + s + "s "; 
    if (interval < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
    } 
}, 3000); 
