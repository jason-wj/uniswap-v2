// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
    // This is just a convenience check
    if (network.name === "hardhat") {
        console.warn(
            "You are trying to deploy a contract to the Hardhat Network, which" +
            "gets automatically created and destroyed every time. Use the Hardhat" +
            " option '--network localhost'"
        );
    }

    // ethers is available in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying the contracts with the account:",
        await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    //solidity version：0.4.18
    // await weth9();

    //solidity version：0.5.16
    // await uniswapv2Factory();

    //solidity version：0.6.6
    await uniswapV2Router02();

    // We also save the contract's artifacts and address in the frontend directory
    // saveFrontendFiles(token);
}

//solidity version：0.4.18
async function weth9(){
    const WETH9 = await ethers.getContractFactory("WETH9");
    const weth9 = await WETH9.deploy();
    await weth9.deployed();

    console.log("WETH9 address:", weth9.address);
}

//solidity version：0.5.16
async function uniswapv2Factory(){
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const uniswapV2Factory = await UniswapV2Factory.deploy('0xE5e69B292170459a4e4CC77f94491681fF1f1636');
    await uniswapV2Factory.deployed();

    console.log("UniswapV2Factory address:", uniswapV2Factory.address);
}

//solidity version：0.6.6
async function uniswapV2Router02(){
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    const uniswapV2Router02 = await UniswapV2Router02.deploy('0x08b99E6B892da793b3dA07db14D83c86337d5B1c','0xFe33eC9960E430608030e92860264B486Ae99Ef2');
    await uniswapV2Router02.deployed();

    console.log("UniswapV2Router02 address:", uniswapV2Router02.address);
}

function saveFrontendFiles(token) {
    const fs = require("fs");
    const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        path.join(contractsDir, "contract-address.json"),
        JSON.stringify({Token: token.address}, undefined, 2)
    );

    const TokenArtifact = artifacts.readArtifactSync("Token");

    fs.writeFileSync(
        path.join(contractsDir, "Token.json"),
        JSON.stringify(TokenArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
