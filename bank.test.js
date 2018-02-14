const Bank = require('./bank.js')

test("adds money to an account", () => {
  const bank = new Bank();
  bank.deposit("alice", 50);
  expect(bank.getBalance("alice")).toBe(50);
})
