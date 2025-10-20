
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let moneys = document.getElementById('add-amount').value;
    let pins = document.getElementById('pin-nmbr').value;
    let balances = document.getElementById('current-balance').innerText;
    if (pins === '01') {
        // console.log(balances)
        //    set number type & adding current value

        const balancesNum = parseFloat(balances)
        const moneysNum = parseFloat(moneys)
        const currentValue = moneysNum + balancesNum;
        document.getElementById('current-balance').innerText = currentValue;

        // remove value 
        let money = document.getElementById('add-amount');
        money.value = '';
        let pind = document.getElementById('pin-nmbr');
        pind.value = '';
        // console.log(currentValue)
    } else {
        alert('Failed to add Money! Please try again.')
    }
})