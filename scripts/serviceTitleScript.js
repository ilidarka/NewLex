const titleItem = document.querySelectorAll(".titleItem");

titleItem.forEach((elem) => {
    elem.addEventListener('click', (event) => changeserviceTitle(event));
});

const changeserviceTitle = (event) => {
    titleItem.forEach((elem) => {
        elem.classList.remove("activeServiceTitle");
    });
    event.currentTarget.classList.add("activeServiceTitle");
};