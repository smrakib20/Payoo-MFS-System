// Add Money = Total Money****************
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let moneys = document.getElementById('add-amount').value;
    let pins = document.getElementById('pin-nmbr').value;
    let balances = document.getElementById('current-balance').innerText;
    if (pins === '1234') {
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
        // history 
        const H2 = document.getElementById('last-history')
        H2.style.display = 'flex';
        const h2Container = document.getElementById('h2-div');
        const h2Element = document.createElement('h2');
        // const times = (date.getDay())
        h2Element.innerText = `Added: ${moneysNum} Tk `; // at ${times}
        h2Container.appendChild(h2Element)
    } else {
        alert('Failed to add Money! Please try again.')
    }
})