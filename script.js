const quoteresult=document.querySelector(".result")
const quoteauthor=document.querySelector(".author")
const qoutetag=document.querySelector(".tags")
const quotebtn=document.getElementById("submit")
function genquote(){
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quoteresult.textContent=data.content
    quoteauthor.textContent=`--- ${data.author}`  
    qoutetag.textContent=data.tags



  })


}
genquote()


quotebtn.addEventListener("click",()=>{
  genquote()
})
