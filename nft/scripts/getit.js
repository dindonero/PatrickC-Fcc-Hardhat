const { ethers } = require("hardhat")


const main = async () => {
    //const contract = await ethers.getContractAt("NftPatrick", "0xB29eA9ad260B6DC980513bbA29051570b2115110")
    const number = await provider.getStorageAt("0xB29eA9ad260B6DC980513bbA29051570b2115110", "777")

    console.log(number)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exitCode = 1
    })
