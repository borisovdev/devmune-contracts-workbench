import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';
import path from 'path';

async function main() {
  dotenv.config({
    'path': path.resolve(__dirname, ".env.dev")
  });

  const SimpleStorageContract = await ethers.getContractFactory("SimpleStorage");
  const simpleStorageContract = await SimpleStorageContract.deploy();

  const compiled = await simpleStorageContract.deployed();
  process.stdout.write(`Contrat deployed successful on address ${compiled.address}. \n`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stdout.write(`Error on deploy contract. ${err.message}\n`);
    process.exit(1);
  });
