function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* typing animation */
const text = "Hi, I'm Payal";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 120);
  }
}
typing();

/* scroll reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

/* particles */
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#60a5fa" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});