var pages = ["home", "games", "tools", "design", "contact"];

function openPage(pageName) {
    document.getElementById(pageName).style.height = window.innerHeight - (45 * (pages.length - 1));
}


document.getElementById(pages[0]).onclick = function(){onClick(pages[0])};
document.getElementById(pages[1]).onclick = function(){onClick(pages[1])};
document.getElementById(pages[2]).onclick = function(){onClick(pages[2])};
document.getElementById(pages[3]).onclick = function(){onClick(pages[3])};
document.getElementById(pages[4]).onclick = function(){onClick(pages[4])};


var currentPage = "home";


function onClick(pageName) {
    console.log(pageName);
    openPage(pageName);
}
