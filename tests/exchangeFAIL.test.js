import { convertUSD } from '../lib/exchange.js'


beforeEach(() => {
  jest.resetModules(); 
});


//This will show up if fail
const MOCK_STATUS_FAIL = 500;

global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_FAIL,
  json: () => {}
}));
// End mocking the fetch method

test("Testing for response have failed", async () => {
  expect(await convertUSD()).toBe("Error in fetching number from exchanage for USD to MYR");
});

