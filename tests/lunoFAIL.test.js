import { lunoBTCMY } from '../lib/luno.js'

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
  expect(await lunoBTCMY()).toBe("Error in fetching number from Luno");
});
// End test code
