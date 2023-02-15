const titleItem = document.querySelectorAll(".titleItem");
const accessiblePlans = document.querySelectorAll(".accessiblePlan");

titleItem.forEach((elem) => {
    elem.addEventListener('click', (event) => changeserviceTitle(event, elem.dataset.plannumber));
});

const changeserviceTitle = (event, planNumber) => {
    titleItem.forEach((elem) => {
        elem.classList.remove("activeServiceTitle");
    });
    event.currentTarget.classList.add("activeServiceTitle");
    switchPlan(planNumber);
};

function switchPlan(planNumber) {
    accessiblePlans.forEach((elem) => {
        elem.classList.remove("activePlan");
    });
    accessiblePlans[planNumber - 1].classList.add("activePlan");
}