window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{if(!req.c){return}
for(const m of Object.keys(req.c).map((x)=>req.c[x]?.exports).filter((x)=>x)){if(m.default&&m.default.getToken!==undefined){return copy(m.default.getToken())}
if(m.getToken!==undefined){return copy(m.getToken())}}},]);console.log(`%cYou now have your token in the clipboard!`,"font-size: 20px")