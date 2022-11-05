var account = null;
var signature = null;
var message = "Signin with my wallet";

(async () =>{
    if(window.etherum){
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await window.web3.eth.getAccounts();
        
    }
})