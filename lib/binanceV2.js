
import Binance from 'node-binance-api';     // This line imports the Binance class from the 'node-binance-api' library.

export async function binanceBTCUSD(binanceCurrency) {  
  if (binanceCurrency === 'XBT') {
    binanceCurrency = 'BTC' //user key in BTC it will auto convert to XBT
  }

  const binance = new Binance()
  let ticker = await binance.prices();
  return +ticker[`${binanceCurrency}BUSD`]
  }

//binanceBTCUSD();





///Reference of Original code below, without catch error implementation

// //Binance BTC in USD (works)
// export async function binanceBTCUSD() {
//   const binance = new Binance()
//   let ticker = await binance.prices();
//   return +ticker.[`${binanceCurrency}]BTCBUSD`
//   }
// //binanceBTCUSD();