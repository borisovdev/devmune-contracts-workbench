// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract TestOracleHttp is ChainlinkClient {
  using Chainlink for Chainlink.Request;

  uint256 public volume;

  address private oracle;
  bytes32 private jobId;
  uint256 private fee;

  constructor() {
    // setPublicChainlinkToken();
    setChainlinkToken(0x9Aa23BcdB51785e79EaFF318E7Db61B0befbd905);
    oracle = 0xE86210795efD4896996bf3e498787fd09A112C58;
    jobId = "39189df980d547e39e06390f21ecbcc0";
    fee = 0.1 * 10 ** 18;
  }

  function requestHelloOracle() public returns (bytes32 requestId)
  {
    Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);

    request.add("get", "http://192.168.0.103:3000/");
    
    return sendChainlinkRequestTo(oracle, request, fee);
  }

  function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId) 
  {
    volume = _volume;
  }
}
