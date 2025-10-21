// Cashout Money ****************
document.getElementById('cashOut-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let nmbrs = document.getElementById('cashout-number').value;
    let moneys = document.getElementById('cash-out-amount').value;
    let pins = document.getElementById('out-pin-nmbr').value;
    let balances = document.getElementById('current-balance').innerText;
    if (nmbrs !== '' && pins === '1234') {
        // console.log(balances)
        //    set number type & adding current value
        let balancesNum = parseFloat(balances);
        let moneysNum = parseFloat(moneys);
        let currentValue = balancesNum - moneysNum;
        document.getElementById('current-balance').innerText = currentValue;

        // remove value
        let money = document.getElementById('cash-out-amount');
        money.value = '';
        // sm but other system 
        document.getElementById('out-pin-nmbr').value = '';
        document.getElementById('cashout-number').value = '';
        // console.log(currentValue)
    } else {
        alert('Failed to add Money! Please try again.')
    }
})