require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind method inflict private fold spy'; 
let testAccounts = [
"0xd61b1bae82545adf4674491d07b18c5339d212e5a5259d3afe8fa9e1fb14b8aa",
"0x85792fb0ff2a3319615e658f5d690f62c4000bc75aef6a3bcb149dd29861b9c7",
"0x6c332508c97a258a57bf25056caf3dfe23910c01627a4eb00f0411bd03cd3eb1",
"0x203236b37b5eff3d472a6692670de451b398dd1149581a44e9518f0c19a68dce",
"0x773035f1ec0216429c7334e466998258c2d75bd6a1f45c2be64fe0786a22e44e",
"0x63f1b1ab82b138f5b3cd22290f7ea9eaab2d97a576184e5b3c7d4b9755fdca10",
"0xab5019ba2b8a294272c872410829035dd35ef8d25332ae2c29115fb2fa024092",
"0x5172a81fea686f1add2b4b3a1b675901ace025a99e9cc84716e0e414860d4a0b",
"0x965a89a4192a28eef99ee014971680755caaee4392256c7f9a233a9dadea88d7",
"0x753306ca267f8cd260e908f0bb0556d90f6fb09c7d7b29c004ae402f200e5836"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


