import{C as u}from"./D9gvprdF.js";import{c as p}from"./BiNzPWAM.js";import{_ as m}from"./BmUTA-VJ.js";import{_ as d}from"./B_QynwDa.js";import{_ as g}from"./Y5WpnpWN.js";import _ from"./BnhdhX_I.js";import f from"./D0QqwLI9.js";import{u as y}from"./CRLeuo1K.js";import{f as v,r as s,i as h,c as B,b as t,o as P}from"./Cv1gPu3F.js";import"./C1QKLMgA.js";import"./Btmv9wtd.js";import"./p6LjkSEb.js";import"./BXU1TXim.js";import"./D_jfpuPu.js";const b={class:"pb-5"},A=`
{
  "heroPost": *[_type in ["article", "interview", "resource", "story"] && featured == true] | order(publishAt desc)[0]{
    ...,
    "slug": slug.current,
    coverImg{
      asset->
    }
  },
  "latestPost": *[_type in ["article", "interview", "resource", "story"] && latest == true] | order(publishAt desc)[0]{
    ...,
    "slug": slug.current,
    coverImg{
      asset->
    }
  },
  "stories": *[_type == "story"] | order(date desc){
    ...,
    image{
      asset->
    }
  },
  "storyGridPosts": [
    ...*[_type == "article"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    },
    ...*[_type == "interview"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    },
    ...*[_type == "resource"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    }
  ] | order(publishAt desc)[0...5],
  "latestBlogs": *[_type == "story" && "investor" in type] | order(date desc)[0...5]{
    ...,
    "slug": slug.current,
    image{
      asset->,
      alt
    }
  }
}
`,z=v({__name:"index",async setup(w){let r,o;y({title:"Blog -",meta:[{name:"description",content:"Blog for RiseOS, the operating system for the future."},{property:"og:title",content:"RiseOS - Blog"},{property:"og:description",content:"Blog for RiseOS, the operating system for the future."}]});const l=s(null),a=s(null),i=s([]),c=s([]),n=s([]),e=([r,o]=h(()=>p.fetch(A)),r=await r,o(),r);return l.value=e.heroPost,a.value=e.latestPost,i.value=e.stories,c.value=e.storyGridPosts,n.value=e.latestBlogs,(I,x)=>(P(),B("div",b,[t(m,{post:l.value},null,8,["post"]),t(f,{posts:c.value},null,8,["posts"]),t(d,{post:a.value},null,8,["post"]),t(_,{stories:i.value},null,8,["stories"]),t(g,{posts:n.value},null,8,["posts"]),t(u)]))}});export{z as default};
