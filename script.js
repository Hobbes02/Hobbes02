var pages = ["home", "games", "tools", "design", "contact"];

var viewHeight = (window.innerHeight - ((pages.length - 1) * 50)).toString();

onresize = function() {
    viewHeight = (window.innerHeight - ((pages.length - 1) * 50)).toString();
    var elem = this.document.getElementById(currentSection);
    elem.style.height = viewHeight + "px";
}

var canChangeSections = true;

onClick("home");

function openPage(pageName) {
    canChangeSections = false;
    currentSection = pageName;
    for(var p of pages) {
        if(p === pageName) {
            document.getElementById(p).style.height = viewHeight + "px";
        } else {
            document.getElementById(p).style.height = "40px";
        }
    }
}


document.getElementById(pages[0]).onclick = function(){onClick(pages[0])};
document.getElementById(pages[1]).onclick = function(){onClick(pages[1])};
document.getElementById(pages[2]).onclick = function(){onClick(pages[2])};
document.getElementById(pages[3]).onclick = function(){onClick(pages[3])};
document.getElementById(pages[4]).onclick = function(){onClick(pages[4])};


var currentSection = "home";


function resetChangeSections() {
    canChangeSections = true;
}


function onClick(pageName) {
    if(canChangeSections) {
        openPage(pageName);
        setTimeout(resetChangeSections, 400);
    }
}
