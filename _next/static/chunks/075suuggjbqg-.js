(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58954,e=>{"use strict";var a=e.i(72673),t=e.i(73447);let s=[.9,2.1,3.3,4.5],r=[{key:"Effortless",className:"md:pr-[22vw]",node:"Effortless"},{key:"Compliance.",className:"font-editorial md:pl-[6vw] leading-[1.1] font-extralight italic",node:"Compliance."},{key:"Exceptional",className:"md:pr-[4vw] md:leading-[0.8]",node:"Exceptional"},{key:"Care.",className:"font-editorial md:pl-[10vw] leading-[1.1] font-extralight italic",node:"Care."}];e.s(["BloomHero",0,function(){let e=(0,t.useRef)(null),i=(0,t.useRef)(null),[n,l]=(0,t.useState)(0),[o,c]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!1),h=(0,t.useRef)(!1),u=(0,t.useCallback)(()=>{h.current=!0,document.documentElement.dataset.heroNav="in"},[]);return(0,t.useEffect)(()=>{if("scrollRestoration"in history&&(history.scrollRestoration="manual"),!location.hash){window.scrollTo(0,0);let a=e.current;if(a){let e=()=>{Number.isFinite(a.duration)&&(a.currentTime=0)};e(),a.addEventListener("loadedmetadata",e,{once:!0})}}},[]),(0,t.useEffect)(()=>{let a,t;document.documentElement.dataset.heroJs="1";let i=e.current,n=window.innerWidth<768;if(i&&!i.getAttribute("src")&&(i.src=(n?i.dataset.srcMobile:i.dataset.srcDesktop)??""),!i)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){let e=()=>{Number.isFinite(i.duration)&&(i.currentTime=Math.max(0,i.duration-.05))};Number.isFinite(i.duration)?e():i.addEventListener("loadedmetadata",e,{once:!0}),l(r.length),c(!0);return}let o=()=>p(!0),d=["loadeddata","seeked","timeupdate","canplay"];i.readyState>=2?o():d.forEach(e=>i.addEventListener(e,o));let h=setTimeout(o,2500);a=()=>{i.pause(),Number.isFinite(i.duration)&&(i.currentTime=0)},(t=i.play())&&t.then?t.then(a).catch(()=>{}):a();let m=()=>z();i.addEventListener("error",m);let x=()=>{l(s.filter(e=>i.currentTime>=e).length),c(i.currentTime>=s[s.length-1])};i.addEventListener("timeupdate",x);let v=0,f=null,g=()=>{if(f=null,!Number.isFinite(i.duration))return;let e=v-i.currentTime;.01>Math.abs(e)||(i.seeking||(i.currentTime=i.currentTime+.16*e),f=setTimeout(g,16))},b=()=>{f||g()},w=[],y=!1,j=null,N=null,k=!1,C=!1,S=()=>Number.isFinite(i.duration)?i.duration-.05:0,T=()=>{y=!1,null!==j&&cancelAnimationFrame(j),N&&clearTimeout(N),j=null,N=null,window.removeEventListener("rise:preloader-done",M),i.removeEventListener("loadedmetadata",L),i.removeEventListener("loadedmetadata",z)},z=()=>{let e=S();e>0?(v=e,b()):i.addEventListener("loadedmetadata",z,{once:!0}),r.forEach((e,a)=>{let t=((s[a]??0)-(s[0]??0))*1e3/1.25;w.push(setTimeout(()=>l(e=>Math.max(e,a+1)),t))}),c(!0),T(),u()},E=()=>{i.playbackRate=1.25,i.currentTime=0;let e=()=>z();i.addEventListener("ended",e,{once:!0});let a=i.play();a&&a.catch&&a.catch(()=>{i.removeEventListener("ended",e),R()}),N=setTimeout(()=>{i.currentTime<.3&&z()},3500)},M=()=>{if(y&&!C){if(C=!0,0>=S())return z();if(n){N=setTimeout(E,380);return}R()}},R=()=>{let e=S();if(e<=0)return z();let a=1e3*e/1.25,t=performance.now()+380,s=r=>{if(!y)return;let i=Math.min(Math.max((r-t)/a,0),1);v=i*e,b(),i<1?j=requestAnimationFrame(s):z()};j=requestAnimationFrame(s)},L=()=>{y&&!k&&(k=!0,N&&clearTimeout(N),"playing"===document.documentElement.dataset.preloader?(window.addEventListener("rise:preloader-done",M,{once:!0}),N=setTimeout(M,9e3)):M())};return location.hash?z():(y=!0,i.readyState>=1?N=setTimeout(L,0):(i.addEventListener("loadedmetadata",L,{once:!0}),N=setTimeout(L,3e3))),()=>{i.removeEventListener("timeupdate",x),d.forEach(e=>i.removeEventListener(e,o)),i.removeEventListener("error",m),clearTimeout(h),w.forEach(clearTimeout),f&&clearTimeout(f),T()}},[u]),(0,t.useEffect)(()=>{let e=()=>{scrollY>40||h.current?u():delete document.documentElement.dataset.heroNav};return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[u]),(0,a.jsxs)("section",{ref:i,className:"relative",style:{height:"100svh"},children:[(0,a.jsx)("style",{children:`
        /* Living sky — the footage's own clouds, lifted from the parked
           frame as feathered cutouts (public/v5/clouds-*.webp) and overlaid
           exactly on themselves with identical object-fit geometry. Each
           layer sways a few px around home (ease-in-out alternate) so the
           real clouds breathe; they can't travel (the originals are baked
           into the video — travel would double them). Layers fade in once
           the bloom parks; while it plays, the footage itself is alive.
           Static under reduced motion. */
        @media (prefers-reduced-motion: no-preference) {
          .hv-sky-l { animation: hv-sway-l 20s ease-in-out infinite alternate; }
          .hv-sky-r { animation: hv-sway-r 27s ease-in-out infinite alternate; }
          @keyframes hv-sway-l { to { transform: translate(28px, -14px); } }
          @keyframes hv-sway-r { to { transform: translate(-34px, -16px); } }
          .hv-daybreak { animation: hv-daybreak var(--duration-ambient) var(--ease-out) both; }
          @keyframes hv-daybreak {
            from { filter: brightness(0.68) saturate(0.8); }
            to { filter: brightness(1) saturate(1); }
          }
          .hv-line {
            opacity: 0;
            translate: 0 16px;
            filter: blur(8px);
            transition: opacity var(--duration-scene) var(--ease-settle), translate var(--duration-scene) var(--ease-settle), filter var(--duration-scene) var(--ease-settle);
          }
          .hv-line[data-shown="true"] { opacity: 1; translate: 0 0; filter: blur(0); }
          /* The headline hides itself only while the arrival can still show
             it. html[data-hero-js] is stamped by the arrival effect itself,
             so a page whose script never ran (or threw before the effect)
             still gets its words. It waits RESCUE_DELAY first, and keeps the
             hidden state until then, because hydration on a phone lands a
             beat after first paint: without the wait the lines flash in and
             out before the arrival claims them. The delays are the authored
             beat at INTRO_SPEED, so the rescue reads as the same entrance
             rather than four lines at once. */
          @keyframes hv-line-rescue {
            from { opacity: 0; translate: 0 16px; filter: blur(8px); }
            to { opacity: 1; translate: 0 0; filter: blur(0); }
          }
          html:not([data-hero-js]) .hv-line {
            animation: hv-line-rescue var(--duration-scene) var(--ease-settle) 1.6s both;
          }
          html:not([data-hero-js]) .hv-line:nth-child(2) { animation-delay: 2.4s; }
          html:not([data-hero-js]) .hv-line:nth-child(3) { animation-delay: 3.2s; }
          html:not([data-hero-js]) .hv-line:nth-child(4) { animation-delay: 4s; }
          /* Nav on scroll intent — poster-clean over the parked hero; the
             bar slides down over the top once the user scrolls (>40px,
             html[data-hero-nav] toggled from the scroll listener) and slides
             away again at the very top. body:has(.hero-stage) scopes it to
             pages with the bloom hero; inside the no-preference block so
             reduced motion never hides the nav. */
          body:has(.hero-stage) header[role="banner"] {
            translate: 0 -110%;
            transition: translate var(--duration-slow) var(--ease-settle);
          }
          html[data-hero-nav="in"] body:has(.hero-stage) header[role="banner"] {
            translate: 0 0;
          }
          /* The bar is hidden on the promise that the arrival will bring it
             in. No script, no arrival, so it would never come and the hero
             would have no way into the site. Same wait as the headline: it
             drops in on its own once nothing has claimed the hero. */
          @keyframes hv-nav-rescue {
            from { translate: 0 -110%; }
            to { translate: 0 0; }
          }
          html:not([data-hero-js]) body:has(.hero-stage) header[role="banner"] {
            animation: hv-nav-rescue var(--duration-slow) var(--ease-settle) 4.8s both;
          }
        }
      `}),(0,a.jsxs)("div",{className:"sticky top-0 h-svh overflow-hidden",children:[(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{media:"(min-width: 768px)",srcSet:"/rw/v5/rise-header-poster-2k.jpg"}),(0,a.jsx)("img",{src:"/rw/v5/rise-header-poster-1k.jpg",alt:"",width:2560,height:1442,fetchPriority:"high","aria-hidden":"true",className:"absolute inset-0 h-full w-full object-cover",style:{objectPosition:"50% 42%"}})]}),(0,a.jsx)("video",{ref:e,src:void 0,"data-src-desktop":"/rw/v5/rise-header-scrub-2k.mp4","data-src-mobile":"/rw/v5/rise-header-scrub-720.mp4",poster:"/rw/v5/rise-header-poster-2k.jpg",muted:!0,playsInline:!0,preload:"auto","aria-hidden":"true",className:`hv-daybreak absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${d?"opacity-100":"opacity-0"}`,style:{objectPosition:"50% 42%"}}),(0,a.jsxs)("div",{"aria-hidden":"true",className:`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] ${o?"opacity-100":"opacity-0"}`,children:[(0,a.jsx)("img",{src:"/rw/v5/clouds-l.webp",alt:"",className:"hv-sky-l absolute inset-0 h-full w-full object-cover",style:{objectPosition:"50% 42%"}}),(0,a.jsx)("img",{src:"/rw/v5/clouds-r.webp",alt:"",className:"hv-sky-r absolute inset-0 h-full w-full object-cover",style:{objectPosition:"50% 42%"}})]}),(0,a.jsx)("div",{className:"relative flex h-full items-center justify-center px-6 pt-16",children:(0,a.jsx)("h1",{className:"font-display text-background flex flex-col items-center text-[13vw] leading-[1.05] font-normal md:text-[7vw] md:leading-none",children:r.map((e,t)=>(0,a.jsx)("span",{"data-shown":t<n,className:`hv-line ${e.className}`,children:e.node},e.key))})})]})]})}])},38760,e=>{"use strict";var a=e.i(72673),t=e.i(73447),s=e.i(11023),r=e.i(81442);let i=["Dashboard","Checklist","Packs"];function n({active:e}){return(0,a.jsxs)("div",{className:"bar",children:[(0,a.jsx)("img",{className:"mark",src:(0,s.sitePath)("/rw/benefits/rise-app-mark.png"),alt:""}),(0,a.jsx)("div",{className:"nav",children:i.map(t=>(0,a.jsx)("span",{className:t===e?"is-active":void 0,children:t},t))}),(0,a.jsxs)("div",{className:"menu",children:["Menu",(0,a.jsx)("span",{className:"badge",children:"1"})]})]})}function l({up:e=!1}){return(0,a.jsx)("span",{className:"chev",children:(0,a.jsx)("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",style:e?{transform:"rotate(180deg)"}:void 0,children:(0,a.jsx)("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})})}function o(){let e=(0,t.useRef)(null),[a,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let a=e.current;if(!a)return;let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(s(!0),t.disconnect())},{threshold:.5});return t.observe(a),()=>t.disconnect()},[]),{ref:e,live:a}}let c=`
.scr {
  container-type: inline-size;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--primary-surface);
  color: var(--foreground);
  font-family: var(--font-sans);
  --px: calc(100cqw / 1920);
  --ink: var(--tab-solid);
}
.scr * { box-sizing: border-box; }
.scr .bar {
  position: absolute; inset: 0 0 auto 0; height: calc(92 * var(--px));
  background: var(--primary-surface); z-index: 1;
}
.scr .mark {
  position: absolute; left: calc(36 * var(--px)); top: calc(30 * var(--px));
  width: calc(55 * var(--px)); height: auto;
}
.scr .nav {
  position: absolute; left: calc(791 * var(--px)); top: calc(24 * var(--px));
  width: calc(337 * var(--px)); height: calc(43 * var(--px));
  border-radius: calc(6 * var(--px));
  background: var(--background);
  display: flex; align-items: center; padding-left: calc(40 * var(--px));
  gap: calc(42 * var(--px));
  font-size: calc(14 * var(--px)); line-height: 1;
}
.scr .nav .is-active { font-weight: 600; text-decoration: underline; text-underline-offset: calc(4 * var(--px)); text-decoration-thickness: calc(1 * var(--px)); }
.scr .menu {
  position: absolute; left: calc(1762 * var(--px)); top: calc(24 * var(--px));
  width: calc(122 * var(--px)); height: calc(43 * var(--px));
  border-radius: 9999px; background: var(--info-solid); color: var(--info-solid-foreground);
  font-size: calc(16 * var(--px)); font-weight: 500; line-height: 1;
  display: grid; place-items: center;
}
.scr .badge {
  position: absolute; right: calc(-9 * var(--px)); top: calc(-9 * var(--px));
  width: calc(28 * var(--px)); height: calc(28 * var(--px)); border-radius: 9999px;
  background: var(--destructive); color: var(--destructive-foreground);
  font-size: calc(14 * var(--px)); font-weight: 500; display: grid; place-items: center;
}
.scr .chev {
  position: absolute; left: calc(946 * var(--px)); top: calc(78 * var(--px));
  width: calc(28 * var(--px)); height: calc(28 * var(--px)); border-radius: 9999px;
  background: var(--background); display: grid; place-items: center; z-index: 2;
}
.scr .chev svg { width: calc(14 * var(--px)); height: calc(14 * var(--px)); color: var(--foreground); }
`,d=[{code:"101",name:"Accommodation / tenancy assistance",method:"Verification",on:!1},{code:"102",name:"Assistance to access and maintain employment or higher education",method:"Certification",on:!0},{code:"103",name:"Assistive products for personal care and safety",method:"Verification",on:!0},{code:"104",name:"High intensity daily personal activities",method:"Certification",on:!1,ticks:!0},{code:"105",name:"Personal mobility equipment",method:"Verification",on:!1},{code:"106",name:"Assistance in coordinating or managing life stages, transitions and supports",method:"Certification",on:!1},{code:"107",name:"Assistance with daily personal activities",method:"Certification",on:!1},{code:"108",name:"Assistance with travel/transport arrangements",method:"Verification",on:!1},{code:"109",name:"Vehicle modifications",method:"Verification",on:!1}],p=`
.scr-classes .dim {
  position: absolute; inset: calc(92 * var(--px)) 0 0 0;
  background: color-mix(in srgb, var(--foreground) 45%, var(--primary-surface));
}
.scr-classes .modal {
  position: absolute; left: calc(32 * var(--px)); top: calc(124 * var(--px));
  width: calc(1856 * var(--px)); height: calc(903 * var(--px));
  border-radius: calc(16 * var(--px)); background: var(--tab-soft); overflow: hidden;
}
.scr-classes h3 {
  position: absolute; left: calc(65 * var(--px)); top: calc(68 * var(--px)); margin: 0;
  font-size: calc(35.5 * var(--px)); line-height: 1.2; font-weight: 500; color: var(--ink);
}
.scr-classes .search {
  position: absolute; left: calc(1625 * var(--px)); top: calc(64 * var(--px));
  width: calc(52 * var(--px)); height: calc(52 * var(--px)); border-radius: 9999px;
  background: var(--tab-solid); color: var(--tab-solid-foreground); display: grid; place-items: center;
}
.scr-classes .search svg { width: calc(22 * var(--px)); height: calc(22 * var(--px)); }
.scr-classes .close {
  position: absolute; right: calc(80 * var(--px)); top: calc(64 * var(--px)); height: calc(52 * var(--px)); /* the X sits flush with the table's right edge, not the modal's */
  display: flex; align-items: center; gap: calc(14 * var(--px));
  font-size: calc(16 * var(--px)); font-weight: 500; color: var(--ink); line-height: 1;
}
.scr-classes .close svg { width: calc(11 * var(--px)); height: calc(11 * var(--px)); }
.scr-classes .table {
  position: absolute; left: calc(64 * var(--px)); top: calc(152 * var(--px));
  width: calc(1712 * var(--px)); height: calc(686 * var(--px));
  border-radius: calc(8 * var(--px)); overflow: hidden; background: var(--background);
}
.scr-classes .row {
  display: grid; grid-template-columns: calc(200 * var(--px)) calc(600 * var(--px)) 1fr calc(74 * var(--px));
  padding: calc(24 * var(--px)) calc(26 * var(--px)) calc(23 * var(--px)) calc(33 * var(--px));
  font-size: calc(16 * var(--px)); line-height: calc(20 * var(--px));
  align-items: center;
}
.scr-classes .row.head {
  height: calc(69 * var(--px)); padding-top: 0; padding-bottom: 0;
  font-size: calc(20 * var(--px)); font-weight: 600; color: var(--ink);
  background: color-mix(in srgb, var(--tab-soft) 50%, var(--background));
}
.scr-classes .row:nth-child(odd) { background: color-mix(in srgb, var(--tab-soft) 30%, var(--background)); }
.scr-classes .row > :nth-child(2) { max-width: calc(373 * var(--px)); } /* 106's line one measures 372.5, 102-with-"or" 374.4: only 373 gives both design breaks */
.scr-classes .row .sel { display: grid; place-items: center; }
.scr-classes .radio {
  width: calc(18 * var(--px)); height: calc(18 * var(--px)); border-radius: 9999px;
  border: calc(1.5 * var(--px)) solid var(--foreground); display: grid; place-items: center;
}
.scr-classes .radio i {
  display: block; width: calc(11 * var(--px)); height: calc(11 * var(--px)); border-radius: 9999px;
  background: var(--foreground); transform: scale(0);
}
.scr-classes .radio.on i { transform: none; }
.scr-classes .scrollbar {
  position: absolute; right: calc(36 * var(--px)); top: calc(152 * var(--px));
  width: calc(8 * var(--px)); height: calc(106 * var(--px)); border-radius: 9999px; background: var(--ink);
}
/* The tick: 104 fills once the card is in view. */
.scr-classes .row.ticks { transition: background-color 600ms ease; }
.scr-classes[data-live] .row.ticks .radio i { transform: none; }
@media (prefers-reduced-motion: no-preference) {
  .scr-classes .row.ticks .radio i { transition: transform 420ms cubic-bezier(.2,.9,.3,1.4) 900ms; }
  .scr-classes[data-live] .row.ticks { animation: scr-tick 1600ms ease 700ms both; }
  .scr-classes .radio.on i { transition: none; }
}
@keyframes scr-tick {
  0%, 10% { background-color: inherit; }
  35% { background-color: var(--tab-soft); }
  100% { background-color: inherit; }
}
`,h=`
.scr-policy .band {
  position: absolute; left: 0; top: calc(92 * var(--px)); width: 100%; height: calc(69 * var(--px));
  background: var(--card); /* the frame's #f7f7f7: the neutral card surface off the cream */
  background: color-mix(in srgb, var(--foreground) 3%, var(--background));
  display: flex; align-items: center;
  padding: 0 calc(24 * var(--px));
  font-size: calc(15 * var(--px));
}
.scr-policy .crumb { display: flex; align-items: center; gap: calc(10 * var(--px)); margin-right: calc(40 * var(--px)); white-space: nowrap; }
.scr-policy .crumb .i {
  width: calc(15 * var(--px)); height: calc(15 * var(--px)); border-radius: 9999px;
  border: calc(1 * var(--px)) solid var(--foreground); font-size: calc(10 * var(--px));
  display: grid; place-items: center; font-style: normal;
}
.scr-policy .crumb svg { width: calc(11 * var(--px)); height: calc(11 * var(--px)); }
.scr-policy .chips { margin-left: auto; display: flex; gap: calc(9 * var(--px)); }
.scr-policy .chip {
  height: calc(38 * var(--px)); display: flex; align-items: center;
  padding: 0 calc(15 * var(--px)); border-radius: calc(8 * var(--px));
  background: var(--tab-soft); color: var(--foreground); font-size: calc(14 * var(--px));
}
.scr-policy .chip.on { background: var(--tab-solid); color: var(--tab-solid-foreground); }
.scr-policy .page { position: absolute; inset: calc(161 * var(--px)) 0 0 0; background: color-mix(in srgb, var(--foreground) 3%, var(--background)); }
.scr-policy .gutter {
  position: absolute; top: 0; bottom: 0; width: calc(21 * var(--px)); background: var(--tab-solid);
}
.scr-policy .gutter::before {
  content: ""; position: absolute; left: calc(-17 * var(--px)); top: 0; bottom: 0;
  width: calc(17 * var(--px)); background: var(--tab-soft);
}
.scr-policy .gutter .tab {
  position: absolute; top: calc(30 * var(--px)); left: 0; width: 100%;
  display: grid; place-items: center; height: calc(34 * var(--px));
  font-size: calc(13 * var(--px)); color: var(--tab-solid-foreground);
}
.scr-policy .gutter .tab.off { left: calc(-17 * var(--px)); width: calc(17 * var(--px)); color: var(--ink); }
.scr-policy .panel {
  position: absolute; top: 0; bottom: calc(-7 * var(--px)); background: var(--background);
  border-radius: 0 calc(12 * var(--px)) calc(12 * var(--px)) 0;
  padding: calc(38 * var(--px)) calc(26 * var(--px)) 0 calc(25 * var(--px));
  font-size: calc(13 * var(--px)); line-height: 1.55;
}
.scr-policy .panel .head { display: flex; align-items: baseline; justify-content: space-between; }
.scr-policy .panel h4 { margin: 0; font-size: calc(22 * var(--px)); font-weight: 600; line-height: 1.25; }
.scr-policy .panel .meta { margin-top: calc(8 * var(--px)); font-size: calc(12 * var(--px)); opacity: 0.65; }
.scr-policy .conf { display: flex; align-items: center; gap: calc(18 * var(--px)); font-size: calc(13 * var(--px)); white-space: nowrap; }
.scr-policy .conf .yes { color: var(--success); font-weight: 500; display: flex; align-items: center; gap: calc(6 * var(--px)); }
.scr-policy .conf .yes i {
  width: calc(15 * var(--px)); height: calc(15 * var(--px)); border-radius: 9999px;
  border: calc(1.2 * var(--px)) solid currentColor; font-style: normal; font-size: calc(9 * var(--px));
  display: grid; place-items: center;
}
.scr-policy .conf .no { opacity: 0.55; display: flex; align-items: center; gap: calc(6 * var(--px)); }
.scr-policy .conf .no i {
  width: calc(15 * var(--px)); height: calc(15 * var(--px)); border-radius: 9999px;
  border: calc(1.2 * var(--px)) solid currentColor; font-style: normal;
}
.scr-policy .tools { margin-top: calc(16 * var(--px)); display: flex; align-items: center; gap: calc(10 * var(--px)); }
.scr-policy .btn {
  height: calc(34 * var(--px)); padding: 0 calc(18 * var(--px)); border-radius: 9999px;
  display: flex; align-items: center; font-size: calc(13 * var(--px));
  background: color-mix(in srgb, var(--foreground) 8%, var(--background));
}
.scr-policy .btn.ghost { background: var(--background); border: calc(1 * var(--px)) solid var(--border); }
.scr-policy .pager { margin-left: auto; display: flex; align-items: center; gap: calc(8 * var(--px)); font-size: calc(12.5 * var(--px)); }
.scr-policy .pager .pg { border: calc(1 * var(--px)) solid var(--border); border-radius: calc(7 * var(--px)); padding: calc(5 * var(--px)) calc(9 * var(--px)); }
.scr-policy .doc {
  margin-top: calc(15 * var(--px)); border: calc(1 * var(--px)) solid var(--border);
  border-radius: calc(12 * var(--px)); padding: calc(24 * var(--px)) calc(27 * var(--px));
}
.scr-policy .doc h5 { margin: 0 0 calc(14 * var(--px)); font-size: calc(19 * var(--px)); font-weight: 650; }
.scr-policy .doc h6 { margin: calc(16 * var(--px)) 0 calc(6 * var(--px)); font-size: calc(15 * var(--px)); font-weight: 600; }
.scr-policy .doc p { margin: 0; opacity: 0.9; }
.scr-policy .doc ul { margin: calc(6 * var(--px)) 0 0; padding-left: calc(18 * var(--px)); }
.scr-policy .doc li { margin-top: calc(3 * var(--px)); }
.scr-policy mark { border-radius: calc(2 * var(--px)); padding: 0 calc(2 * var(--px)); color: var(--foreground); }
.scr-policy .form-note { margin-top: calc(14 * var(--px)); padding-left: calc(16 * var(--px)); font-size: calc(14 * var(--px)); }
.scr-policy .form {
  margin-top: calc(12 * var(--px)); border: calc(1 * var(--px)) solid var(--border);
  border-radius: calc(12 * var(--px)); padding: calc(26 * var(--px)) calc(30 * var(--px));
}
.scr-policy .form h5 { margin: 0; font-size: calc(20 * var(--px)); font-weight: 600; }
.scr-policy .form h6 { margin: calc(22 * var(--px)) 0 0; font-size: calc(16 * var(--px)); font-weight: 650; }
.scr-policy .form label { display: block; margin-top: calc(16 * var(--px)); font-size: calc(13 * var(--px)); opacity: 0.85; }
.scr-policy .form .in {
  margin-top: calc(6 * var(--px)); border: calc(1 * var(--px)) solid var(--border);
  border-radius: calc(8 * var(--px)); padding: calc(9 * var(--px)) calc(12 * var(--px));
  font-size: calc(13.5 * var(--px));
}
.scr-policy .save { margin-top: calc(14 * var(--px)); }
.scr-policy .back { font-size: calc(12.5 * var(--px)); white-space: nowrap; }
/* The scan: a read-line sweeps the policy document top to bottom, then the
   conforms chip settles. The copy beside this screen says Rise reads the
   document line by line and scores each clause; this is that, shown. */
.scr-policy .doc { position: relative; overflow: hidden; }
.scr-policy .doc::after {
  content: ""; position: absolute; left: 0; right: 0; top: calc(-64 * var(--px)); height: calc(56 * var(--px));
  background: linear-gradient(to bottom, transparent, color-mix(in srgb, var(--success) 14%, transparent) 62%, color-mix(in srgb, var(--success) 34%, transparent));
  opacity: 0;
}
@media (prefers-reduced-motion: no-preference) {
  .scr-policy[data-live] .doc::after { animation: scr-scan 1500ms cubic-bezier(.45,0,.4,1) 500ms both; }
  .scr-policy[data-live] .conf .yes { animation: scr-conf 900ms ease 2000ms both; }
}
@keyframes scr-scan {
  0% { transform: translateY(0); opacity: 0; }
  8% { opacity: 1; }
  92% { opacity: 1; }
  100% { transform: translateY(calc(880 * var(--px))); opacity: 0; }
}
@keyframes scr-conf {
  0% { opacity: 0.2; }
  55% { opacity: 1; transform: scale(1.12); }
  100% { transform: none; }
}
`,u=["Facilitates participant contribution to organisational governance","Ensures compliance with financial, legislative, regulatory, and contractual obligations","Supports continuous improvement in service delivery and safeguarding","Maintains appropriate skills and knowledge at board level","Ensures strategic planning considers all relevant factors","Monitors management performance","Maintains clear lines of authority and responsibility","Proactively manages conflicts of interest"];function m(){return(0,a.jsxs)("span",{className:"conf",children:[(0,a.jsxs)("span",{className:"yes",children:[(0,a.jsx)("i",{children:"✓"})," Conforms"]}),(0,a.jsxs)("span",{className:"no",children:[(0,a.jsx)("i",{})," Non-Conforming"]})]})}let x=`
.scr-score { background: var(--primary-surface); }
.scr-score .tile {
  position: absolute; top: calc(124 * var(--px)); width: calc(452 * var(--px));
  border-radius: calc(14 * var(--px)); padding: calc(28 * var(--px)) calc(30 * var(--px));
}
.scr-score .tile .plus { position: absolute; right: calc(24 * var(--px)); top: calc(20 * var(--px)); font-size: calc(30 * var(--px)); font-weight: 300; }
.scr-score .tile .n { display: flex; align-items: baseline; gap: calc(14 * var(--px)); }
.scr-score .tile .n b { font-size: calc(58 * var(--px)); line-height: 1; font-weight: 500; }
.scr-score .tile .n span { font-size: calc(20 * var(--px)); letter-spacing: 0.04em; text-transform: uppercase; }
.scr-score .list { margin-top: calc(18 * var(--px)); font-size: calc(14 * var(--px)); line-height: 1.35; }
.scr-score .list .t { font-weight: 600; }
.scr-score .list p { margin: calc(7 * var(--px)) 0 0; display: flex; gap: calc(12 * var(--px)); white-space: nowrap; }
.scr-score .codes { position: absolute; left: calc(30 * var(--px)); right: calc(30 * var(--px)); bottom: calc(24 * var(--px)); display: grid; gap: calc(10 * var(--px)); }
.scr-score .codes p { margin: 0; display: flex; align-items: center; gap: calc(14 * var(--px)); font-size: calc(13 * var(--px)); letter-spacing: 0.04em; text-transform: uppercase; }
.scr-score .codes .pill {
  border: calc(1.3 * var(--px)) solid currentColor; border-radius: 9999px;
  padding: calc(3 * var(--px)) calc(13 * var(--px)); font-size: calc(14 * var(--px));
  letter-spacing: 0; font-variant-numeric: tabular-nums;
}
.scr-score .pct { display: flex; align-items: baseline; }
.scr-score .pct b { font-size: calc(72 * var(--px)); line-height: 1; font-weight: 600; font-variant-numeric: tabular-nums; }
.scr-score .pct span { font-size: calc(28 * var(--px)); font-weight: 600; }
.scr-score .howto {
  position: absolute; right: calc(24 * var(--px)); top: calc(30 * var(--px));
  border: calc(1.3 * var(--px)) solid currentColor; border-radius: 9999px;
  padding: calc(6 * var(--px)) calc(14 * var(--px));
  font-size: calc(12.5 * var(--px)); letter-spacing: 0.05em; text-transform: uppercase;
  display: flex; align-items: center; gap: calc(8 * var(--px));
}
.scr-score .progress-label {
  position: absolute; left: calc(30 * var(--px)); right: calc(30 * var(--px)); bottom: calc(22 * var(--px));
  display: flex; justify-content: space-between; align-items: center;
  font-size: calc(20 * var(--px)); font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase;
}
.scr-score .modify {
  position: absolute; left: calc(30.5 * var(--px)); top: calc(380 * var(--px));
  width: calc(452 * var(--px)); height: calc(68 * var(--px));
  border-radius: calc(12 * var(--px)); background: var(--tab-soft); color: var(--ink);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 calc(16 * var(--px)) 0 calc(30 * var(--px));
  font-size: calc(17 * var(--px)); font-weight: 600;
}
.scr-score .modify .go {
  width: calc(44 * var(--px)); height: calc(44 * var(--px)); border-radius: 9999px;
  background: var(--tab-solid); color: var(--tab-solid-foreground); display: grid; place-items: center;
}
.scr-score .modify .go svg { width: calc(16 * var(--px)); height: calc(16 * var(--px)); }
.scr-score .barrow {
  position: absolute; left: calc(1436.5 * var(--px)); top: calc(432 * var(--px));
  width: calc(452.5 * var(--px)); height: calc(18 * var(--px)); border-radius: 9999px;
  background: var(--destructive-subtle); overflow: hidden;
}
.scr-score .barrow i {
  position: absolute; inset: 0 auto 0 0; width: 25%; border-radius: 9999px; background: var(--destructive);
}
.scr-score .photo {
  position: absolute; left: calc(32 * var(--px)); top: calc(482 * var(--px));
  width: calc(1856 * var(--px)); border-radius: calc(24 * var(--px)); overflow: hidden;
}
.scr-score .photo img { display: block; width: 100%; height: auto; }
/* The fill: the score bar draws to 25% and the number counts to 14 as the
   card enters. Reduced motion shows the settled state. */
@media (prefers-reduced-motion: no-preference) {
  .scr-score .barrow i { width: 0; }
  .scr-score[data-live] .barrow i { width: 25%; transition: width 1200ms cubic-bezier(.25,.8,.3,1) 600ms; }
}
`,v=(e,a)=>({background:`var(--${e})`,color:`var(--${a})`}),f=[{number:"1",kicker:"Unregistered SIL? Apply by 1 October.",tone:"text-info-deep",title:"Know your audit",description:"Tick your classes. Rise looks them up in the s 20(3) table, resolves Verification or Certification, and builds the exact evidence list your auditor works from.",screen:function(){let{ref:e,live:t}=o();return(0,a.jsxs)("div",{ref:e,className:"scr scr-classes","data-live":t?"":void 0,"aria-hidden":!0,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:c+p}}),(0,a.jsx)(n,{active:"Dashboard"}),(0,a.jsx)(l,{}),(0,a.jsx)("div",{className:"dim"}),(0,a.jsxs)("div",{className:"modal",children:[(0,a.jsx)("h3",{children:"Your Selected Classes"}),(0,a.jsx)("span",{className:"search",children:(0,a.jsxs)("svg",{viewBox:"0 0 22 22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[(0,a.jsx)("circle",{cx:"9.5",cy:"9.5",r:"6.5"}),(0,a.jsx)("path",{d:"m14.5 14.5 4.5 4.5"})]})}),(0,a.jsxs)("span",{className:"close",children:["Close",(0,a.jsx)("svg",{viewBox:"0 0 11 11",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:(0,a.jsx)("path",{d:"M1 1l9 9M10 1l-9 9"})})]}),(0,a.jsxs)("div",{className:"table",children:[(0,a.jsxs)("div",{className:"row head",children:[(0,a.jsx)("span",{children:"Item Number"}),(0,a.jsx)("span",{children:"Class of Support"}),(0,a.jsx)("span",{children:"Assessment Method"}),(0,a.jsx)("span",{className:"sel",children:"Selected"})]}),d.map(e=>(0,a.jsxs)("div",{className:`row${"ticks"in e&&e.ticks?" ticks":""}`,children:[(0,a.jsx)("span",{children:e.code}),(0,a.jsx)("span",{children:e.name}),(0,a.jsx)("span",{children:e.method}),(0,a.jsx)("span",{className:"sel",children:(0,a.jsx)("span",{className:`radio${e.on?" on":""}`,children:(0,a.jsx)("i",{})})})]},e.code))]}),(0,a.jsx)("span",{className:"scrollbar"})]})]})},cta:!0,panel:"bg-primary-soft text-tab-solid",art:"/rw/art/scene-1.webp",frame:"Registration · class selection"},{number:"2",kicker:"Full-service consultants charge $2,500 to $7,000 for",tone:"text-error-deep",title:"Have what they ask for",description:"Your policies, procedures and forms are generated for your classes, then read line by line. Every clause is scored against the Practice Standard it serves and marked Conforms or Non-Conforming, right in the document.",screen:function(){let{ref:e,live:t}=o();return(0,a.jsxs)("div",{ref:e,className:"scr scr-policy","data-live":t?"":void 0,"aria-hidden":!0,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:c+h}}),(0,a.jsx)(n,{active:"Packs"}),(0,a.jsx)(l,{}),(0,a.jsxs)("div",{className:"band",children:[(0,a.jsxs)("span",{className:"crumb",children:["1. NDIS Certification Pack ",(0,a.jsx)("i",{className:"i",children:"i"}),(0,a.jsx)("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),(0,a.jsxs)("span",{className:"crumb",children:["1.1 Person-Centred Supports ",(0,a.jsx)("i",{className:"i",children:"i"}),(0,a.jsx)("svg",{viewBox:"0 0 12 12",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M2.5 4.5 6 8l3.5-3.5"})})]}),(0,a.jsx)("span",{className:"chips",children:["1. Legislation","2. Policy","3. Procedure","4. Forms","5. Registers"].map(e=>(0,a.jsx)("span",{className:`chip${e.startsWith("2")||e.startsWith("4")?" on":""}`,children:e},e))})]}),(0,a.jsxs)("div",{className:"page",children:[(0,a.jsxs)("div",{className:"gutter",style:{left:"calc(52 * var(--px))"},children:[(0,a.jsx)("span",{className:"tab off",children:"1"}),(0,a.jsx)("span",{className:"tab",children:"2"})]}),(0,a.jsxs)("div",{className:"panel",style:{left:"calc(73 * var(--px))",width:"calc(873.5 * var(--px))"},children:[(0,a.jsxs)("div",{className:"head",children:[(0,a.jsx)("h4",{children:"Policy — Person Centred Supports"}),(0,a.jsx)(m,{})]}),(0,a.jsx)("p",{className:"meta",children:"POL-SEC-001 v2.0 (2026-02-11)"}),(0,a.jsxs)("div",{className:"tools",children:[(0,a.jsx)("span",{className:"btn",children:"Edit"}),(0,a.jsx)("span",{className:"btn ghost",children:"Save"}),(0,a.jsxs)("span",{className:"pager",children:[(0,a.jsx)("span",{className:"pg",children:"01 ⌄"})," of 8 pages ",(0,a.jsx)("span",{className:"pg",children:"‹"})," ",(0,a.jsx)("span",{className:"pg",children:"›"})]})]}),(0,a.jsxs)("div",{className:"doc",children:[(0,a.jsx)("h5",{children:"Person Centred Supports Policy"}),(0,a.jsx)("h6",{children:"Purpose"}),(0,a.jsxs)("p",{children:["This policy outlines the governance framework for ",(0,a.jsx)("mark",{className:"bg-destructive-soft",children:"Northline Care"})," to ensure the organisation meets its obligations under the NDIS Practice Standards and other relevant legislation while promoting participant involvement in governance processes."]}),(0,a.jsx)("h6",{children:"Scope"}),(0,a.jsxs)("p",{children:["This policy is for review by the Board of Directors (governing body), senior management, staff, volunteers, and participants of Northline Care on ",(0,a.jsx)("mark",{className:"bg-primary-soft",children:"12/01/26"}),". The Client direct contact is ",(0,a.jsx)("mark",{className:"bg-destructive-soft",children:"Dee Ashby"}),"."]}),(0,a.jsx)("h6",{children:"Policy Statement"}),(0,a.jsx)("p",{children:"Northline Care is committed to maintaining a robust governance structure that:"}),(0,a.jsx)("ul",{children:u.map(e=>(0,a.jsx)("li",{children:e},e))})]})]}),(0,a.jsxs)("div",{className:"gutter",style:{left:"calc(967.5 * var(--px))"},children:[(0,a.jsx)("span",{className:"tab off",children:"3"}),(0,a.jsx)("span",{className:"tab",children:"4"})]}),(0,a.jsxs)("div",{className:"panel",style:{left:"calc(988.5 * var(--px))",width:"calc(874 * var(--px))"},children:[(0,a.jsxs)("div",{className:"head",children:[(0,a.jsx)("h4",{children:"Form — Person Centred Supports"}),(0,a.jsxs)("span",{style:{display:"grid",gap:"calc(8 * var(--px))",justifyItems:"end"},children:[(0,a.jsx)(m,{}),(0,a.jsx)("span",{className:"back",children:"‹ Back To Policies"})]})]}),(0,a.jsx)("p",{className:"meta",children:"FOR-SEC-001 v2.0 (2026-02-11)"}),(0,a.jsx)("p",{className:"form-note",children:"Complete the form below"}),(0,a.jsxs)("div",{className:"form",children:[(0,a.jsx)("h5",{children:"Person Centred Supports"}),(0,a.jsx)("h6",{children:"Organisation and Review Details"}),[["Organisation Name","Northline Care"],["Date of Review","12 / 01 / 26"],["Review Conducted By","Dee Ashby"],["Position / Title","Director"]].map(([e,t])=>(0,a.jsxs)("span",{children:[(0,a.jsx)("label",{children:e}),(0,a.jsx)("div",{className:"in",children:t})]},e))]}),(0,a.jsx)("span",{className:"btn save",style:{display:"inline-flex"},children:"Save"})]}),(0,a.jsx)("div",{className:"gutter",style:{left:"calc(1883 * var(--px))"},children:(0,a.jsx)("span",{className:"tab off",children:"5"})})]})]})},panel:"bg-primary-soft text-tab-solid",art:"/rw/art/scene-2.webp",frame:"Policies & procedures"},{number:"3",kicker:"You find out before the audit, not during.",tone:"text-success-deep",title:"Walk in ready",description:"The score is not a feeling. Every unmet clause subtracts from it, and every gap names the document and the line that closes it.",screen:function(){let{ref:e,live:r}=o(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=i.current;if(!r||!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let a=0,t=performance.now()+600,s=r=>{let i=Math.min(Math.max((r-t)/1200,0),1);e.textContent=String(Math.round(14*(1-Math.pow(1-i,3)))),i<1&&(a=requestAnimationFrame(s))};return e.textContent="0",a=requestAnimationFrame(s),()=>cancelAnimationFrame(a)},[r]),(0,a.jsxs)("div",{ref:e,className:"scr scr-score","data-live":r?"":void 0,"aria-hidden":!0,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:c+x}}),(0,a.jsx)(n,{active:"Dashboard"}),(0,a.jsx)(l,{up:!0}),(0,a.jsxs)("div",{className:"tile",style:{...v("info-subtle","info-deep"),left:"calc(30.5 * var(--px))",height:"calc(220.5 * var(--px))"},children:[(0,a.jsx)("span",{className:"plus",children:"+"}),(0,a.jsxs)("span",{className:"n",children:[(0,a.jsx)("b",{children:"5"}),(0,a.jsx)("span",{children:"Classes selected"})]}),(0,a.jsxs)("div",{className:"list",children:[(0,a.jsx)("span",{className:"t",children:"Your Packages"}),["NDIS Certification Pack","NDIS Module 1: High Intensity","NDIS Module 2: Behaviour Support","NDIS Module 2A: Implementing Behaviour Support"].map(e=>(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{children:"+"})," ",e]},e))]})]}),(0,a.jsxs)("div",{className:"tile",style:{...v("success-soft","success-deep"),left:"calc(499.5 * var(--px))",height:"calc(321 * var(--px))"},children:[(0,a.jsx)("span",{className:"plus",children:"+"}),(0,a.jsxs)("span",{className:"n",children:[(0,a.jsx)("b",{children:"1"}),(0,a.jsx)("span",{children:"Verification class"})]}),(0,a.jsx)("div",{className:"codes",children:(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"pill",children:"101"})," Accommodation/tenancy assistance"]})})]}),(0,a.jsxs)("div",{className:"tile",style:{...v("warning-surface","warning-700"),left:"calc(968.5 * var(--px))",height:"calc(321 * var(--px))"},children:[(0,a.jsx)("span",{className:"plus",children:"+"}),(0,a.jsxs)("span",{className:"n",children:[(0,a.jsx)("b",{children:"2"}),(0,a.jsx)("span",{children:"Certification classes"})]}),(0,a.jsxs)("div",{className:"codes",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"pill",children:"104"})," High intensity daily personal activities"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"pill",children:"110"})," Specialist positive behaviour support"]})]})]}),(0,a.jsxs)("div",{className:"tile",style:{...v("destructive-subtle","destructive"),left:"calc(1436.5 * var(--px))",height:"calc(260.5 * var(--px))"},children:[(0,a.jsxs)("span",{className:"pct",children:[(0,a.jsx)("b",{ref:i,children:"14"}),(0,a.jsx)("span",{children:"%"})]}),(0,a.jsxs)("span",{className:"howto",children:["How to improve progress",(0,a.jsxs)("svg",{viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.2",width:"14",height:"14",style:{width:"calc(14 * var(--px))",height:"calc(14 * var(--px))"},children:[(0,a.jsx)("circle",{cx:"7",cy:"7",r:"6"}),(0,a.jsx)("path",{d:"M7 6.5V10M7 4.2v.2",strokeLinecap:"round"})]})]}),(0,a.jsxs)("span",{className:"progress-label",children:["Your audit progress ",(0,a.jsx)("span",{style:{fontSize:"calc(26 * var(--px))",fontWeight:300},children:"+"})]})]}),(0,a.jsxs)("div",{className:"modify",children:["Modify Your Class Selection",(0,a.jsx)("span",{className:"go",children:(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M3.5 12.5 12.5 3.5M5.5 3.5h7v7"})})})]}),(0,a.jsx)("div",{className:"barrow",children:(0,a.jsx)("i",{})}),(0,a.jsx)("div",{className:"photo",children:(0,a.jsx)("img",{src:(0,s.sitePath)("/rw/benefits/audit-blog.webp"),alt:""})})]})},panel:"bg-primary-soft text-tab-solid",art:"/rw/art/scene-3.webp",frame:"Audit readiness"},{number:"4",kicker:"The rules keep moving",tone:"text-tab-solid",title:"Stay passed",description:"Legislation, standards, policies, forms and registers live in one graph, 224 requirements and documents, 528 connections. When a rule changes, everything downstream lights up, and your documents follow.",still:null,demo:!0,panel:"bg-primary-soft text-tab-solid",art:"/rw/art/scene-4.webp",frame:"The compliance engine · live graph"}];function g({className:e=""}){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:`text-warning-solid ${e}`,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z",fill:"currentColor"})})}e.s(["BenefitsSection",0,function(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current;if(!a)return;let t=new IntersectionObserver(e=>{for(let a of e)a.isIntersecting&&(a.target.setAttribute("data-shown","true"),t.unobserve(a.target))},{rootMargin:"-10% 0px -10% 0px"});return a.querySelectorAll("[data-reveal]").forEach(e=>t.observe(e)),a.querySelectorAll(".bn-item").forEach(e=>t.observe(e)),()=>t.disconnect()},[]),(0,a.jsxs)("section",{ref:e,className:"w-full px-5 py-s9 md:px-7 lg:px-8",children:[(0,a.jsx)("style",{children:""}),(0,a.jsx)("style",{children:`
        @media (prefers-reduced-motion: no-preference) {
          /* line-mask reveal — the original's .line-animate */
          .bn-line > span {
            display: block;
            translate: 0 100%;
            transition: translate var(--duration-reveal) var(--ease-wipe);
          }
          [data-shown="true"] .bn-line > span { translate: 0 0; }
          /* the original's star: scales and rotates in */
          .bn-star {
            scale: 0;
            rotate: -180deg;
            transition: scale var(--duration-slow) var(--ease-overshoot), rotate var(--duration-reveal) var(--ease-settle);
          }
          [data-shown="true"] .bn-star { scale: 1; rotate: 0deg; }
          /* Tiles lift in on a stagger. Subtle on purpose: the row is an
             index, not the main event. */
          /* The numeral slides a touch further than its tile, so it settles a
             beat later. Cheap, and it stops the row reading as four static
             cards. */
          /* The original's list: text-black/10 until its turn. */
          .bn-item { opacity: 0.22; transition: opacity var(--duration-reveal) var(--ease-settle); }
          [data-shown="true"] .bn-item, .bn-item[data-shown="true"] { opacity: 1; }
          .bn-engine { opacity: 0; translate: 0 22px; transition: opacity var(--duration-scene) var(--ease-settle), translate var(--duration-scene) var(--ease-settle); }
          .bn-engine[data-shown="true"] { opacity: 1; translate: 0 0; }
          /* 13 Sep 2026 (Jesse: "the animation for screens is hopeless", "the
             suck animation on the feature panes"). These panes used to unwrap
             with a 1100ms clip-path curtain. On a panel this size that is a
             slow reveal you can out-scroll, so you catch it half drawn, and a
             product screen drawing itself in reads as a trick rather than as
             software. The engine card next to them, the one that works, simply
             rises and fades. Same reveal here now, at the documented 700ms
             scroll-reveal rung instead of the 1100ms scene rung. */
          .bn-card { opacity: 0; translate: 0 22px; transition: opacity var(--duration-reveal) var(--ease-settle), translate var(--duration-reveal) var(--ease-settle); }
          .bn-card[data-shown="true"] { opacity: 1; translate: 0 0; }
        }
      `}),(0,a.jsx)("div",{className:"grid gap-s4",children:(0,a.jsxs)("div",{className:"bg-primary-soft text-tab-solid flex flex-col justify-between gap-s7 rounded-3xl p-s8 lg:flex-row lg:items-end lg:p-s9",children:[(0,a.jsxs)("h2",{"data-reveal":!0,className:"font-display text-[clamp(30px,8vw,72px)] leading-[1.04] font-normal md:leading-[0.95]",children:[(0,a.jsx)("span",{className:"bn-line block overflow-hidden",children:(0,a.jsx)("span",{children:"Nobody passes"})}),(0,a.jsx)("span",{className:"bn-line font-editorial block overflow-hidden font-extralight italic",children:(0,a.jsx)("span",{children:"by accident."})})]}),(0,a.jsxs)("div",{className:"max-w-md",children:[(0,a.jsx)("p",{className:"text-lg leading-relaxed opacity-70",children:"The auditor can’t get you through. They assess; helping you isn’t their job. Being ready is yours, and Rise carries it."}),(0,a.jsx)("p",{className:"font-display mt-s5 text-xl",children:"Rise is the one on your side. Know it. Have it. Pass it. Stay passed."})]})]})}),(0,a.jsx)("div",{className:"mt-s8 flex flex-col gap-s6",children:f.map((e,t)=>{let i=t%2==1;return(0,a.jsxs)("article",{"data-reveal":!0,className:`bn-card ${e.panel} relative isolate grid items-center gap-s7 overflow-hidden rounded-3xl p-s7 md:gap-s8 md:p-s8 ${i?"md:grid-cols-[1fr_minmax(0,26rem)] md:[&>div]:order-2 md:[&>figure]:order-1":"md:grid-cols-[minmax(0,26rem)_1fr]"}`,children:[(0,a.jsx)("img",{src:e.art,alt:"","aria-hidden":!0,className:`pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60 ${i?"scale-x-[-1]":""}`}),(0,a.jsx)("div",{"aria-hidden":!0,className:`from-primary-soft via-primary-soft/70 pointer-events-none absolute inset-0 -z-10 to-transparent ${i?"bg-gradient-to-l":"bg-gradient-to-r"}`}),(0,a.jsxs)("div",{className:"max-w-xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-s4",children:[(0,a.jsx)("span",{className:"font-display text-[clamp(30px,3vw,46px)] leading-none font-normal opacity-45",children:e.number}),(0,a.jsx)(g,{className:"bn-star h-4 w-4 shrink-0"})]}),(0,a.jsx)("p",{className:`${e.tone} mt-s5 text-xs font-semibold tracking-[0.12em] uppercase`,children:e.kicker}),(0,a.jsx)("h3",{className:"font-display mt-s3 text-[clamp(30px,3.4vw,52px)] leading-[1.05] font-normal text-balance",children:e.title}),(0,a.jsx)("p",{className:"mt-s5 max-w-md text-lg leading-relaxed opacity-80",children:e.description}),"cta"in e&&e.cta?(0,a.jsx)("p",{className:"mt-s5",children:(0,a.jsx)("a",{href:(0,s.sitePath)("/registration"),className:"bg-tab-solid text-tab-solid-foreground inline-block rounded-full px-s6 py-s3 text-sm font-semibold",children:"See your pathway free"})}):null]}),(0,a.jsx)("figure",{className:"m-0 flex min-h-[20rem] w-full items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-background w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-24px_rgba(30,31,33,0.4)]",children:[(0,a.jsxs)("div",{className:"border-border/60 flex items-center gap-s2 border-b px-s5 py-s4",children:[(0,a.jsx)("span",{className:"bg-foreground/15 size-2.5 rounded-full"}),(0,a.jsx)("span",{className:"bg-foreground/15 size-2.5 rounded-full"}),(0,a.jsx)("span",{className:"bg-foreground/15 size-2.5 rounded-full"}),(0,a.jsx)("span",{className:"text-muted-foreground ml-s4 text-xs",children:e.frame}),"demo"in e&&e.demo?(0,a.jsx)("a",{href:(0,s.sitePath)("/compliance-graph"),className:"text-tab-solid ml-auto text-xs underline underline-offset-4",children:"Open the engine"}):null]}),(0,a.jsxs)("div",{className:"overflow-hidden",children:["demo"in e&&e.demo?(0,a.jsx)(r.ComplianceConstellation,{variant:"card"}):null,"screen"in e&&e.screen?(0,a.jsx)(e.screen,{}):null]})]})})]},e.number)})})]})}],38760)},63450,e=>{"use strict";var a=e.i(72673),t=e.i(73447),s=e.i(48336),r=e.i(62627);let i=[{who:"For auditors",img:"/rw/os/auditor.webp",alt:"An auditor holding his reading glasses",pos:"50% 8%",panel:"bg-primary-soft text-tab-solid",headline:"Applicants who arrive ready.",body:"Auditors don’t need more applicants. Evidence lands organised against the clauses, so certification takes 10 hours, not 40."},{who:"For providers",img:"/rw/os/provider.webp",alt:"A care worker, hands on a wheelchair’s handles",pos:"50% 4%",panel:"bg-destructive-subtle text-error-deep",headline:"The law, read for you, in plain English.",body:"Most providers have never been registered and can’t read the instruments they’ll be tested against. Rise maps every obligation to the services they actually deliver."},{who:"For participants",img:"/rw/os/participant.webp",alt:"A young man seated in a wheelchair, looking ahead",pos:"50% 4%",panel:"bg-info-subtle text-info-deep",headline:"Care you can hold providers to.",body:"Compliance isn’t paperwork for its own sake. It’s the promise behind the support, and when providers stay audit-ready, participants get care that holds up."}];e.s(["OsSection",0,function(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current;if(!a)return;let t=()=>{let e=a.querySelectorAll("[data-os-reveal]:not([data-shown])");for(let a of e)a.getBoundingClientRect().top<.9*window.innerHeight&&a.setAttribute("data-shown","true");0===e.length&&window.removeEventListener("scroll",t)};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),(0,a.jsxs)("section",{ref:e,className:"w-full px-5 py-s9 md:px-7 lg:px-8",children:[(0,a.jsx)("style",{children:`
        @media (prefers-reduced-motion: no-preference) {
          /* The wipe lives on the card, the watching on its slot (27 Sep
             2026). A clipped element has no visible area, and an element
             with no visible area never intersects: the observer that was
             supposed to reveal these cards could not see them, so on a
             phone all three seats stayed at opacity 0 and the homepage
             carried 2,265px of blank cream where they should be. Desktop
             got away with it. The slot is never clipped, so it is always
             visible to the observer, and it carries the stagger. */
          .os-card {
            clip-path: inset(0 0 100% 0);
            opacity: 0;
            transition:
              clip-path var(--duration-scene) var(--ease-wipe),
              opacity var(--duration-reveal) var(--ease-settle);
          }
          .os-slot[data-shown="true"] .os-card { clip-path: inset(0 0 0 0); opacity: 1; }
          .os-slot:nth-child(2) .os-card { transition-delay: 0.12s; }
          .os-slot:nth-child(3) .os-card { transition-delay: 0.24s; }
          .os-strip { opacity: 0; translate: 0 24px; transition: opacity var(--duration-scene) var(--ease-settle), translate var(--duration-scene) var(--ease-settle); }
          .os-strip[data-shown="true"] { opacity: 1; translate: 0 0; }
          /* The stat bento, on the same rungs as the benefits header it
             mirrors: the compliance line rises out of its mask a line at a
             time, then the three figures lift in on a stagger. */
          .os-line > span { display: block; translate: 0 100%; transition: translate var(--duration-reveal) var(--ease-wipe); }
          .os-head[data-shown="true"] .os-line > span { translate: 0 0; }
          .os-head[data-shown="true"] .os-line:nth-child(2) > span { transition-delay: 0.08s; }
          .os-head[data-shown="true"] .os-line:nth-child(3) > span { transition-delay: 0.16s; }
          .os-stat { opacity: 0; translate: 0 14px; transition: opacity var(--duration-reveal) var(--ease-settle), translate var(--duration-reveal) var(--ease-settle); }
          .os-stat[data-shown="true"] { opacity: 1; translate: 0 0; }
        }
      `}),(0,a.jsxs)("div",{className:"grid items-stretch gap-s6 lg:grid-cols-[1.7fr_1fr]",children:[(0,a.jsxs)("div",{className:"bg-primary-soft text-tab-solid flex min-h-[24rem] flex-col justify-between rounded-3xl p-s8 lg:p-s9",children:[(0,a.jsxs)("h2",{className:"font-display text-[clamp(40px,5.2vw,76px)] leading-[1.02] font-normal text-balance",children:["The whole law, ",(0,a.jsx)("em",{className:"font-editorial font-extralight italic",children:"mapped once"}),"."]}),(0,a.jsx)("p",{className:"mt-s7 max-w-lg text-xl leading-relaxed opacity-70",children:"One source of truth. Built against the clause, assessed against the clause."}),(0,a.jsx)("dl",{className:"mt-s7 flex flex-wrap gap-x-s8 gap-y-s5",children:[{v:"10",u:"hours to certify",k:"was 40"},{v:"30",u:"hours back",k:"every audit"},{v:"75%",u:"fewer audit hours",k:"start to certification"}].map(e=>(0,a.jsxs)("div",{className:"border-tab-solid/25 border-l pl-s5 first:border-l-0 first:pl-0",children:[(0,a.jsxs)("dt",{className:"font-display flex items-baseline gap-s3 leading-none",children:[(0,a.jsx)("span",{className:"text-[clamp(30px,2.8vw,44px)]",children:e.v}),(0,a.jsx)("span",{className:"text-sm opacity-70",children:e.u})]}),(0,a.jsx)("dd",{className:"mt-s2 text-sm opacity-60",children:e.k})]},e.u))})]}),(0,a.jsx)(s.BookingPanel,{})]}),(0,a.jsx)("div",{className:"mt-s8 grid gap-s6 md:grid-cols-2 lg:grid-cols-3",children:i.map(e=>(0,a.jsx)("div",{"data-os-reveal":!0,className:"os-slot flex",children:(0,a.jsxs)("article",{className:"os-card flex flex-1 flex-col overflow-hidden rounded-3xl",children:[(0,a.jsx)("img",{src:e.img,alt:e.alt,style:{objectPosition:e.pos},className:"aspect-[4/5] w-full shrink-0 object-cover"}),(0,a.jsxs)("div",{className:`${e.panel} flex flex-1 flex-col justify-between p-s7`,children:[(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsx)("p",{className:"bg-background/70 rounded-full px-s4 py-s2 text-sm font-semibold tracking-wide uppercase",children:e.who}),(0,a.jsx)("span",{"aria-hidden":!0,className:"text-lg leading-none",children:"✦"})]}),(0,a.jsx)("h3",{className:"font-display mt-s6 max-w-md text-[clamp(24px,2.2vw,32px)] leading-[1.15] font-normal text-balance",children:e.headline}),(0,a.jsxs)("div",{className:"mt-s6 flex items-end justify-between gap-s5",children:[(0,a.jsx)("p",{className:"max-w-md text-sm leading-relaxed opacity-90",children:e.body}),(0,a.jsx)("span",{"aria-hidden":!0,className:"shrink-0 text-2xl leading-none",children:"→"})]})]})]})},e.who))}),(0,a.jsx)("div",{"data-os-reveal":!0,className:"os-strip mt-s8",children:(0,a.jsx)(r.SectorSwitch,{})})]})}])},73203,e=>{"use strict";var a=e.i(72673);e.s(["RiseWordmark",0,function({className:e}){return(0,a.jsxs)("svg",{viewBox:"0 0 488 203",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Rise",className:e,children:[(0,a.jsx)("path",{d:"M25.6385 123.509V198.858H0V123.509H25.6385ZM0 104.348V38.3217H25.6385V104.348H0ZM25.6385 123.509V104.348H65.6994C80.4772 104.348 90.9817 101.587 97.213 96.0627C103.623 90.3668 106.828 82.0808 106.828 71.2058C106.828 60.5034 103.623 52.3903 97.213 46.8664C90.9817 41.17 80.4772 38.3217 65.6994 38.3217H25.6385V17.6074H73.1773C93.296 17.6074 108.43 22.527 118.579 32.3664C128.906 42.2057 134.069 54.8933 134.069 70.429C134.069 82.8576 130.775 93.6461 124.187 102.796C117.6 111.772 107.718 117.9 94.5426 121.179L144.752 198.858H116.442L67.8356 123.509H25.6385Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M220.356 32.1073C210.208 32.1073 203.264 25.634 203.264 16.0536C203.264 6.21431 210.208 0 220.356 0C230.505 0 237.449 6.21431 237.449 16.0536C237.449 25.634 230.505 32.1073 220.356 32.1073ZM163.204 162.09L186.172 99.4289C189.377 90.8843 193.116 80.2682 193.116 76.6431C193.116 73.2771 191.78 72.2414 189.644 72.2414C181.632 72.2414 169.881 85.9649 159.732 102.277H153.322C165.607 79.2324 185.638 58.5181 205.134 58.5181C214.748 58.5181 219.289 65.2503 219.289 72.7592C219.289 79.4914 215.817 88.554 211.544 99.9466L188.308 162.867C186.172 168.563 182.699 177.626 182.699 181.251C182.699 185.135 183.768 187.206 187.507 187.206C197.389 187.206 209.406 170.894 218.22 151.992H224.362C214.748 175.037 197.389 201.188 175.489 201.188C161.334 201.188 156.527 193.938 156.527 184.616C156.527 178.661 159.465 172.447 163.204 162.09Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M255.737 158.723C255.737 165.283 258.942 171.066 265.351 176.071C271.761 181.078 279.951 183.581 289.922 183.581C298.468 183.581 305.589 181.854 311.287 178.401C317.162 174.95 320.101 170.375 320.101 164.679C320.101 161.917 319.299 159.413 317.697 157.169C316.273 154.753 314.581 152.768 312.623 151.215C310.842 149.661 307.994 148.107 304.076 146.553C300.159 144.827 296.866 143.533 294.194 142.669C291.524 141.806 287.607 140.598 282.444 139.045C274.966 136.801 269.001 134.902 264.55 133.348C260.277 131.622 255.47 129.291 250.128 126.357C244.787 123.25 240.781 119.625 238.11 115.482C235.618 111.167 234.371 106.247 234.371 100.723C234.371 89.8475 239.178 80.3538 248.793 72.2407C258.408 64.1275 271.138 60.071 286.984 60.071C301.939 60.071 314.225 63.5234 323.84 70.4282C333.632 77.333 339.596 86.827 341.733 98.9106H315.828C315.65 94.5952 313.068 90.366 308.083 86.2231C303.097 82.08 296.331 80.0085 287.785 80.0085C279.951 80.0085 273.452 81.6484 268.289 84.9281C263.304 88.2082 260.811 92.6963 260.811 98.393C260.811 101.845 262.503 104.952 265.886 107.714C269.446 110.303 273.185 112.288 277.102 113.67C281.198 115.05 286.984 116.776 294.462 118.848C300.872 120.574 305.857 122.042 309.417 123.25C312.979 124.286 317.43 126.098 322.771 128.687C328.29 131.104 332.474 133.607 335.324 136.196C338.35 138.613 340.932 141.893 343.069 146.036C345.383 150.178 346.541 154.753 346.541 159.759C346.541 172.878 341.466 183.408 331.318 191.348C321.169 199.116 307.192 203 289.388 203C272.651 203 259.12 199.289 248.793 191.866C238.644 184.443 232.324 173.396 229.832 158.723H255.737Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M356.336 119.107C358.472 100.637 365.416 86.2231 377.167 75.8657C389.093 65.3359 404.583 60.071 423.635 60.071C441.62 60.071 456.665 65.9401 468.77 77.6782C481.059 89.2435 487.2 106.678 487.2 129.982V137.75H382.776V119.107H461.025C460.319 106.505 456.396 96.8392 449.273 90.1071C442.158 83.3746 433.606 80.0085 423.635 80.0085C411.883 80.0085 402.542 83.461 395.595 90.366C388.648 97.098 384.381 106.678 382.776 119.107H356.336ZM355.802 137.75H382.776C383.49 152.077 387.405 163.125 394.528 170.893C401.652 178.661 411.799 182.544 424.971 182.544C441.889 182.544 453.548 175.812 459.958 162.348H486.931C476.96 189.104 456.312 202.482 424.971 202.482C404.676 202.482 388.388 196.786 376.099 185.393C363.992 173.827 357.226 157.947 355.802 137.75Z",fill:"currentColor"})]})}])},12085,e=>{"use strict";var a=e.i(72673),t=e.i(73447),s=e.i(32074);function r({src:e,poster:i,backdropSrc:n,runtime:l,label:o="See Rise in action",fit:c="cover",padColor:d="#fdeec8"}){let[p,h]=(0,t.useState)(!1),u=(0,t.useRef)(null),m=(0,t.useRef)(null),x=(0,t.useRef)(null),v=(0,t.useCallback)(()=>{h(!1),m.current?.pause(),x.current?.focus()},[]);return(0,t.useEffect)(()=>{if(!p)return;let e=e=>{"Escape"===e.key&&v()};document.addEventListener("keydown",e);let a=document.body.style.overflow;document.body.style.overflow="hidden";let t=m.current;return t&&(t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})})),()=>{document.removeEventListener("keydown",e),document.body.style.overflow=a}},[p,v]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{ref:x,type:"button",onClick:()=>h(!0),"aria-haspopup":"dialog",className:"group relative block h-full w-full overflow-hidden rounded-2xl",style:"contain"===c?{backgroundColor:d}:void 0,children:[n?(0,a.jsx)("video",{src:n,poster:i,playsInline:!0,muted:!0,autoPlay:!0,loop:!0,"aria-hidden":"true",className:`h-full w-full ${"contain"===c?"object-contain":"object-cover"}`}):(0,a.jsx)("img",{src:i,alt:"",className:`h-full w-full ${"contain"===c?"object-contain":"object-cover"}`}),(0,a.jsx)("span",{className:"absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"}),(0,a.jsx)("span",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsxs)("span",{className:"bg-primary-surface text-tab-solid flex items-center gap-s5 rounded-full py-s5 pr-s7 pl-s5 shadow-[0_10px_40px_-8px_rgba(30,31,33,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_-10px_rgba(30,31,33,0.55)]",children:[(0,a.jsx)("span",{className:"bg-tab-solid text-primary-surface flex size-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 md:size-12",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"ml-0.5 h-5 w-5","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M8 5v14l11-7z",fill:"currentColor"})})}),(0,a.jsxs)("span",{className:"font-display flex items-baseline gap-s3 text-base md:text-lg",children:[o,(0,a.jsx)("span",{className:"text-sm opacity-60",children:l})]})]})})]}),p&&"u">typeof document?(0,s.createPortal)((0,a.jsxs)("div",{ref:u,role:"dialog","aria-modal":"true","aria-label":"Rise film",onClick:e=>{e.target===u.current&&v()},className:"fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 sm:p-8",children:[(0,a.jsx)("button",{type:"button",onClick:v,"aria-label":"Close",className:"absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"h-5 w-5","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),(0,a.jsx)("video",{ref:m,src:e,poster:i,controls:!0,playsInline:!0,className:"max-h-full w-full max-w-6xl rounded-xl shadow-2xl"})]}),document.body):null]})}var i=e.i(73203),n=e.i(32919),l=e.i(43340);let o=[{label:"s 73T(3)",top:"12%",left:"6%",tone:"bg-primary-soft text-tab-solid"},{label:"Sch 7 · cl 4",top:"64%",left:"9%",tone:"bg-destructive-subtle text-error-deep"},{label:"Std 5 · clinical care",top:"31%",left:"3%",tone:"bg-info-subtle text-info-deep"},{label:"Group 0107",top:"80%",left:"16%",tone:"bg-success-subtle text-success-deep"},{label:"s 73F",top:"48%",left:"2%",tone:"bg-primary-soft text-tab-solid"},{label:"Worker screening",top:"22%",left:"17%",tone:"bg-info-subtle text-info-deep"},{label:"Reg 155",top:"88%",left:"5%",tone:"bg-destructive-subtle text-error-deep"},{label:"Registration Rules 2018",top:"8%",left:"40%",tone:"bg-info-subtle text-info-deep"},{label:"Reg 123 · educator ratios",top:"86%",left:"34%",tone:"bg-primary-soft text-tab-solid"},{label:"Std 1.1",top:"78%",left:"58%",tone:"bg-success-subtle text-success-deep"},{label:"Std 4.1",top:"18%",left:"56%",tone:"bg-destructive-subtle text-error-deep"},{label:"Module 1",top:"92%",left:"48%",tone:"bg-info-subtle text-info-deep"},{label:"Practice Standards",top:"5%",left:"24%",tone:"bg-success-subtle text-success-deep"},{label:"Group 0104",top:"26%",left:"76%",tone:"bg-info-subtle text-info-deep"},{label:"Element 2.2.3 · QA2",top:"58%",left:"84%",tone:"bg-destructive-subtle text-error-deep"},{label:"s 179 provider duty",top:"13%",left:"88%",tone:"bg-primary-soft text-tab-solid"},{label:"s 165 · supervision",top:"72%",left:"72%",tone:"bg-success-subtle text-success-deep"},{label:"Restrictive practices",top:"40%",left:"80%",tone:"bg-primary-soft text-tab-solid"},{label:"MRCA s 281 · 60 points",top:"88%",left:"80%",tone:"bg-destructive-subtle text-error-deep"},{label:"Reportable incidents",top:"34%",left:"66%",tone:"bg-info-subtle text-info-deep"}];function c({className:e=""}){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:`text-primary-solid inline-block shrink-0 ${e}`,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z",fill:"currentColor"})})}e.s(["StatementVideo",0,function(){let e=(0,t.useRef)(null),s=(0,t.useRef)(null),d=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current;if(!a)return;n.gsap.registerPlugin(l.ScrollTrigger);let t=n.gsap.matchMedia(),r=n.gsap.context(()=>{n.gsap.set(".sv-token",{scale:0,opacity:0}),t.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)",()=>{let e=a.querySelector(".sv-text-panel"),t=n.gsap.timeline({scrollTrigger:{trigger:a,pin:!0,scrub:.2,end:()=>`+=${2.4*e.offsetWidth}`,invalidateOnRefresh:!0}});n.gsap.set(".sv-token",{scale:0,opacity:0});let r=n.gsap.utils.toArray(".sv-token"),i=(e,a)=>{let t=e.getBoundingClientRect();return(("x"===a?window.innerWidth/2:window.innerHeight/2)-("x"===a?t.left+t.width/2:t.top+t.height/2))*.42};n.gsap.set([".sv-b",".sv-c"],{opacity:0,y:"0.35em"}),t.to({},{duration:.15}).to(r,{scale:1,opacity:1,ease:"back.out(1.8)",duration:.45,stagger:.035},"-=0.45").to(r,{x:(e,a)=>i(a,"x"),y:(e,a)=>i(a,"y"),ease:"power2.inOut",duration:.5},"-=0.1").to(".sv-a",{y:"-0.4em",opacity:0,ease:"power2.in",duration:.45},"+=0.4").to(".sv-b",{y:0,opacity:1,ease:"power2.out",duration:.55}).to(r,{y:"+=60vh",opacity:0,rotation:e=>e%2?8:-8,ease:"power2.in",duration:2.2,stagger:.055},"<0.1").to({},{duration:.7}).to(".sv-b",{y:"-0.4em",opacity:0,ease:"power2.in",duration:.45}).to(".sv-c",{y:0,opacity:1,ease:"back.out(1.6)",duration:.6}).to({},{duration:.8}).to(s.current,{x:()=>-e.offsetWidth,ease:"none",duration:3})}),t.add("(max-width: 1023.98px), (prefers-reduced-motion: reduce)",()=>{n.gsap.set([".sv-b",".sv-c"],{opacity:1,y:0}),n.gsap.to(".sv-token",{scale:1,opacity:1,duration:.4,stagger:.04,ease:"back.out(2)",scrollTrigger:{trigger:".sv-payoff",start:"top 90%",once:!0}})}),l.ScrollTrigger.refresh()},a);return()=>{r.revert(),t.revert()}},[]),(0,a.jsx)("section",{ref:e,className:"w-full overflow-x-hidden lg:h-screen lg:overflow-y-hidden",children:(0,a.jsxs)("div",{ref:s,className:"flex flex-col lg:h-screen lg:w-max lg:flex-row",children:[(0,a.jsxs)("div",{className:"sv-text-panel relative flex shrink-0 flex-col items-center justify-center p-5 lg:h-screen lg:w-screen lg:p-8",children:[(0,a.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 hidden lg:block",children:o.map(e=>(0,a.jsx)("span",{className:`sv-token absolute rounded-full px-s5 py-s3 text-sm font-semibold whitespace-nowrap ${e.tone}`,style:{top:e.top,left:e.left},children:e.label},e.label))}),(0,a.jsxs)("h2",{className:"font-display relative flex w-full items-center justify-center text-center leading-[1.05] font-normal max-lg:flex-col max-lg:gap-3 [--sv:8vw] lg:[--sv:5.6vw]",style:{minHeight:"1.4em",fontSize:"var(--sv)"},children:[(0,a.jsx)("span",{className:"sv-a absolute inset-0 flex items-center justify-center max-lg:relative max-lg:inset-auto",children:(0,a.jsxs)("span",{className:"flex items-center gap-s6 whitespace-nowrap max-lg:flex-wrap max-lg:justify-center max-lg:whitespace-normal",children:[(0,a.jsx)(c,{className:"h-[0.5em] w-[0.5em]"}),"Your compliance engine,"]})}),(0,a.jsx)("span",{className:"sv-b absolute inset-0 flex items-center justify-center max-lg:relative max-lg:inset-auto",children:(0,a.jsxs)("span",{className:"sv-payoff font-editorial flex items-center gap-s6 text-[1.05em] font-extralight whitespace-nowrap italic max-lg:flex-wrap max-lg:justify-center max-lg:whitespace-normal",children:["without the expense.",(0,a.jsx)(c,{className:"h-[0.34em] w-[0.34em] not-italic"})]})}),(0,a.jsxs)("span",{className:"sv-c text-foreground absolute inset-0 flex items-center justify-center gap-[30px] max-lg:relative max-lg:inset-auto max-lg:mt-2 max-lg:gap-[0.5em]",children:[(0,a.jsxs)("svg",{viewBox:"0 0 56 32",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"h-[0.55em] w-auto",children:[(0,a.jsx)("path",{d:"M40.4025 10.6667C43.2416 10.6667 45.543 8.27886 45.543 5.33335C45.543 2.38784 43.2416 3.05176e-05 40.4025 3.05176e-05C37.5636 3.05176e-05 35.2621 2.38784 35.2621 5.33335C35.2621 8.27886 37.5636 10.6667 40.4025 10.6667Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M36.4842 29.3332C36.4842 25.0073 32.8644 21.3333 28.192 21.3332C23.5195 21.3332 19.8999 25.0073 19.8999 29.3332C19.8999 30.8059 18.7217 31.9999 17.2684 31.9999C15.8151 31.9999 14.637 30.8059 14.637 29.3332C14.637 21.877 20.7986 15.9999 28.192 15.9999C35.5853 15.9999 41.7471 21.877 41.7471 29.3332C41.7471 30.8059 40.5689 31.9998 39.1156 31.9999C37.6623 31.9999 36.4842 30.8059 36.4842 29.3332Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M0.5 29.3333C0.5 13.0699 13.8241 3.05176e-05 30.1193 3.05176e-05C31.5726 5.80061e-05 32.7507 1.19395 32.7507 2.66669C32.7507 4.13942 31.5726 5.33332 30.1193 5.33334C16.6046 5.33334 5.76291 16.1416 5.76291 29.3333C5.76291 30.806 4.58476 31.9999 3.13145 31.9999C1.67814 31.9999 0.5 30.806 0.5 29.3333Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M50.621 29.3334C50.621 23.936 49.3699 18.9905 47.2942 15.0001L47.0907 14.6168L47.0285 14.4949C46.4211 13.2255 46.8968 11.6826 48.1309 10.9959C49.365 10.3093 50.9046 10.7308 51.6356 11.9313L51.7039 12.0501L51.9491 12.5116C54.4463 17.3115 55.8839 23.1185 55.8839 29.3334C55.8839 30.8061 54.7058 32 53.2525 32C51.7992 31.9999 50.621 30.8061 50.621 29.3334Z",fill:"currentColor"})]}),(0,a.jsx)(i.RiseWordmark,{className:"h-[0.62em] w-auto"})]})]})]}),(0,a.jsx)("div",{ref:d,className:"w-full shrink-0 p-5 max-md:aspect-square lg:h-screen lg:w-screen lg:p-8",children:(0,a.jsx)("div",{className:"relative h-full w-full overflow-hidden rounded-3xl",children:(0,a.jsx)(r,{src:"/rw/videos/rise-demo.mp4",backdropSrc:"/rw/videos/rise-loop.mp4",poster:"/rw/videos/rise-loop-poster.jpg",runtime:"1:12"})})})]})})}],12085)},73727,e=>{"use strict";var a=e.i(72673),t=e.i(73447),s=e.i(32919);e.s(["Preloader",0,function(){let e=(0,t.useRef)(null),r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current;if(!a)return;let t=!1,i=()=>{t||(t=!0,a.style.display="none",delete document.documentElement.dataset.preloader,window.dispatchEvent(new Event("rise:preloader-done")))},n="rise:preloader-played",l=!1;try{l="1"===sessionStorage.getItem(n)}catch{}let o=/\/(rw)?\/?$/.test(window.location.pathname);if(l||!o||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void i();try{sessionStorage.setItem(n,"1")}catch{}document.documentElement.dataset.preloader="playing";let c=s.gsap.context(()=>{s.gsap.set(r.current,{y:100}),s.gsap.set(".loading-bar",{width:"0%"}),s.gsap.timeline({onComplete:i}).to(r.current,{y:0,delay:.5,duration:1,ease:"power3.in"}).to(".loading-bar",{width:"100%",duration:1.5,ease:"circ.inOut"}).to(a,{clipPath:"polygon(0 0, 100% 0, 100% 0%, 0% 0%)",duration:1.5,ease:"power2.inOut",delay:.5})},a),d=setTimeout(i,8e3);return()=>{clearTimeout(d),c.revert()}},[]),(0,a.jsxs)("div",{ref:e,"aria-hidden":!0,className:"rise-curtain bg-primary-surface fixed top-0 left-0 z-[99999] flex h-screen w-full flex-col",style:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"},children:[(0,a.jsx)("style",{children:`
        @keyframes rise-curtain-bail {
          to { clip-path: polygon(0 0, 100% 0, 100% 0%, 0% 0%); visibility: hidden; }
        }
        .rise-curtain { animation: rise-curtain-bail 1.2s 9s both; }
      `}),(0,a.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsxs)("svg",{ref:r,viewBox:"0 0 56 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-primary-soft h-[8vh] w-[16vw] md:w-[8vw]",children:[(0,a.jsx)("path",{d:"M40.4025 10.6667C43.2416 10.6667 45.543 8.27886 45.543 5.33335C45.543 2.38784 43.2416 3.05176e-05 40.4025 3.05176e-05C37.5636 3.05176e-05 35.2621 2.38784 35.2621 5.33335C35.2621 8.27886 37.5636 10.6667 40.4025 10.6667Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M36.4842 29.3332C36.4842 25.0073 32.8644 21.3333 28.192 21.3332C23.5195 21.3332 19.8999 25.0073 19.8999 29.3332C19.8999 30.8059 18.7217 31.9999 17.2684 31.9999C15.8151 31.9999 14.637 30.8059 14.637 29.3332C14.637 21.877 20.7986 15.9999 28.192 15.9999C35.5853 15.9999 41.7471 21.877 41.7471 29.3332C41.7471 30.8059 40.5689 31.9998 39.1156 31.9999C37.6623 31.9999 36.4842 30.8059 36.4842 29.3332Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M0.5 29.3333C0.5 13.0699 13.8241 3.05176e-05 30.1193 3.05176e-05C31.5726 5.80061e-05 32.7507 1.19395 32.7507 2.66669C32.7507 4.13942 31.5726 5.33332 30.1193 5.33334C16.6046 5.33334 5.76291 16.1416 5.76291 29.3333C5.76291 30.806 4.58476 31.9999 3.13145 31.9999C1.67814 31.9999 0.5 30.806 0.5 29.3333Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M50.621 29.3334C50.621 23.936 49.3699 18.9905 47.2942 15.0001L47.0907 14.6168L47.0285 14.4949C46.4211 13.2255 46.8968 11.6826 48.1309 10.9959C49.365 10.3093 50.9046 10.7308 51.6356 11.9313L51.7039 12.0501L51.9491 12.5116C54.4463 17.3115 55.8839 23.1185 55.8839 29.3334C55.8839 30.8061 54.7058 32 53.2525 32C51.7992 31.9999 50.621 30.8061 50.621 29.3334Z",fill:"currentColor"})]})})}),(0,a.jsx)("div",{className:"loading-bar bg-primary-soft h-4 w-full"})]})}])},94969,e=>{"use strict";var a=e.i(72673),t=e.i(73447),s=e.i(32919),r=e.i(43340),i=e.i(73203);s.gsap.registerPlugin(r.ScrollTrigger);let n=[{image:"/rw/testimonials/testimonials-1.webp",title:"Lead auditors in house",description:"Built by people who have sat on the other side of the table. It asks what they asked."},{image:"/rw/testimonials/testimonials-2.webp",title:"Grounded in research, not habit",description:"Compliance is not a matter of opinion. What Rise asks for is what the evidence says keeps people safe."},{image:"/rw/testimonials/testimonials-3.webp",title:"Assessed against the law in force",description:"The rules change more often than anyone has time to read them. Rise reads them, and your documents change the same week."},{image:"/rw/testimonials/testimonials-4.webp",title:"More time with the people you support",description:"Every hour not spent proving compliance is an hour returned to care."}],l=[{cls:"quote-first",text:"It’s been fantastic working with the Rise team to get registered, they have a support team ready when we need them. And the platform is by far the best we have used, I’ve been super impressed so far.”",name:"Ryan Edwards",title:"Director | UR Supported",image:"/rw/team/ryan.webp",tone:"bg-primary-soft text-tab-solid"},{cls:"quote-second",text:"Jess worked with me every step of the way to get us registered. They’re always available whenever I have questions. The platform is great and the customer service is even better.”",name:"Victoria",title:"Director | Harmony Care",image:"/rw/team/victoria.webp",tone:"bg-success-subtle text-success-deep"},{cls:"quote-third",text:"I was nervous about the registration process, but Rise made it simple. The software is beautiful, easy to use, and gives me peace of mind knowing everything’s done properly.”",name:"Matt",title:"Director | Your Vision Support Services",image:"/rw/team/matt.webp",tone:"bg-info-subtle text-info-deep"},{cls:"quote-fourth",text:"The Rise team has helped me so much. Everything is explained with patience, and in Spanish when I need it, which makes such a big difference. With Rise, I feel confident of my success as a provider.”",name:"Carolina",title:"Owner | Viva, Care With Dignity",image:"/rw/team/carolina.webp",tone:"bg-destructive-subtle text-error-deep"}],o=[{top:"15%",left:"20%",scale:1,speed:1.2},{top:"70%",left:"10%",scale:.8,speed:.8},{top:"30%",left:"80%",scale:.9,speed:1},{top:"85%",left:"60%",scale:1.1,speed:1.5},{top:"70%",left:"90%",scale:.7,speed:.7}],c=["bg-primary-soft text-tab-solid","bg-info-subtle text-info-deep","bg-destructive-subtle text-error-deep","bg-success-subtle text-success-deep"];function d({className:e=""}){return(0,a.jsxs)("svg",{className:e,viewBox:"0 0 32 26",fill:"none","aria-hidden":"true",children:[(0,a.jsx)("path",{d:"M18 18C18 19.3845 18.4105 20.7378 19.1797 21.889C19.9489 23.0401 21.0421 23.9373 22.3212 24.4672C23.6003 24.997 25.0078 25.1356 26.3656 24.8655C27.7235 24.5954 28.9708 23.9287 29.9497 22.9497C30.9287 21.9708 31.5954 20.7235 31.8655 19.3656C32.1356 18.0078 31.997 16.6003 31.4672 15.3212C30.9373 14.0421 30.0401 12.9489 28.889 12.1797C27.7378 11.4105 26.3845 11 25 11C24.2936 11.0104 23.5929 11.1284 22.922 11.35C23.7832 8.73997 25.2316 6.36231 27.156 4.4C27.3442 4.2134 27.4935 3.99126 27.5951 3.74647C27.6968 3.50168 27.7487 3.23913 27.748 2.97408C27.7473 2.70904 27.6939 2.44678 27.5909 2.20255C27.4879 1.95833 27.3374 1.73701 27.1481 1.55145C26.9589 1.3659 26.7346 1.21982 26.4884 1.1217C26.2422 1.02358 25.9789 0.975374 25.7139 0.97989C25.4489 0.984407 25.1874 1.04155 24.9447 1.14801C24.702 1.25446 24.4828 1.4081 24.3 1.6C20.2528 5.70267 17.9888 11.2371 18 17C18.0126 17.1131 18.0354 17.2249 18.068 17.334C18.0342 17.5547 18.0115 17.777 18 18Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M-0.000163397 18.0008C-0.0283208 19.513 0.424884 20.9951 1.294 22.2329C2.16313 23.4708 3.40318 24.4004 4.83511 24.8875C6.26703 25.3746 7.81672 25.394 9.26038 24.9429C10.704 24.4918 11.967 23.5935 12.8668 22.3777C13.7666 21.162 14.2568 19.6918 14.2665 18.1793C14.2761 16.6668 13.8049 15.1904 12.9207 13.9632C12.0365 12.7361 10.7852 11.8217 9.34746 11.3521C7.90969 10.8825 6.35989 10.8821 4.92184 11.3508C5.78299 8.74074 7.23148 6.36308 9.15584 4.40077C9.34408 4.21418 9.49335 3.99203 9.59497 3.74724C9.6966 3.50245 9.74856 3.2399 9.74783 2.97486C9.7471 2.70981 9.69369 2.44755 9.59072 2.20333C9.48774 1.9591 9.33724 1.73778 9.14798 1.55223C8.95872 1.36668 8.73446 1.22059 8.48824 1.12247C8.24203 1.02435 7.97876 0.976148 7.71375 0.980665C7.44875 0.985181 7.18728 1.04233 6.94455 1.14878C6.70182 1.25524 6.48267 1.40888 6.29984 1.60077C2.25267 5.70344 -0.0114028 11.2378 -0.000163309 17.0008C0.0124624 17.1139 0.0352208 17.2257 0.0678375 17.3348C0.0339973 17.5555 0.0113007 17.7778 -0.000163397 18.0008Z",fill:"currentColor"})]})}function p({className:e=""}){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:`text-warning-solid ${e}`,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z",fill:"currentColor"})})}function h({q:e}){return(0,a.jsxs)("div",{className:`flex h-full w-full flex-row justify-between gap-5 overflow-hidden rounded-3xl py-8 pl-5 max-lg:pr-5 md:pr-10 group-data-scene/ts:h-[clamp(400px,46vh,560px)] group-data-scene/ts:w-[clamp(30rem,34vw,46rem)] group-data-scene/ts:max-w-[88vw] ${e.tone}`,children:[(0,a.jsx)("p",{className:"font-editorial mt-2 text-[15vw] leading-none max-lg:text-[44px] md:px-3 md:text-[5vw]",children:"“"}),(0,a.jsxs)("div",{className:"flex min-h-0 flex-1 flex-col justify-between gap-y-10 group-data-scene/ts:gap-y-0",children:[(0,a.jsx)("p",{className:"text-left text-[2vw] leading-tight max-lg:text-[16px] xl:text-2xl",children:e.text}),(0,a.jsxs)("div",{className:"flex items-center text-left",children:[(0,a.jsx)("img",{src:e.image,alt:"",className:"h-15 w-15 rounded-full object-cover md:h-10 md:w-10"}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("p",{className:"font-display text-2xl font-medium",children:e.name}),(0,a.jsx)("p",{className:"text-sm",children:e.title})]})]})]})]})}e.s(["TestimonialsSection",0,function(){let e=(0,t.useRef)(null),u=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current,t=u.current;if(!a||!t)return;let i=s.gsap.context(()=>{s.gsap.matchMedia().add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)",()=>{a.dataset.scene="";let e=s.gsap.utils.toArray(".random-quote-svg"),i=e=>()=>-(window.innerHeight+(a.querySelector(e)?.offsetHeight??400));s.gsap.set(e,{scale:0});let n=s.gsap.timeline();return n.to(t,{x:()=>-(t.offsetWidth-window.innerWidth),ease:"none",delay:1,duration:4}),n.to(".quote-first",{clipPath:"inset(0% 0% 0% 0% round 22px)",ease:"none",duration:1},">"),e.forEach(e=>{n.to(e,{scale:Number(e.dataset.scale),duration:1},">-0.8")}),n.addLabel("a"),n.to(".quote-first",{y:()=>-(window.innerHeight+400),ease:"none",duration:1},"a+=0.1"),n.to(".quote-second",{y:i(".quote-second"),ease:"none",duration:2},"a+=0.1"),n.to(".quote-third",{y:i(".quote-third"),ease:"none",duration:2},"a+=0.3"),n.to(".quote-fourth",{y:i(".quote-fourth"),ease:"none",duration:2},"a+=0.4"),e.forEach(e=>{n.to(e,{y:()=>-window.innerHeight*Number(e.dataset.speed),ease:"none",duration:3},"a+=0.1")}),r.ScrollTrigger.create({animation:n,trigger:a,pin:!0,scrub:!0,end:()=>`+=${2*n.duration()*window.innerHeight}`,invalidateOnRefresh:!0}),()=>{delete a.dataset.scene}}),r.ScrollTrigger.refresh()},a);return()=>i.revert()},[]),(0,a.jsxs)("section",{ref:e,className:"horizontal-scroll-container group/ts w-screen overflow-hidden p-5 lg:px-s7 lg:py-s9 data-scene:h-screen data-scene:p-0","aria-label":"What people say about Rise",children:[(0,a.jsx)("style",{children:`
        /* The scene, and only where the script has switched it on. */
        .horizontal-scroll-container[data-scene] .horizontal-scroll-content { height: 100%; width: max-content; }
        .horizontal-scroll-container[data-scene] .quote-first { clip-path: inset(100% 0% 0% 100% round 16px); }

        /* Everywhere else it is a plain section. The rail used to be a sideways
           swipe of 84vw panels that nobody was told about, and its height came
           from the off-screen quote scene, so a phone saw the auditor panel over
           a screen of empty cream (10 Sep 2026). It stacks. */
        .horizontal-scroll-container:not([data-scene]) .horizontal-scroll-content { flex-direction: column; align-items: stretch; height: auto; }
        .horizontal-scroll-container:not([data-scene]) .horizontal-scroll-content > * { width: 100%; margin: 0; }
        .horizontal-scroll-container:not([data-scene]) .horizontal-scroll-content > * + * { margin-top: 2rem; }
        @media (min-width: 1024px) {
          /* A desktop with no scene: the panels two across, the testimonials
             under their headline. */
          .horizontal-scroll-container:not([data-scene]) .horizontal-scroll-content { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4rem 2rem; }
          .horizontal-scroll-container:not([data-scene]) .horizontal-scroll-content > * + * { margin-top: 0; }
          .horizontal-scroll-container:not([data-scene]) .quote-section-second { grid-column: 1 / -1; padding-top: 4rem; }
        }
      `}),(0,a.jsxs)("div",{ref:u,className:"horizontal-scroll-content flex h-full items-center space-x-8 max-lg:space-x-4 group-data-scene/ts:h-screen",children:[n.map((e,t)=>(0,a.jsxs)("section",{className:`flex w-[84vw] shrink-0 flex-col items-center justify-start gap-12 [scroll-snap-align:center] group-data-scene/ts:h-screen group-data-scene/ts:max-h-[70%] group-data-scene/ts:w-[70vw] group-data-scene/ts:justify-center 2xl:group-data-scene/ts:w-[80vw] ${0===t?"group-data-scene/ts:ml-8":""}`,children:[(0,a.jsx)("img",{src:e.image,alt:"",className:"aspect-video w-full rounded-2xl object-cover object-left group-data-scene/ts:h-[70vh]"}),(0,a.jsxs)("div",{className:"grid w-full gap-s5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-s8",children:[(0,a.jsxs)("div",{className:"flex items-start gap-s5",children:[(0,a.jsx)(p,{className:"mt-[0.35em] h-6 w-6 shrink-0 lg:h-8 lg:w-8"}),(0,a.jsx)("h3",{className:"font-display text-[2.6vw] leading-[1.05] font-normal text-balance max-lg:text-[clamp(20px,5.5vw,26px)] lg:text-[2.1vw]",children:e.title})]}),(0,a.jsx)("p",{className:"text-foreground/75 text-[2.1vw] leading-snug max-lg:text-[15px] lg:text-[1.15vw]",children:e.description})]})]},e.title)),(0,a.jsxs)("section",{className:"quote-section-second font-display relative flex w-screen shrink-0 flex-col items-center justify-center text-center text-[7vw] leading-[1.2] max-lg:w-full max-lg:text-[9vw] group-data-scene/ts:h-screen",children:[(0,a.jsxs)("div",{className:"quote-head relative z-10",children:[(0,a.jsx)("h2",{className:"quote-head-word",children:"What people say"}),(0,a.jsxs)("h2",{className:"flex items-center justify-center gap-6",children:[(0,a.jsx)("span",{className:"quote-head-word",children:"About"}),(0,a.jsxs)("span",{className:"bg-primary-soft text-tab-solid relative inline-flex aspect-square h-[6vw] max-h-20 min-h-10 w-[6vw] max-w-20 min-w-10 items-center justify-center rounded-3xl 2xl:rounded-[2rem]",children:[(0,a.jsx)("div",{className:"quote-first absolute -right-0 -bottom-0 z-20 hidden w-full shrink-0 group-data-scene/ts:block md:w-auto md:shrink",children:(0,a.jsx)(h,{q:l[0]})}),(0,a.jsx)(d,{className:"inline-block h-auto w-5 md:w-[1.3vw]"})]}),(0,a.jsx)(i.RiseWordmark,{className:"quote-head-word text-foreground inline-block h-[0.72em] w-auto"})]})]}),(0,a.jsx)("div",{className:"absolute hidden h-screen w-full group-data-scene/ts:block",children:o.map((e,t)=>(0,a.jsx)("span",{"data-scale":e.scale,"data-speed":e.speed,className:`random-quote-svg absolute inline-flex aspect-square max-h-20 max-w-20 items-center justify-center rounded-3xl ${c[t%c.length]}`,style:{width:"6vw",height:"6vw",top:e.top,left:e.left},children:(0,a.jsx)(d,{className:"inline w-5"})},t))}),(0,a.jsxs)("div",{className:"contents lg:mt-s8 lg:grid lg:w-full lg:grid-cols-2 lg:gap-s5 group-data-scene/ts:contents",children:[(0,a.jsx)("div",{className:"z-20 mt-8 w-full lg:mt-0 group-data-scene/ts:hidden",children:(0,a.jsx)(h,{q:l[0]})}),l.slice(1).map((e,t)=>(0,a.jsx)("div",{className:`${e.cls} relative z-20 mt-8 w-full shrink-0 md:w-auto md:shrink lg:mt-0 lg:w-full group-data-scene/ts:absolute group-data-scene/ts:top-full group-data-scene/ts:mt-0 group-data-scene/ts:w-auto ${1===t?"group-data-scene/ts:right-[10%]":"group-data-scene/ts:left-[10%]"}`,children:(0,a.jsx)(h,{q:e})},e.name))]})]})]})]})}])}]);