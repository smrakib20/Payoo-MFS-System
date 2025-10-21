// Add Money = Total Money****************
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let moneys = document.getElementById('add-amount').value;
    let pins = document.getElementById('pin-nmbr').value;
    let balances = document.getElementById('current-balance').innerText;
    if (pins === '01') {
        // console.log(balances)
        //    set number type & adding current value
        let balancesNum = parseFloat(balances);
        let moneysNum = parseFloat(moneys);
        let currentValue = moneysNum + balancesNum;
        document.getElementById('current-balance').innerText = currentValue;

        // remove value
        let money = document.getElementById('add-amount');
        money.value = '';
        let pin = document.getElementById('pin-nmbr');
        pin.value = '';
        // console.log(currentValue)
    } else {
        alert('Failed to add Money! Please try again.')
    }

})