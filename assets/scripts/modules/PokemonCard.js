import { getPokemonData } from "./HttpRequest";

export class PokemonCard {
    constructor(buttonSelector, infoSelector) {
        this.button = document.querySelector(buttonSelector);
        this.info = document.querySelector(infoSelector);

        this.init();
    }

    init() {
        this.button.addEventListener("click", (e) => this.handleClick(e));
    }

    async getRandomPokemon() {
        const randomNumber = Math.floor(Math.random() * 1025) + 1;
        const pokemonData = await getPokemonData(String(randomNumber));
        return pokemonData;
    }

    extractData(pokemonData) {
        // console.log(pokemonData);
        // console.log(pokemonData.types[0].type.name)
        const id = pokemonData.id;
        const name = pokemonData.name;
        const image = pokemonData.sprites.front_default;
        const type = pokemonData.types.map(t => t.type.name);
        return { id, name, image, type };
    }

    showData(data) {
        const htmlData = `
        <dl>
        <dt>Name: ${data.name}</dt>
        <dt><img src="${data.image}" alt="${data.name}"</dt>
        <dt>ID: ${data.id}</dt>
        <dt>Type: ${data.type[0]}</dt>
        </dl>`;
        this.info.innerHTML = htmlData;
    }

    async handleClick(e) {
        e.preventDefault();
        try{
            const rawData = await this.getRandomPokemon();
            const extracted = this.extractData(rawData);
            this.showData(extracted);
        }catch{
            console.log("ポケモン取得エラー", err)
        }
    }
}