const axios = require(`axios`);


console.log("Hola Ignacio");

const BringSpaceShips = async () => {

    let naves = await axios.get("https://swapi.dev/api/starships")

    return naves;
};

BringSpaceShips()
    .then(
        resultado => (
            resultado.data.results.map(
                nave => console.log(nave.name)
            )
        )
    )
    .catch(error => console.log(error));

console.log("Esperando");

