"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[148],{3548:(e,t,a)=>{a.d(t,{n4:()=>c,wj:()=>o,nO:()=>u,iZ:()=>p});var n=a(7294),r=a(902),s=a(5102),l=a(5893);function o(){const e=(0,s.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const i=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return(0,l.jsx)(i.Provider,{value:s,children:t})}function u(){const e=(0,n.useContext)(i);if(null===e)throw new r.i6("BlogPostProvider");return e}var h=a(4996),m=a(2263);const d=e=>new Date(e).toISOString();function g(e){const t=e.map(f);return{author:1===t.length?t[0]:t}}function x(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function p(){const e=o(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,m.Z)(),{withBaseUrl:r}=(0,h.Cg)(),{date:s,title:l,description:i,frontMatter:c,lastUpdatedAt:p}=a,f=t.image??c.image,j=c.keywords??[],v=p?d(p):void 0,w=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":w,mainEntityOfPage:w,url:w,headline:l,name:l,description:i,datePublished:s,...v?{dateModified:v}:{},...g(a.authors),...x(f,r,l),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function f(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}a(3692)},6788:(e,t,a)=>{a.d(t,{Z:()=>v});a(7294);var n=a(512),r=a(3692),s=a(5893);const l="githubSvg_Uu4N";const o="xSvg_y3PF";const i=function(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,s.jsx)("path",{d:"M3.6 9h16.8"}),(0,s.jsx)("path",{d:"M3.6 15h16.8"}),(0,s.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,s.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},c={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},u={twitter:{Icon:function(e){return(0,s.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,s.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,s.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,n.Z)(e.className,l),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,s.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,s.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,s.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,s.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,s.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,n.Z)(e.className,o),style:{"--dark":"#000","--light":"#fff"},children:(0,s.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function h(e){let{platform:t,link:a}=e;const{Icon:l,label:o}=u[h=t]??{Icon:i,label:h};var h;return(0,s.jsx)(r.Z,{className:c.authorSocialLink,href:a,title:o,children:(0,s.jsx)(l,{className:(0,n.Z)(c.authorSocialLink)})})}function m(e){let{author:t}=e;const a=Object.entries(t.socials??{});return(0,s.jsx)("div",{className:c.authorSocials,children:a.map((e=>{let[t,a]=e;return(0,s.jsx)(h,{platform:t,link:a},t)}))})}var d=a(2503);const g={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function x(e){return e.href?(0,s.jsx)(r.Z,{...e}):(0,s.jsx)(s.Fragment,{children:e.children})}function p(e){let{title:t}=e;return(0,s.jsx)("small",{className:g.authorTitle,title:t,children:t})}function f(e){let{name:t,as:a}=e;return a?(0,s.jsx)(d.Z,{as:a,className:g.authorName,children:t}):(0,s.jsx)("span",{className:g.authorName,children:t})}function j(e){let{count:t}=e;return(0,s.jsx)("span",{className:(0,n.Z)(g.authorBlogPostCount),children:t})}function v(e){let{as:t,author:a,className:r,count:l}=e;const{name:o,title:i,url:c,imageURL:u,email:h,page:d}=a,v=d?.permalink||c||h&&`mailto:${h}`||void 0;return(0,s.jsxs)("div",{className:(0,n.Z)("avatar margin-bottom--sm",r,g[`author-as-${t}`]),children:[u&&(0,s.jsx)(x,{href:v,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:(0,n.Z)("avatar__photo",g.authorImage),src:u,alt:o})}),(o||i)&&(0,s.jsxs)("div",{className:(0,n.Z)("avatar__intro",g.authorDetails),children:[(0,s.jsxs)("div",{className:"avatar__name",children:[o&&(0,s.jsx)(x,{href:v,children:(0,s.jsx)(f,{name:o,as:t})}),l&&(0,s.jsx)(j,{count:l})]}),!!i&&(0,s.jsx)(p,{title:i}),(0,s.jsx)(m,{author:a})]})]})}},1161:(e,t,a)=>{a.d(t,{Z:()=>O});a(7294);var n=a(512),r=a(3548),s=a(5893);function l(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}var o=a(3692);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.nO)(),{permalink:c,title:u}=a,h=l?"h1":"h2";return(0,s.jsx)(h,{className:(0,n.Z)(i.title,t),children:l?u:(0,s.jsx)(o.Z,{to:c,children:u})})}var u=a(5999),h=a(8824),m=a(9788);const d={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,h.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.jsx)(s.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:a}=(0,r.nO)(),{date:l,readingTime:o}=a,i=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,n.Z)(d.container,"margin-vert--md",t),children:[(0,s.jsx)(x,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(g,{readingTime:o})]})]});var c}var j=a(6788);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function w(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.nO)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,s.jsx)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,s.jsx)("div",{className:(0,n.Z)(!o&&(i?"col col--12":"col col--6"),o?v.imageOnlyAuthorCol:v.authorCol),children:(0,s.jsx)(j.Z,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function b(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(f,{}),(0,s.jsx)(w,{})]})}var Z=a(8780),N=a(5042);function _(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.nO)();return(0,s.jsx)("div",{id:l?Z.uR:void 0,className:(0,n.Z)("markdown",a),children:(0,s.jsx)(N.Z,{children:t})})}var k=a(5281),M=a(7265),P=a(1526);function y(){return(0,s.jsx)("b",{children:(0,s.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,s.jsx)(o.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,s.jsx)(y,{})})}function B(){const{metadata:e,isBlogPostPage:t}=(0,r.nO)(),{tags:a,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:u}=e,h=!t&&i,m=a.length>0;if(!(m||h||o))return null;if(t){const e=!!(o||u||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,n.Z)("row","margin-top--sm",k.k.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(P.Z,{tags:a})})}),e&&(0,s.jsx)(M.Z,{className:(0,n.Z)("margin-top--sm",k.k.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:u,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,n.Z)("col",{"col--9":h}),children:(0,s.jsx)(P.Z,{tags:a})}),h&&(0,s.jsx)("div",{className:(0,n.Z)("col text--right",{"col--3":m}),children:(0,s.jsx)(C,{blogPostTitle:l,to:e.permalink})})]})}function O(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.nO)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(l,{className:(0,n.Z)(o,a),children:[(0,s.jsx)(b,{}),(0,s.jsx)(_,{children:t}),(0,s.jsx)(B,{})]})}},2244:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var n=a(512),r=a(3692),s=a(5893);function l(e){const{permalink:t,title:a,subLabel:l,isNext:o}=e;return(0,s.jsxs)(r.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(512),r=a(3692);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(5893);function o(e){let{permalink:t,label:a,count:o,description:i}=e;return(0,l.jsxs)(r.Z,{href:t,title:i,className:(0,n.Z)(s.tag,o?s.tagWithCount:s.tagRegular),children:[a,o&&(0,l.jsx)("span",{children:o})]})}},1526:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(512),r=a(5999),s=a(3008);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=a(5893);function i(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,n.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(s.Z,{...e})},e.permalink)))})]})}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(7294),r=a(2263);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),s=a.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(a,t,e)}}}}]);