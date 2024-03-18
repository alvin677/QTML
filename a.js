let tabs, pages;

function switch_tab(i) {
    tabs[localStorage.last_page].classList.remove("active"); pages[localStorage.last_page].style.display = 'none'; 
    tabs[i].classList.add("active"); pages[i].style.display = 'block'; 
    localStorage.last_page = i;
}

window.onload = function() {
    tabs = [document.getElementById("tab_home"), document.getElementById("tab_scripts"), document.getElementById("tab_games"), document.getElementById("tab_affiliates")];
    pages = [document.getElementById("home_content"), document.getElementById("scripts_content"), document.getElementById("games_content"), document.getElementById("affiliates_content")];

    if (!localStorage["last_page"]) {localStorage.last_page = tabs[0];}
    tabs[localStorage.last_page].classList.add("active"); pages[localStorage.last_page].style.display = 'block';   
}