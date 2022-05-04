import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';


async function main() {
  dotenv.config();

  const SimpleStorageContract = await ethers.getContractFactory("SimpleStorage");
  const simpleStorageContract = await SimpleStorageContract.deploy();

  await simpleStorageContract.deployed();
  process.stdout.write("contract deployed");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stdout.write(`Error on deploy contract. ${err.message}\n`);
    process.exit(1);
  });
