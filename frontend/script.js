
// function Dropdown(event){
// const dynamic_id = event.replace("dropdown","collapse");
// // const getElement = document.getElementById("dropdown_1");
// const dynamic_collapseID = document.getElementById(dynamic_id).nextElementSibling.firstChild;
// console.log("nextSiblingID" + dynamic_collapseID)
// const getCollapse = document.getElementById("collapse_1");

// dynamic_id.addEventListener("click",()=>{
//     console.log(getCollapse)
//     getCollapse.classList.toggle("show");

//     if(document.getElementById(dynamic_id).nextElementSibling.classList == "block"){
//         document.querySelector(".span-down").style.display = "block";
//         document.querySelector(".span").style.display = "none";

//     }
// })

// }

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
  
