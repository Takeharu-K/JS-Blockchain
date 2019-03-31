const Blockchain = require('./blockchain');

const takecoin = new Blockchain(1111, 'qqqqqqqqq', 'wwwwwwwww');

takecoin.createNewTransaction(11, 'erqwreqwer', 'qrweqwerq');

takecoin.createNewBlock(111,'erqwerqwe','rqwerqwerq');

console.log(takecoin);
