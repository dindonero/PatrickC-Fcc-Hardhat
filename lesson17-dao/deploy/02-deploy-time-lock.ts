import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import {MIN_DELAY} from "../helper-hardhat-config"

const deployTimeLock: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying Time Lock...");
    const timeLock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], []],
        log: true,

    });

    log(`Time Lock deployed at ${timeLock.address}`);
}

export default deployTimeLock;