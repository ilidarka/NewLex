const directorItems = document.querySelectorAll(".directorItem")
const directorContenList = document.querySelectorAll(".left-right-column");
const directorNames = document.querySelectorAll(".directorsName");
const directorArrowLeft = document.querySelector(".directorArrowLeft");
const directorArrowRight = document.querySelector(".directorArrowRight");

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

directorArrowLeft.addEventListener('click', (event) => {
    let currentContent = document.querySelector(".activeDirectorName");
    if(Number(currentContent.dataset.directors) > 1) {
        showContent(Number(currentContent.dataset.directors) - 1)
    }
});

directorArrowRight.addEventListener('click', (event) => {
    let currentContent = document.querySelector(".activeDirectorName");
    if(Number(currentContent.dataset.directors) < directorContenList.length) {
        showContent(Number(currentContent.dataset.directors) + 1)
    }
});

function showContent(contentNumber) {
    directorContenList.forEach((elem) => {
        elem.classList.add("hideContent");
    });
    directorNames.forEach((elem) => {
        elem.classList.remove("activeDirectorName");
    });
    directorContenList[contentNumber - 1].classList.remove("hideContent");
    directorNames[contentNumber - 1].classList.add("activeDirectorName");
}