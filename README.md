# LPGBET

Simple web3 project that user can play games and make money (or lose :wink: ) .
Working on this to learn about web3 more, this is not a real site.

## How this project created?

After installing npm and node;

```bash
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

```bash
npm install dotenv --save-dev
```

Running the sample script to make sure everything is working up to now.

```bash
> npx hardhat run scripts/sample-script.js
Compiling 2 files with 0.8.4
Compilation finished successfully
Deploying a Greeter with greeting: Hello, Hardhat!
Greeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

First, removing the Greeter.sol in contracts folder and creating `LPGBet.sol`

Also, removing the `sample-script.js` in scripts and creating a `run.js` and `deploy.js`


The games that first come to my mind are
- *Heads or Tails*
- *Powerball*
- *Jackpot*
- *Roulette*

But we'll start with the simplest one and see how it goes.

Let's start with **Heads or Tails**

## Heads or Tails