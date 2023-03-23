const hre = require('hardhat')

async function main() {
  const contract_A = await hre.ethers.getContractFactory('AToken')

  const contract_a = await contract_A.deploy()

  await contract_a.deployed()
}

main().catch((error) => {
  console.log(error)
  process.exitCode = 1
})
