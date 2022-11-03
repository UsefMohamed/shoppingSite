let burger_holder = document.getElementById("burger");
let aside = document.getElementById("aside");
document.onclick = function(e) {
    if(e.target.id == "aside" && e.target.id == "burger") {
        aside.classList.remove("effect");
        burger_holder.classList.remove("effect");
    }
}
burger_holder.onclick = function() {
    aside.classList.toggle("effect");
}
