
var string = " Infrastructure";
var str = string.split("");
var el = document.getElementById('companyName');
var running; 
(function animate() {
    if (str.length > 0) {
        el.innerHTML += str.shift();
        running = setTimeout(animate, 200);
    }

})();