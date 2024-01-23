beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

const MOCK_LUNO_MYR = 100000;
const MOCK_CONVERT = 4.5;
const MOCK_BINANCE_USD = 45000;

test("Return expected display in prices if correct", async () => {
  const { finalResult } = require('../index.js');
  
  jest.mock('../lib/luno.js', () => {
    // const MOCK_LUNO_MYR = 100000;
      return {
        lunoBTCMY(){
          return new Promise(res => res(MOCK_LUNO_MYR))
        }
      };
  })     
  
  jest.mock('../lib/exchange.js', () => {
    // const MOCK_CONVERT = 4.5;
      return {
        convertUSD(){
          return new Promise(res => res(MOCK_CONVERT))
        }
      }
  })     

  jest.mock('../lib/binance.js', () => {
    // const MOCK_BINANCE_USD = 45000;
      return {
        binanceBTCUSD(){
          return new Promise(res => res(MOCK_BINANCE_USD))
        }
      }
  }) 


  //
  jest

  const lunoBTCUSD = MOCK_LUNO_MYR / MOCK_CONVERT;
  const priceDifference = lunoBTCUSD - MOCK_BINANCE_USD;
  const percentageDifference = (priceDifference / lunoBTCUSD) * 100;

  console.log = jest.fn(()=> undefined)
  //replaces the real console.log implementation with a mock function that does nothing (return undefined).
  //the purpose of this mock is to track if and how the console.log method is called during the test, without actually logging anything to the console.


  await finalResult();

  expect(console.log).toHaveBeenCalledWith("BTCMYR price on Luno:".padEnd(30) + "MYR" + MOCK_LUNO_MYR);
  expect(console.log).toHaveBeenCalledWith("USDMYR:".padEnd(30) + "MYR" + MOCK_CONVERT);
  expect(console.log).toHaveBeenCalledWith("BTCUSD price on Luno:".padEnd(30) + "USD" + lunoBTCUSD);
  expect(console.log).toHaveBeenCalledWith("BTCBUSD price on Binance:".padEnd(30) + "USD" + MOCK_BINANCE_USD);
  expect(console.log).toHaveBeenCalledWith("Price difference:".padEnd(30) + "USD" + priceDifference);
  expect(console.log).toHaveBeenCalledWith("Luno premium:".padEnd(30) + percentageDifference + "%");
  
})