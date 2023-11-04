# Erc4907 Tetris World 


Commands to deploy and verify
```
npx hardhat run scripts/deploy.js --network bscTestnet
OUTPUT: 0x1100C8D2F6eD2CBa7bFb2BEC2e341d6f8E307e60
```

```
npx hardhat verify --network bscTestnet --contract contracts/TetrisWorld4907.sol:TetrisWorld 0x1100C8D2F6eD2CBa7bFb2BEC2e341d6f8E307e60 TetrisWorld TW
```

