// https://thronesapi.com/api/v2/Characters

const charactersList = document.querySelector("#character-list")
const characterImage = document.querySelector(".character-image")


const characters = async () => {
    
    try {
        const res = await fetch('https://thronesapi.com/api/v2/Characters');
        const characters = await res.json();
        console.log(characters);

        for (const character of characters) {
            const characterOption = document.createElement("option");
            characterOption.value = character.imageUrl;
            characterOption.textContent = character.fullName;
            charactersList.appendChild(characterOption);
        }
    } catch(err) {
        console.error("That character doesn't exist");
    }
}

characters();

charactersList.addEventListener("change", (e) => {
    
    const selectedImageValue = e.target.value;
    characterImage.src = selectedImageValue;
});