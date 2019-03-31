const Blockchain = require('./blockchain');

const takecoin = new Blockchain(1111, 'qqqqqqqqq', 'wwwwwwwww');
takecoin.createNewBlock(1112, 'erqwerqwe', 'rqwerqwerqerwere');
takecoin.createNewBlock(1113, 'erqwe', 'rqwfasdfasdferqwerqerwere');
takecoin.createNewBlock(1114, 'erq', 'rfasdfasdferqwerqerwere');


console.log(takecoin);