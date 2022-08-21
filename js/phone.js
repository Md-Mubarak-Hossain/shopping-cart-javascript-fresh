


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    setMobilePrice(true);
    subTotalPrice();
    tax();
    total();

})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    setMobilePrice(false);
    subTotalPrice();
    tax();
    total();

})