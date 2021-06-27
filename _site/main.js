
// Mobile Hamburger Handling
const hamburger = document.querySelector("#hamburger");
const mobile_nav = document.querySelector("#mobile-nav");
const closer = document.querySelector("#close");
const post_log = document.querySelector("#post-log");

hamburger.addEventListener("click", () => {

    closer.style.display = "block";
    hamburger.style.display = "none";
    mobile_nav.style.display = "block";
    post_log.style = "margin-top:20px;"

});


closer.addEventListener("click", () => {

    closer.style.display = "none";
    hamburger.style.display = "block";
    mobile_nav.style.display = "none";
    post_log.style = "margin-top:0px;"

});




// Tag Handling
const tags = document.querySelectorAll(".tags");

tags.forEach(element => element.textContent.replace("p"," "));
