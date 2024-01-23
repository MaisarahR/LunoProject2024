//To import specific functions from other files in the 'lib' directory.
import { lunoBTCMY } from './lib/luno.js'
import { convertUSD } from './lib/exchange.js'
import { binanceBTCUSD } from './lib/binance.js'
import { lunoBTCUSD, priceDifference, percentageDifference } from './lib/calculation.js'
import dotenv from 'dotenv';
dotenv.config();

//To arrange print order.
export async function finalResultA (){  //This function is defined to calculate and print the final result. It is marked as async because it uses await for asynchronous operations.
  let lunoMYR = await lunoBTCMY();     //These lines declare variables and assign them the results of asynchronous function calls using await.
   let convertToUSD = await convertUSD();
   let lunoUSD = await lunoBTCUSD(lunoMYR,convertToUSD); //export async function lunoBTCUSD(lunoBTCMY, convertUSD)
   let binanceUSD = await binanceBTCUSD();
  let priceDiffInUSD = await priceDifference(binanceUSD, lunoUSD); //priceDifference(binanceBTCUSD, lunoBTCUSD)
  let lunoPremium = await percentageDifference(priceDiffInUSD, lunoUSD); //percentageDifference(priceDifference, lunoBTCUSD)
  console.log("BTCMYR price on Luno:".padEnd(30) + `MYR${lunoMYR}`);
  console.log("USDMYR:".padEnd(30) + `MYR${convertToUSD}`);  
  console.log("BTCUSD price on Luno:".padEnd(30) + `USD${lunoUSD}`); 
  console.log("BTCBUSD price on Binance:".padEnd(30) + `USD${binanceUSD}`);
  console.log("Price difference:".padEnd(30) + `USD${priceDiffInUSD}`); 
  console.log("Luno premium:".padEnd(30) + `${lunoPremium}%`) 
}
finalResultA(); //Finally, the finalResult function is invoked to execute the entire process.







// //1. Luno BTC in MYR (works)
// async function lunoBTCMY() {
//   const res = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');
//   const LunoMY = await res.json();
//   // console.log(`BTCMYR price on Luno: MYR ${(LunoMY.last_trade)}`);
//   return +LunoMY.last_trade
//   }
// //lunoBTCMY();


// //2. USD to MYR (result is NaN. if API meets quota)
// async function convertUSD() {
//   var myHeaders = new Headers();
//     myHeaders.append("apikey", "x6dUBWitwffosTfTDVsOVe7kgKQsTBjy");
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };
//   const res = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
//   const USDMYR = await res.json();
//   // console.log(`USDMYR: MYR ${(USDMYR.result)}`);
//   return + USDMYR.result
//   }
// //convertUSD();


// //3. Luno BTC in USD (result is NaN. if API meets quota of 100 a month)
// async function lunoBTCUSD(){
//   let lunoMY = await lunoBTCMY();
//   let exchange = await convertUSD();
//   let lunoUSD = lunoMY/exchange
//   //console.log(`BTCUSD price on Luno: USD ${((lunoMY) / (exchange))}`);
//   return +lunoUSD
// };
// //lunoBTCUSD();


// //4. Binance BTC in USD (works)
// async function BinanceBTCUSD() {
//   const binance = new Binance()
//   let ticker = await binance.prices();
//   return +ticker.BTCBUSD
//   }
// //BinanceBTCUSD();


// //5. Price difference between Luno & Binance (result is NaN. if API meets quota)
// async function priceDifference(){
// let binanceUS = await BinanceBTCUSD();
// let lunoUSD = await lunoBTCUSD();
// let ExchangeDiff = lunoUSD - binanceUS
// //console.log(`Price priceDifference: USD ${((lunoUSD) - (binanceUS))}`);
// return +ExchangeDiff
// }
// //priceDifference();


// //6. Luno Premium (result is NaN. if API meets quota)
// async function percentageDifference (){
//   let lunoBinance = await priceDifference();
//   let lunoUSD = await lunoBTCUSD();
//   let lunoPremium = (lunoBinance / lunoUSD) * 100
//   //console.log(`Luno premium: ${lunoPremium} %`)
//   return +lunoPremium
// }
// //percentageDifference();