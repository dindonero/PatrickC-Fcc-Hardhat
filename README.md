# PatrickCollins FreeCodeCamp Hardhat Tutorial

[Youtube Tutorial Link](https://www.youtube.com/watch?v=gyMwXuJrbJQ)

[Official GitHub Repository](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)

## Builds

### Decentralized NFT Marketplace

[NFT Marketplace]https://62ed4070f3c82a7facad3f89--cheery-medovik-72f8ea.netlify.app/  - Almost fully decentralized NFT Marketplace.


### Smart contract Lottery - Winner takes it all

[Smart Contract Lottery](https://nameless-sunset-7186.on.fleek.co/)

A raffle costs 0.00001 ETH.

Every player can enter as many times as they want.

A winner is picked every 30 seconds who is rewarded with all the raffle’s payments.


Implements:

* Chainlink VRF for randomness - Choosing the winner

* Chainlink Keepers for maintaining the lottery flow - Calls the end lottery function “performUpkeep” every 30 seconds to provide a fair environment for all players

Available on networks:

Rinkeby

Hosted on fleek - a free decentralized IPFS pinning service

### Some troubleshoot tips

Module not found: Can't resolve 'magic-sdk'

>yarn add magic-sdk @walletconnect/web3-provider @web3auth/web3auth

Module not found: Can't resolve '@bip/scuro61'

>npm install

Running scripts with Windows Powershell (faster than WSL):

>Install npm on Windows

>Install yarn through npm

>Open powershell as admin and run: 
>>Set-ExecutionPolicy -ExecutionPolicy Unrestricted 

### Helpful Links
[SpeedRunEthereum](https://speedrunethereum.com/)  - Tutorials in the form of challenges to explain DeFi and smart contracts' concepts.

[Ethernaut](http://ethernaut.openzeppelin.com)  - Interactive game to learn smart contracts.
