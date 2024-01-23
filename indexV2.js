//To import specific functions from other files in the 'lib' directory.
//import { lunoBTCMY } from './lib/luno.js'
//import { binanceBTCUSD } from './lib/binance.js'
import { lunoBTCMY } from './lib/lunoV2.js'
import { convertUSD } from './lib/exchange.js'
import { binanceBTCUSD } from './lib/binanceV2.js'
import { userPrompt } from './lib/userPrompt.js'
import { lunoBTCUSD, priceDifference, percentageDifference } from './lib/calculation.js'
import dotenv from 'dotenv';
dotenv.config();

//To arrange print order.
let userInput = await userPrompt();
async function finalResult (){  
  let lunoMYR = await lunoBTCMY(userInput);   
  let convertToUSD = await convertUSD();
  let lunoUSD = await lunoBTCUSD(lunoMYR,convertToUSD); 
  let binanceUSD = await binanceBTCUSD(userInput);
  let priceDiffInUSD = await priceDifference(binanceUSD, lunoUSD); 
  let lunoPremium = await percentageDifference(priceDiffInUSD, lunoUSD);

  console.log(`MYR price on Luno:`.padEnd(30) + `MYR${lunoMYR}`);
  console.log(`MYR:`.padEnd(30) + `MYR${convertToUSD}`);  
  console.log(`USD price on Luno:`.padEnd(30) + `USD${lunoUSD}`); 
  console.log(`BUSD price on Binance:`.padEnd(30) + `USD${binanceUSD}`);
  console.log("Price difference:".padEnd(30) + `USD${priceDiffInUSD}`); 
  console.log("Luno premium:".padEnd(30) + `${lunoPremium}%`) 
}
//finalResult(); //Finally, the finalResult function is invoked to execute the entire process.

async function loop() {
  await finalResult()
  await new Promise(resolve => setTimeout(resolve, 3000))
}
loop();