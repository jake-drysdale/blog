"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[280],{1863:function(e,t,n){var l=n(5750),r=n(7294),a=n(5444),s=n(1621),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props.props;return r.createElement("div",{key:e.node.fields.slug},r.createElement("div",{className:"post-card"},r.createElement(s.Z,{tags:e.node.frontmatter.tags}),r.createElement("header",null,r.createElement("h1",null,r.createElement(a.Link,{to:e.node.fields.slug},e.node.frontmatter.title||e.node.fields.slug)),r.createElement("small",null,e.node.frontmatter.date)),e.node.frontmatter.thumbnail&&r.createElement(a.Link,{to:e.node.fields.slug},r.createElement("img",{alt:e.node.frontmatter.thumbnail.childImageSharp.fluid.originalName,src:e.node.frontmatter.thumbnail.childImageSharp.fluid.src})),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.frontmatter.description||e.node.excerpt}})),r.createElement("div",{className:"post-card-readmore"},r.createElement(a.Link,{to:e.node.fields.slug},r.createElement("span",null,"Read more"),r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{d:"M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"})))))))},t}(r.Component);t.Z=function(e){return r.createElement(o,{props:e})}},4422:function(e,t,n){n.r(t);var l=n(5750),r=n(7294),a=n(5444),s=n(7198),o=n(6179),m=n(1863),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,l=this.props.pageContext.index/5+1,i=parseInt((this.props.pageContext.postCount-1)/5+1),c=l-1,p=l+1;return r.createElement(s.Z,{title:t},r.createElement(o.Z,{title:"Posts"}),n.map((function(e){var t=e.node;return r.createElement(m.Z,{key:t.fields.slug,node:t,postClass:"post"})})),1===i||r.createElement("div",{className:"pagenator"},1===l?r.createElement("div",{className:"pagenator-unlinked"},r.createElement("svg",{transform:"scale(-1, 1)",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{d:"M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"})))):r.createElement(a.Link,{className:"pagenator-link",to:1===c?"/":"/"+c},r.createElement("svg",{transform:"scale(-1, 1)",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{d:"M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"})))),r.createElement("div",null,"Page ",l),l===i?r.createElement("div",{className:"pagenator-unlinked"},r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{d:"M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"})))):r.createElement(a.Link,{className:"pagenator-link",to:"/"+p},r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"},r.createElement("g",null,r.createElement("path",{d:"M767.9,499.9L291.6,10l-59.4,61.3l416.6,428.7L232.1,928.7l59.5,61.3L767.9,499.9z"}))))))},t}(r.Component);t.default=i}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-dc9b6718c2fb89f42321.js.map