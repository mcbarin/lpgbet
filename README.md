# LPGBET

Simple web3 project that user can play games and make money (or lose :wink: ) .
Working on this to learn about web3 more, this is not a real site.

## How this project created?

After installing npm and node;

```
mkdir lpgbet
cd lpgbet
npm init --yes
npm install --save-dev hardhat
```

Create the project

```
npx hardhat

> Create a basic sample project

Hardhat project root: /Users/mehmetcagataybarin/workspace/lpgbet
Do you want to add a .gitignore? (Y/n) · y
Do you want to install this sample project's dependencies with npm (@nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers)? (Y/n) · y

npm install --save-dev @nomiclabs/hardhat-waffle@^2.0.0 ethereum-waffle@^3.0.0 chai@^4.2.0 @nomiclabs/hardhat-ethers@^2.0.0 ethers@^5.0.0
```


Install `dotenv` to keep the secret keys etc. in our environment rather than hardcoding them

```
npm install dotenv --save-dev
```

