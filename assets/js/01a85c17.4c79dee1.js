"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(7294);var s=a(512),r=a(5999);const l=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=a(8264),c=a(5281),i=a(1627),g=a(3008),o=a(2503);const h={tag:"tag_Nnez"};var d=a(5893);function u(e){let{letterEntry:t}=e;return(0,d.jsxs)("article",{children:[(0,d.jsx)(o.Z,{as:"h2",id:t.letter,children:t.letter}),(0,d.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,d.jsx)("li",{className:h.tag,children:(0,d.jsx)(g.Z,{...e})},e.permalink)))}),(0,d.jsx)("hr",{})]})}function j(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,d.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,d.jsx)(u,{letterEntry:e},e.letter)))})}var m=a(197);function x(e){let{tags:t,sidebar:a}=e;const r=l();return(0,d.jsxs)(n.FG,{className:(0,s.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage),children:[(0,d.jsx)(n.d,{title:r}),(0,d.jsx)(m.Z,{tag:"blog_tags_list"}),(0,d.jsxs)(i.Z,{sidebar:a,children:[(0,d.jsx)(o.Z,{as:"h1",children:r}),(0,d.jsx)(j,{tags:t})]})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>c});a(7294);var s=a(512),r=a(3692);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(5893);function c(e){let{permalink:t,label:a,count:c}=e;return(0,n.jsxs)(r.Z,{href:t,className:(0,s.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},1627:(e,t,a)=>{a.d(t,{Z:()=>n});a(7294);var s=a(512),r=a(6040),l=a(5893);function n(e){const{toc:t,children:a,...n}=e;return(0,l.jsx)(r.Z,{...n,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("main",{className:(0,s.Z)("col col-7"),children:a}),t&&(0,l.jsx)("div",{className:"col col--2",children:t})]})})})}}}]);