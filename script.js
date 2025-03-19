let points = 0;

function ajouterPoints(valeur) {
    points += valeur;
    document.getElementById("points").innerText = points;

    if (points < -100) {
        document.getElementById("score").style.color = "red";
    } else if (points >=-100 && points <150) {
        document.getElementById("score").style.color = "orange";
    } else {
        document.getElementById("score").style.color = "green";
    }
}

document.querySelectorAll(".ajouter").forEach(function(button) {
    button.addEventListener("click", function() {
        let valeur = parseInt(button.getAttribute("data-valeur")); // Récupère la valeur définie dans l'attribut "data-valeur"
        ajouterPoints(valeur);
    });
});