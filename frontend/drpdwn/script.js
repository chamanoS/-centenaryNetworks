const imgUp = document.querySelector(".up");
const imgdown = document.querySelector(".down");
const imgHolder = document.querySelector(".img-hover");
const dropDown = document.querySelector(".dropdown");

imgHolder.addEventListener("click",()=>{
 
    dropDown.classList.toggle("active");
    if(dropDown.classList.contains("active")){
        imgUp.style.display = "block";
        imgdown.style.display = "none"
    }else{
        imgUp.style.display = "none";
        imgdown.style.display = "block"
    }
   
})