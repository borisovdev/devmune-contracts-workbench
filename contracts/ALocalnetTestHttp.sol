// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract ALocalnetTestHttp is ChainlinkClient {
  using Chainlink for Chainlink.Request;

  uint256 public volume;

  address private oracle;
  bytes32 private jobId;
  uint256 private fee;

  constructor() {
    setChainlinkToken(0xc8fa5a6A131B522e6225AF7f58762dC93671CB6c);
    oracle = 0x74691C6b91753190ba23b3A04fed234bAdc0a530;
    jobId = "39189df980d547e39e06390f21ecbcc0";
    fee = 0.1 * 10 ** 18;
  }

  function requestHelloOracle() public returns (bytes32 requestId)
  {
    Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

    request.add("get", "http://192.168.0.103:3000/");
    request.add("path", "TARGET");
    int timesAmount = 10**18;
    request.addInt("times", timesAmount);
    
    return sendChainlinkRequestTo(oracle, request, fee);
  }

  function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId) 
  {
    volume = _volume;
  }
}
