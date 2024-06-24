describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server on submitServerInfo() with empty input", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update #servertable on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();
    let curTdlist = document.querySelectorAll("#serverTable tbody tr td");

    expect(curTdlist.length).toEqual(3);
    expect(curTdlist[0].innerText).toEqual("Alice");
    expect(curTdlist[1].innerText).toEqual("$0.00");
    expect(curTdlist[2].innerText).toEqual("X");
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
