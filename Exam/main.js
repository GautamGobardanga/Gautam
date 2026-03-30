const params = new URLSearchParams(window.location.search);

let action = params.get("action");

if (action === "submit") {
    alert("Submit clicked → End exam");
}


if (action === "open") {
    alert("Open clicked → Start exam");
}


document.addEventListener("DOMContentLoaded", function () {
    
    
fetch("header.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById ("header").innerHTML =data;
       
        
})
    
    .catch(err=>console.error("Header load error:",err));



if (action === "open") {

let container=document.getElementById("questionContainer");

if(!container) return;

   
for (let i=1; i<=50; i++) {
    let questionDiv=document.createElement("div");
    questionDiv.className="question-box";
    questionDiv.innerHTML=`
     <p>${i}. Sample Question ${i}?</p>
    <label><input type="radio" name="q${i}" value="A"> A. Option A</label><br>
        <label><input type="radio" name="q${i}" value="B"> B. Option B</label><br>
        <label><input type="radio" name="q${i}" value="C"> C. Option C</label><br>
        <label><input type="radio" name="q${i}" value="D"> D. Option D</label>
    
    `;
      container.appendChild(questionDiv);
}
}


});


function saveStudent() {
    console.log("Button clicked");   // 👈 add this

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    fetch("https://localhost:7238/api/Student/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            studentName: name,
            roll: roll
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Response:", data);
        alert("Saved successfully");
    })
    .catch(err => console.error("Error:", err));
}

