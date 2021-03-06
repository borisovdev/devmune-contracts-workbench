import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import '@nomiclabs/hardhat-ethers';
import "tsconfig-paths/register";
import path from "path";

dotenv.config({
  'path': path.resolve(__dirname, ".env.dev")
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      }
    ]
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
