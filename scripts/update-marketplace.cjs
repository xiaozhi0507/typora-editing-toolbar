'use strict';
const fs = require('node:fs');
const path = require('node:path');
const compare = (a,b) => {const x=a.split('.').map(Number),y=b.split('.').map(Number);for(let i=0;i<3;i++)if(x[i]!==y[i])return x[i]>y[i]?1:-1;return 0;};
function validate(catalog) {
 if(catalog?.schemaVersion!==1 || typeof catalog.name!=='string' || !catalog.name.trim() || !Array.isArray(catalog.modules) || catalog.modules.length>500) throw Error('Invalid marketplace');
 const ids=new Set();
 for(const row of catalog.modules) {
  if(!row || !/^[a-z][a-z0-9-]{1,63}$/.test(row.id) || ids.has(row.id)) throw Error('Invalid or duplicate module ID');
  ids.add(row.id);
  for(const key of ['version','minHostVersion']) if(typeof row[key]!=='string'||row[key].length>32||!/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(row[key])) throw Error('Invalid '+key);
  if(typeof row.name!=='string'||!row.name.trim()||row.apiVersion!==1||!/^[a-f0-9]{64}$/i.test(row.sha256)) throw Error('Incomplete module metadata');
  for(const key of ['packageUrl','documentationUrl']) {
   if(key==='documentationUrl'&&!row[key])continue;
   const url=new URL(row[key]);
   if(url.protocol!=='https:'||url.username||url.password)throw Error('Expected public HTTPS URL');
  }
 }
 return catalog;
}
function merge(current, incoming) {
 validate(current);validate(incoming);
 const modules=new Map(current.modules.map(row=>[row.id,row]));
 for(const row of incoming.modules){
  const old=modules.get(row.id);
  if(old){const diff=compare(row.version,old.version);if(diff<0)throw Error('Refusing version downgrade: '+row.id);if(diff===0&&row.sha256.toLowerCase()!==old.sha256.toLowerCase())throw Error('Same version has different contents: '+row.id);}
  const next={...row};
  if(!next.documentationUrl&&old?.documentationUrl)next.documentationUrl=old.documentationUrl;
  modules.set(row.id,next);
 }
 return validate({...current,modules:[...modules.values()].sort((a,b)=>a.id.localeCompare(b.id))});
}
if(require.main===module){
 const [incomingFile,targetArg]=process.argv.slice(2);
 if(!incomingFile)throw Error('Usage: node scripts/update-marketplace.cjs generated-marketplace.json [target-marketplace.json]');
 const target=path.resolve(targetArg||path.join(__dirname,'../marketplace.json'));
 const read=file=>JSON.parse(fs.readFileSync(file,'utf8').replace(/^\uFEFF/,''));
 const current=fs.existsSync(target)?read(target):{schemaVersion:1,name:'Typora 编辑工具栏 · 官方模块',modules:[]};
 const result=merge(current,read(path.resolve(incomingFile)));
 fs.writeFileSync(target,JSON.stringify(result,null,2)+'\n');
 console.log('Updated '+target+' ('+result.modules.length+' modules)');
}
module.exports={merge,validate};
