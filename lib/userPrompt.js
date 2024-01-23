
import promptSync from 'prompt-sync'; //import
const prompt = promptSync();      //call the function

export async function userPrompt () {
  const currency = prompt('What currency are you looking for?').toUpperCase();
  //console.log(`What currency are you looking for? ${userPrompt}`);
  
return currency;
}
