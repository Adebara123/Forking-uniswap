import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
 

// Contract of tokens we are swapping
const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    
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
const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const UNISWAP = await ethers.getContractAt("IUniswap", ROUTER_ADDRESS, impersonatedSigner);
const amountOut = 50e6;
const amountIn = 40e6;

// uint amountOut,
// uint amountInMax,
// address[] calldata path,
// address to,
// uint deadline

const swapToken = await UNISWAP.swapTokensForExactTokens(amountOut, amountIn, [USDT_ADDRESS, DAI_ADDRESS], address, 1660801829);


// checking our balance after we swapped 
console.log("Your usdt balance after swap is", bal_usdt);
console.log("Your dai balance after swap is", bal_dai);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
