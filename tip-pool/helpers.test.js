describe('helpers tests', function () {
  beforeEach(function() {
    billAmtInput.value = 50
    tipAmtInput.value = 9
    submitPaymentInfo()
  })

  it('should sum the total tip amount of all payments', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(9)

    /*
      calculates tipAmt with additional new data
      and sums up previous answer to get answer below
    */
    billAmtInput.value = 30
    tipAmtInput.value = 5

    submitPaymentInfo()

    expect(sumPaymentTotal('tipAmt')).toEqual(14)
  })

  it('should sum the total bill amount of all payments', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(50)

    /*
      calculates billAmt with additional new data
      and sums up previous answer to get answer below
    */
    billAmtInput.value = 70
    tipAmtInput.value = 15

    submitPaymentInfo()

    expect(sumPaymentTotal('billAmt')).toEqual(120)
  })

  it('should sum the tip percent payment total', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(18)

    /*
      calculates tipPercent with additional new data
      and sums up previous answer to get answer below
    */
    billAmtInput.value = 150
    tipAmtInput.value = 30

    submitPaymentInfo()

    expect(sumPaymentTotal('tipPercent')).toEqual(38)
  })

  it('should calculate the tip percent from the bill and tip', function() {
    expect(calculateTipPercent(50, 12)).toEqual(24)
    expect(calculateTipPercent(18, 3)).toEqual(17)
  })

  it('should create and append a new td', function() {
    let newTr = document.createElement('tr')

    appendTd(newTr, 'test')

    expect(newTr.children.length).toEqual(1)
    expect(newTr.firstChild.textContent).toEqual('test')
  })

  afterEach(function() {
    billAmtInput.value = ''
    tipAmtInput.value = ''
    paymentTbody.innerHTML = ''
    summaryTds[0].innerHTML = ''
    summaryTds[1].innerHTML = ''
    summaryTds[2].innerHTML = ''
    serverTbody.innerHTML = ''
    allPayments = {}
    paymentId = 0
  })
})