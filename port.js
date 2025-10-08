let skill = document.querySelector("#skills");
let exprience = document.querySelector("#expriences");
let education = document.querySelector("#education");
let tab_links = document.querySelectorAll(".tab-links");
let tab_content = document.querySelectorAll(".tab-content");
let skills_content = document.querySelector("#skills-content");
let expriences_content = document.querySelector("#expriences-content");
let education_content = document.querySelector("#education-content");
let menu =document.querySelector("#menu");
let cross =document.querySelector("#cross");
let ul = document.querySelector(".ul");
let submit_btn = document.querySelector("#submit-btn");
let submit_btnz = document.querySelectorAll(".submit_btnz");

 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyim6h5pJZiz0cEGA_jGmtE9UKwThDCEXdU6zd5Oi8m5HanIw-3dcqCf4nE-WqfOpeCyg/exec'
const form = document.forms['submit-to-google-sheet']

tab_links.forEach(link =>{
    link.addEventListener("click", (e)=>{
       skill.classList.remove("active-links");
        exprience.classList.remove("active-links");
         education.classList.remove("active-links");
          skills_content.classList.remove("active-tabs");
          expriences_content.classList.remove("active-tabs");
          education_content.classList.remove("active-tabs");
         let targetelement = e.target.id;
          console.log(targetelement);
           document.querySelector(`#${targetelement}`).classList.add("active-links");

           if(targetelement==="skills"){
            skills_content.classList.add("active-tabs");
           }
            else if(targetelement==="expriences"){
            expriences_content.classList.add("active-tabs");
           }
            else if(targetelement==="education"){
            education_content.classList.add("active-tabs");
           }


    } )
})

menu.addEventListener("click", ()=>{
ul.style.display="block"
} )
cross.addEventListener("click", ()=>{
ul.style.display="none"
} )



  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => msg.innerText="message sent sucessfully")
      setInterval(()=>{
           
             submit_btnz.forEach(input_text => {
                input_text.value="";
            })
           
        }, 6000)
      .catch(error =>  msg.innerText="something went wrong")
  })
  submit_btn.addEventListener("click", ()=>{
    submit_btn.style.background= "#ff3131";
  })

