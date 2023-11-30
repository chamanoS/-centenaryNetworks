
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

const form = document.getElementById("myForm");
const modalForm = document.getElementById("modal-form");
const getArrowDown = document.getElementById("arrow-dwn");
const arrowUps = document.querySelector(".up");
const arrowDowns = document.querySelector(".down");

function validateForm() {

  if (form.checkValidity()) {
    form.parentElement.style.display = "none";
    modalForm.style.display = "block";
    arrowUps.style.display = "none";
    arrowDowns.style.display = "block";

  } else {
    const inputs = form.querySelectorAll(":invalid");
    inputs.forEach(function (input) {
      input.style.borderColor = "red";
    });
  }
}

const getDetails = document.getElementById("yr-details")
getArrowDown.addEventListener("click", ()=>{
  getDetails.style.display = "block";
  modalForm.style.display = "none";
  arrowUps.style.display = "block";
  arrowDowns.style.display = "none";
})

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


const inputField = document.querySelectorAll('.input-fields');
const outputDivs = document.getElementById('outputz');
const outputDiv3 = document.getElementById('output3');
console.log(inputField)
console.log(outputDivs)
inputField.forEach(inputFieldx => {
  inputFieldx.addEventListener('input', () => {
    const values = Array.from(inputField)
      .map(field => field.value)
      .filter(value => value !== ''); 

    outputDivs.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
    outputDiv3.textContent = values.length > 1 ? `(${values.join(', ')})` : values.join('');
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

// checkbox js
const checkBx = document.getElementById("checkbox")
const inputFrm = document.getElementById("Consultant_info")
const checkboxDiv =document.getElementById("checkbox_btn")

checkBx.addEventListener("click", ()=>{
  inputFrm.classList.toggle("popup")
  // inputFrm.style.display="block"
})

//Toggling btns
const YesBtn = document.querySelector(".yes-btn");
const NoBtn = document.querySelector(".no-btn");
const displayDiv = document.querySelector(".supplier-dev");

NoBtn.addEventListener("click", ()=>{
  displayDiv.classList.add("display-hide");

})

