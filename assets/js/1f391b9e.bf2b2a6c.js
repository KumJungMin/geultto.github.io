"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{3230:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512),s=t(4061),i=t(5281),r=t(9047),l=t(5893);function c(e){let{className:n}=e;return(0,l.jsx)(r.Z,{type:"caution",title:(0,l.jsx)(s.cI,{}),className:(0,a.Z)(n,i.k.common.unlistedBanner),children:(0,l.jsx)(s.eU,{})})}function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.T$,{}),(0,l.jsx)(c,{...e})]})}},7662:(e,n,t)=>{t.d(n,{Z:()=>d});t(7294);var a=t(512),s=t(4061),i=t(5281),r=t(9047),l=t(5893);function c(e){let{className:n}=e;return(0,l.jsx)(r.Z,{type:"caution",title:(0,l.jsx)(s.ht,{}),className:(0,a.Z)(n,i.k.common.draftBanner),children:(0,l.jsx)(s.xo,{})})}var o=t(3230);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(o.Z,{}),a.draft&&(0,l.jsx)(c,{})]})}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(7294);var a=t(512),s=t(8264),i=t(5281),r=t(6040),l=t(5042),c=t(9407),o=t(7662),d=t(7265);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(5893);function h(e){const{content:n}=e,{metadata:t,assets:h}=n,{title:f,editUrl:x,description:v,frontMatter:g,lastUpdatedBy:j,lastUpdatedAt:p}=t,{keywords:L,wrapperClassName:b,hide_table_of_contents:N}=g,C=h.image??g.image,Z=!!(x||p||j);return(0,m.jsx)(s.FG,{className:(0,a.Z)(b??i.k.wrapper.mdxPages,i.k.page.mdxPage),children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(s.d,{title:f,description:v,keywords:L,image:C}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.Z)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.Z)("col",!N&&"col--8"),children:[(0,m.jsx)(o.Z,{metadata:t}),(0,m.jsx)("article",{children:(0,m.jsx)(l.Z,{children:(0,m.jsx)(n,{})})}),Z&&(0,m.jsx)(d.Z,{className:(0,a.Z)("margin-top--sm",i.k.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:p,lastUpdatedBy:j})]}),!N&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512),s=t(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(5893);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(s.Z,{...t,linkClassName:l,linkActiveClassName:c})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),s=t(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):a.push(s)})),a}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let s=n;s<=t;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(3692),m=t(5893);function h(e){let{toc:n,className:t,linkClassName:a,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const f=a.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:u,...h}=e;const x=(0,s.L)(),v=o??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>r({toc:i(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[l,c,v,g])),(0,m.jsx)(f,{toc:j,className:t,linkClassName:l,...h})}},4061:(e,n,t)=>{t.d(n,{T$:()=>c,cI:()=>r,eU:()=>l,ht:()=>o,xo:()=>d});t(7294);var a=t(5999),s=t(5742),i=t(5893);function r(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},8398:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(4087),s=t(7294),i=t(8192);const r="curationContentContainer_ljt9",l="curationContent_VE8p",c="authorContainer_mfGu",o="authorImg_Jh1K",d="curationContentLink_G8xS";var u=t(5893);function m(e){const n=["th","st","nd","rd"],t=e%100;return e+(n[(t-20)%10]||n[t]||n[0])}const h=s.createContext({curation:null,authors:null}),f=e=>{const{"\uc81c\ubaa9":n,"\uc8fc\uc18c":t,"\uc791\uac00":a}=e,i=s.useContext(h).authors[a];return(0,u.jsx)("div",{className:l,children:i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("img",{className:o,src:i.image_url,alt:i.name}),(0,u.jsx)("a",{href:i.url,children:i.name}),"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:t,children:n})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{children:[a,"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:t,children:n})]})})},x={...a.Z,Curation:e=>{let{"\ud68c\ucc28":n,"\uae30\uc218":t=10,"\uc9c1\uad70":a}=e;const l=m(n),c=m(t),[o,d]=s.useState(null),[x,v]=s.useState(null);return s.useEffect((()=>{(async()=>{try{const e=await fetch("/curation.yml"),n=await e.text(),t=i.ZP.parse(n);d(t)}catch(e){console.error("Error loading the YAML file:",e)}})()}),[]),s.useEffect((()=>{(async()=>{try{const e=await fetch("/authors.yml"),n=await e.text(),t=i.ZP.parse(n);v(t)}catch(e){console.error("Error loading the YAML file:",e)}})()}),[]),o&&x?(0,u.jsx)(h.Provider,{value:{curation:o,authors:x},children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:a}),o[c]?.[l]?.[a]?.map((e=>(0,u.jsx)(f,{...e},e.\uc81c\ubaa9)))]}):(0,u.jsx)(u.Fragment,{children:Object.entries(o[c]?.[l]).map((e=>{let[n,t]=e;return(0,u.jsxs)("div",{className:r,children:[(0,u.jsx)("h2",{children:n}),t.map((e=>(0,u.jsx)(f,{...e},e.\uc81c\ubaa9)))]},n)}))})})}):(0,u.jsx)("div",{children:"Loading..."})}}}}]);