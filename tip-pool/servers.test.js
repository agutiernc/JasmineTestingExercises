describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table', function() {
    submitServerInfo()
    updateServerTable()

    let tdList = document.querySelectorAll('#serverTable tbody tr td')

    expect(tdList.length).toEqual(2)
    expect(tdList[0].innerText).toEqual('Alice')
    expect(tdList[1].innerText).toEqual('$0.00')

  })

  it('should not add a new server if input is empty', function() {
    serverNameInput.value = ''

    submitServerInfo()

    expect(Object.keys(allServers).length).toEqual(0)
  })

  afterEach(function() {
    // teardown logic
    serverId = 0
    serverTbody.innerHTML = ''
    allServers = {}
  });
});
