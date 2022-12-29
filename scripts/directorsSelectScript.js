let directorItems = document.querySelectorAll(".directorItem")
let directorContenList = document.querySelectorAll(".left-right-column");

directorItems.forEach((elem) => {
    elem.addEventListener('click', (event) => changeDirectorItem(event, elem.dataset.btn));
});

const changeDirectorItem = (event, buttonNumber) => {
    directorItems.forEach((elem) => {
        elem.classList.remove("activeItem");
    });
    event.currentTarget.classList.add("activeItem");
    showContent(buttonNumber);
};

function showContent(contentNumber) {
    directorContenList.forEach((elem) => {
        elem.classList.add("hideContent");
    });
    directorContenList[contentNumber - 1].classList.remove("hideContent");
}