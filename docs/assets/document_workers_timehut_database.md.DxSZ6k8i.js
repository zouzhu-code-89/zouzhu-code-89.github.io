import{_ as a,c as n,o as s,a4 as p}from"./chunks/framework.Dc_8yqSo.js";const m=JSON.parse('{"title":"🛖 数据库表文档","description":"","frontmatter":{},"headers":[],"relativePath":"document/workers/timehut/database.md","filePath":"document/workers/timehut/database.md"}'),e={name:"document/workers/timehut/database.md"},l=p(`<h1 id="🛖-数据库表文档" tabindex="-1">🛖 数据库表文档 <a class="header-anchor" href="#🛖-数据库表文档" aria-label="Permalink to &quot;🛖 数据库表文档&quot;">​</a></h1><h2 id="familyrelation-家人关系" tabindex="-1">FamilyRelation 家人关系 <a class="header-anchor" href="#familyrelation-家人关系" aria-label="Permalink to &quot;FamilyRelation 家人关系&quot;">​</a></h2><p>正向关系和反向关系 with_user_id 是 user_id 的 relation (妈妈)</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  id: 16109879,</span></span>
<span class="line highlighted"><span>  user_id: 7110206,</span></span>
<span class="line"><span>  creator_id: 7110205,</span></span>
<span class="line"><span>  partner: &quot;married&quot;,</span></span>
<span class="line"><span>  generation: 0,</span></span>
<span class="line highlighted"><span>  with_user_id: 7110205,</span></span>
<span class="line highlighted"><span>  relation: &quot;mom&quot;,</span></span>
<span class="line"><span>  show: true,                       // 家人列表上是否显示该家人</span></span>
<span class="line"><span>  active: false,                    // 是否已经删除</span></span>
<span class="line"><span>  accepted: true,</span></span>
<span class="line"><span>  name: nil,</span></span>
<span class="line highlighted"><span>  permission: &quot;can_manage&quot;,         // 管理权限</span></span>
<span class="line"><span>  created_at: Fri, 14 Apr 2023 11:26:41.138372000 CST +08:00,</span></span>
<span class="line"><span>  updated_at: Sat, 26 Aug 2023 00:14:13.699577000 CST +08:00,</span></span>
<span class="line"><span>  full_phone: &quot;+8615136395021&quot;,</span></span>
<span class="line"><span>  family: true,</span></span>
<span class="line"><span>  status: &quot;checked&quot;,</span></span>
<span class="line"><span>  accepter_id: 7110205,</span></span>
<span class="line"><span>  last_uploaded_at: nil,</span></span>
<span class="line"><span>  auto_peer: true,</span></span>
<span class="line"><span>  care_value: 0,</span></span>
<span class="line"><span>  first_msg: nil,</span></span>
<span class="line"><span>  relation_nil: nil,</span></span>
<span class="line"><span>  last_access_at: nil,</span></span>
<span class="line"><span>  upgraded_from_id: nil,</span></span>
<span class="line"><span>  upgraded_from_relation: nil,</span></span>
<span class="line"><span>  source: nil,</span></span>
<span class="line"><span>  recommended_by: nil,</span></span>
<span class="line"><span>  view_location: nil,</span></span>
<span class="line"><span>  note: nil,</span></span>
<span class="line"><span>  can_chat: true,</span></span>
<span class="line"><span>  im_location: nil,</span></span>
<span class="line"><span>  peer_im_location: nil</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),i=[l];function t(c,o,r,d,_,u){return s(),n("div",null,i)}const g=a(e,[["render",t]]);export{m as __pageData,g as default};