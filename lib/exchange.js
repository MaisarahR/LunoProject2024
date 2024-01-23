
//import { finalResultA } from '../index.js' //will read regardless

export async function convertUSD() {
  try {
    const apiKey = process.env.API_KEY; // Use process.env to access environment variables
    if (!apiKey) {
      throw new Error('API_KEY not provided in environment variables');
    }

    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const res = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions); //Initiates an HTTP GET request to a currency conversion API, fetching the conversion rate.

    if (res.status === 200) { // Checks if the HTTP response status is 200 (OK). 
      const USDMYR = await res.json(); //The res.json() method is used to extract the JSON content from the API if HTTP response is good.
      return +USDMYR.result;
    } else {
      throw 'Fetching error'; // If the response status is not 200, throw error
    }
  } catch (error) {         // Catch the error, if the error is a 'fetching error', return an error message
    if (error === 'Fetching error') {
      return "Error in fetching number from exchange for USD to MYR";
    }
    throw error;
  }
}
//convertUSD();





///Reference of Original code below, without catch error implementation

// export async function convertUSD() {
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
//   return +USDMYR.result
//   }
// //convertUSD();