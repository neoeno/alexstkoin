const Bank = require('./bank.js')

test("adds money to an account", () => {
  const bank = new Bank();

  bank.deposit("alice", 40);
  bank.deposit("bob", 20);

  expect(bank.getBalance("alice")).toBe(40);
  expect(bank.getBalance("bob")).toBe(20);

})
