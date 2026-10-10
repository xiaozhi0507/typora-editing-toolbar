'use strict';
const fs=require('node:fs'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const repository='xiaozhi0507/typora-editing-toolbar';
assert.equal(process.env.GITHUB_REPOSITORY,repository);
const bundle=JSON.parse(fs.readFileSync('release-bundle.json','utf8'));
const headers={Authorization:'Bearer '+process.env.GH_TOKEN,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'typora-release-publisher'};
async function api(url,method='GET',data,raw=false){const response=await fetch(url.startsWith('https:')?url:'https://api.github.com/repos/'+repository+url,{method,headers:{...headers,...(data?{'Content-Type':raw?'application/octet-stream':'application/json'}:{})},body:data?(raw?data:JSON.stringify(data)):undefined});if(response.status===404&&method==='GET')return null;const result=await response.json();if(!response.ok)throw Error(method+' '+response.status+' '+result.message);return result;}
(async()=>{
 for(const item of bundle.releases){
  assert(/^[a-z0-9.-]+$/.test(item.tag));const uploads=[];
  for(const asset of item.assets){assert(/^downloads\/[a-zA-Z0-9._-]+$/.test(asset.path));const bytes=fs.readFileSync(asset.path);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256,asset.path);uploads.push({...asset,bytes});}
  let release=await api('/releases/tags/'+item.tag);
  if(!release)release=await api('/releases','POST',{tag_name:item.tag,target_commitish:process.env.GITHUB_SHA,name:item.title,body:item.body,draft:true,prerelease:false});
  for(const asset of uploads){const name=asset.path.split('/').pop(),existing=release.assets.find(a=>a.name===name);if(existing){assert.equal(existing.digest,'sha256:'+asset.sha256,'Existing asset differs: '+name);continue;}const result=await api(release.upload_url.split('{')[0]+'?name='+encodeURIComponent(name),'POST',asset.bytes,true);assert.equal(result.digest,'sha256:'+asset.sha256,name);}
  await api('/releases/'+release.id,'PATCH',{name:item.title,body:item.body,draft:false,prerelease:false,make_latest:item.latest?'true':'false'});
  console.log('Published '+item.tag);
 }
})().catch(error=>{console.error(error.message);process.exitCode=1;});
