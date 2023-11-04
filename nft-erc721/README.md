# TetrisWorld(ERC721) on Mumbai 

Run the compile command to compile the solidity contracts
```
npx hardhat compile
```

Deployment command
```
npx hardhat run scripts/deploy.js --network mumbaiTestnet
```

Verify SmartContract
```
nft-erc721 npx hardhat verify --network mumbaiTestnet --contract contracts/TetrisWorld.sol:TetrisWorld 0x478211c1c9ee2EcA860cb1584B57A8594E5384e8 TetrisWorld TW
```


Hardhat config generated commands
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```