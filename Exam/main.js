
document.addEventListener("DOMContentLoaded", function () {
     let headerDiv = document.getElementById("header");
    if(headerDiv){
fetch("header.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById ("header").innerHTML =data;
        let btn=document.getElementById("btnSubmit");
        if(btn){
            btn.addEventListener("click",function(){
                window.location.href="exam.html";
            });
        }
    }
    })
    .catch(err=>console.error("Header load error:",err));





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
});
