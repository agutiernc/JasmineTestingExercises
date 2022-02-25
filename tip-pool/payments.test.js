describe('payments tests', function() {
  beforeEach(function() {
    billAmtInput.value = 70
    tipAmtInput.value = 15
  })

  it('should test submitPaymentInfo with new payment', function() {
    submitPaymentInfo()

    expect(Object.keys(allPayments).length).toEqual(1)
    expect(allPayments['payment1'].billAmt).toEqual('70')
    expect(allPayments['payment1'].tipAmt).toEqual('15')
    expect(allPayments['payment1'].tipPercent).toEqual(21)
  })

  it('should not add new payment if input is empty', function() {
    billAmtInput.value = ''
    tipAmtInput.value = ''

    submitPaymentInfo()

    expect(Object.keys(allPayments).length).toEqual(0)
  })

  afterEach(function() {
    billAmtInput.value = ''
    tipAmtInput.value = ''
    paymentTbody.innerHTML = ''
    summaryTds[0].innerHTML = ''
    summaryTds[1].innerHTML = ''
    summaryTds[2].innerHTML = ''
    serverTbody.innerHTML = ''
    paymentId = 0
    allPayments = {}
  })
})