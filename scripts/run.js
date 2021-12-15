// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const main = async () => {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    const lpgbetContractFactory = await hre.ethers.getContractFactory('LPGBet');
    // const lpgbetContract = await lpgbetContractFactory.deploy({
    //     value: hre.ethers.utils.parseEther('1'),
    // });
    const lpgbetContract = await lpgbetContractFactory.deploy();

    await lpgbetContract.deployed();
    console.log("Contract added: ", lpgbetContract.address);

    // Get the contract balance to make sure it's there
    let contractBalance = await hre.ethers.provider.getBalance(
        lpgbetContract.address
    );

    console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
