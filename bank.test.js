const Bank = require('./bank.js')

test("adds money to an account", () => {
  const bank = new Bank();

  bank.deposit("alice", 40);
  bank.deposit("alice", 30);
  bank.deposit("bob", 20);

  expect(bank.getBalance("alice")).toBe(70);
  expect(bank.getBalance("bob")).toBe(20);
})

test('withdraws money from an account', () => {
  const bank = new Bank();

  bank.deposit('alice', 100)
  bank.withdraw('alice', 50)

  expect(bank.getBalance('alice')).toBe(50);
})
