fetch("header.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById ("header").innerHTML =data;
    })
    .catch(err=>console.error("Header load error:",err));
function toggleDropdown(button,event) {
    event.preventDefault(); // stop page jump
    document.querySelectorAll (".dropdown-content.show")
        .forEach(d=>d.classList .remove ("show"));
    // toggle current
    button.nextElementSibling .classList .toggle ("show");

}

document.addEventListener ("click",function(event) {
    if (!event.target.classList.contains("dropbtn")) {
        document.querySelectorAll(".dropdown-content.show")
            .forEach(d => d.classList.remove("show"))
    }
});
