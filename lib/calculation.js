import { lunoBTCMY } from './luno.js'
import { convertUSD } from './exchange.js'
import { binanceBTCUSD } from './binance.js'  // Pulls data from other files.


export async function lunoBTCUSD(lunoBTCMY, convertUSD) {
  try {
    // let lunoMY = await lunoBTCMY();
    // let exchange = await convertUSD();
    let lunoUSD = lunoBTCMY/convertUSD  
    if (isNaN(lunoUSD) === false)  
    return +lunoUSD   
  else
    throw 'Fetching error'; 

  } catch (error) { 
    if (error === 'Fetching error')
      return "Error in Luno BTC to USD calculation"; 

    throw error;
  }
}
//lunoBTCUSD();


export async function priceDifference(binanceBTCUSD, lunoBTCUSD) {
  try {
    // let binanceUS = await binanceBTCUSD();
    // let lunoUSD = await lunoBTCUSD();
    let exchangeDiff = lunoBTCUSD - binanceBTCUSD
    if (isNaN(exchangeDiff) === false)
    return +exchangeDiff
  else
    throw 'Fetching error';
 
  } catch (error) {
    if (error === 'Fetching error')
      return "Error in price comparison between Luno & Binance calculation";

    throw error;
  }
}
//priceDifference();


export async function percentageDifference(priceDifference, lunoBTCUSD) {
  try {
    // let lunoBinance = await priceDifference();
    // let lunoUSD = await lunoBTCUSD();
    let lunoPremium = (priceDifference / lunoBTCUSD) * 100
    if (isNaN(lunoPremium) === false)
    return +lunoPremium
  else
  throw 'Fetching error';

  } catch (error) {
    if (error === 'Fetching error')
      return "Error in calculation for percentage";

    throw error;
  }
}
//percentageDifference();




///Reference of Original code below, without catch error implementation

// import { lunoBTCMY } from './luno.js'
// import { convertUSD } from './exchange.js'
// import { binanceBTCUSD } from './binance.js'

// export async function lunoBTCUSD() {
//   let lunoMY = await lunoBTCMY();
//   let exchange = await convertUSD();
//   let lunoUSD = lunoMY/exchange
//   //console.log(`BTCUSD price on Luno: USD ${((lunoMY) / (exchange))}`);
//   return +lunoUSD
// }
// //lunoBTCUSD();

// export async function priceDifference() {
// let binanceUS = await binanceBTCUSD();
// let lunoUSD = await lunoBTCUSD();
// let exchangeDiff = lunoUSD - binanceUS
// //console.log(`Price difference: USD ${((lunoUSD) - (binanceUS))}`);
// return +exchangeDiff
// }
// //priceDifference();


// export async function percentageDifference() {
//   let lunoBinance = await priceDifference();
//   let lunoUSD = await lunoBTCUSD();
//   let lunoPremium = (lunoBinance / lunoUSD) * 100
//   //console.log(`Luno premium: ${lunoPremium} %`)
//   return +lunoPremium
// }
// //percentageDifference();


//---ignore
// import { lunoBTCMY } from './luno.js'
// import { convertUSD } from './exchange.js'
// import { binanceBTCUSD } from './binance.js'  // Pulls data from other files.


// export async function lunoBTCUSD(lunoBTCMY, convertUSD) {
//   try {
//     let lunoUSD = lunoBTCMY/convertUSD     // Does the calculation based on the fetched information
//     if (isNaN(lunoUSD) === false)     // Check if the calculated value is a number,if not a valid number (NaN). throw error.
//     return +lunoUSD                   // Extract the last trade price fand convert it to a number using +
//   else
//     throw 'Fetching error';           // If the response status is not 200, throw error

//   } catch (error) {                   // Catch the error, if the error is a 'fetching error', return an error message
//     if (error === 'Fetching error')
//       return "Error in Luno BTC to USD calculation"; 

//     throw error;
//   }
// }
// //lunoBTCUSD();


// export async function priceDifference(binanceBTCUSD, lunoBTCUSD) {
//   try {
//     let exchangeDiff = lunoBTCUSD - binanceBTCUSD
//     if (isNaN(exchangeDiff) === false)
//     return +exchangeDiff
//   else
//     throw 'Fetching error';
 
//   } catch (error) {
//     if (error === 'Fetching error')
//       return "Error in price comparison between Luno & Binance calculation";

//     throw error;
//   }
// }
// //priceDifference();


// export async function percentageDifference(priceDifference, lunoBTCUSD) {
//   try {
//     let lunoPremium = (priceDifference / lunoBTCUSD) * 100
//     if (isNaN(lunoPremium) === false)
//     return +lunoPremium
//   else
//   throw 'Fetching error';

//   } catch (error) {
//     if (error === 'Fetching error')
//       return "Error in calculation for percentage";

//     throw error;
//   }
// }
// //percentageDifference();

