
function Dropdown(dropdownId) {

  const collapseId = dropdownId.replace("dropdown_", "collapse_");
  const dropdownHeader = document.getElementById(dropdownId);
  const header = dropdownHeader.firstElementChild
  const arrowUp = dropdownHeader.querySelector(".span");
  const arrowDown = dropdownHeader.querySelector(".span-down");

  const collapseContent = document.getElementById(collapseId);

  if (collapseContent.style.display === "block") {
    collapseContent.style.display = "none";
    header.style.color = "#333a46e8";
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
  } else {
    collapseContent.style.display = "block";
    header.style.color = "#f47929";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {

  const collapseMenu = document.getElementById("btn-collapse");
  const navbarCollapse = document.getElementById("navbar-collapse")

  collapseMenu.addEventListener("click", () => {

    console.log("Its working")
    if (navbarCollapse.style.display === 'none' || navbarCollapse.style.display === '') {
      navbarCollapse.style.display = 'block';
    } else {
      navbarCollapse.style.display = 'none';
    }

  })

})