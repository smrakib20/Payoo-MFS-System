document.getElementById('login-btns').addEventListener('click', function (e) {
    // console.log("commments")
    e.preventDefault()
    const numbers = document.getElementById('phn-nmbr').value;
    const pins = document.getElementById('login-pin-nmbr').value;
    // console.log(numbers, pins)
    if (numbers === "01" && pins === "01") {
        // console.log("Your are logged in");
        document.getElementById('login-div').style.display = "none";
        document.getElementById('Lastest-Payment-Depo').style.display = "block";
        // window.location.href = '/index-2.html'
    } else {
        alert("Wrong your number or pin")
    }
})
//if click log out would remove nmbr & pin
document.getElementById('logout').addEventListener('click', function (e) {
    const pind = document.getElementById('login-pin-nmbr');
    pind.value = '';
})

document.getElementById('logout').addEventListener('click', function (e) {
    const pind = document.getElementById('phn-nmbr');
    pind.value = '';
})
