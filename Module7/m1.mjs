/*
M1: Bankrekening

Bouw een object genaamd bankrekening met eigenschappen rekeningnummer (string), saldo (getal), en eigenaar (string). 
Voeg een methode toonSaldo toe om het huidige saldo weer te geven. Voeg een methode overschrijving toe waarmee je geld aan een andere bankrekening kan storten.
*/

let bankrekening = createBankAccount('123456', 100, 'Harry');
let rekening2 = createBankAccount('456789', 10, 'Ron');

bankrekening.toonSaldo();
rekening2.toonSaldo();

bankrekening.overschrijving(rekening2, 50);

bankrekening.toonSaldo();
rekening2.toonSaldo();


function createBankAccount(accountNumber, amount, owner)
{
    return {
        accountNumber,
        amount,
        owner,
        toonSaldo: function()
        {
            console.log(`Er staat momenteel ${this.amount} euro op de rekening met nummer ${this.accountNumber}.`);
        },
        overschrijving: function(otherAccountName, amountToTransfer)
        {
            otherAccountName.amount += amountToTransfer;
            this.amount -= amountToTransfer;
        } 
    }
}