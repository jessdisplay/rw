import{f as g,r as i,i as v,c as y,b as e,p,u as f,o as m,q as b}from"./BKRy_-AS.js";import{c as A}from"./COyeP8yo.js";import h from"./CgRIHewm.js";import{_ as w}from"./BDVmOmC9.js";import I from"./D-vW-gRi.js";import L from"./Drn9SzCD.js";import S from"./BepaCKOz.js";import{_ as T}from"./CJ6CnIyG.js";import k from"./BoP3IWF2.js";import{_ as x}from"./nG9u8FNR.js";import G from"./Bh7Kf42S.js";import{u as M}from"./D28ezPjp.js";import"./B5VcmQLk.js";import"./DZlax5pB.js";import"./CBsxg4Lr.js";import"./CaJz0XkV.js";import"./CzlqkNfV.js";import"./C0dg6FaB.js";import"./D1M5bfir.js";const B={class:""},P=`
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
  },
  "settings": *[_type == "investorPageSettings"][0]{
    teamGridLayout,
    tractionGridLayout,
    roadmapLimit,
    teamSectionTitle,
    roadmapSectionTitle,
    faqSectionTitle,
    showFAQs,
    heroVideo,
    heroVideoFile
  },
  "teamMembers": *[_type == "teamMember" && isActive == true] | order(order asc){
    _id,
    name,
    role,
    bio,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    linkedIn,
    twitter,
    order,
    isActive
  },
  "roadmapItems": *[_type == "roadmapItem" && isActive == true] | order(order asc){
    _id,
    period,
    heading,
    description,
    image1{
      asset->{
        _id,
        url
      },
      alt
    },
    image2{
      asset->{
        _id,
        url
      },
      alt
    },
    milestones[]{
      title,
      completed
    },
    order,
    isActive
  }
}
`,Z=g({__name:"index",async setup(R){let o,u;M({title:"About -",meta:[{name:"description",content:"About RiseOS, the operating system for the future."},{property:"og:title",content:"RiseOS - About"},{property:"og:description",content:"About RiseOS, the operating system for the future."}]});const{width:d}=b(),l=i([]),r=i([]),s=i([]),t=i(null),a=([o,u]=v(()=>A.fetch(P)),o=await o,u(),o);if(l.value=a.stories,r.value=a.teamMembers,s.value=a.roadmapItems,t.value=a.settings,t.value?.roadmapLimit&&s.value&&(s.value=s.value.slice(0,t.value.roadmapLimit)),t.value?.teamGridLayout&&r.value){const[c,n]=t.value.teamGridLayout.split("x").map(Number),_=c*n;r.value=r.value.slice(0,_)}return(c,n)=>(m(),y("main",B,[e(L),f(d)>=1024?(m(),p(k,{key:0})):(m(),p(G,{key:1})),e(x),e(S,{"team-members":r.value,"grid-layout":t.value?.teamGridLayout},null,8,["team-members","grid-layout"]),e(h,{stories:l.value},null,8,["stories"]),e(T,{"roadmap-items":s.value},null,8,["roadmap-items"]),e(I),e(w)]))}});export{Z as default};
