import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
 

// Contract of tokens we are swapping
const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const DAI_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    
// ethereum address of the persn we are trying to impersonate
const address = "0x308B675589C39afDF360d782F9DF2Ac4b42793dD";
await helpers.impersonateAccount(address);
const impersonatedSigner = await ethers.getSigner(address);

// getting into the account we are impersonating and caling functions on them
const USDT = await ethers.getContractAt("IERC", USDT_ADDRESS, impersonatedSigner);
const DAI = await ethers.getContractAt("IERC", DAI_ADDRESS, impersonatedSigner);
const bal_usdt = await USDT.balanceOf(address);
const bal_dai = await DAI.balanceOf(address);

//logging the balance of the account
console.log("Your usdt balance is", bal_usdt);
console.log("Your dai balance is", bal_dai);

// contract of uniswap helping us to swap
const ROUTER_ADDRESS = 
const UNISWAP = await ethers.getContractAt("IUniswap")



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
