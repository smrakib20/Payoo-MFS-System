// Cashout Money ****************
document.getElementById('cashOut-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let nmbrs = document.getElementById('cashout-number').value;
    let moneys = document.getElementById('cash-out-amount').value;
    let pins = document.getElementById('out-pin-nmbr').value;
    let balances = document.getElementById('current-balance').innerText;
    if (nmbrs !== '' && nmbrs.length >= 11 && nmbrs.length <= 13 && pins === '1234') {
        // console.log(balances)
        //    set number type & adding current value
        let balancesNum = parseFloat(balances);
        let moneysNum = parseFloat(moneys);
        if (moneysNum > balancesNum) {
            alert("You do not have enough money to cash out")
            return;
        }
        let currentValue = balancesNum - moneysNum;
        document.getElementById('current-balance').innerText = currentValue;

        // remove value
        let money = document.getElementById('cash-out-amount');
        money.value = '';
        // sm but other system 
        document.getElementById('out-pin-nmbr').value = '';
        document.getElementById('cashout-number').value = '';
        // console.log(currentValue)

        // history 
        const H2 = document.getElementById('last-history')
        H2.style.display = 'flex';

        const h2Container = document.getElementById('h2-div');
        const h2Element = document.createElement('h2')

        h2Element.innerText = `Cash Out: ${moneysNum} Tk`;
        h2Container.appendChild(h2Element);
    } else {
        alert('Failed to add Money! Please try again.')
    }
})