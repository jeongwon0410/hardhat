require('dotenv').config()
const ethers = require('ethers')

const provider = new ethers.providers.InfuraProvider(
  (network = 'goerli'),
  process.env.INFURA_KEY,
)

const signer = new ethers.Wallet(process.env.PVK, provider)

let ABI = process.env.ABI
let C_ADDR = process.env.C_ADDR

const contract = new ethers.Contract(C_ADDR, ABI, signer)

contract.compare(1, 2).then(console.log)
contract.setA([4, 5, 5]).then(console.log)

contract.getLen().then(console.log)
