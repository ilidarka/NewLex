let buttons = document.querySelectorAll(".rateButton")

buttons.forEach((elem) => {
    elem.addEventListener('click', (event) => changeButtonColor(event));
});

const changeButtonColor = (event) => {
    buttons.forEach((elem) => {
        elem.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
};