const LINKS={
1:"PASTE_RASTII_LIVE_LINK_HERE",2:"PASTE_YESU_LIVE_LINK_HERE",
3:"PASTE_PROJECT_3_LINK_HERE",4:"PASTE_PROJECT_4_LINK_HERE",
5:"PASTE_PROJECT_5_LINK_HERE",6:"PASTE_PROJECT_6_LINK_HERE"};
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>{let o=nav.classList.toggle("open");menu.classList.toggle("open",o);menu.setAttribute("aria-expanded",o)});
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>{nav.classList.remove("open");menu.classList.remove("open")});
document.querySelectorAll("[data-project]").forEach(a=>a.onclick=e=>{let l=LINKS[a.dataset.project];if(l.includes("PASTE_")){e.preventDefault();toast("Add this project's link in script.js");}else{a.href=l;a.target="_blank";a.rel="noopener"}});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
addEventListener("scroll",()=>document.querySelector(".progress").style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+"%");
addEventListener("pointermove",e=>{let g=document.querySelector(".cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
document.getElementById("year").textContent=new Date().getFullYear();
function toast(s){let t=document.getElementById("toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)}
document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target);let s=encodeURIComponent("New portfolio inquiry — "+f.get("type"));let b=encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\nProject type: ${f.get("type")}\n\nMessage:\n${f.get("message")}`);location.href=`mailto:itsyashwadawood@gmail.com?subject=${s}&body=${b}`;toast("Opening your email app…")};
/* V2 premium interactions */
(() => {
  const loader=document.querySelector(".loader");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finish=()=>{document.body.classList.add("ready");if(loader){setTimeout(()=>loader.classList.add("done"),reduce?0:350);}};
  if(reduce) finish(); else setTimeout(finish,1750);

  const cursor=document.querySelector(".custom-cursor"), label=document.querySelector(".magnetic-label");
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my,lx=mx,ly=my;
  addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY});
  const cursorLoop=()=>{cx+=(mx-cx)*.22;cy+=(my-cy)*.22;lx+=(cx-lx)*.12;ly+=(cy-ly)*.12;
    if(cursor){cursor.style.left=cx+"px";cursor.style.top=cy+"px"} requestAnimationFrame(cursorLoop)};
  if(!matchMedia("(pointer: coarse)").matches) cursorLoop();

  document.querySelectorAll("a,button,.media,.skills div").forEach(el=>{
    el.addEventListener("mouseenter",()=>cursor?.classList.add("active"));
    el.addEventListener("mouseleave",()=>cursor?.classList.remove("active"));
  });

  document.querySelectorAll(".media").forEach(card=>{
    card.addEventListener("mousemove",e=>{
      if(matchMedia("(pointer: coarse)").matches)return;
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${y*-2.2}deg) rotateY(${x*2.2}deg) scale(1.012)`;
    });
    card.addEventListener("mouseleave",()=>card.style.transform="");
  });

  document.querySelectorAll(".talk,.circle,.submit-btn,.text-link").forEach(el=>{
    el.addEventListener("mousemove",e=>{
      if(matchMedia("(pointer: coarse)").matches)return;
      const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x*.10}px,${y*.10}px)`;
    });
    el.addEventListener("mouseleave",()=>el.style.transform="");
  });

  const targets=document.querySelectorAll("h2,h3,blockquote,.label,.skills strong");
  const splitObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay="0s";e.target.classList.add("motion-in")}}),{threshold:.2});
  targets.forEach(t=>splitObserver.observe(t));

  addEventListener("scroll",()=>{
    const y=scrollY;
    document.querySelectorAll(".motion-orb").forEach((o,i)=>o.style.transform=`translateY(${y*(i?.018:.01)}px)`);
  },{passive:true});
})();
