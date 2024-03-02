const nav  = document.querySelector(".navBarContainer")
document.addEventListener("DOMContentLoaded", function(){
    fetch("header.html")
    .then(response => response.text())
    .then(data => {
        nav.innerHTML = data
    })
})
function navigation(){
    var mobileNavBarDivEl = document.getElementById("mobileNavBar")
    var hamIconEl = document.getElementById("hamIcon")

    if (hamIconEl.classList.toggle("fa-xmark")){
        hamIconEl.style.color = "#96c4ff"
        mobileNavBarDivEl.style.display = "block"
        if (window.location.pathname.includes("about_us.html")){
            var about_usHltEl =  document.getElementById("about_usHlt")    
            about_usHltEl.style.display = "none"
        }        
    }
    else{
        
        mobileNavBarDivEl.style.display = "none"
        hamIconEl.style.color = "#f3872f"
        if (window.location.pathname.includes("about_us.html")){
            var about_usHltEl =  document.getElementById("about_usHlt")    
            about_usHltEl.style.display = "block"
        }        
    }
    // about us page intigration
    

      
}
window.addEventListener("resize", function () {
var mobileNavBarDivEl = document.getElementById("mobileNavBar");
if (window.innerWidth >= 768) {
mobileNavBarDivEl.style.display = "none";
}
});
const navFooter = document.querySelector(".footermenu")
document.addEventListener("DOMContentLoaded",function(){
    fetch("footer.html")
    .then(res => res.text())
    .then(data  => {
        navFooter.innerHTML = data
    })
})
setTimeout(function() {
    document.getElementById('footerLink').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('navBar').scrollIntoView({
            behavior: 'smooth'
        });
    });
}, 2000);

