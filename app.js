fetch("https://icanhazdadjoke.com/", {
    headers: {
        "Accept": "application/json"
    }
})
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
         let divElm = document.querySelector(".jokes"); // Korrekt selector

        divElm.classList.add("joke"); // Tilføj en klasse

        divElm.innerHTML = `<p>${data.joke}</p>`; // Indsæt joketeksten */
    })
    .catch(error => console.error("Fejl ved hentning af joke:", error)); // Håndter fejl

