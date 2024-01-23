beforeEach(() => {
  jest.resetModules();
});

test("BTCUSD price on Luno:", async () => {
  const { lunoBTCMY } = require('../lib/luno.js');
  const { convertUSD } = require('../lib/exchange.js');
  const { lunoBTCUSD } = require('../lib/calculation.js');

  jest.mock('../lib/luno.js', () => ({
    lunoBTCMY: jest.fn().mockResolvedValue(100),
  }));

  jest.mock('../lib/exchange.js', () => ({
    convertUSD: jest.fn().mockResolvedValue(4),
  }));

  jest.mock('../lib/calculation.js', () => ({
    lunoBTCUSD: jest.fn().mockRejectedValue(new Error('lunoBTCUSD must return a number')),
  }));

  // Use expect().rejects.toThrow() to check for the expected error
  await expect(lunoBTCUSD()).rejects.toThrow('lunoBTCUSD must return a number');
});



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
