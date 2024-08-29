var pages = ["home", "games", "tools", "design", "contact"];

for(var p of pages) {
    document.getElementById(p).onclick = function(){onClick(p)};
}

function onClick(pageName) {
    console.log(pageName);
}
