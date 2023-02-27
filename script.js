const header = document.querySelector("header"); 

const menu = document.querySelector("#menu-icon"); 
const navlist = document.querySelector(".navlist"); 
menu.addEventListener("click",function(){
  

  navlist.classList.toggle("open")
  
});


window.addEventListener("scroll",function(){
  menu.innerHTML = " ";
  navlist.classList.remove("open")
})
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky",window.scrollY > 100)
}); 