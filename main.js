fetch("header.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById ("header").innerHTML =data;
    })
    .catch(err=>console.error("Header load error:",err));
  function workshopTechnology(id){
        const boxes=document.getElementsByClassName("workshop-box");
        for (let i=0; i< boxes.length; i++){
            boxes[i].style.display="none";
        }
        document.getElementById(id).style.display="block";
    }

