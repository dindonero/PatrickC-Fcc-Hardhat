import * as fs from "fs";
import { developmentChains, proposalsFile, VOTING_PERIOD } from "../helper-hardhat-config"
// @ts-ignore
import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks"

const index = 0;

async function vote(proposalIndex: number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    const proposalId = proposals[network.config.chainId!][proposalIndex];

    const voteWay = 1;
    const governor = await ethers.getContract("GovernorContract")
    const reason = "I like it";
    const voteTxResponse = await governor.castVoteWithReason(
        proposalId,
        voteWay,
        reason
    )
    await voteTxResponse.wait(1)
    if ( developmentChains.includes(network.name) ) {
         await moveBlocks(VOTING_PERIOD + 1)
    }
    console.log(`Voted on proposal ${proposalId}`)
}


vote(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })