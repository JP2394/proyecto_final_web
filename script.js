document.getElementById("searchBtn").addEventListener("click", function() {
    filterJobs();
});

document.getElementById("vacancySearchBtn").addEventListener("click", function() {
    filterVacancies();
});

document.getElementById("companyLoginBtn").addEventListener("click", function() {
    loginAsCompany();
});

function filterJobs() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var jobOffers = document.querySelectorAll(".job-offer");

    jobOffers.forEach(function(offer) {
        var jobTitle = offer.querySelector("h3").innerText.toLowerCase();
        var jobDescription = offer.querySelector("p").innerText.toLowerCase();

        if (jobTitle.includes(searchTerm) || jobDescription.includes(searchTerm)) {
            offer.style.display = "block";
        } else {
            offer.style.display = "none";
        }
    });
}

function filterVacancies() {
    var vacancySearchTerm = document.getElementById("vacancySearchInput").value.toLowerCase();
    var jobOffers = document.querySelectorAll(".job-offer");

    jobOffers.forEach(function(offer) {
        var jobTitle = offer.querySelector("h3").innerText.toLowerCase();

        if (jobTitle.includes(vacancySearchTerm)) {
            offer.style.display = "block";
        } else {
            offer.style.display = "none";
        }
    });
}


function loginAsCompany() {
    // Implementar lógica de inicio de sesión como empresa aquí
    // Por ahora, redirigir a la página de empresas de ejemplo
    window.location.href = "vista_empresa.html";
}