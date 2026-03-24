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
    function tradetheory(id,file){
        const boxes=document.getElementsByClassName("workshop-box");
        for( let i=0; i<boxes.length; i++){
            boxes[i].style.display="none";
        }
        const box= document.getElementById(id)
              box.style.display="block"
        if (file){
            fetch(file)
                 .then(response=>response.text())
                .then(data=>box.innerText=data)
                .catch(error => box.innerText="Unable to load file.");
        }
    }
    function loadPDF(id, pdfFile) {
    const boxes = document.getElementsByClassName("workshop-box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }

    const box = document.getElementById(id);
    box.style.display = "block";

    document.getElementById("pdfFrame").src = pdfFile;
}
