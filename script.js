let links = document.querySelectorAll(".head_link");
let btn=document.querySelector("#btn")
let video=document.querySelector("video")

links.forEach(link => {  
    link.addEventListener("mouseover", (a) => {
        link.style.textDecoration = "underline";  
    });
    link.addEventListener("mouseout", (a) => {
        link.style.textDecoration = "none";  
    });
});
btn.addEventListener("click",()=>{
    alert("Hello world!")
})
video.addEventListener("click",()=>{
    alert("Ko'rish mumkin emas")
    video.style.display="none"
})