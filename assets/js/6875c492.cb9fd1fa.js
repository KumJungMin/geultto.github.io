"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{9703:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(5999),s=n(2244),r=n(5893);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.Z,{permalink:i,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(3548),s=n(1161),r=n(5893);function i(e){let{items:t,component:n=s.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n4,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var a=n(512),s=n(5999),r=n(8264),i=n(5281),l=n(8242),o=n(3692),c=n(1627),d=n(9703),h=n(197),u=n(9985),g=n(3230),m=n(2503),x=n(5893);function p(e){let{tag:t}=e;const n=(0,l.Wi)(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.d,{title:n,description:t.description}),(0,x.jsx)(h.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const i=(0,l.Wi)(t);return(0,x.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,x.jsx)(g.Z,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(m.Z,{as:"h1",children:i}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.Z,{href:t.allTagsPath,children:(0,x.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.Z,{items:n}),(0,x.jsx)(d.Z,{metadata:r})]})}function f(e){return(0,x.jsxs)(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage),children:[(0,x.jsx)(p,{...e}),(0,x.jsx)(j,{...e})]})}},3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(512),s=n(4061),r=n(5281),i=n(9047),l=n(5893);function o(e){let{className:t}=e;return(0,l.jsx)(i.Z,{type:"caution",title:(0,l.jsx)(s.cI,{}),className:(0,a.Z)(t,r.k.common.unlistedBanner),children:(0,l.jsx)(s.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.T$,{}),(0,l.jsx)(o,{...e})]})}},8242:(e,t,n)=>{n.d(t,{HV:()=>c,Wi:()=>l,ds:()=>o,fw:()=>d});n(7294);var a=n(5999),s=n(8824),r=n(5893);function i(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=i();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=i();return(0,a.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,a.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(a.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},4061:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>i,eU:()=>l,ht:()=>c,xo:()=>d});n(7294);var a=n(5999),s=n(5742),r=n(5893);function i(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1627:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(512),s=n(6040),r=n(5893);function i(e){const{toc:t,children:n,...i}=e;return(0,r.jsx)(s.Z,{...i,children:(0,r.jsx)("div",{className:"container margin-vert--lg",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("main",{className:(0,a.Z)("col col-7"),children:n}),t&&(0,r.jsx)("div",{className:"col col--2",children:t})]})})})}},8398:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(4087),s=n(7294),r=n(8192);const i="curationContentContainer_ljt9",l="curationContent_VE8p",o="authorContainer_mfGu",c="authorImg_Jh1K",d="curationContentLink_G8xS",h="curationContentThumbnail_T71x";var u=n(5893);function g(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}const m=s.createContext({curation:null,authors:null,metadata:null}),x=e=>{const{"\uc81c\ubaa9":t,"\uc8fc\uc18c":n,"\uc791\uac00":a,"\uc124\uba85":r}=e,i=s.useContext(m).authors,g=s.useContext(m).metadata,x=i[a],p=g.find((e=>e.author===a))?.ogImage;return(0,u.jsx)("div",{className:l,children:x?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("img",{className:c,src:x.image_url,alt:x.name}),(0,u.jsx)("a",{href:x.url,target:"_blank",rel:"noreferrer",children:x.name}),"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:n,target:"_blank",rel:"noreferrer",children:t}),p&&(0,u.jsx)("img",{className:h,src:p,alt:x.name}),(0,u.jsx)("p",{children:r})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{children:[a,"\ub2d8\uc758"]}),(0,u.jsx)("a",{className:d,href:n,target:"_blank",rel:"noreferrer",children:t}),(0,u.jsx)("p",{children:r})]})})},p={...a.Z,Curation:e=>{let{"\ud68c\ucc28":t,"\uae30\uc218":n=10,"\uc9c1\uad70":a}=e;const l=g(t),o=g(n),[c,d]=s.useState(null),[h,p]=s.useState(null),[j,f]=s.useState(null);return s.useEffect((()=>{(async()=>{try{const e=await fetch(`/__metadata__/curation-${n}-${t}.json`),a=await e.json();f(a)}catch(e){console.error("Error loading the __metadata__ file:",e)}})()})),s.useEffect((()=>{(async()=>{try{const e=await fetch("/curation.yml"),t=await e.text(),n=r.ZP.parse(t);d(n)}catch(e){console.error("Error loading the Curation YAML file:",e)}})()}),[]),s.useEffect((()=>{(async()=>{try{const e=await fetch("/authors.yml"),t=await e.text(),n=r.ZP.parse(t);p(n)}catch(e){console.error("Error loading the Author YAML file:",e)}})()}),[]),c&&h?(0,u.jsx)(m.Provider,{value:{curation:c,authors:h,metadata:j},children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:a}),c[o]?.[l]?.[a]?.map((e=>(0,u.jsx)(x,{...e},e.\uc81c\ubaa9)))]}):(0,u.jsx)(u.Fragment,{children:Object.entries(c[o]?.[l]).map((e=>{let[t,n]=e;return(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("h2",{children:t}),n.map((e=>(0,u.jsx)(x,{...e},e.\uc81c\ubaa9)))]},t)}))})})}):(0,u.jsx)("div",{children:"Loading..."})}}}}]);