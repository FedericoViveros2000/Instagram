import{r as n,h as D,j as N,k as K,b as l,d as a,e,F as P,g as T,t as b,f as s,l as w,m as M,n as F,T as j,p as G,_ as Q,q as O,s as W,u as X,x as Y,y as Z,w as V,z as B,A as ee,S as se,B as te,C as le}from"./index.26c379a7.js";import{_ as ae}from"./comments.9a0528ee.js";import{_ as q}from"./send.cd6999bd.js";import{_ as oe}from"./bootmark.633eb89b.js";const re={class:"w-screen flex overflow-auto pl-3 storie text-xs"},ce=G('<div class="mr-3 text-center relative"><input type="file" capture="user" class="hidden" id="story"><label for="story"><figure class="mb-3 w-[70px] h-[70px] rounded-full overflow-hidden"><img src="'+Q+'" alt="Tu historia" loading="lazy" class="w-full h-full object-cover opacity-80 dark:opacity-100 brightness-110"></figure><span class="absolute bottom-7 right-1 px-1.5 text-white rounded-full bg-skyblue">+</span><p class="text-sm">Tu historia</p></label></div>',1),ne=["onClick"],ie=["src","alt"],ue={class:"truncate max-w-[70px] text-sm"},de={key:0,class:"w-full h-screen fixed z-50 top-0 bg-white dark:bg-black"},_e={class:"w-full h-[92%]"},me={class:"h-full w-full"},he=["src","alt"],fe=e("div",{class:"w-full px-3 mt-3.5 flex items-center"},[e("input",{type:"text",class:"w-full outline-0 py-2 dark:bg-black border-[1px] border-white rounded-full text-base px-4 text-black",placeholder:"Enviar mensaje"}),e("figure",null,[e("img",{src:O,alt:"Me gusta",class:"icons w-8 h-8 mx-3"})]),e("figure",null,[e("img",{src:q,alt:"Enviar",class:"icons w-6 h-6 mx-3"})])],-1),pe={__name:"StoriesComponent",props:{stories:Array},setup(h){const $=h;let z=n([]),r=D({imageStorie:[],name:""}),_=n(0),{stories:C}=N($);const A=(g,m)=>{r.imageStorie=g,r.name=m};return K(_,(g,m)=>{r.imageStorie.length-1===g&&setTimeout(()=>{clearInterval(z.value),r.name="",_.value=0,r.imageStorie=[]},3e3)}),(g,m)=>(l(),a(P,null,[e("div",re,[ce,(l(!0),a(P,null,T(s(C),({id:c,category:k,images:x})=>(l(),a("div",{key:c,class:"mr-3 text-center"},[e("figure",{class:"storie-round mb-3",onClick:f=>A(x,k.name)},[e("img",{src:k.image,alt:k.name,class:"w-full h-full object-cover rounded-full",loading:"lazy"},null,8,ie)],8,ne),e("p",ue,b(k.name),1)]))),128))]),w(j,{"enter-from-class":"scale-0","enter-active-class":"transition-transform duration-300 linear","enter-to-class":"scale-1","leave-from-class":"scale-1","leave-active-class":"transition-transform duration-300 linear","leave-to-class":"scale-0"},{default:M(()=>[s(r).imageStorie.length>0?(l(),a("div",de,[e("p",{class:"absolute top-5 left-5 text-sm",onClick:m[0]||(m[0]=c=>s(r).imageStorie=[])},b(s(r).name),1),e("div",_e,[e("figure",me,[e("img",{src:s(r).imageStorie[s(_)],alt:s(_),class:"h-full object-cover",loading:"lazy"},null,8,he)]),fe])])):F("",!0)]),_:1})],64))}};var ve="/Instagram/assets/likedPost.8d831aea.svg",be="/Instagram/assets/bootmarkSave.899cf829.svg";const ge={class:"w-full h-screen absolute top-16 animate-pulse px-3"},ke=G('<p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p><div class="p-2 h-2/3 bg-slate-400 rounded-md"></div><p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p><p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p><p class="p-1 bg-slate-400 w-full rounded-xl my-3"></p>',5),we=[ke],xe={__name:"LoadingPosts",setup(h){let $=n(5);return(z,r)=>(l(),a("div",ge,[(l(!0),a(P,null,T(s($),(_,C)=>(l(),a("div",{class:"h-2/5 rounded-lg p-3 mb-3 bg-slate-200",key:C},we))),128))]))}};const d=h=>(te("data-v-77c35d25"),h=h(),le(),h),ye={class:"flex items-center mb-3 mx-3"},Se={class:"w-8 h-8 overflow-hidden rounded-full"},$e=["src","alt"],Ce={class:"font-bold ml-4 text-base"},Ie=["onDblclick"],Me={class:"slider"},je=["src","alt"],Pe={class:"instagram-heart absolute top-0"},Te={key:0,class:"dark:bg-slate-500 bg-white text-start px-3 py-2 absolute w-full bottom-0 flex justify-between items-center"},ze={class:"inline-block mr-3"},Ae=["src","alt"],Ve={class:"inline-block absolute top-3 dark:text-white"},Be=d(()=>e("p",{class:"text-skyblue"},"Guardar en coleccion",-1)),De={class:"px-3 bg-white dark:bg-black relative z-10"},Ee={class:"w-full flex justify-between items-center py-2 mt-1 text-sm relative mb-7"},Le={class:"text-start text-2xl"},Ne=["onClick"],Fe=d(()=>e("img",{src:O,alt:"Like Icon",class:"icon-no-like"},null,-1)),Ge=[Fe],Oe=["onClick"],qe=d(()=>e("img",{src:ve,alt:"Like icon",class:"icons-post"},null,-1)),He=[qe],Re=d(()=>e("figure",{class:"absolute left-10 top-2"},[e("img",{src:ae,alt:"Comments icon",class:"icons"})],-1)),Ue=["onClick"],Je=d(()=>e("img",{src:q,alt:"Send icon",class:"icons mt-0.5 w-6 h-6"},null,-1)),Ke=[Je],Qe=["onClick"],We=d(()=>e("img",{src:be,alt:"Saved Icon",class:"icons"},null,-1)),Xe=[We],Ye=["onClick"],Ze=d(()=>e("img",{src:oe,alt:"Saved Icon",class:"icons"},null,-1)),es=[Ze],ss=d(()=>e("p",{class:"font-bold text-start mt-3"},"4.716 Me gusta",-1)),ts={class:"text-justify text-sm my-2"},ls={class:"font-bold"},as=d(()=>e("p",{class:"text-slate-400 text-start text-xs"},"Ver los comentarios",-1)),os=d(()=>e("textarea",{class:"w-full mt-2 h-5 text-xs outline-none dark:bg-black",placeholder:"Agregar Comentario..."},null,-1)),rs={class:"flex items-center justify-center"},cs={__name:"PostsComponent",props:{posts:Array},setup(h){const $=h;let{dispatch:z,state:r,commit:_}=X(),C=n([]);n(0),n(0),n(0);let A=n(null);D({show:!1,name:"",image:""});let g=n([]),m=n([]),c=D({post:[],showSaved:[],showSavedMessage:"",bootMark:[]}),k=n(1),{posts:x}=N($),f=n([]);const H=(t,p)=>{m.value[t]=!0,f.value[t]?f.value[t]=!1:f.value[t]=!0;let v=setTimeout(()=>{m.value[t]=!1,clearTimeout(v)},500);_("likedPost",p)},E=t=>{c.bootMark[t]?c.bootMark[t]=!1:(c.showSaved[t]=!0,c.bootMark[t]=!0,c.showSavedMessage="Guardado");let p=setTimeout(()=>{c.showSaved[t]=!1,clearTimeout(p)},3e3)},L=(t,p)=>{f.value[t]?f.value[t]=!1:f.value[t]=!0,_("likedPost",p)},R=t=>{_("showSendMessage",t)};return Y(()=>{(p=>{let v={root:null,rootMargin:"100px",threshold:1},y=(i,S)=>{i.forEach(o=>{o.isIntersecting&&(k.value=o.target.alt)})};const I=new IntersectionObserver(y,v);p.forEach(i=>{I.observe(i)})})(g.value)}),(t,p)=>s(x)?(l(),a("div",{key:1,class:"absolute top-14",ref_key:"container",ref:A},[w(pe,{stories:s(x)},null,8,["stories"]),(l(!0),a(P,null,T(s(x),({id:v,title:y,images:I,category:i,description:S},o)=>(l(),a("div",{class:"mt-5",key:v,ref_for:!0,ref:u=>s(C)[o]=u},[e("div",ye,[e("figure",Se,[e("img",{src:i.image,alt:y,class:"object-cover"},null,8,$e)]),e("p",Ce,b(i.name),1)]),e("div",{class:"min-h-[30vh] bg-slate-200 relative dark:bg-slate-800",onDblclick:u=>H(o,{id:v,title:y,category:i,description:S})},[V(e("p",{class:"absolute top-3 right-3 bg-slate-cant py-1.5 px-3 text-xs rounded-2xl"},b(s(k))+"/"+b(I.length),513),[[B,I.length>1]]),e("div",Me,[(l(!0),a(P,null,T(I,(u,U)=>(l(),a("img",{class:"h-full object-cover",key:u,src:u,alt:U,ref_for:!0,ref:J=>s(g).push(J)},null,8,je))),128))]),w(j,{name:"bounce"},{default:M(()=>[V(e("div",Pe,null,512),[[B,s(m)[o]]])]),_:2},1024),w(j,{"enter-from-class":"translate-y-full","enter-active-class":"transition-transform duration-300 linear","enter-to-class":"translate-y-0","leave-from-class":"translate-y-0","leave-active-class":"transition-transform duration-700 linear","leave-to-class":"translate-y-full"},{default:M(()=>[s(c).showSaved[o]?(l(),a("div",Te,[e("div",null,[e("figure",ze,[e("img",{src:i.image,alt:S,class:"w-7 h-7 object-cover"},null,8,Ae)]),e("p",Ve,b(s(c).showSavedMessage),1)]),Be])):F("",!0)]),_:2},1024)],40,Ie),e("div",De,[e("div",Ee,[e("div",Le,[w(j,{"enter-from-class":"scale-0","enter-active-class":"transition-transform duration-300 linear","enter-to-class":"scale-100","leave-from-class":"scale-100","leave-active-class":"transition-transform duration-300 linear","leave-to-class":"scale-0"},{default:M(()=>[s(f)[o]?(l(),a("figure",{key:1,onClick:u=>L(o,{id:v,title:y,category:i,description:S}),class:"absolute top-2 left-0"},He,8,Oe)):(l(),a("figure",{key:0,class:"absolute top-2 left-0",onClick:u=>L(o,{id:v,title:y,category:i,description:S})},Ge,8,Ne))]),_:2},1024),Re,e("figure",{class:"absolute left-20 top-2",onClick:u=>R(s(x)[o])},Ke,8,Ue)]),e("div",null,[w(j,{"enter-from-class":"scale-0","enter-active-class":"transition-transform duration-300 linear","enter-to-class":"scale-100","leave-from-class":"scale-100","leave-active-class":"transition-transform duration-300 linear","leave-to-class":"scale-0"},{default:M(()=>[s(c).bootMark[o]?(l(),a("figure",{key:0,onClick:u=>E(o),class:"absolute right-0"},Xe,8,Qe)):(l(),a("figure",{key:1,onClick:u=>E(o),class:"absolute right-0"},es,8,Ye))]),_:2},1024)])]),ss,e("p",ts,[e("span",ls,b(i.name)+": ",1),ee(b(S),1)]),as,os])]))),128)),V(e("div",rs,[w(se)],512),[[B,s(r).posts.loadMoreArticles]])],512)):(l(),Z(xe,{key:0}))}};var _s=W(cs,[["__scopeId","data-v-77c35d25"]]);export{_s as default};
