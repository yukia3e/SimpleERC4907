import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC4907", function () {
  async function deploySimpleERC4907() {
    const name = "Simple ERC4907 Token"
    const symbol = "SET"
  
    const [owner, otherAccount] = await ethers.getSigners();

    const ERC4907 = await ethers.getContractFactory("ERC4907");
    const erc4907 = await ERC4907.deploy(name, symbol)

    await erc4907.deployed();

    return { erc4907, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right name", async function () {
      const { erc4907, owner, otherAccount } = await loadFixture(deploySimpleERC4907);

      expect(await erc4907.name()).to.equal("Simple ERC4907 Token");
    });
  });
});
