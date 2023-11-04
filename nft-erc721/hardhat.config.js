require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");

// add .env file at same level with all the Keys in const
dotenv.config({ path: __dirname + "/.env" });

const {
  PRIVATE_KEY,
  ALCHEMY_API_KEY_POLYGON_TESTNET,
  API_KEY_MUMBAI_FOR_VERIFICATION,
  API_KEY_BSCTESTNET_FOR_VERIFICATION,
} = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbaiTestnet: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_POLYGON_TESTNET}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: API_KEY_MUMBAI_FOR_VERIFICATION,
      bscTestnet: API_KEY_BSCTESTNET_FOR_VERIFICATION,
    },
  },
};
