const { getNamedAccounts, deployments, network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { assert, expect } = require("chai")

developmentChains.includes(network.name)
    ? describe("BasicNFT Unit Tests", function () {
          let basicNft
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture("all")
              basicNft = await ethers.getContract("BasicNFT", deployer)
          })

          describe("constructor", function () {
              it("initializes the basicNft correctly", async function () {
                  const tokenCounter = await basicNft.getTokenCounter()
                  assert.equal(tokenCounter.toString(), "0")
              })
          })

          describe("mint", function () {
              it("minting an nft increases tokenCounter", async function () {
                  const tx = await basicNft.mintNft()
                  tx.wait(1)
                  const tokenCounter = await basicNft.getTokenCounter()
                  assert.equal(tokenCounter.toString(), "1")
              })
              it("minting and nft gives ownership", async function () {
                  const tx = await basicNft.mintNft()
                  tx.wait(1)
                  const tokenOwner = await basicNft.ownerOf(0)
                  assert.equal(tokenOwner, deployer)
              })
          })
      })
    : describe.skip()
