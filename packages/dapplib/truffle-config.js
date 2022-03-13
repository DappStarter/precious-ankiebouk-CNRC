require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain column hidden enroll flat taste'; 
let testAccounts = [
"0x28b5e22692c549b5ae5ee62452135b1ef11a373ae290d169397c1384a185bc88",
"0xd2c01ee2a27fb5c952fdf403206cbec57a01c1c88023eb0ebc83775b994f8be1",
"0x7411b714ebdbec173886ac580c32110fbd2d8cd1ce83a8d8233774ced4358f34",
"0xeb9b9ff1a538c52430af2309ecc59a17587a8f04ecc35740147387525f0c464e",
"0x85cd6034943362926555f55f22c3cc2111dac6f6a99345e96f23311cc6e854ea",
"0x8da74b9b47d2919e2ddc6326465dbdd6e3ac43edfbc101d1fb4db3879cafef30",
"0x737a87f38c0a17613f6dc452c55a4a2e663dbe8c18f445bb380b9d0d8fd78c09",
"0xaab0d317c742861752c82e354edb9b360548e1f1ea5c9aa0d968e5034701385a",
"0xb19308c48ddef1205f254159c20e0d582676f8c6064058812dc8ddc14aaa9e2b",
"0x29a043a4afc1ebae2d017390aaa789c6ba414c82154b895764c45d856bb34ad9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

