(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{6243:function(e,t,s){Promise.resolve().then(s.bind(s,9840))},1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},unstable_getImgProps:function(){return c}});let n=s(1024),i=s(2301),l=s(7873),r=s(3222),a=n._(s(5033)),c=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=r.Image},2384:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(7437);let i=e=>{let{onClick:t,children:s}=e;return(0,n.jsx)("button",{className:"px-3 py-3 hover:bg-gray-200 active:bg-gray-400",onClick:t,children:s})};var l=s(4033);function r(e){let t=(0,l.useRouter)(),s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("going to the ".concat(e," page")),t.push("/".concat(e))};return(0,n.jsxs)("div",{className:"bg-gray-100 w-screen p-4 h-1/8",children:[(0,n.jsx)(i,{onClick:()=>s(),children:(0,n.jsx)("div",{className:"text-black",children:"Home"})}),(0,n.jsx)(i,{onClick:()=>s("about"),children:(0,n.jsx)("div",{className:"text-black",children:"About"})}),(0,n.jsx)(i,{onClick:()=>s("media"),children:(0,n.jsx)("div",{className:"text-black",children:"Media"})}),(0,n.jsx)(i,{onClick:()=>s("contact"),children:(0,n.jsx)("div",{className:"text-black",children:"Contact"})}),(0,n.jsx)(i,{onClick:()=>s("resources"),children:(0,n.jsx)("div",{className:"text-black",children:"Resources"})}),(0,n.jsx)(i,{onClick:()=>s("trivia"),children:(0,n.jsx)("div",{className:"text-black",children:"Trivia Game"})})]})}},9840:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var n,i,l=s(7437),r={src:"/_next/static/media/TriviaGameBackground.9273a625.jpeg",height:148,width:261,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAADAQEBAQAAAAAAAAAAAAABAgMAIQQi/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQEAAQUAAAAAAAAAAAAAAAABAAIDBBES/9oADAMBAAIRAxEAPwCftSaeWjmCOAjfJHDw5maxlHVRuHtqE//Z",blurWidth:8,blurHeight:5},a=s(2384),c=s(6691),o=s.n(c);function A(e){let{size:t}=e;return(0,l.jsx)("div",{style:{margin:t}})}(n=i||(i={})).small="10px",n.medium="30px",n.large="100px";var d=s(2265),u=s(7443),h=s.n(u);function x(){var e;let[t,s]=(0,d.useState)(0),[n,c]=(0,d.useState)([]),[u,x]=(0,d.useState)([]),[j,g]=(0,d.useState)([]),[f,m]=(0,d.useState)(!1),[v,p]=(0,d.useState)(0),[b,y]=(0,d.useState)(),[C,k]=(0,d.useState)();async function z(){let e=await E();for(let t=0;t<5;t++){let s=e.results[t].question;s=w(s);let n=e.results[t].incorrect_answers,i=e.results[t].correct_answer;n.push(i),n=function(e){for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}(n=O(n)),g(e=>[...e,i]),x(e=>[...e,n]),c(e=>[...e,s])}}(0,d.useEffect)(()=>{f&&z()},[f]);let w=e=>e=(e=e.replace(/&#039;/g,"'")).replace(/&quot;/g,'"'),O=e=>{for(let t=0;t<e.length;t++)e[t]=w(e[t]);return e},E=()=>new Promise((e,t)=>{h().ajax({method:"GET",url:"https://opentdb.com/api.php?amount=5",success:function(t){e(t)},error:function(e){t(e)}})}),S=(e,t)=>{y(e),k(t)},B=()=>{b===j[t]&&p(e=>e+1)};return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{style:{position:"absolute",width:"100%",height:"100vh"},children:[(0,l.jsx)(o(),{src:r,alt:"backgroundTriviaImage",layout:"fill",objectFit:"cover",quality:100}),(0,l.jsxs)("div",{style:{position:"absolute",width:"100%"},children:[(0,l.jsx)(a.default,{}),(0,l.jsx)(A,{size:i.small}),(0,l.jsxs)("div",{style:{display:"grid",justifyContent:"center"},children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"Welcome to the trivia game"})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"Answer all 5 questions correctly to win big"})})]}),f?t===n.length?(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Results: ",v,"/5"]}),(0,l.jsx)("button",{onClick:()=>{s(0),c([]),x([]),p(0),g([]),z()},children:"Start"})]}):(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsxs)("div",{style:{display:"grid",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(A,{size:i.small}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("p",{children:["Question ",t+1,"/5 "]}),(0,l.jsx)(A,{size:i.small}),(0,l.jsxs)("p",{children:["Score: ",v,"/5"]})]}),(0,l.jsx)("h1",{children:n[t]})]})]}),(0,l.jsx)(A,{size:i.small}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:null===(e=u[t])||void 0===e?void 0:e.map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:()=>S(e,t),children:e})}))}),(0,l.jsx)("button",{onClick:()=>{B(),k(5),s(e=>e+1)},children:t===n.length-1?"Finish":"Next"})]}):(0,l.jsx)("button",{onClick:()=>{console.log("starting game"),m(!0)},children:"Start"})]})]})]})})}},6691:function(e,t,s){e.exports=s(1295)}},function(e){e.O(0,[38,702,971,596,744],function(){return e(e.s=6243)}),_N_E=e.O()}]);