import { ethers } from "hardhat"
import { expect, assert } from "chai"
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types"

describe("SimpleStorage", function() {
    let simpleStorageFactory: SimpleStorage__factory
    let simpleStorage: SimpleStorage
    beforeEach(async function() {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage") as SimpleStorage__factory
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function() {
        const favoriteNumber = await simpleStorage.retrieve()
        expect(favoriteNumber).to.equal(0)
    })

    it("Should be able to set a favorite number", async function() {
        await simpleStorage.store(42)
        const favoriteNumber = await simpleStorage.retrieve()
        expect(favoriteNumber).to.equal(42)
    })
})