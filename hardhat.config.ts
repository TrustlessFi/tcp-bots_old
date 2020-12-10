import '@nomiclabs/hardhat-ethers';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    bot: {
      url: 'http://127.0.0.1:8545/',
    }
  }
};
