class Blockchain {

    constructor(nonce, previousBlockHash, hash){
        this.chain = [];
        this.pendingTransaction = [];

        const newBlock = {
            index: this.chain.length +1,
            timestamp: Date.now(),
            transactions: this.pendingTransaction,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        }

        this.chain.push(newBlock);
    }

    createNewBlock(nonce, previousBlockHash, hash){
        this.chain.push({
            index: this.chain.length +1,
            timestamp: Date.now(),
            transactions: this.pendingTransaction,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        });
    }

    getLastBlock(){
        return this.chain[this.chain.length -1];
    }

    createNewTransaction(amount, sender, to){
        this.pendingTransaction.push({
            amount: amount,
            sender: sender,
            to: to
        });

        return this.getLastBlock()['index'] + 1;
    }
}

module.exports = Blockchain;