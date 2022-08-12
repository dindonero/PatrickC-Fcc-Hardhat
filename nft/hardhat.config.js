/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.9",
  networks: {
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/dd471dee807646188556df69fb53f844",
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6
    }
  }
};
