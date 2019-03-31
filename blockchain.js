const sha256 = require('sha256');

class Blockchain {

    constructor(nonce, previousBlockHash, hash){
        this.chain = [];
        this.pendingTransactions = [];
        this.currentNodeUrl = '';
        this.networkNodes = [];

        this.createNewBlock(1, '0', '0');
    }

    createNewBlock(nonce, previousBlockHash, hash){
        this.chain.push({
            index: this.chain.length +1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        });
    }

    getLastBlock(){
        return this.chain[this.chain.length -1];
    }

    createNewTransaction(amount, sender, to){
        this.pendingTransactions.push({
            amount: amount,
            sender: sender,
            to: to
        });

        return this.getLastBlock()['index'] + 1;
    }

    hashBlock(previousBlockHash, currentBlockData, nonce){
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        return sha256(dataAsString);
    }

    proofOfWork(previousBlockHash, currentBlockData){
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        while (hash.substring(0,4) != '0000'){
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }
        return nonce;
    }

}

module.exports = Blockchain;