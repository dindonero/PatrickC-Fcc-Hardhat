const {ethers, network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts }) {
    const { deployer } = await getNamedAccounts()

    const basicNft = await ethers.getContract("BasicNFT", deployer)
    const basicMintTx = await basicNft.mintNft()
    await basicMintTx.wait(1)
    console.log(`BasicNFT minted with tokenUri: ${await basicNft.tokenURI(0)}`)


    const randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer)
    const mintFee = await randomIpfsNft.getMintFee()

    await new Promise(async (resolve, reject) => {
        setTimeout(() => reject("Timeout: 'NFTMinted' event did not fire"), 300000) // 5 minute timeout time
        randomIpfsNft.once("NftMinted", async () => {
            resolve()
        })
        const randomIpfsMintTx = await randomIpfsNft.requestNft({
            value: mintFee.toString(),
        })
        const randomIpfsMintTxReceipt = await randomIpfsMintTx.wait(1)
        if(developmentChains.includes(network.name)) {
            const requestId = randomIpfsMintTxReceipt.events[1].args.requestId.toString()
            const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer)
            await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomIpfsNft.address)
        }
    })
    console.log(`RandomIpfsNFT minted with tokenUri: ${await randomIpfsNft.tokenURI(0)}`)

    const highValue = ethers.utils.parseEther("400")
    const dynamicSvgNft = await ethers.getContract("DynamicSvgNft", deployer)
    const dynamicSvgMintTx = await dynamicSvgNft.mintNft(highValue.toString())
    await dynamicSvgMintTx.wait(1)
    console.log(`DynamicSvgNFT minted with tokenUri: ${await dynamicSvgNft.tokenURI(0)}`)
}

module.exports.tags = ["mint", "all"]