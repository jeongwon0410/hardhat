/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
const PVK = '8719d06a85a32b316cbee909769b31a67704fd6cc83b4ee294fa3e8601579c8e'

module.exports = {
  solidity: '0.8.17',
  etherscan: {
    apiKey: 'ZMFP1APJ1MBZFW7ID4PU385BQZQB4SISQD',
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/fd5b5f938c3f4851a586ac086ecead61`,
      accounts: [PVK],
    },
  },
}
