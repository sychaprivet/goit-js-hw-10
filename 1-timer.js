import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as b,i as f}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),g=document.querySelector(".value[data-days]"),p=document.querySelector(".value[data-hours]"),y=document.querySelector(".value[data-minutes]"),C=document.querySelector(".value[data-seconds]");o.setAttribute("disabled",!0);let a;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],console.log(a),a.getTime()<=Date.now()?(f.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),o.setAttribute("disabled",!0)):a.getTime()>Date.now()&&(f.success({title:"OK",message:"Press Start!",position:"topRight",backgroundColor:"#59A10D",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),o.removeAttribute("disabled"))}};e.addEventListener("input",b("#datetime-picker",v));o.addEventListener("click",D);function S(t){const n=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),r=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:s,minutes:r,seconds:l}}const i=t=>t.toString().padStart(2,"0");function D(){o.setAttribute("disabled",!0);const t=setInterval(()=>{const d=new Date,u=new Date(e.value)-d,{days:c,hours:n,minutes:s,seconds:r}=S(u);if(u<=0){e.removeAttribute("disabled");return}e.setAttribute("disabled",!0),g.textContent=i(c),p.textContent=i(n),y.textContent=i(s),C.textContent=i(r),[c,n,s,r].every(h=>h===0)&&(clearInterval(t),e.disabled=!1)},1e3)}
//# sourceMappingURL=1-timer.js.map
