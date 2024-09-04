class TransferFee{
    constructor (fromClient, toClient, amount){
        this.fromClient = fromClient
        this.toClient = toClient
        this.amount = amount
        this.commission = "5%"
    }
    calculateCommission(){
        return this.amount * 0.05
    }
}
let client1 = new TransferFee("Aslan", "Ibrahim", 125)
console.log(client1);
console.log(client1.calculateCommission())