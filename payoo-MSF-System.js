document.getElementById('login-btns').addEventListener('click', function (e) {
    // console.log("commments")
    e.preventDefault()
    const numbers = document.getElementById('phn-nmbr').value;
    const pins = document.getElementById('pin-nmbr').value;
    // console.log(numbers, pins)
    if (numbers === "01" && pins === "01") {
        console.log("Your are logged in");
        window.location.href = '/index-2.html'
    } else {
        alert("Wrong your number or pin")
    }
    // document.getElementById('phn-nmbr').addEventListener('click',function (params) {

    // })

})

