const { getNamedAccounts, ethers } = require("hardhat")

const AMOUNT = ethers.utils.parseEther("0.1")

async function getWeth() {
    const { deployer } = await getNamedAccounts()

    const iweth = await ethers.getContractAt("IWETH", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", deployer)

    const tx = await iweth.deposit({ value: AMOUNT })
    await tx.wait(1)

    const wethBalance = await iweth.balanceOf(deployer)

    console.log(`WETH balance: ${wethBalance.toString()}`)
}

module.exports = { getWeth, AMOUNT }