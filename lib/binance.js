
import Binance from 'node-binance-api';     // This line imports the Binance class from the 'node-binance-api' library.

export async function binanceBTCUSD() {     // This declares an asynchronous function named binanceBTCUSD that will be exported and can be used in other parts of the code.
  try { 
    const binance = new Binance();          // Creates an instance of the Binance class.
    let ticker = await binance.prices();    // Fetches the ticker prices asynchronously from the Binance API.
    if (isNaN(ticker.BTCBUSD) === false)    // If not a valid number (NaN) throw error
    return +ticker.BTCBUSD;                 
  else 
      throw 'Fetching error';               // Throws an error if the fetched price is not a valid number.
    
  } catch (error) {                                   // Catch the error, if the error is a 'fetching error', return an error message
    if (error == 'Fetching error')  
      return "Error in fetching number from Binance";  
    throw error;
  }
}
//binanceBTCUSD();





///Reference of Original code below, without catch error implementation

// //Binance BTC in USD (works)
// export async function binanceBTCUSD() {
//   const binance = new Binance()
//   let ticker = await binance.prices();
//   return +ticker.BTCBUSD
//   }
// //binanceBTCUSD();