const inner2=document.querySelectorAll('.inner2');
const btn=document.querySelector('.btn');
const outer=document.querySelector('.outer')

let select="";


inner2.forEach((inner2E) => {
    inner2E.addEventListener("click", (event) => {
   removeActive();
select= event.target.innerText || event.target.parentNode.innerText;

event.target.classList.add("active");
event.target.parentNode.classList.add("active");

    });
  });


  btn.addEventListener("click",()=>{
    if(select!=""){
        outer.innerHTML=`
        <strong>Thank You </strong>
        <br>
        <br>
        <strong>Feedback: ${select}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
  })
function removeActive() {
    inner2.forEach((inner2E)=>{
        inner2E.classList.remove("active");
    })
}