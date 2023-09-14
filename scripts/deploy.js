const hre = require("hardhat");

async function main() {
  const chainBattles = await hre.ethers.deployContract("ChainBattles");

  await chainBattles.waitForDeployment();

  console.log(`Lock deployed to ${chainBattles.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
