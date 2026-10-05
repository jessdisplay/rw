(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62428,e=>{"use strict";var t=e.i(93441);let r=t.default.env.NEXT_PUBLIC_INVESTOR_EMAIL||"matt@86k.io",s=t.default.env.NEXT_PUBLIC_INVESTOR_PASSWORD||"S!mmonds",a="rise-investor-unlocked",n="rise-investor-risen",i="rise:investor-login";e.s(["DATA_ROOM_ROUTE",0,"/rw/investor/data-room","INVESTOR_LOGIN_EVENT",0,i,"REQUEST_ACCESS_HREF",0,"mailto:dev@riseos.care?subject=Rise%20investor%20data%20room%20access","checkCredentials",0,function(e,t){return e.trim().toLowerCase()===r.toLowerCase()&&t===s},"hasRisen",0,function(){try{return"1"===sessionStorage.getItem(n)}catch{return!1}},"isUnlocked",0,function(){try{return"1"===localStorage.getItem(a)||"1"===sessionStorage.getItem(a)}catch{return!1}},"markRisen",0,function(){try{sessionStorage.setItem(n,"1")}catch{}},"requestInvestorLogin",0,function(e){window.dispatchEvent(new CustomEvent(i,{detail:{intent:e}}))},"setUnlocked",0,function(e){try{e?localStorage.setItem(a,"1"):(localStorage.removeItem(a),sessionStorage.removeItem(a))}catch{}}])},4932,e=>{"use strict";var t=e.i(72673),r=e.i(32137);e.s(["StarSvg",0,function({className:e,strokeWidth:s=3,...a}){return(0,t.jsxs)("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",className:(0,r.cn)("size-s10",e),...a,children:[(0,t.jsx)("path",{d:"M24.2253 16L22.573 16.0593C19.0296 16.1865 16.1865 19.0296 16.0593 22.573L16 24.2254L15.9407 22.573C15.8135 19.0296 12.9704 16.1865 9.42697 16.0593L7.77464 16L9.42697 15.9407C12.9704 15.8135 15.8135 12.9704 15.9407 9.42697L16 7.77465L16.0593 9.42697C16.1865 12.9704 19.0296 15.8135 22.573 15.9407L24.2253 16Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M24.2253 16L22.573 16.0593C19.0296 16.1865 16.1865 19.0296 16.0593 22.573L16 24.2254M24.2253 16L22.573 15.9407C19.0296 15.8135 16.1865 12.9704 16.0593 9.42697L16 7.77465M24.2253 16L32 16M16 24.2254L15.9407 22.573C15.8135 19.0296 12.9704 16.1865 9.42697 16.0593L7.77464 16M16 24.2254V32M7.77464 16L9.42697 15.9407C12.9704 15.8135 15.8135 12.9704 15.9407 9.42697L16 7.77465M7.77464 16L0 16M16 7.77465V0",stroke:"currentColor",strokeWidth:s})]})}])},38393,e=>{"use strict";var t=e.i(72673),r=e.i(73447),s=e.i(32137);e.s(["AnimatedText",0,function({children:e,variant:a="word",delay:n=0,delaySteps:i,multiplier:l=1,width:o="fit-content",animateInView:c=!0,className:d,parentClass:u,parentClassName:f,shown:m}){let p=u??f,h=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=h.current;if(!e||void 0!==m)return;if(e.setAttribute("data-split","true"),!c)return void e.setAttribute("data-shown","true");let t=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(r.target.setAttribute("data-shown","true"),t.unobserve(r.target))},{rootMargin:"0px 0px -15% 0px"});return t.observe(e),()=>t.disconnect()},[c,m]);let v="letter"===a?Array.from(e):"line"===a?e.split("\n"):e.split(/\s+/).filter(Boolean).flatMap(e=>e.split(/(?<=-)/).filter(Boolean));return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("style",{children:`
        .at-mask { display: inline-block; overflow: hidden; vertical-align: bottom; }
        /* Belt to the split above: no piece ever wraps inside its mask. */
        .at-piece { display: inline-block; white-space: nowrap; }
        @media (prefers-reduced-motion: no-preference) {
          [data-split="true"] .at-piece {
            opacity: 0;
            translate: 0 100%;
            transition:
              opacity var(--duration-scene) var(--ease-wipe),
              translate var(--duration-scene) var(--ease-wipe);
            transition-delay: calc((var(--at-d, 0) + var(--at-i, 0) * var(--at-m, 1)) * var(--duration-fast));
          }
          [data-split="true"][data-shown="true"] .at-piece {
            opacity: 1;
            translate: 0 0;
          }
        }
      `}),void 0!==m?(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:".at-piece{opacity:1 !important;translate:none !important}"})}):null,(0,t.jsx)("div",{ref:h,"data-split":void 0!==m?"true":void 0,"data-shown":m?"true":void 0,className:(0,s.cn)("full"===o?"w-full":"w-fit",d),style:{"--at-d":i??n,"--at-m":l},children:v.map((e,n)=>(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("span",{className:(0,s.cn)("at-mask",p),style:{"--at-i":n},children:(0,t.jsx)("span",{className:"at-piece",children:" "===e?" ":e})}),"word"===a&&n<v.length-1&&!e.endsWith("-")?" ":null,"line"===a&&n<v.length-1?(0,t.jsx)("br",{}):null]},`${n}-${e}`))})]})}])},61787,e=>{"use strict";var t=e.i(72673);e.s(["InvestorScene",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .is-stage {
          transform: var(--drift, none);
          will-change: transform;
        }
        .is-sky, .is-hills {
          filter:
            brightness(calc(0.62 + 0.38 * var(--p, 1)))
            saturate(calc(0.7 + 0.3 * var(--p, 1)));
          will-change: filter;
        }
        .is-sun {
          transform: translateY(calc((1 - var(--p, 1)) * 42%));
          will-change: transform;
        }
        .is-wash {
          /* Cream token at zero alpha for the far stop, never the transparent
             keyword (transparent BLACK bands across the midpoint), no blend
             mode. NOTE: no backticks in this block, it lives inside a
             template literal. */
          /* Kept tight to the sun so it never lifts the dark field under the
             type on the right (measured: at 70% reach "Improving" fell to
             3.1:1 at full light). */
          background: radial-gradient(
            55% 60% at 30% 27%,
            var(--color-primary-surface) 0%,
            color-mix(in srgb, var(--color-primary-surface), transparent 100%) 62%
          );
          opacity: calc(var(--p, 1) * 0.3);
          will-change: opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .is-stage, .is-sky, .is-hills, .is-sun, .is-wash { will-change: auto; }
        }
      `}),(0,t.jsxs)("div",{className:"is-stage absolute inset-0 select-none",children:[(0,t.jsx)("img",{src:"/rw/investor/dream-sky.webp",alt:"",fetchPriority:"high",className:"is-sky absolute inset-0 h-full w-full object-cover"}),(0,t.jsx)("img",{src:"/rw/investor/dream-sun.webp",alt:"","aria-hidden":"true",className:"is-sun pointer-events-none absolute inset-0 h-full w-full object-cover"}),(0,t.jsx)("img",{src:"/rw/investor/dream-hills.webp",alt:"","aria-hidden":"true",className:"is-hills pointer-events-none absolute inset-0 h-full w-full object-cover"}),(0,t.jsx)("div",{"aria-hidden":"true",className:"is-wash pointer-events-none absolute inset-0"})]})]})},"InvestorTypeScrim",0,function({shade:e=!0}={}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/30 to-transparent lg:hidden"}),(0,t.jsx)("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent from-35% to-foreground/40 to-85%"}),(0,t.jsx)("div",{"aria-hidden":"true",className:`pointer-events-none absolute inset-0 hidden transition-opacity duration-700 lg:block ${e?"opacity-60":"opacity-0"}`,style:{background:"radial-gradient(70% 85% at 82% 25%, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground), transparent 100%) 70%)"}})]})},"LOGIN_LIFT_P",0,.3,"driftTransform",0,function(e,t,r){return`scale(${e.toFixed(4)}) translate(${t.toFixed(3)}%, ${r.toFixed(3)}%)`},"personCentredDrift",0,function(e,t){return{scale:1,dx:0,dy:0}}])},4844,e=>{"use strict";var t=e.i(72673),r=e.i(73447),s=e.i(38393),a=e.i(38461),n=e.i(61787),i=e.i(62428);let l=[.12,.24,.36,.48,.6];e.s(["AboutHero",0,function(){let e=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(0),[d,u]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let t=e.current,r=o.current;if(!t||!r)return;let s=()=>{let e=(0,n.personCentredDrift)(window.innerWidth,window.innerHeight);r.style.setProperty("--drift",(0,n.driftTransform)(e.scale,e.dx,e.dy))};if(s(),window.addEventListener("resize",s),matchMedia("(prefers-reduced-motion: reduce)").matches)return r.style.setProperty("--p","1"),c.current=l.length,u(l.length),()=>window.removeEventListener("resize",s);let d=(0,i.hasRisen)()?n.LOGIN_LIFT_P:0;r.style.setProperty("--p",d.toFixed(4));let f=-1,m=(0,a.onScrollFrame)(()=>{let e=t.offsetHeight-window.innerHeight,s=Math.min(Math.max(-t.getBoundingClientRect().top/Math.max(1,e),0),1);if(5e-4>Math.abs(s-f))return;f=s,r.style.setProperty("--p",(d+(1-d)*s).toFixed(4));let a=l.filter(e=>s>=e).length;a!==c.current&&(c.current=a,u(a))});return()=>{m(),window.removeEventListener("resize",s)}},[]),(0,t.jsx)("section",{ref:e,className:"bg-primary-surface relative w-full",style:{height:"200vh"},children:(0,t.jsxs)("div",{ref:o,className:"sticky top-0 h-screen w-full overflow-hidden",children:[(0,t.jsx)(n.InvestorScene,{}),(0,t.jsx)(n.InvestorTypeScrim,{shade:d>0}),(0,t.jsx)("div",{"aria-hidden":"true",className:"from-primary-surface z-docked pointer-events-none absolute bottom-0 left-0 h-[15%] w-full bg-gradient-to-t from-0% to-transparent"}),(0,t.jsx)("div",{className:"absolute right-0 bottom-[18%] left-0 flex flex-col items-end px-s5 text-right sm:px-s7 md:right-[8%] md:left-auto md:px-0 lg:top-[15%] lg:bottom-auto",children:(0,t.jsxs)("h1",{className:"text-background font-display text-[12vw] leading-[1.02] sm:text-[8vw] lg:text-[6.4vw] lg:leading-[0.98]",children:[(0,t.jsx)(s.AnimatedText,{shown:d>0,className:"font-editorial z-overlay block font-extralight italic",children:"Modernising"}),(0,t.jsx)(s.AnimatedText,{shown:d>1,className:"z-overlay relative block",children:"Compliance"}),(0,t.jsx)(s.AnimatedText,{shown:d>2,className:"z-overlay relative block",children:"Improving"}),(0,t.jsxs)("div",{className:"flex justify-end gap-[0.25em]",children:[(0,t.jsx)(s.AnimatedText,{shown:d>3,className:"z-overlay relative block",children:"Care"}),(0,t.jsx)(s.AnimatedText,{shown:d>4,className:"font-editorial z-overlay relative block font-extralight italic",children:"Outcomes"})]})]})})]})})}])},73564,e=>{"use strict";var t=e.i(72673),r=e.i(73447),s=e.i(4932);e.s(["AboutTabletTeam",0,function(){let e=(0,r.useRef)(null),[a,n]=(0,r.useState)(!1);return(0,t.jsxs)("section",{className:"h-fit w-full px-s5 py-s9 md:px-s6 lg:hidden lg:px-s7",children:[(0,t.jsx)("style",{children:`
        .abtt-icon {
          opacity: 0;
          transform: scale(0.9);
          filter: blur(4px);
          transition:
            opacity var(--duration-normal) var(--ease-wipe),
            transform var(--duration-normal) var(--ease-wipe),
            filter var(--duration-normal) var(--ease-wipe);
        }
        .abtt-icon[data-on="true"] {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
          transition-delay: var(--duration-normal);
        }
        @media (prefers-reduced-motion: reduce) {
          .abtt-icon { transition: none; }
        }
      `}),(0,t.jsxs)("div",{className:"title flex flex-col items-center justify-center gap-s8 text-center",children:[(0,t.jsx)(s.StarSvg,{className:"h-s6 w-s6 text-tab-solid",strokeWidth:2}),(0,t.jsxs)("h2",{className:"font-display text-[10vw] leading-none md:text-[7vw]",children:["Better data",(0,t.jsx)("span",{className:"font-editorial block font-extralight italic",children:"better care"})]}),(0,t.jsx)(s.StarSvg,{className:"h-s8 w-s8 text-tab-solid",strokeWidth:2})]}),(0,t.jsxs)("div",{className:"video relative mt-s9 flex h-[30vh] w-full items-center justify-center md:h-[40vh]",children:[(0,t.jsx)("video",{ref:e,src:"/rw/about/Rise-Draft.mp4",muted:!0,className:"h-full w-full rounded-xl object-cover"}),(0,t.jsx)("button",{type:"button","aria-label":a?"Pause":"Play",onClick:function(){let t=e.current;t&&(t.paused?(t.play().catch(()=>{}),n(!0)):(t.pause(),n(!1)))},className:"play-pause-btn bg-primary-solid absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md p-s4 backdrop-blur-sm",children:(0,t.jsxs)("span",{className:"relative flex h-s6 w-s6 items-center justify-center",children:[(0,t.jsx)("span",{"data-on":a,className:"abtt-icon pause-icon absolute inset-0 flex items-center justify-center",children:(0,t.jsxs)("span",{className:"flex gap-s3",children:[(0,t.jsx)("span",{className:"bg-primary-solid-foreground h-s5 w-s2"}),(0,t.jsx)("span",{className:"bg-primary-solid-foreground h-s5 w-s2"})]})}),(0,t.jsx)("span",{"data-on":!a,className:"abtt-icon play-icon absolute inset-0 flex items-center justify-center",children:(0,t.jsx)("span",{className:"border-l-primary-solid-foreground ml-s2 h-0 w-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent"})})]})})]})]})}])},92338,e=>{"use strict";var t=e.i(72673),r=e.i(73447),s=e.i(32919),a=e.i(43340),n=e.i(4932);e.s(["AboutTeam",0,function(){let e=(0,r.useRef)(null),i=(0,r.useRef)(null),l=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),u=(0,r.useRef)(null),f=(0,r.useRef)(null),m=(0,r.useRef)(null),[p,h]=(0,r.useState)(!1);function v(e){e.muted=!1,e.play().catch(()=>{e.muted=!0,e.play().catch(()=>{})})}return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;function r(){let e=m.current;if(!e)return;let t=e.offsetHeight,r=e.getBoundingClientRect().top;r<100?e.style.transform=`scale(${1+(100-r)/(2*t)})`:e.style.transform="scale(1)"}s.gsap.registerPlugin(a.ScrollTrigger);let n=s.gsap.matchMedia(),p=s.gsap.context(()=>{n.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)",()=>{s.gsap.timeline({scrollTrigger:{trigger:t,start:"top top",end:"+=2000",scrub:1,pin:i.current,anticipatePin:1,onUpdate:e=>{let t=f.current;t&&(e.progress>.6?(v(t),h(!0)):(t.pause(),h(!1)))}}}).to(c.current,{width:"96vw",height:"90vh",ease:"power2.inOut"},0).to([l.current,o.current],{opacity:0,ease:"power2.in"},0).to([d.current,u.current],{opacity:0,ease:"power2.in"},0)}),a.ScrollTrigger.refresh()},t);return window.addEventListener("scroll",r),()=>{p.revert(),n.revert(),window.removeEventListener("scroll",r)}},[]),(0,t.jsxs)("section",{ref:e,className:"relative hidden w-full min-h-[150vh] lg:block",children:[(0,t.jsx)("style",{children:`
        .abt-icon {
          opacity: 0;
          transform: scale(0.9);
          filter: blur(4px);
          transition:
            opacity var(--duration-normal) var(--ease-wipe),
            transform var(--duration-normal) var(--ease-wipe),
            filter var(--duration-normal) var(--ease-wipe);
        }
        .abt-icon[data-on="true"] {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
          transition-delay: var(--duration-normal);
        }
        @media (prefers-reduced-motion: reduce) {
          .abt-icon { transition: none; }
        }
      `}),(0,t.jsx)("div",{ref:i,className:"h-screen w-full overflow-hidden",children:(0,t.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-center gap-s8",children:[(0,t.jsx)("div",{ref:d,className:"flex flex-1 justify-end overflow-hidden",children:(0,t.jsx)("h2",{className:"font-display text-foreground text-[6vw] whitespace-nowrap text-right md:text-[4vw] xl:text-[3vw]",children:"Better data"})}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-s8",children:[(0,t.jsx)("div",{ref:l,children:(0,t.jsx)(n.StarSvg,{className:"h-s8 w-s8 text-tab-solid",strokeWidth:1})}),(0,t.jsxs)("div",{ref:c,className:"image-container relative my-s5 aspect-[3/2] w-[25vw] overflow-hidden rounded-3xl md:w-[20vw] xl:w-[15rem]",children:[(0,t.jsx)("video",{ref:f,src:"/rw/about/Rise-Draft.mp4",muted:!0,className:"h-full w-full object-cover"}),(0,t.jsx)("button",{type:"button","aria-label":p?"Pause":"Play",onClick:function(){let e=f.current;e&&(e.paused?(v(e),h(!0)):(e.pause(),h(!1)))},className:"play-pause-btn bg-primary-solid absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md p-s4 backdrop-blur-sm",children:(0,t.jsxs)("span",{className:"relative flex h-s6 w-s6 items-center justify-center",children:[(0,t.jsx)("span",{"data-on":p,className:"abt-icon pause-icon absolute inset-0 flex items-center justify-center",children:(0,t.jsxs)("span",{className:"flex gap-s3",children:[(0,t.jsx)("span",{className:"bg-primary-solid-foreground h-s5 w-s2"}),(0,t.jsx)("span",{className:"bg-primary-solid-foreground h-s5 w-s2"})]})}),(0,t.jsx)("span",{"data-on":!p,className:"abt-icon play-icon absolute inset-0 flex items-center justify-center",children:(0,t.jsx)("span",{className:"border-l-primary-solid-foreground ml-s2 h-0 w-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent"})})]})})]}),(0,t.jsx)("div",{ref:o,children:(0,t.jsx)(n.StarSvg,{className:"h-s8 w-s8 text-tab-solid",strokeWidth:1})})]}),(0,t.jsx)("div",{ref:u,className:"flex flex-1 justify-start overflow-hidden",children:(0,t.jsx)("h2",{className:"font-editorial text-foreground text-[6vw] font-extralight whitespace-nowrap italic text-left md:text-[4vw] xl:text-[3vw]",children:"better care"})})]})})})]})}])}]);