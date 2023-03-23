require('dotenv').config()
const ethers = require('ethers')
// const { network } = require('hardhat')

// console.log(process.env.PVK)

const provider = new ethers.providers.InfuraProvider(
  (network = 'goerli'),
  process.env.INFURA_KEY,
)

const signer = new ethers.Wallet(process.env.PVK, provider)

let ABI = process.env.ABI
let C_ADDR = process.env.C_ADDR

const contract = new ethers.Contract(C_ADDR, ABI, signer)

contract.getA().then(console.log)
