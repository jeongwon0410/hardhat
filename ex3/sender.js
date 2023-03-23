require('dotenv').config()
const ethers = require('ethers')
// const { network } = require('hardhat')

const provider = new ethers.providers.InfuraProvider(
  (network = 'goerli'),
  process.env.INFURA_KEY,
)

const signer = new ethers.Wallet(process.env.PVK, provider)

async function send() {
  const tx = {
    to: '0x7Fe8149477aB0ff1B145c41A76C7De0ee28D59d8',
    value: ethers.utils.parseEther('0.05'),
  }

  const receipt = await signer.sendTransaction(tx)
  await receipt.wait()

  console.log(receipt.hash)
}

send()
