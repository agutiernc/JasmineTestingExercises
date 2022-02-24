
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 30000, years: 5, rate: 1.2 }

  expect(calculateMonthlyPayment(values)).toEqual('515.40')
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 650000, years: 30, rate: 1.5 }

  expect(calculateMonthlyPayment(values)).toEqual('2243.28')
});
