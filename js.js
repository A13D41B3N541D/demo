        document.getElementById('oneWayBtn').addEventListener('click', function () {
            document.getElementById('oneWayForm').style.display = 'block';
            document.getElementById('roundTripForm').style.display = 'none';
        });

        document.getElementById('roundTripBtn').addEventListener('click', function () {
            document.getElementById('oneWayForm').style.display = 'none';
            document.getElementById('roundTripForm').style.display = 'block';
        });

        // Afficher le formulaire "Aller simple" par défaut lors du chargement du modal
        document.getElementById('oneWayBtn').click();

        
    const suggestions = ['Paris', 'Londres', 'New York', 'Tokyo', 'Berlin', 'Sydney', 'Rome', 'Madrid', 'Moscou'];
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');

    searchInput.addEventListener('input', function () {
        const input = this.value.toLowerCase();
        suggestionsBox.innerHTML = '';

        if (input.length > 0) {
            const filteredSuggestions = suggestions.filter(function (word) {
                return word.toLowerCase().includes(input);
            });

            filteredSuggestions.forEach(function (suggestion) {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = suggestion;
                div.addEventListener('click', function () {
                    searchInput.value = suggestion;
                    suggestionsBox.innerHTML = '';
                });
                suggestionsBox.appendChild(div);
            });

            suggestionsBox.style.display = filteredSuggestions.length ? 'block' : 'none';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });
	

    // Hide suggestions when clicking outside the input
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.position-relative')) {
            suggestionsBox.style.display = 'none';
        }
    });
	document.getElementById("passengerInput").addEventListener("click", function() {
    document.getElementById("passengerDropdown").classList.toggle("show");
});

// Fonction pour augmenter le nombre de passagers
function increaseCount(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    countElement.textContent = count + 1;
}

// Fonction pour diminuer le nombre de passagers
function decreaseCount(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        countElement.textContent = count - 1;
    }
}

// Appliquer la sélection des passagers et fermer la fenêtre
document.getElementById("applyPassengers").addEventListener("click", function() {
    let adultCount = document.getElementById("adultCount").textContent;
    let childCount = document.getElementById("childCount").textContent;
    let babyCount = document.getElementById("babyCount").textContent;
    
    let totalPassengers = parseInt(adultCount) + parseInt(childCount) + parseInt(babyCount);
    document.getElementById("passengerInput").value = totalPassengers + " Passagers";
    
    document.getElementById("passengerDropdown").classList.remove("show");
});

