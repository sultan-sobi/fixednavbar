const navbarE=document.querySelector(".navbar");


const bottomContainerE=document.querySelector(".bottom-container")
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomContainerE.offsetTop-navbarE.offsetHeight-60){
      navbarE.classList.add("active");
    }else{
      navbarE.classList.remove("active");

    }
})