const header=document.querySelector("header");
Window.addEventListener("scroll",function(){
header.classList.toggle("sticky",this.window.scrollY>0);
})

