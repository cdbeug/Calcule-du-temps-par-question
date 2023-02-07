document.querySelector("#calcule_temps").addEventListener("submit", function (event) {
	event.preventDefault();
	let nombre_de_questions = Number(document.querySelector("#nombre_de_questions").value);
	let temps_total_restant = Number(document.querySelector("#temps_restant").value);

	resultats.innerHTML = "";
	if (!isNaN(nombre_de_questions) && !isNaN(temps_total_restant)) {
		let resultats = document.querySelector("#resultats");

		resultats.innerHTML += "<p>Le temps moyen par question est de pour le temps restant est de " + temps_total_restant / nombre_de_questions + ".</p>"
		resultats.innerHTML += "<p>Vous devriez faire le nombre moyen de questions par minute suivant " + nombre_de_questions / temps_total_restant + ".</p>"
	}
})