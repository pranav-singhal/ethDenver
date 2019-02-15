import Web3 from 'web3';

const web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/ZWXhYfP2uIvdg1yKuQNY "
    )
);

const byteCode = '0x6080604052600160005534801561001557600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506124c2806100666000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063037525b0146100a9578063283bf71b146101a8578063395c317114610231578063529d9be8146102e057806358ce35de1461039e5780635cd9add0146104805780636d959fdb1461066a5780638057d7ed1461090657806393d9cb9114610a87578063e4b841f914610b08575b600080fd5b3480156100b557600080fd5b506101a660048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bc6565b005b3480156101b457600080fd5b5061022f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e7d565b005b34801561023d57600080fd5b506102de600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610f87565b005b3480156102ec57600080fd5b50610347600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611165565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038a57808201518184015260208101905061036f565b505050509050019250505060405180910390f35b3480156103aa57600080fd5b50610405600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506112ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561044557808201518184015260208101905061042a565b50505050905090810190601f1680156104725780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561048c57600080fd5b506104ab600480360381019080803590602001909291905050506113fa565b6040518080602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b838110156104f75780820151818401526020810190506104dc565b50505050905090810190601f1680156105245780820380516001836020036101000a031916815260200191505b50858103845288818151815260200191508051906020019080838360005b8381101561055d578082015181840152602081019050610542565b50505050905090810190601f16801561058a5780820380516001836020036101000a031916815260200191505b50858103835287818151815260200191508051906020019080838360005b838110156105c35780820151818401526020810190506105a8565b50505050905090810190601f1680156105f05780820380516001836020036101000a031916815260200191505b50858103825286818151815260200191508051906020019080838360005b8381101561062957808201518184015260208101905061060e565b50505050905090810190601f1680156106565780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561067657600080fd5b506106db60048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611783565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019080838360005b8381101561072b578082015181840152602081019050610710565b50505050905090810190601f1680156107585780820380516001836020036101000a031916815260200191505b5086810385528a818151815260200191508051906020019080838360005b83811015610791578082015181840152602081019050610776565b50505050905090810190601f1680156107be5780820380516001836020036101000a031916815260200191505b50868103845289818151815260200191508051906020019080838360005b838110156107f75780820151818401526020810190506107dc565b50505050905090810190601f1680156108245780820380516001836020036101000a031916815260200191505b50868103835288818151815260200191508051906020019080838360005b8381101561085d578082015181840152602081019050610842565b50505050905090810190601f16801561088a5780820380516001836020036101000a031916815260200191505b50868103825287818151815260200191508051906020019080838360005b838110156108c35780820151818401526020810190506108a8565b50505050905090810190601f1680156108f05780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561091257600080fd5b50610a85600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611c31565b005b348015610a9357600080fd5b50610aee600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ead565b604051808215151515815260200191505060405180910390f35b348015610b1457600080fd5b50610b6f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611f6c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610bb2578082015181840152602081019050610b97565b505050509050019250505060405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff166003826040518082805190602001908083835b602083101515610c155780518252602082019150602081019050602083039250610bf0565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610c8b57600080fd5b610d43600260008681526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d385780601f10610d0d57610100808354040283529160200191610d38565b820191906000526020600020905b815481529060010190602001808311610d1b57829003601f168201915b5050505050826120f4565b1515610d4e57600080fd5b6006826040518082805190602001908083835b602083101515610d865780518252602082019150602081019050602083039250610d61565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208490806001815401808255809150509060018203906000526020600020016000909192909190915055508260026000868152602001908152602001600020600501836040518082805190602001908083835b602083101515610e305780518252602082019150602081019050602083039250610e0b565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390209080519060200190610e769291906123c1565b5050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ed957600080fd5b806003836040518082805190602001908083835b602083101515610f125780518252602082019150602081019050602083039250610eed565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60006003836040518082805190602001908083835b602083101515610fc15780518252602082019150602081019050602083039250610f9c565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561103757600080fd5b336003836040518082805190602001908083835b602083101515611070578051825260208201915060208101905060208303925061104b565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806004836040518082805190602001908083835b60208310151561111a57805182526020820191506020810190506020830392506110f5565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902090805190602001906111609291906123c1565b505050565b60603373ffffffffffffffffffffffffffffffffffffffff166003836040518082805190602001908083835b6020831015156111b65780518252602082019150602081019050602083039250611191565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561122c57600080fd5b6006826040518082805190602001908083835b602083101515611264578051825260208201915060208101905060208303925061123f565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054806020026020016040519081016040528092919081815260200182805480156112e157602002820191906000526020600020905b8154815260200190600101908083116112cd575b50505050509050919050565b60606004826040518082805190602001908083835b6020831015156113275780518252602082019150602081019050602083039250611302565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113ee5780601f106113c3576101008083540402835291602001916113ee565b820191906000526020600020905b8154815290600101906020018083116113d157829003601f168201915b50505050509050919050565b606080606080611408612441565b6002600087815260200190815260200160002060a06040519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114c05780601f10611495576101008083540402835291602001916114c0565b820191906000526020600020905b8154815290600101906020018083116114a357829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115625780601f1061153757610100808354040283529160200191611562565b820191906000526020600020905b81548152906001019060200180831161154557829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116045780601f106115d957610100808354040283529160200191611604565b820191906000526020600020905b8154815290600101906020018083116115e757829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116a65780601f1061167b576101008083540402835291602001916116a6565b820191906000526020600020905b81548152906001019060200180831161168957829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117485780601f1061171d57610100808354040283529160200191611748565b820191906000526020600020905b81548152906001019060200180831161172b57829003601f168201915b505050505081525050905080602001518160400151826060015183608001518393508292508191508090509450945094509450509193509193565b6060806060806060611793612441565b6060600260008a815260200190815260200160002060a06040519081016040529081600082018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561184d5780601f106118225761010080835404028352916020019161184d565b820191906000526020600020905b81548152906001019060200180831161183057829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118ef5780601f106118c4576101008083540402835291602001916118ef565b820191906000526020600020905b8154815290600101906020018083116118d257829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119915780601f1061196657610100808354040283529160200191611991565b820191906000526020600020905b81548152906001019060200180831161197457829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a335780601f10611a0857610100808354040283529160200191611a33565b820191906000526020600020905b815481529060010190602001808311611a1657829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ad55780601f10611aaa57610100808354040283529160200191611ad5565b820191906000526020600020905b815481529060010190602001808311611ab857829003601f168201915b5050505050815250509150600260008a8152602001908152602001600020600501886040518082805190602001908083835b602083101515611b2c5780518252602082019150602081019050602083039250611b07565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf35780601f10611bc857610100808354040283529160200191611bf3565b820191906000526020600020905b815481529060010190602001808311611bd657829003601f168201915b505050505090508160200151826040015183606001518460800151848494508393508292508191509650965096509650965050509295509295909350565b3373ffffffffffffffffffffffffffffffffffffffff166003826040518082805190602001908083835b602083101515611c805780518252602082019150602081019050602083039250611c5b565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611cf657600080fd5b8060026000805481526020019081526020016000206000019080519060200190611d219291906123c1565b508460026000805481526020019081526020016000206001019080519060200190611d4d9291906123c1565b508360026000805481526020019081526020016000206002019080519060200190611d799291906123c1565b508260026000805481526020019081526020016000206003019080519060200190611da59291906123c1565b508160026000805481526020019081526020016000206004019080519060200190611dd19291906123c1565b508060026000805481526020019081526020016000206000019080519060200190611dfd9291906123c1565b506005816040518082805190602001908083835b602083101515611e365780518252602082019150602081019050602083039250611e11565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600054908060018154018082558091505090600182039060005260206000200160009091929091909150555060008081548092919060010191905055505050505050565b6000806003836040518082805190602001908083835b602083101515611ee85780518252602082019150602081019050602083039250611ec3565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611f625760009050611f67565b600190505b919050565b60603373ffffffffffffffffffffffffffffffffffffffff166003836040518082805190602001908083835b602083101515611fbd5780518252602082019150602081019050602083039250611f98565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561203357600080fd5b6005826040518082805190602001908083835b60208310151561206b5780518252602082019150602081019050602083039250612046565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054806020026020016040519081016040528092919081815260200182805480156120e857602002820191906000526020600020905b8154815260200190600101908083116120d4575b50505050509050919050565b600080612101848461210a565b14905092915050565b600060608060008086935085925083519150818351101561212a57825191505b600090505b8181101561236d57828181518110151561214557fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191684828151811015156121c057fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916101561225b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94506123b7565b828181518110151561226957fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191684828151811015156122e457fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916111561236057600194506123b7565b808060010191505061212f565b82518451101561239f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94506123b7565b8251845111156123b257600194506123b7565b600094505b5050505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061240257805160ff1916838001178555612430565b82800160010185558215612430579182015b8281111561242f578251825591602001919060010190612414565b5b50905061243d9190612471565b5090565b60a06040519081016040528060608152602001606081526020016060815260200160608152602001606081525090565b61249391905b8082111561248f576000816000905550600101612477565b5090565b905600a165627a7a72305820b83746d08ed9038950d960bddd84974e0dde46dfc42a9ba650ddedcb578a828d0029';
const contractAbi = [{"constant":false,"inputs":[{"name":"_documentId","type":"uint256"},{"name":"_policyId","type":"string"},{"name":"_deligatee","type":"string"},{"name":"_uploader","type":"string"}],"name":"deligateDocument","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_deligatee","type":"address"}],"name":"addDeligateeAccounts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_username","type":"string"},{"name":"_nucypherPublic","type":"string"}],"name":"signUpUsername","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_deligatee","type":"string"}],"name":"getDeligatedDocument","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"getNucypherPublicKey","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_documentId","type":"uint256"}],"name":"getUploadedDocumentInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_documentId","type":"uint256"},{"name":"_deligatee","type":"string"}],"name":"getDeligatedDocumentInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cipherText","type":"string"},{"name":"_capsule","type":"string"},{"name":"_aliceVerifyingKey","type":"string"},{"name":"_alicePublicKey","type":"string"},{"name":"_uploader","type":"string"}],"name":"uploadADocument","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_username","type":"string"}],"name":"usernameAvailability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_uploader","type":"string"}],"name":"getUploadedDocuments","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
let contract = new web3.eth.Contract(contractAbi);

function deployContract(_privateKey, _callingObject) {
    return new Promise(function (resolve, reject) {
        let address = web3.eth.accounts.privateKeyToAccount(_privateKey).address;
        contract.deploy({data : byteCode, arguments : []})
            .estimateGas({from : address})
            .then(async function (gasAmount) {
                let gasPrice = await web3.eth.getGasPrice();
                let gasValue = gasPrice * gasAmount;

                let transaction = {
                    from: web3.utils.toChecksumAddress(address),
                    gas: gasAmount + 10,
                    data: contract.deploy({data : byteCode, arguments : []})
                        .encodeABI()
                };
                let bal = await web3.eth.getBalance(address);
                let requiredEth = gasValue;
                let gasInEth = web3.utils.fromWei(requiredEth.toString());
                if (bal > requiredEth) {
                    _callingObject.verifyTransaction(transaction, gasInEth, "SignIn User to Contract", function() {
                        let signPromise = web3.eth.accounts.signTransaction(
                            transaction,
                            _privateKey
                        );
                        // console.log(signPromise);
                        signPromise
                            .then(signedTx => {
                                // console.log(signedTx);
                                const sentTx = web3.eth.sendSignedTransaction(
                                    signedTx.raw || signedTx.rawTransaction
                                );
                                sentTx.on("receipt", receipt => {
                                    resolve(true);
                                });
                                sentTx.on("transactionHash", function(hash) {
                                    _callingObject.transactionMining(hash);
                                    // console.log("Allowance hash =", hash);
                                });
                                sentTx.on("error", err => {
                                    resolve(err);
                                });
                            })
                            .catch(err => {
                                console.error(err);
                            });
                    });
                } else {
                    _callingObject.insufficientFunds(gasInEth);
                }
            });
    });
}

async function testing() {
    let callingObject = {
        verifyTransaction: function (transaction, gasInEth, transactionName, callback) {
            callback();
        },
        transactionMining: function (hash) {
        },
        insufficientFunds: function (eth) {
        }
    };
    deployContract('0x36B298BE4646D2044F02ADCD1AF39A9069EF798CA4EF6F439553AA05935AAE47',
        callingObject);

}

testing();