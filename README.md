# Devmune contracts workbench

## Localnet development

- Fund your chainlink node address with ETH

- Compile and deploy ALocalnetLinkToken.sol and Operator.sol contracts.

- In ALocalnetTestHttp.sol paste correctly link token and oracle (operator) addresses.

- Call Operator->setAuthorizedSenders(["your_chainlink_node_account_address"]). Check correctly set with call Operator->getAuthorizedSenders

- Add LINK token to your metamask account with import tokens.

- Call ALocalnetLinkToken->addTokensToAddress for Operator contract address (1 LINK = 1000000000000000000). This fund account with LINK.

- Compile and deploy ALocalnetTestHttp contract

- Call ALocalnetLinkToken->addTokensToAddress for ALocalnetTestHttp
