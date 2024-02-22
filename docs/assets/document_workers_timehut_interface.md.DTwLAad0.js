import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.Dc3ngIYm.js";const m=JSON.parse('{"title":"接口文档","description":"","frontmatter":{},"headers":[],"relativePath":"document/workers/timehut/interface.md","filePath":"document/workers/timehut/interface.md"}'),p={name:"document/workers/timehut/interface.md"},t=e(`<h1 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-label="Permalink to &quot;接口文档&quot;">​</a></h1><h2 id="用户孩子家人相关接口" tabindex="-1">用户孩子家人相关接口 <a class="header-anchor" href="#用户孩子家人相关接口" aria-label="Permalink to &quot;用户孩子家人相关接口&quot;">​</a></h2><h3 id="更新孩子生日" tabindex="-1">更新孩子生日 <a class="header-anchor" href="#更新孩子生日" aria-label="Permalink to &quot;更新孩子生日&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span>接口：family_relations/refresh      (PUT)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  op: &#39;update&#39;,</span></span>
<span class="line"><span>  user_id: &#39;&#39;,</span></span>
<span class="line"><span>  user: {</span></span>
<span class="line"><span>    birthday: &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="更新孩子时区" tabindex="-1">更新孩子时区 <a class="header-anchor" href="#更新孩子时区" aria-label="Permalink to &quot;更新孩子时区&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span>接口：babies/{id}/time_zone      (PUT)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  id: &#39;&#39;,</span></span>
<span class="line"><span>  baby: {</span></span>
<span class="line"><span>    utc_offset: &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6),i=[t];function l(c,o,r,d,h,u){return n(),s("div",null,i)}const b=a(p,[["render",l]]);export{m as __pageData,b as default};
