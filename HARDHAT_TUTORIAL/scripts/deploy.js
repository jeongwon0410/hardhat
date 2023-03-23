const hre = require('hardhat')

async function main() {
  const Contract_A = await hre.ethers.getContractFactory('A')

  const contract_a = await Contract_A.deploy()

  await contract_a.deployed()
  console.log('Address : ', contract_a.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

//https://goerli.infura.io/v3/fd5b5f938c3f4851a586ac086ecead61
//0xb399015Fa4645A689706EA3f859C23d717285d05
