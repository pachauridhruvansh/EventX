require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    bitfinity: {
      url: 'https://testnet.bitfinity.network',
      accounts: ['108ca77f8cdff7bbc24db582bc9055585b54d47e43e286a5973eabe39ce30361'],
      chainId: 355113,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
