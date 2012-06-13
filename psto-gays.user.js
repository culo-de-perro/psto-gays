// ==UserScript==
// @name        psto-gays
// @namespace   http://psto.net
// @description Invisible gays
// @include     http://*.psto.net/*
// @include     http://psto.net/*
// @version     1
// ==/UserScript==

var pidors = ["kurkuma", "carnero", "Alyona", "Faumi", "greenbastad", "Kryukov", "DZhon", "Kirsche", "Elemir"]

document.getElementById('logo').parentNode.setAttribute("href", "http://psto.net/recent?nofilter=1");

var sheet = document.createElement("style");
sheet.innerHTML = ".pidor{opacity: 0.3;} .pidor:hover{opacity: 1;}";
document.body.appendChild(sheet);
 
var posts = document.getElementsByClassName("post");
for (var post in posts) {
        var name = posts[post].getElementsByTagName("a")[1].firstChild.nodeValue;
        if (pidors.indexOf(name) != -1) {
                posts[post].setAttribute("class", "post pidor");
        }              
}
