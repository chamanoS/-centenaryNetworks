
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
    const collapseContent = document.getElementById(collapseId);
  
    if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      dropdownHeader.querySelector(".span").style.display = "block";
      dropdownHeader.querySelector(".span-down").style.display = "none";
    } else {
      collapseContent.style.display = "block";
      dropdownHeader.querySelector(".span").style.display = "none";
      dropdownHeader.querySelector(".span-down").style.display = "block";
    }
  }
  
