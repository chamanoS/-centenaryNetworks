
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


function validateForm() {
  var form = document.getElementById("myForm");
  if (form.checkValidity()) {
    // Form is valid, show modal
    document.getElementById("myModal").style.display = "flex";
  } else {
    // Form is invalid, highlight fields
    var inputs = form.querySelectorAll(":invalid");
    inputs.forEach(function (input) {
      input.style.borderColor = "red";
    });
  }
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// document.getElementById("email").addEventListener("mouseover", showHoverText);
// document.getElementById("contact").addEventListener("mouseover", showHoverText);

// // Function to show the hover text
// function showHoverText() {
//   var hoverText = document.createElement("div");
//   hoverText.textContent = "Hello Tax Users";
//   hoverText.classList.add("hover-text");
//   this.parentNode.appendChild(hoverText);

//   // Remove the hover text after a brief delay (you can adjust the delay as needed)
//   setTimeout(function () {
//     hoverText.remove();
//   }, 2000); // 2000 milliseconds (2 seconds) delay in this example
// }

$(document).ready(function() {
  $('[data-toggle="popover"]').popover({
     placement: 'top',
     trigger: 'hover'
  });
});