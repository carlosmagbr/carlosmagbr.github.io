const icon = document.getElementById("icon")
const menu = document.getElementById("menu")


function openMenu(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block"; 
    }
}