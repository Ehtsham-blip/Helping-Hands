const hre = require('hardhat');

async function main() {
  const CampaignFactory = await hre.ethers.getContractFactory(
    "CampaignFactory"
  );
  const campaginFactory = await CampaignFactory.deploy();
  await campaginFactory.deployed();

  console.log("Fcatorydeployed to :", campaginFactory.address);
}

main()
  .then(() => process.getMaxListeners(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
