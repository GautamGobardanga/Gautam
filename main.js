fetch("header.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById ("header").innerHTML =data;
    })
    .catch(err=>console.error("Header load error:",err));

