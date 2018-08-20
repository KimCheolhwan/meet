var constant = require('./constant.js');
//------------------------
// Web3 연결
//------------------------
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://14.63.193.192:8545"));
var Web3EthPersonal = require('web3-eth-personal');
var personal = new Web3EthPersonal('http://14.63.193.192:8545');
const TokenContractAddress = "0x8b5562b229e6bd1a5c1f81fa0b605c996b2c1648";
const MeetContractAddress = "0xee90893a624286a27f25c73895abce1c85c2a1b7";


var MeetTokenAbi =[
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "minus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "tokenName",
				"type": "string"
			},
			{
				"name": "tokenSymbol",
				"type": "string"
			},
			{
				"name": "decimalUnits",
				"type": "uint8"
			},
			{
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	}
]
var TokenContract = web3.eth.contract(MeetTokenAbi).at(TokenContractAddress);

var MeetAbi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Ether_To_Token",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "participate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			}
		],
		"name": "Sign_up",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Token_To_Ether",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_addressOfTokenUsedAsReward",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MeetToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var Meet = web3.eth.contract(MeetAbi).at(MeetContractAddress);

web3.eth.defaultAccount = web3.eth.accounts[0];

//----------------------------
// 토큰 명부 조회 (BalanceOf)
//----------------------------
exports.getTokenAmount = function (address) {
    //+++++++  STEP 4. Get 실습 ++++++++++++
    return TokenContract.balanceOf(address);
};

//----------------------------
// 이더 잔액 조회
//----------------------------
exports.getBalance = function (address) {
    //+++++++  STEP 4. Get 실습 ++++++++++++
    return web3.fromWei(web3.eth.getBalance(address), 'ether');
};

//----------------------------
// 계정 언락
//----------------------------
exports.unlockAccount = function (from, passphase) {
    web3.personal.unlockAccount(from, passphase,function (err, hash){
			if(err){
				console.log('invalid passphase');
			}else{

			}
		});
};

//----------------------------
// 이더 트랜잭션 수행
//----------------------------
exports.sendTransaction = function(from, to, value, gas, callback) {
    //+++++++  STEP 4. SET 실습 ++++++++++++
    web3.eth.sendTransaction({
        from: from,
        to: to,
        value: web3.toWei(value,'ether'),
        gas: gas}, function (err, hash) {
        if (err) {
            console.log(err);
            return callback(err, '');
        } else {
    				console.log("* sendTransaction txhash : " + hash );
            return callback(null, hash);
        }
    });
};

//----------------------------
// 이벤트 모니터링
//----------------------------
exports.fundTransferEvent = function( callback ) {
    //+++++++  STEP 5. Event Watch 실습 ++++++++++++
    CrowdFundContract.FundTransfer().watch(function(error, res){
        if (error)
        {
      			console.log(error);
            return callback(err, '');
        } else
        {
            console.log(res);
            return callback(null, res);
        }
    });
};

//=================================
//어카운트 생성
//=================================

exports.testCreate = function(email,password,nickname){
	unlockAccount(web3.eth.defaultAccount,password)
	var _promise =  personal.newAccount(password).then(function(text){
		//디비저장 여기에서 가능
		console.log("address : " + text);
		Meet.Sign_up(text);
		web3.eth.sendTransaction({
				from: web3.eth.defaultAccount,
				to: text,
				value: web3.toWei(10,'ether'),
				gas: 28000}, function (err, hash) {
				if (err) {
						console.log(err);
			} else {
						console.log("10이더와 100코인 전송 완료");
					}
		});
	})
}

exports.ether_to_token = function(address,value){
	web3.eth.sendTransaction({
			from: address,
			to: web3.eth.defaultAccount,
			value: web3.toWei(value,'ether'),
			gas: 28000}, function (err, hash) {
			if (err) {
					console.log('not enough ether');
			} else {
					Meet.Ether_To_Token(address,value);
					console.log(address + "에 " + value*10 + "토큰 전송 완료" );
			}
	});
}

exports.token_to_ether = function(address,value){
	web3.eth.sendTransaction({
			from: web3.eth.defaultAccount,
			to: address,
			value: web3.toWei(value/10,'ether'),
			gas: 28000}, function (err, hash) {
			if (err) {
					console.log('not enough token');
			} else {
					Meet.Token_To_Ether(address,value);
					console.log(address + "에 " + value/10 + "이더 전송 완료");
			}
	});
}

exports.join = function(address,value){
	Meet.participate(address,value);
	console.log(address + "에서 " + value + "토큰 차감");
}