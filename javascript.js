

document.addEventListener("DOMContentLoaded", function () {
    // Button erstellen
    const toggleButton = document.createElement("button");
    toggleButton.id = "dark-mode-toggle";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "50px";
    toggleButton.style.right = "25px";
    toggleButton.style.textAlign = "center";
    toggleButton.style.fontSize = "23px";
    document.body.appendChild(toggleButton);

    // Dark Mode 
    function initializeDarkMode() {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        }
        updateButtonText();
    }

    // Button-Text aktualisieren
    function updateButtonText() {
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerHTML = "LIGHTMODE"; 
        } else {
            toggleButton.innerHTML = "DARKMODE";
        }
    }


    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode"); 
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode); 
        updateButtonText();
    });

    // Dark Mode bleibt
    initializeDarkMode();
});


//Contactform

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

   
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    
    if (!name || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    
    const feedback = document.getElementById("form-feedback");
    feedback.textContent = "THANK YOU FOR GETTING IN TOUCH, " + name + " :)";
    feedback.style.display = "block";

    
    document.getElementById("contact-form").reset();

    


   
    console.log({
        name: name,
        email: email,
        message: message
    });


});


// Liste der Projektseiten in der gewünschten Reihenfolge
const projects = [
    'ecotopy.html',
    'woodentwist.html',
    'superchemnitz.html',
    'brochure.html',
    'acetoneplaster.html'
    // Weitere Projekte hier hinzufügen
];

// Aktuelle Seite ermitteln
const currentPage = window.location.pathname.split('/').pop();
const currentIndex = projects.indexOf(currentPage);

// Links und Rechts Pfeile
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Vorheriges Projekt
if (currentIndex > 0) {
    leftArrow.href = projects[currentIndex - 1];
} else {
    leftArrow.style.display = 'none'; // Versteckt den Pfeil, wenn kein vorheriges Projekt existiert
}

// Nächstes Projekt
if (currentIndex < projects.length - 1) {
    rightArrow.href = projects[currentIndex + 1];
} else {
    rightArrow.style.display = 'none'; // Versteckt den Pfeil, wenn kein nächstes Projekt existiert
}

