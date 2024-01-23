import { convertUSD } from '../lib/exchange.js'


beforeEach(() => {
  jest.resetModules(); 
});


//This will show up if pass
const MOCK_STATUS_PASS = 99;

global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve({ result: MOCK_STATUS_PASS })
}));
// End mocking the fetch method

test("Converts USD to MYR correctly", async () => {
  expect(await convertUSD()).toBe(MOCK_STATUS_PASS);
});
