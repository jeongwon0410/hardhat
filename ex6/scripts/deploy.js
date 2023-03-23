const hre = require('hardhat')

async function main() {
  const contract_A = await hre.ethers.getContractFactory('A')

  const contract_a = await contract_A.deploy()

  await contract_a.deployed()
  console.log(contract_a.address)
}

main().catch((error) => {
  console.log(error)
  process.exitCode = 1
})
