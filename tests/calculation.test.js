beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

test("BTCUSD price on Luno:", async () => {
  const { lunoBTCMY } = require('../lib/luno.js')
  const { convertUSD } = require ('../lib/exchange.js')
  const { lunoBTCUSD } = require ('../lib/calculation.js')

  jest.mock('../lib/luno.js')
  jest.mock('../lib/exchange.js')

  lunoBTCMY.mockResolvedValue(100)
  convertUSD.mockResolvedValue(4)

  expect(await lunoBTCUSD()).toBe(25)
})

const MOCK_PRICE_DIFF = 50;
test("Price difference:", async () => {
  const { priceDifference } = require('../lib/calculation.js');

  jest.mock('../lib/calculation.js', () => ({
    priceDifference: jest.fn().mockResolvedValue(MOCK_PRICE_DIFF)
  }));

  expect(priceDifference()).resolves.toBe(MOCK_PRICE_DIFF)
})


const MOCK_PERCENTAGE = 30;
test("Luno premium:", async () => {
  const { percentageDiff } = require('../lib/calculation.js');

  jest.mock('../lib/calculation.js', () => ({
    percentageDiff: jest.fn().mockResolvedValue(MOCK_PERCENTAGE)
  }));

  expect(percentageDiff()).resolves.toBe(MOCK_PERCENTAGE)
})
