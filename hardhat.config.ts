import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import '@nomiclabs/hardhat-ethers';
import "tsconfig-paths/register";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },

  networks: {
    local: {
      url: process.env.BLOCKCHAIN_LOCAL_URL,
      chainId: Number(process.env.BLOCKCHAIN_LOCAL_CHAIN_ID),
      gasPrice: "auto",
    },
  },

  paths: {
    sources: "./contracts"
  },
};

export default config;
