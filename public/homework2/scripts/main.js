const cardImg = document.querySelector(".card-img-top");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");

const getRandomInt = () => {
    return Math.floor(Math.random() * 8 + 1)
};

const clearText = () => {
    cardImg.src = "";
    cardText.innerHTML = "";
    cardTitle.innerHTML = "";
};

const processText = (text) => {
    return text.replace(/\./g, "!!!\n");
};

const textToArray = (text) => {
    return text.split("\n").map((sentence) => {
        return `<span class="d-block">${sentence}</span>\n`;
    });
};

const updateClient = () => {
    const id = getRandomInt();
    clearText();
    fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${id}`)
        .then(response => response.json())
        .then(data => {
            cardTitle.innerHTML = data.name;
            cardImg.src = data.avatar;
            cardText.innerHTML = textToArray(processText(data.message)).join("");
        })
        .catch(error => {
            console.error("There was an error fetching data: ", error)
        });
};
updateClient();
document.getElementById('clientButton').addEventListener('click', updateClient);
