/** @format */
const dummy = () => 1;
describe("Air quality app backend tests", () => {
  test("dummy returns one", () => {
    const result = dummy();
    expect(result).toBe(1);
  });
});
