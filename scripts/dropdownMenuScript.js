const dropdownButtons = document.querySelectorAll('.dropdownMenuButton');
const dropdownMenus = document.querySelectorAll('.dropdownContent');

dropdownButtons.forEach((elem) => {
    elem.addEventListener('click', (event) => toggleDropDownMenu(event, elem.dataset.menubutton));
});

const toggleDropDownMenu = (event, buttonNumber) => {
    dropdownMenus[buttonNumber - 1].classList.toggle('hidenDropdownContent');
};