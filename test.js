const Blockchain = require('./blockchain');

const takecoin = new Blockchain();
console.log(takecoin);

takecoin.createNewTransaction(1000,'ALICE','BOB');

function mining(takecoin){
    const lastBlock = takecoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];

    const currentBlockData = {
        transactions: takecoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };

    const nonce = takecoin.proofOfWork(previousBlockHash, currentBlockData);

    const blockHash = takecoin.hashBlock(
        previousBlockHash,
        currentBlockData,
        nonce
    );

    const newBlock = takecoin.createNewBlock(nonce, previousBlockHash, blockHash);
}

mining(takecoin);

takecoin.createNewTransaction(
    200,
    "ALICE",
    "BOB"
   );
   
   mining(takecoin);
   
   takecoin.createNewTransaction(
    300,
    "BOB",
    "ALICE"
   );
   
   mining(takecoin);
   
   console.log(takecoin);