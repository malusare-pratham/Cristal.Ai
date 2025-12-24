const menu = document.getElementById("menu");
const openBtn = document.getElementById("openbtn");
const closeBtn = document.getElementById("closebtn");

openBtn.onclick = () => {
  menu.classList.add("active");
  closeBtn.style.display = "block";
};

closeBtn.onclick = () => {
  menu.classList.remove("active");
  closeBtn.style.display = "none";
};

document.querySelectorAll(".nav-list a").forEach(link=>{
  link.onclick=()=>{
    menu.classList.remove("active");
    closeBtn.style.display="none";
  };
});
