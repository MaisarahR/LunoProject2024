import { lunoBTCMY } from '../lib/luno.js'

beforeEach(() => {
  jest.resetModules();
});

const MOCK_STATUS_PASS = 99;

global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve({ last_trade: MOCK_STATUS_PASS })
}));
// End mocking the fetch method

test("Returns the BTCMYR price on Luno", async () => {
  expect(await lunoBTCMY()).toBe(MOCK_STATUS_PASS);
});
// End test code
