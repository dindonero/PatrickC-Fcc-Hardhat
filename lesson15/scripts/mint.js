const { ethers, network } = require("hardhat")
const { moveBlocks, sleep } = require("../utils/move-blocks")

async function mint() {
    const basicNft = await ethers.getContract("BasicNft")
    console.log("minting...")

    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    const tokenId = mintTxReceipt.events[0].args.tokenId
    console.log("Approving Nft...")
    console.log(`Minted with tokenId: ${tokenId}`)

    if (network.config.chainId == 31337) {
        await moveBlocks(1)
    }

}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })