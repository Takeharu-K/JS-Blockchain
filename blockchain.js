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
}

module.exports = Blockchain;