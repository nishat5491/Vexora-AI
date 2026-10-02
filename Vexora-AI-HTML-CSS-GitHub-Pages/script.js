const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d"),glow=document.querySelector(".cursor-glow");
let w,h,dpr,particles=[],mouse={x:-999,y:-999};
function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0)}
function burst(x,y){for(let i=0;i<4;i++)particles.push({x:x+(Math.random()-.5)*7,y:y+(Math.random()-.5)*7,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,life:1,size:.6+Math.random()*2.1})}
addEventListener("resize",resize);
addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;glow.style.left=mouse.x+"px";glow.style.top=mouse.y+"px";burst(mouse.x,mouse.y)});
addEventListener("mouseleave",()=>{mouse.x=-999;mouse.y=-999});
function animate(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vx*=.994;p.vy*=.994;p.life-=.012;ctx.globalAlpha=Math.max(0,p.life);ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle="rgba(160,195,255,1)";ctx.fill()});particles=particles.filter(p=>p.life>0);ctx.globalAlpha=1;requestAnimationFrame(animate)}
resize();animate();
function openDemo(){document.getElementById("modal").classList.add("show")}
function closeDemo(){document.getElementById("modal").classList.remove("show")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeDemo()});
const prompts=["Research the latest AI agent architecture and create a product plan","Build a landing page with a futuristic interface","Analyze this project and find the highest-impact improvements","Create a verified research report with multiple sources"];
let n=0;setInterval(()=>{n=(n+1)%prompts.length;const p=document.getElementById("prompt");if(p){p.style.opacity=.25;setTimeout(()=>{p.childNodes[0].nodeValue=prompts[n]+" ";p.style.opacity=1},180)}},4200);
