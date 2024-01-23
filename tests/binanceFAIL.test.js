beforeEach(() => {
  jest.resetModules();
});

test("Returns error if Binance request fails", async () => {
  const getBinancePrice = require('../lib/binance.js').binanceBTCUSD

  // mocking the entire node-binance-api module
  jest.mock('node-binance-api', () => {
    const BTCBUSD = {BTCBUSD: 9};
    return class Binance {
      prices() {
        return new Promise(res => res("Error in fetching number from Binance"))
      }
    }
  })

  expect(await getBinancePrice()).toBe("Error in fetching number from Binance");
});

//Fail test part

