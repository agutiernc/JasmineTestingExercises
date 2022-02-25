describe('helpers tests', function () {
  it('should calculate the tip percent from the bill and tip', function() {
    expect(calculateTipPercent(50, 12)).toEqual(24)
    expect(calculateTipPercent(18, 3)).toEqual(17)
  })
})