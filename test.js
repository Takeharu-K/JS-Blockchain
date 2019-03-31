const Blockchain = require('./blockchain');

const takecoin = new Blockchain(1111, 'qqqqqqqqq', 'wwwwwwwww');

takecoin.createNewTransaction(11, 'erqwreqwer', 'qrweqwerq');

takecoin.createNewBlock(111,'erqwerqwe','rqwerqwerq');

const currentBlockData = [
    {
      amount: 10,
      sender: "ALICE090970FYFFYFYFIF",
      recipient: "BOB797789790JFJFFGFJF"
    },
    {
      amount: 30,
      sender: "ALICGHIUGUGOOIGODYGDHFD",
      recipient: "BOBTYSHGHOUHOHOHOHOHO"
    },
    {
      amount: 200,
      sender: "ALICEHJGUGUTETEEUUCVVUVUV",
      recipient: "BOBGIUGIUGIUDRTESREAREUY"
    }
];

console.log(takecoin.hashBlock('adfasdfa',currentBlockData,1111));
