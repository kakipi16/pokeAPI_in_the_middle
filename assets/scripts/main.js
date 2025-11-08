// import '../styles/style.css';
// import { getPokemonData } from './modules/HttpRequest';
// import { extractData, showData } from './modules/PokemonClass';


// const RandomID = async() => {
//   const randomNumber = Math.floor(Math.random() * 1025) + 1;
//   const StringConvert = String(randomNumber);
//   const pokemonData = await getPokemonData(StringConvert);
//   return pokemonData;
// }

// // RandomID();

// const submitHandler = async(e) => {
//   e.preventDefault();
//   const RandomData = await RandomID(e);
//   const extractedData = extractData(RandomData);
//   showData(extractedData);
// }


// // ボタンをクリックしたら関数を実行
// document.querySelector("#card_button").addEventListener("click", (e) => submitHandler(e));
// document.querySelector("#card_button2").addEventListener("click", (e) => submitHandler(e));

import '../styles/style.css';
import { PokemonCard } from './modules/PokemonCard';

const card1 = new PokemonCard('#card_button', '#card_info');
const card2 = new PokemonCard('#card_button2', '#card_info2');