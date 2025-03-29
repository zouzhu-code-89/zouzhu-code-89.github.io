import{_ as e,c as s,o as n,a2 as t}from"./chunks/framework.Gmd0D3gy.js";const h=JSON.parse('{"title":"“向量化模型”与”矢量数据库“ 去实现图片搜索","description":null,"frontmatter":{"title":"“向量化模型”与”矢量数据库“ 去实现图片搜索","description":null,"time":"2025-03-25 09:56","category":"图片搜索","tag":"向量化模型|矢量数据库|图片搜索"},"headers":[],"relativePath":"notes/20250325_09_51.md","filePath":"notes/20250325_09_51.md"}'),p={name:"notes/20250325_09_51.md"};function i(l,a,r,o,c,_){return n(),s("div",null,a[0]||(a[0]=[t(`<h2 id="向量化模型-与-矢量数据库-去实现图片搜索" tabindex="-1">&quot;向量化模型&quot;与&quot;矢量数据库&quot; 去实现图片搜索 <a class="header-anchor" href="#向量化模型-与-矢量数据库-去实现图片搜索" aria-label="Permalink to &quot;&quot;向量化模型&quot;与&quot;矢量数据库&quot; 去实现图片搜索&quot;">​</a></h2><p>实现图片搜索会用到这两个工具，第一个是 <a href="https://huggingface.co/jinaai/jina-clip-v2" target="_blank" rel="noreferrer">图片向量化模型</a> ，第二个是 <a href="https://milvus.io/docs/zh" target="_blank" rel="noreferrer">矢量数据库</a></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[[source]]</span></span>
<span class="line"><span>url = &quot;https://pypi.org/simple&quot;</span></span>
<span class="line"><span>verify_ssl = true</span></span>
<span class="line"><span>name = &quot;pypi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[packages]</span></span>
<span class="line"><span>sentence-transformers = &quot;==3.4.1&quot;</span></span>
<span class="line"><span>transformers = &quot;==4.41.0&quot;</span></span>
<span class="line"><span>torch = &quot;==1.13.1&quot;</span></span>
<span class="line"><span>numpy = &quot;==1.21.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[dev-packages]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[requires]</span></span>
<span class="line"><span>python_version = &quot;3.9&quot;</span></span></code></pre></div><p>文本到图像搜索引擎</p><ul><li><p><a href="https://github.com/towhee-io/examples/blob/main/image/text_image_search/1_build_text_image_search_engine.ipynb" target="_blank" rel="noreferrer">文本到图像搜索引擎的教程</a></p></li><li><p><a href="https://github.com/towhee-io/examples/blob/main/image/text_image_search/3_build_chinese_image_search_engine.ipynb" target="_blank" rel="noreferrer">中文文本到图像搜索引擎教程</a></p></li><li><p><a href="https://github.com/towhee-io/examples/blob/main/image/text_image_search/2_deep_dive_text_image_search.ipynb" target="_blank" rel="noreferrer">文本到图像搜索引擎深入教程</a></p></li></ul>`,5)]))}const m=e(p,[["render",i]]);export{h as __pageData,m as default};
