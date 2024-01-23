
export async function lunoBTCMY(lunoCurrency) {  
  if (lunoCurrency === 'BTC') {
    lunoCurrency = 'XBT' //user key in BTC it will auto convert to XBT
  }

  const res = await fetch(`https://api.luno.com/api/1/ticker?pair=${lunoCurrency}MYR`);
  const LunoMY = await res.json();
  return +LunoMY.last_trade
}


///Reference of Original code below, without catch error implementation

// export async function lunoBTCMY() {
//   const res = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');
//   const LunoMY = await res.json();
//   // console.log(`BTCMYR price on Luno: MYR ${(LunoMY.last_trade)}`);
//   return +LunoMY.last_trade
//   }
// //lunoBTCMY();