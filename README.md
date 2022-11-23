# uniswap-v2
基于hardhat框架管理和发布uniswap v2

## 信息整理
使用本项目，goerli测试网自行发布信息如下：
1. [WETH9地址](https://goerli.etherscan.io/address/0xFe33eC9960E430608030e92860264B486Ae99Ef2) ：0xFe33eC9960E430608030e92860264B486Ae99Ef2
2. [UniswapV2Factory合约地址](https://goerli.etherscan.io/address/0x08b99e6b892da793b3da07db14d83c86337d5b1c) ：0x08b99e6b892da793b3da07db14d83c86337d5b1c
3. [UniswapV2Router02合约地址](https://goerli.etherscan.io/address/0x4A566ba09a8628d2a3BC7132f6F9F1D3Fe8Aca61) ：0x4A566ba09a8628d2a3BC7132f6F9F1D3Fe8Aca61


## 发布
```shell
npx hardhat --network goerli run scripts/deploy.js
```
