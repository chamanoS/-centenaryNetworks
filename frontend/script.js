
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

// $(document).ready(function() {
//   $('[data-toggle="popover"]').popover({
//      placement: 'top',
//      trigger: 'hover'
//   });
// });

const BEE_Cal = document.getElementById("B-BBEE_calculation")
const BEE_Points = document.getElementById("B-BBEE-Points")
const computeBtn = document.getElementById("compute-btn");

computeBtn.addEventListener("click",()=>{
  BEE_Cal.classList.toggle("hide")
  BEE_Points.classList.toggle("reveal")
})


const inputFields = document.querySelectorAll('.input-field');
const outputDiv = document.getElementById('output');
const outputDiv2 = document.getElementById('output2');

inputFields.forEach(inputField => {
  inputField.addEventListener('input', () => {
    const values = Array.from(inputFields)
      .map(field => field.value)
      .filter(value => value !== ''); 

    outputDiv.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
    outputDiv2.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
  });
});



const arrowDown = document.getElementById("click-env");

const cat = document.querySelector(".accordition_category_section");
const cat_dw = document.querySelectorAll(".ct-box");
const info = document.querySelector(".accordition_info")
const close_box = document.querySelectorAll(".general")

close_box.forEach(cl_box =>{
  isClicked = false;
  cl_box.addEventListener("click",()=>{
    info.style.display = "none"

    isClicked = true;
    
   
    


    })

})

console.log(isClicked)
cat_dw.forEach(box => {
  box.addEventListener("click", ()=>{
    const sectors = document.querySelector(".accordition_sector_section")
    sectors.style.display="block"
  })
})

arrowDown.addEventListener("click", () =>{
 cat.style.display = "block"
})

// // Get a reference to the button element
// const button = document.getElementById('myButton');

// // Initialize a variable to track the button state
// let isClicked = false;

// // Add a click event listener to the button
// button.addEventListener('click', function() {
//     // Update the state when the button is clicked
    
// });


  
