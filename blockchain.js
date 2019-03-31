class Blockchain {

    constructor(nonce, previousBlockHash, hash){
        this.chian = [];
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
}

