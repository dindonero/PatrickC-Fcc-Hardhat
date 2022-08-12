const { getNamedAccounts, deployments, network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")
const { assert, expect } = require("chai")

developmentChains.includes(network.name) ?
    describe("BasicNFT Unit Tests", function () {
        let nftMarketplace, basicNft, deployer, player
        const PRICE = ethers.utils.parseEther("0.1")
        const TOKEN_ID = 0
        beforeEach(async function () {
            deployer = (await getNamedAccounts()).deployer
            //player = (await getNamedAccounts()).player
            const accounts = await ethers.getSigners()
            player = accounts[1]
            await deployments.fixture(["all"])
            basicNft = await ethers.getContract("BasicNft", deployer)
            nftMarketplace = await ethers.getContract("NftMarketplace", deployer)
            await basicNft.mintNft()
            basicNft.approve(nftMarketplace.address, TOKEN_ID)
        })

        it("lists and can be bought", async function () {
            await nftMarketplace.listItem(basicNft.address, TOKEN_ID, PRICE)
            const playerConnectedNftMarketplace = nftMarketplace.connect(player)
            await playerConnectedNftMarketplace.buyItem(basicNft.address, TOKEN_ID, {value: PRICE})
            const newOwner = await basicNft.ownerOf(TOKEN_ID)
            const deployerProceeds = await nftMarketplace.getProceeds(deployer)
            assert(newOwner.toString() == player.address)
            assert(deployerProceeds.toString() == PRICE.toString())
        })



    })
    : describe.skip()