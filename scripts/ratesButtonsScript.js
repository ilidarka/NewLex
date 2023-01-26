let buttons = document.querySelectorAll(".rateButton")
let rates = document.querySelectorAll(".ratesPrices");

buttons.forEach((elem) => {
    elem.addEventListener('click', (event) => changeButtonColor(event, elem.dataset.ratebutton));
});

const changeButtonColor = (event, buttonNumber) => {
    buttons.forEach((elem) => {
        elem.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
    changeActiveRate(buttonNumber);
};

function changeActiveRate(rateNumber) {
    rates.forEach((elem) => {
        elem.classList.add("unactiveRate");
        if(elem.dataset.ratesprices == rateNumber) {
            elem.classList.remove("unactiveRate");
        }
    });
}