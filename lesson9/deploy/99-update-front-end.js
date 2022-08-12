const { ethers, network } = require("hardhat")
const fs = require("fs")

const FRONT_END_ADDRESSES_FILE = "../lesson10/react/constants/contractAddresses.json"
const FRONT_END_ABI_FILE = "../lesson10/react/constants/abi.json"

module.exports = async function () {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating front-end...")
        await updateContractAddresses()
        await updateAbi()
        console.log("Front-end updated!")
    }
}

async function updateAbi() {
    const raffle = await ethers.getContract("Raffle")
    const abi = raffle.interface.format(ethers.utils.FormatTypes.json)
    fs.writeFileSync(FRONT_END_ABI_FILE, abi)
}

async function updateContractAddresses() {
    const raffle = await ethers.getContract("Raffle")
    const chainId = network.config.chainId.toString()
    const currentAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8"))
    if (chainId in currentAddresses) {
        if (!currentAddresses[chainId].includes(raffle.address)) {
            currentAddresses[chainId].push(raffle.address)
        }
    } else {
        currentAddresses[chainId] = [raffle.address]
    }
    fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses))
}

module.exports.tags = ["all", "frontend"]
