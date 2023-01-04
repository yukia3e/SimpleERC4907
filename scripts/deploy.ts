import { ethers } from "hardhat";

async function main() {
  const name = "Simple ERC4907 Token"
  const symbol = "SET"
  const ERC4907 = await ethers.getContractFactory("ERC4907");
  const erc4907 = await ERC4907.deploy(name, symbol)

  await erc4907.deployed();

  console.log(`ERC4907 deployed to ${erc4907.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
