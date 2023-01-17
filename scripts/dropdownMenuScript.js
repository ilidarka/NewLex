let dropdownButtons = document.querySelectorAll('.dropdownMenuButton');

dropdownButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => toggleDropDownMenu(event, elem.dataset.menuButton));
});

const toggleDropDownMenu = (event, buttonNumber) => {
    console.log(buttonNumber);
};