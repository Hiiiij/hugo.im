(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});var i=n(0),a=n.n(i),r=n(265);t.default=function(e){return a.a.createElement(r.a,e)};var o="3562467142"},164:function(e,t,n){"use strict";var i=n(150).b.h1.withConfig({displayName:"H1",componentId:"e5vjwq-0"})(["font-size:",";margin:",";padding:",";text-align:",";"],function(e){return e.theme.h1.fontSize},function(e){return e.theme.h1.margin},function(e){return e.theme.h1.padding},function(e){return e.theme.h1.textAlign});t.a=i},172:function(e,t,n){"use strict";n(27);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(154),l=function(e){return a.a.createElement("time",Object.assign({},e,{dateTime:e.date}),a.a.createElement(s.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};l.propTypes={date:o.a.string.isRequired},t.a=l},176:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(158),l=n(150),u=n(172),m=l.b.li.withConfig({displayName:"PostListItem__Li",componentId:"y3aid7-0"})(["padding:",";margin:",";transition:0.3s;&:hover{background-color:",";border-radius:",";transition:0.3s;}"],function(e){return e.theme.blog.list.item.padding},function(e){return e.theme.blog.list.item.margin},function(e){return e.theme.blog.list.item.hover.backgroundColor},function(e){return e.theme.borderRadius}),c=l.b.header.withConfig({displayName:"PostListItem__Header",componentId:"y3aid7-1"})(["padding:0;font-size:",";line-height:",";"],function(e){return e.theme.blog.list.item.header.fontSize},function(e){return e.theme.blog.list.item.header.lineHeight}),d=Object(l.b)(u.a).withConfig({displayName:"PostListItem__Time",componentId:"y3aid7-2"})(["font-size:",";font-weight:bold;color:",";width:100%;display:block;line-height:1.2;"],function(e){return e.theme.blog.list.item.header.time.fontSize},function(e){return e.theme.blog.list.item.header.time.color}),p=l.b.p.withConfig({displayName:"PostListItem__P",componentId:"y3aid7-3"})(["font-size:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.p.fontSize},function(e){return e.theme.blog.list.item.p.margin},function(e){return e.theme.blog.list.item.p.padding},function(e){return e.theme.blog.list.item.p.lineHeight}),g=function(e){var t=e.post;return a.a.createElement(m,{key:t.fields.slug},a.a.createElement(s.a,{to:t.fields.slug},a.a.createElement(c,null,a.a.createElement(d,{pubdate:"pubdate",date:t.frontmatter.date}),t.frontmatter.title),a.a.createElement(p,null,t.excerpt)))};g.propTypes={post:o.a.shape({fields:o.a.shape({slug:o.a.string.isRequired,langKey:o.a.string.isRequired}),frontmatter:o.a.shape({title:o.a.string.isRequired,date:o.a.string.isRequired}),excerpt:o.a.string.isRequired})};var f=g,h=l.b.ul.withConfig({displayName:"PostList__Ul",componentId:"sc-1afbvcq-0"})(["list-style:none;margin:",";padding:",";"],function(e){return e.theme.blog.list.ul.margin},function(e){return e.theme.blog.list.ul.padding}),b=function(e){return a.a.createElement("nav",null,a.a.createElement(h,null,e.posts.map(function(e){return a.a.createElement(f,{key:e.fields.slug,post:e})})))};b.propTypes={posts:o.a.array};t.a=b},265:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(176),l=n(164),u=n(165),m=n.n(u),c=n(154),d=n(167),p=function(e){return a.a.createElement(d.a,{location:e.location},a.a.createElement("section",{className:"posts"},a.a.createElement(c.b,{id:"posts"},function(e){return a.a.createElement("header",null,a.a.createElement(m.a,{title:e,meta:[{name:"description",content:e}]}),a.a.createElement(l.a,null,e))}),a.a.createElement(s.a,{posts:e.data.allMarkdownRemark.edges.map(function(e){return e.node})})))};p.propTypes={data:o.a.object.isRequired,location:o.a.object.isRequired},t.a=p}}]);
//# sourceMappingURL=component---src-pages-blog-en-js-ad5b9f244908cb843193.js.map