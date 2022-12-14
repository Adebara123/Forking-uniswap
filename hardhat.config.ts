import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

// type HttpNetworkAccountsUserConfig = any;
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        // @ts-ignore
        url: process.env.MAINNET_URL ,
      }
    }
  }
};

export default config;
