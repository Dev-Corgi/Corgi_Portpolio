(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3082:function(e,t,l){Promise.resolve().then(l.bind(l,8327))},8327:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var s=l(7437),a=l(2265);let o=new class{setValue(e,t){this.controllers[e]=t}getValue(e){return this.controllers[e]}constructor(){this.controllers={}}};class i{handleGuage(e){e.detail.state>0&&this.event.detail.value<this.maxvalue?this.event.detail.state=1:e.detail.state<0&&this.event.detail.value>0?this.event.detail.state=-1:this.event.detail.state=0,this.event.detail.value=this.event.detail.value+this.event.detail.state,this.eventTarget.dispatchEvent(this.event)}destroy(){this.inputController.removeEventListener(this.inputController.type,this.handleGuage)}constructor(e,t,l){this.eventTarget=new EventTarget,this.event=new CustomEvent("guageevent",{detail:{state:0,value:t}}),this.maxvalue=l,this.handleGuage=this.handleGuage.bind(this),this.inputController=e,this.inputController.eventTarget.addEventListener(this.inputController.eventname,this.handleGuage),this.eventname="guageevent"}}class r{handleScroll(e){this.condition&&(this.condition=!1,e.deltaY>0?this.event.detail.state=1:this.event.detail.state=-1,this.eventTarget.dispatchEvent(this.event),setTimeout(()=>{this.condition=!0},this.delay))}destroy(){window.removeEventListener("wheel",this.handleScroll)}constructor(e){this.eventTarget=new EventTarget,this.event=new CustomEvent("scrollevent",{detail:{state:0}}),this.condition=!0,this.delay=e,this.handleScroll=this.handleScroll.bind(this),window.addEventListener("wheel",this.handleScroll),this.eventname="scrollevent"}}function n(){return(0,a.useEffect)(()=>{let e=new r(1e3),t=new i(e,0,3);o.setValue("globalguage",t),o.setValue("globalscroll",e)},[]),(0,s.jsx)(s.Fragment,{})}var d=l(9844);function x(e){let[t,l]=(0,a.useState)([]);return(0,a.useEffect)(()=>{e.motions.forEach(e=>{let t=e.input,s=e.motion,a=e.condition;null!=t?t.eventTarget.addEventListener(t.eventname,e=>{(null==a||null!=a&&a(e.detail.state,e.detail.value))&&l(t=>{let l=[...t,s.handleMotion(e.detail.state)];return l})}):null==t&&l(e=>{let t=[...e,s.handleMotion(1)];return t})})},[]),(0,s.jsx)(s.Fragment,{children:(()=>{let l={},a={};return t.forEach(e=>{Object.keys(e).forEach(t=>{"transition"!==t&&(l[t]=e[t],a[t]=e.transition)})}),(0,s.jsx)(d.E.div,{className:e.classname,animate:0===Object.keys(l).length?{}:l,transition:0===Object.keys(a).length?{}:a,children:e.children})})()})}class c{handleMotion(e){return e>0?(this.currentX-=this.deltaX,this.currentY-=this.deltaY):this.reversable&&e<0&&(this.currentX+=this.deltaX,this.currentY+=this.deltaY),this.motion={x:"".concat(this.currentX).concat(this.unit),y:"".concat(this.currentY).concat(this.unit),transition:{duration:this.duration,delay:this.delay,ease:this.easetype}},this.motion}constructor(e,t,l,s,a,o,i=!0){this.currentX=0,this.currentY=0,this.deltaX=e,this.deltaY=t,this.delay=s,this.duration=a,this.easetype=o,this.unit=l,this.reversable=i,this.motion={x:this.currentX,y:this.currentY,transition:{duration:this.duration,delay:this.delay,ease:this.easetype}}}}class h{handleMotion(){return this.motion}constructor(e,t,l,s){this.motion={opacity:e,transition:{duration:l,delay:t,ease:s}}}}var p=()=>{let e=o.getValue("globalscroll"),t=o.getValue("globalguage"),[l,i]=(0,a.useState)(1);return(0,a.useEffect)(()=>{let t=e=>{e.detail.state>0&&l<4?i(e=>e+1):e.detail.state<0&&l>1&&i(e=>e-1)};return e.eventTarget.addEventListener("scrollevent",t),()=>{e.eventTarget.removeEventListener("scrollevent",t)}}),(0,s.jsxs)("div",{className:"absolute w-full h-full overflow-hidden text-left text-lg text-white font-pretendard",children:[(0,s.jsx)("div",{className:"absolute top-[809px] left-[-43px] text-[160px] tracking-[0.2em] font-extrabold font-lato text-center hidden [transform:_rotate(-90deg)] [transform-origin:0_0]",children:"EVENTS"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(x,{classname:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",motions:[{input:t,motion:new h(0,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e>0&&4==t},{input:t,motion:new h(1,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e<0&&3==t}],children:(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",src:"/assets/images/kmed_tours.JPG"})}),(0,s.jsx)(x,{classname:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",motions:[{input:t,motion:new h(0,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e>0&&3==t},{input:t,motion:new h(1,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e<0&&2==t}],children:(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",src:"/assets/images/cieffemilano.jpg"})}),(0,s.jsx)(x,{classname:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",motions:[{input:t,motion:new h(0,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e>0&&2==t},{input:t,motion:new h(1,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e<0&&1==t}],children:(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",src:"/assets/images/Blit.png"})}),(0,s.jsx)(x,{classname:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",motions:[{input:t,motion:new h(0,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e>0&&1==t},{input:t,motion:new h(1,0,.3,[.445,.05,.55,.95]),condition:(e,t)=>e<0&&0==t}],children:(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",src:"/assets/images/Ecotrip.JPG"})})]}),(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/foreground.svg"}),(0,s.jsx)("div",{className:"absolute w-[61.499vw] right-[557px] bottom-[50px] left-[39px] h-[10.5vw] rounded-lg overflow-hidden",children:(0,s.jsxs)(x,{classname:"absolute w-[66.537vw] top-[0px] right-[-8.19%] left-[0%] overflow-hidden flex flex-row items-center justify-start gap-[38px]",motions:[{input:t,motion:new c(17.183,0,"vw",0,.6,[.445,.05,.55,.95]),condition:(e,t)=>t>-1&&t<6}],children:[(0,s.jsxs)("div",{className:"flex-1 relative h-[10.5vw]  rounded-lg overflow-hidden",children:[(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/Ecotrip.JPG"}),(0,s.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.40))] overflow-hidden"}),(0,s.jsxs)("div",{className:"absolute items-center justify-center top-[18px] left-[17px] w-[2.196vw] h-[2.196vw]",children:[(0,s.jsx)("div",{className:"absolute h-full w-full rounded-md bg-gray [backdrop-filter:blur(10px)]"}),(0,s.jsx)("img",{className:"absolute top-[0.452vw] left-[0.452vw] w-[1.292vw] h-[1.292vw]",alt:"",src:"/ic.svg"})]}),(0,s.jsx)("div",{className:"absolute w-auto text-[1.163vw] bottom-[2.003vw] left-[16px] tracking-[-0.04em] font-medium",children:"Ecotrip"})]}),(0,s.jsxs)("div",{className:"flex-1 relative h-[10.5vw]  rounded-lg overflow-hidden",children:[(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/assets/images/Blit.png"}),(0,s.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.40))] overflow-hidden"}),(0,s.jsxs)("div",{className:"absolute items-center justify-center top-[18px] left-[17px] w-[2.196vw] h-[2.196vw]",children:[(0,s.jsx)("div",{className:"absolute h-full w-full rounded-md bg-gray [backdrop-filter:blur(10px)]"}),(0,s.jsx)("img",{className:"absolute top-[0.452vw] left-[0.452vw] w-[1.292vw] h-[1.292vw]",alt:"",src:"/ic.svg"})]}),(0,s.jsx)("div",{className:"absolute w-auto text-[1.163vw] bottom-[2.003vw] left-[16px] tracking-[-0.04em] font-medium",children:"Blit"})]}),(0,s.jsxs)("div",{className:"flex-1 relative h-[10.5vw]  rounded-lg overflow-hidden",children:[(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/assets/images/cieffemilano.jpg"}),(0,s.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.40))] overflow-hidden"}),(0,s.jsxs)("div",{className:"absolute items-center justify-center top-[18px] left-[17px] w-[2.196vw] h-[2.196vw]",children:[(0,s.jsx)("div",{className:"absolute h-full w-full rounded-md bg-gray [backdrop-filter:blur(10px)]"}),(0,s.jsx)("img",{className:"absolute top-[0.452vw] left-[0.452vw] w-[1.292vw] h-[1.292vw]",alt:"",src:"/ic.svg"})]}),(0,s.jsx)("div",{className:"absolute w-auto text-[1.163vw] bottom-[2.003vw] left-[16px] tracking-[-0.04em] font-medium",children:"Clone Project"})]}),(0,s.jsxs)("div",{className:"flex-1 relative h-[10.5vw]  rounded-lg overflow-hidden",children:[(0,s.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/assets/images/kmed_tours.JPG"}),(0,s.jsx)("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.40))] overflow-hidden"}),(0,s.jsxs)("div",{className:"absolute items-center justify-center top-[18px] left-[17px] w-[2.196vw] h-[2.196vw]",children:[(0,s.jsx)("div",{className:"absolute h-full w-full rounded-md bg-gray [backdrop-filter:blur(10px)]"}),(0,s.jsx)("img",{className:"absolute top-[0.452vw] left-[0.452vw] w-[1.292vw] h-[1.292vw]",alt:"",src:"/ic.svg"})]}),(0,s.jsx)("div",{className:"absolute w-auto text-[1.163vw] bottom-[2.003vw] left-[16px] tracking-[-0.04em] font-medium",children:"Kmed_Tours"})]})]})}),(0,s.jsxs)(x,{classname:"absolute w-[479.522vw] bottom-[307px] left-[37px] flex flex-row items-center justify-start gap-[72vw] text-center text-sm",motions:[{input:t,motion:new c(91.925,0,"vw",0,.6,[.445,.05,.55,.95]),condition:(e,t)=>t>-1&&t<6}],children:[(0,s.jsxs)("div",{className:"w-[19.89vw] relative h-64",children:[(0,s.jsx)("div",{className:"absolute top-[242px] left-[20px] w-28 h-[11px]",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[11px]",children:["[ VIEW PROJECT ]",(0,s.jsx)("button",{className:"absolute left-0 top-0 w-[110%] h-[200%] opacity-0",onClick:()=>window.location.href="https://github.com/inha-aws-hackathon/front-end"})]})}),(0,s.jsx)("img",{className:"absolute top-[194px] left-[1px] w-[186px] h-5",alt:"",src:"/logoset.svg"}),(0,s.jsx)("img",{className:"absolute top-[243px] left-[1px] w-3.5 h-[13px] object-cover",alt:"",src:"/arrow@2x.png"}),(0,s.jsxs)("div",{className:"absolute top-[97px] left-[1px] flex flex-row items-start justify-start gap-[8px] text-2xs",children:[(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"FRONT DEV"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"UI/UX"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"DESIGN"})})]}),(0,s.jsx)("div",{className:"absolute top-[156px] left-[1px] tracking-[-0.01em] leading-[11px]",children:"Made with:"}),(0,s.jsx)("div",{className:"absolute whitespace-nowrap top-[0px] left-[1px] text-51xl tracking-[-0.02em] leading-[87px] font-medium text-left",children:"Ecotrip"})]}),(0,s.jsxs)("div",{className:"w-[19.89vw] relative h-64",children:[(0,s.jsx)("div",{className:"absolute top-[242px] left-[20px] w-28 h-[11px]",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[11px]",children:["[ VIEW PROJECT ]",(0,s.jsx)("button",{className:"absolute left-0 top-0 w-[110%] h-[200%] opacity-0",onClick:()=>window.location.href="https://github.com/Dev-Corgi/Blit"})]})}),(0,s.jsx)("img",{className:"absolute top-[194px] left-[1px] w-[186px] h-5",alt:"",src:"/logoset.svg"}),(0,s.jsx)("img",{className:"absolute top-[243px] left-[1px] w-3.5 h-[13px] object-cover",alt:"",src:"/arrow@2x.png"}),(0,s.jsxs)("div",{className:"absolute top-[97px] left-[1px] flex flex-row items-start justify-start gap-[8px] text-2xs",children:[(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"FRONT DEV"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"UI/UX"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"DESIGN"})})]}),(0,s.jsx)("div",{className:"absolute top-[156px] left-[1px] tracking-[-0.01em] leading-[11px]",children:"Made with:"}),(0,s.jsx)("div",{className:"absolute whitespace-nowrap top-[0px] left-[1px] text-51xl tracking-[-0.02em] leading-[87px] font-medium text-left",children:"Blit"})]}),(0,s.jsxs)("div",{className:"w-[19.89vw] relative h-64",children:[(0,s.jsxs)("div",{className:"absolute top-[242px] left-[20px] w-28 h-[11px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[11px]",children:"[ VIEW PROJECT ]"}),(0,s.jsx)("button",{className:"absolute left-0 top-0 w-[110%] h-[200%] opacity-0",onClick:()=>window.location.href="https://github.com/Dev-Corgi/Clone_Milano"})]}),(0,s.jsx)("img",{className:"absolute top-[194px] left-[1px] w-[186px] h-5",alt:"",src:"/logoset.svg"}),(0,s.jsx)("img",{className:"absolute top-[243px] left-[1px] w-3.5 h-[13px] object-cover",alt:"",src:"/arrow@2x.png"}),(0,s.jsxs)("div",{className:"absolute top-[97px] left-[1px] flex flex-row items-start justify-start gap-[8px] text-2xs",children:[(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"FRONT DEV"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"UI/UX"})}),(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"DESIGN"})})]}),(0,s.jsx)("div",{className:"absolute top-[156px] left-[1px] tracking-[-0.01em] leading-[11px]",children:"Made with:"}),(0,s.jsx)("div",{className:"absolute whitespace-nowrap top-[0px] left-[1px] text-51xl tracking-[-0.02em] leading-[87px] font-medium text-left",children:"Clone Project"})]}),(0,s.jsxs)("div",{className:"w-[19.89vw] relative h-64",children:[(0,s.jsx)("div",{className:"absolute top-[242px] left-[20px] w-28 h-[11px]",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[11px]",children:["[ VIEW PROJECT ]",(0,s.jsx)("button",{className:"absolute left-0 top-0 w-[110%] h-[200%] opacity-0",onClick:()=>window.location.href="https://kmed-tours-xe33qwucv-2weeks-team.vercel.app/"})]})}),(0,s.jsx)("img",{className:"absolute top-[194px] left-[1px] w-[186px] h-5",alt:"",src:"/logoset.svg"}),(0,s.jsx)("img",{className:"absolute top-[243px] left-[1px] w-3.5 h-[13px] object-cover",alt:"",src:"/arrow@2x.png"}),(0,s.jsx)("div",{className:"absolute top-[97px] left-[1px] flex flex-row items-start justify-start gap-[8px] text-2xs",children:(0,s.jsx)("div",{className:"rounded-11xl box-border h-[27px] flex flex-row py-2.5 px-[16.5px] items-center justify-center border-[0.5px] border-solid border-white",children:(0,s.jsx)("div",{className:"relative tracking-[-0.04em] leading-[11px] font-medium",children:"Frontend DEV"})})}),(0,s.jsx)("div",{className:"absolute top-[156px] left-[1px] tracking-[-0.01em] leading-[11px]",children:"Made with:"}),(0,s.jsx)("div",{className:"absolute whitespace-nowrap top-[0px] left-[1px] text-51xl tracking-[-0.02em] leading-[87px] font-medium text-left",children:"Kmed Tours"})]})]}),(0,s.jsxs)("div",{className:"absolute right-[37px] bottom-[55px] w-[113px] h-[88px] text-mid",children:[(0,s.jsxs)("div",{className:"absolute top-[41px] left-[0px] w-12 h-[47px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-8xs box-border w-12 h-[47px] border-[1.5px] border-solid border-white"}),(0,s.jsx)("img",{className:"absolute top-[17.48px] left-[19.25px] w-[12.5px] h-[11.05px]",alt:"",src:"/arrow-2.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[41px] left-[65px] w-12 h-[47px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-8xs box-border w-12 h-[47px] border-[1.5px] border-solid border-white"}),(0,s.jsx)("img",{className:"absolute top-[17.48px] left-[19.25px] w-[12.5px] h-[11.05px]",alt:"",src:"/arrow-21.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[0px] left-[45px] w-[68px] h-5",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] font-semibold",children:"0"+l}),(0,s.jsx)("div",{className:"absolute top-[0px] left-[46px] font-semibold",children:"04"}),(0,s.jsx)("img",{className:"absolute top-[10.25px] left-[22.25px] w-[17.5px] h-[1.5px]",alt:"",src:"/line-6.svg"})]})]}),(0,s.jsxs)("div",{className:"relative top-[29px] left-[39px] w-auto h-auto font-lato",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[63px] w-auto h-auto font-semibold",children:"Dev_Corgi"}),(0,s.jsx)("div",{className:"absolute top-[26px] left-[63px] w-auto h-auto text-sm",children:"FrontEnd Dev, Designer"}),(0,s.jsx)("img",{className:"absolute top-[-1px] left-[-2px] w-12 h-[47px] object-cover",alt:"",src:"/frame-65-1@2x.png"})]})]})};function u(){let[e,t]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{t(!1)},[]),(0,s.jsxs)(s.Fragment,{children:[e?null:(0,s.jsx)(p,{}),(0,s.jsx)(n,{})]})}}},function(e){e.O(0,[704,971,596,744],function(){return e(e.s=3082)}),_N_E=e.O()}]);