# BlockVote 🤝🏻
BlockVote is a blockchain based election system which lets voters elect candidate in an election.

### Technology Stack 🎨
1. [BootStrap](https://getbootstrap.com/) 
2. [Truffle](https://www.trufflesuite.com/) 
3. Ganache 

### How to use it? 🎉

>Make Sure that you've Truffle and Ganache installed

#### Ganache :
1. Open Ganache and Create new workspace
2. Name the workspace & add "truffle-config.js" file to add project
3. Make changes according to your needs and save workspace
4. Compile contract sources file: `truffle compile`
5. Testing : `truffle test .\test\election.js`
6. Migrating : `truffle migrate`

#### Run WebApp :
2. Navigate to the folder: `cd BlockVote`
3. Install dependencies: `npm install`
4. Run server: `npm run dev`

#### Connect MetaMask :
1. Install MetaMask extension in browser
2. Sign In into MetaMask account
3. Copy private key from ganache and Import account from it
4. Connect it with BlockVote WebApp and Cast your vote

Run Test after Some number of Votes For Better testing