


document.getElementById('btn-case-plus').addEventListener('click', function () {
    setMobileCasePrice(true);
    subTotalPrice();
    tax();
    total();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    setMobileCasePrice(false);
    subTotalPrice();
    tax();
    total();

})