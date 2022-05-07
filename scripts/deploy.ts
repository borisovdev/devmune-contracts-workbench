import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';
import path from 'path';
import { getSuccessfulDeployMessage } from '../utils/deployMessages';

async function main() {
  dotenv.config({
    'path': path.resolve(__dirname, '../', ".env.dev")
  });

  const localnetLinkTokenContractFactory = await ethers.getContractFactory("ALocalnetLinkToken");
  const localnetLinkTokenContract = await localnetLinkTokenContractFactory.deploy();
  const localnetLinkTokenDeployedContract = await localnetLinkTokenContract.deployed();
  process.stdout.write(getSuccessfulDeployMessage("ALocalnetLinkToken", localnetLinkTokenDeployedContract));

  const operatorContractFactory = await ethers.getContractFactory("Operator");
  const operatorContract = await operatorContractFactory.deploy(localnetLinkTokenDeployedContract.address);
  const operatorDeployedContract = await operatorContract.deployed();
  process.stdout.write(getSuccessfulDeployMessage("Operator", operatorDeployedContract));

  const localnetTestHttpContractFactory = await ethers.getContractFactory("ALocalnetTestHttp");
  const localnetTestHttpContract = await localnetTestHttpContractFactory.deploy();
  const localnetTestHttpDeployedContract = await localnetTestHttpContract.deployed();
  process.stdout.write(getSuccessfulDeployMessage("ALocalnetTestHttp", localnetTestHttpDeployedContract));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stdout.write(`Error on deploy contract. ${err.message}\n`);
    process.exit(1);
  });
