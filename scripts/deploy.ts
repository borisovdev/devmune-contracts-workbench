import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';
import path from 'path';
import { getSuccessfulDeployMessage } from '../utils/deployMessages';

async function main() {
  dotenv.config({
    'path': path.resolve(__dirname, '../', ".env.dev")
  });

  // just for debug
  // const simpleStorageContractFactory = await ethers.getContractFactory("SimpleStorage");
  // const simpleStorageContract = await simpleStorageContractFactory.deploy();
  // const simpleStorageDeployedContract = await simpleStorageContract.deployed();
  // process.stdout.write(getSuccessfulDeployMessage("SimpleStorage", simpleStorageDeployedContract));

  // const linkTokenContractFactory = await ethers.getContractFactory("ALocalNetLinkToken");
  // const linkTokenContract = await linkTokenContractFactory.deploy();
  // const linkTokenDeployedContract = await linkTokenContract.deployed();
  // process.stdout.write(getSuccessfulDeployMessage("ALocalNetLinkToken", linkTokenDeployedContract));

  // const oracleContractFactory = await ethers.getContractFactory("Oracle");
  // const oracleContract = await oracleContractFactory.deploy(linkTokenDeployedContract.address);
  // const oracleDeployedContract = await oracleContract.deployed();
  // process.stdout.write(getSuccessfulDeployMessage("Oracle", oracleDeployedContract));

  const testConsumerContractFactory = await ethers.getContractFactory("TestOracleHttp");
  const testConsumerContract = await testConsumerContractFactory.deploy();
  const testConsumerDeployedContract = await testConsumerContract.deployed();
  process.stdout.write(getSuccessfulDeployMessage("TestOracleHttp", testConsumerDeployedContract));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stdout.write(`Error on deploy contract. ${err.message}\n`);
    process.exit(1);
  });
