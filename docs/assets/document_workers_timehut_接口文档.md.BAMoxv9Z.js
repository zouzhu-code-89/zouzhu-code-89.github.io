import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.Dc3ngIYm.js";const _=JSON.parse('{"title":"接口文档","description":"","frontmatter":{},"headers":[],"relativePath":"document/workers/timehut/接口文档.md","filePath":"document/workers/timehut/接口文档.md"}'),p={name:"document/workers/timehut/接口文档.md"},t=e(`<h1 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-label="Permalink to &quot;接口文档&quot;">​</a></h1><h2 id="用户孩子家人相关接口" tabindex="-1">用户孩子家人相关接口 <a class="header-anchor" href="#用户孩子家人相关接口" aria-label="Permalink to &quot;用户孩子家人相关接口&quot;">​</a></h2><h3 id="更新孩子生日" tabindex="-1">更新孩子生日 <a class="header-anchor" href="#更新孩子生日" aria-label="Permalink to &quot;更新孩子生日&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span>接口：family_relations/refresh      (PUT)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="拉取-recommends-里程碑推荐" tabindex="-1">拉取 recommends 里程碑推荐 <a class="header-anchor" href="#拉取-recommends-里程碑推荐" aria-label="Permalink to &quot;拉取 recommends 里程碑推荐&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>接口: milestones/recommends.json?baby_id=6317591</span></span></code></pre></div>`,8),i=[t];function l(o,c,r,d,h,u){return n(),s("div",null,i)}const b=a(p,[["render",l]]);export{_ as __pageData,b as default};
