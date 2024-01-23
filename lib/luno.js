
export async function lunoBTCMY() {
  try {
    const res = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');     // Make an asynchronous request to the Luno API to get the ticker information for the XBTMYR pair
    if (res.status === 200) {           // Checks if the HTTP response status is 200 (OK). 
      const LunoMY = await res.json();  // The res.json() method is used to extract the JSON content from the API if HTTP response is good.
      return +LunoMY.last_trade;        // Extract the last trade price fand convert it to a number using +
    } else {
      throw 'Fetching error';           // If the response status is not 200, throw error
    }
  } catch (error) {                     // Catch the error, if the error is a 'fetching error', return an error message
    if (error === 'Fetching error') { 
      return "Error in fetching number from Luno";
    }
    throw error;
  }
}
//lunoBTCMY();



///Reference of Original code below, without catch error implementation

// export async function lunoBTCMY() {
//   const res = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');
//   const LunoMY = await res.json();
//   // console.log(`BTCMYR price on Luno: MYR ${(LunoMY.last_trade)}`);
//   return +LunoMY.last_trade
//   }
// //lunoBTCMY();