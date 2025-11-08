export const extractData = (pokemonData) => {
    const id = pokemonData.id;
    const name = pokemonData.name;
    const image = pokemonData.sprites.front_default;
    const type = [];
    pokemonData.types.forEach(element => {
        type.push(element.type.name);
    });
    return {id, name, image, type};
}

export const showData = async(data) => {
    const htmlData = `<dl>
    <dt>Name: ${data.name}</dt>
    <dt>Image: <img src="${data.image}" alt="${data.name}"></dt>
    <dt>ID: ${data.id}</dt>
    <dt>Type: ${data.type}</dt>
    </dl>`;
    document.querySelector('#card_info').innerHTML = htmlData;
    document.querySelector('#card_info2').innerHTML = htmlData;
}