const apiUrl = "https://api.thecatapi.com/v1/breeds";
const catInfoDiv = document.getElementById('catInfo');
const options = {
    headers: {
        'x-api-key': 'live_9xAXeOySuZF12pqsDZzqNZy3lMzRgjHdcdFDViMWLt5kIahrWeNrkjQZ5QwzVkWA'
    }
};

async function getCatBreedInfo() {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        const breeds = await response.json();


        if (breeds.length > 0) {
            const breed = breeds[9]; 
            catInfoDiv.innerHTML = `
                <h2>${breed.name}</h2>
                <img src="${breed.image?.url || 'https://via.placeholder.com/150'}">
                <p><strong>Temperamento:</strong> ${breed.temperament}</p>
                <p><strong>Origen:</strong> ${breed.origin}</p>
                <p><strong>Esperanza de vida:</strong> ${breed.life_span} years</p>
                <p><strong>Descripción:</strong> ${breed.description}</p>
            `;
        } else {
            catInfoDiv.textContent = "No se encontró información sobre la raza.";
        }
    } catch (error) {
        console.error(error);
        catInfoDiv.textContent = "Error al cargar la información de la raza.";
    }
}

window.addEventListener('DOMContentLoaded', getCatBreedInfo);
