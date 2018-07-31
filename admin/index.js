(function() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var contract = web3.eth.contract([{
    "constant": true,
    "inputs": [],
    "name": "say",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_greeting",
        "type": "string"
    }],
    "name": "setGreeting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "greeting",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "_greeting",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}]
    
    ).at(0x5230e4fb738a6b34e04aa69b4fe4968189ce56fb);

    var name = "MyHero";
    var salary = contract.get(name);

    console.log(name,salary.toString(10));
})();