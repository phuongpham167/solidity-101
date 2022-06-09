const hre = require("hardhat");

async function main() {
  const Hostel = await hre.ethers.getContractFactory("Hostel");
  const hostel = await Hostel.deploy();
  
  await hostel.deployed();
  await setTimeout(() => {}, 50000);

  console.log("Hotel deployed to:", hostel.address);
  await hre.run("verify:verify", {
    address: hostel.address,
  });
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
