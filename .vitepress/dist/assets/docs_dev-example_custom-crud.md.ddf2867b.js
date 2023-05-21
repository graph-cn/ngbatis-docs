import{_ as a,o as s,c as e,O as n}from"./chunks/framework.dd9db2cc.js";const F=JSON.parse('{"title":"自定义nGQL","description":"","frontmatter":{},"headers":[],"relativePath":"docs/dev-example/custom-crud.md","filePath":"docs/dev-example/custom-crud.md"}'),l={name:"docs/dev-example/custom-crud.md"},o=n(`<h1 id="自定义ngql" tabindex="-1">自定义nGQL <a class="header-anchor" href="#自定义ngql" aria-label="Permalink to &quot;自定义nGQL&quot;">​</a></h1><ul><li><blockquote><p>使用此方式的时候，对 nGQL、cypher 的熟悉度要求会高一些。还不太熟悉的开发者，可以通过【<a href="https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/1.nGQL-overview/1.overview/" target="_blank" rel="noreferrer">什么是nGQL</a>】进行了解。</p></blockquote></li><li><blockquote><p>另外提一下：这边使用的模板引擎是Beetl</p><ul><li><a href="https://www.kancloud.cn/xiandafu/beetl3_guide/2138947" target="_blank" rel="noreferrer">Beetl官方文档</a>，主要看占位符。ngbatis已经做好了变量设置，如果只是参数填充，可以忽略定界符的使用。<br> 【例子详见<a href="./parameter-use.html">如何传入参数</a>】<br> 但，参数条件控制跟参数循环定界符几乎不可避免。因<code>ngbatis</code>关于<code>beetl</code>配置的差异，文档中如涉及界定符，则由文档中的 &lt;% %&gt; 替换成 @ \\n，如：<div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &lt;%if ( aBool ) { </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">                         </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> } %&gt;                </span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> @if ( aBool ) {</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">                       </span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> @}</span></span></code></pre></div></li><li><a href="https://www.kancloud.cn/xiandafu/beetl3_guide/2138956" target="_blank" rel="noreferrer">Beetl文档-用于处理参数的函数</a></li><li><a href="https://www.kancloud.cn/xiandafu/beetl3_guide/2138953" target="_blank" rel="noreferrer">Beetl文档-条件控制</a>【例子详见<a href="./parameter-if.html">参数条件控制</a>】</li><li><a href="https://www.kancloud.cn/xiandafu/beetl3_guide/2138952" target="_blank" rel="noreferrer">Beetl文档-循环语句</a>【例子详见<a href="./parameter-for.html">参数遍历</a>】</li><li><a href="http://ibeetl.com/beetlonline/" target="_blank" rel="noreferrer">Beetl在线测试小工具</a></li></ul></blockquote></li></ul><p>与<a href="./dao-basic.html">使用基类读写</a>相同，需要编写一个 XXXDao.java 文件与 XXXDao.xml 文件。</p><h2 id="新建文件" tabindex="-1">新建文件 <a class="header-anchor" href="#新建文件" aria-label="Permalink to &quot;新建文件&quot;">​</a></h2><h3 id="创建一个person对应的dao-如果不需要用到基类方法-可以不继承-nebuladaobasic" tabindex="-1">创建一个Person对应的Dao，如果不需要用到基类方法，可以不继承 NebulaDaoBasic <a class="header-anchor" href="#创建一个person对应的dao-如果不需要用到基类方法-可以不继承-nebuladaobasic" aria-label="Permalink to &quot;创建一个Person对应的Dao，如果不需要用到基类方法，可以不继承 NebulaDaoBasic&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">your</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">domain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;"> org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">nebula</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">contrib</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ngbatis</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">proxy</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">NebulaDaoBasic</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PersonDao</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="创建一个名为-persondao-xml-的文件-默认位置为-resources-mapper" tabindex="-1">创建一个名为 PersonDao.xml 的文件，默认位置为：<code>/resources/mapper</code> <a class="header-anchor" href="#创建一个名为-persondao-xml-的文件-默认位置为-resources-mapper" aria-label="Permalink to &quot;创建一个名为 PersonDao.xml 的文件，默认位置为：\`/resources/mapper\`&quot;">​</a></h3><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 如果 space 与 yml 中声明的一致，可不写 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mapper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your.domain.PersonDao</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">space</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mapper</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><blockquote><p>XXXDao.java 无需经过 @Mapper 或者 @Component 进行注解，而是通过 namespace 进行发现，并自动注册成 Bean。 前提是：namespace 需要在 @SpringBootApplication 注解下的 scanBasePackages 值中。 如：@SpringBootApplication( scanBasePackages = { &quot;your.domain&quot;, &quot;org.nebula.contrib&quot; } )</p></blockquote><h2 id="如何让-java-程序通过-ngbatis-执行-ngql-cypher" tabindex="-1">如何让 java 程序通过 ngbatis 执行 nGQL | cypher <a class="header-anchor" href="#如何让-java-程序通过-ngbatis-执行-ngql-cypher" aria-label="Permalink to &quot;如何让 java 程序通过 ngbatis 执行 nGQL | cypher&quot;">​</a></h2><h3 id="以一个简单的查询语句为例" tabindex="-1">以一个简单的查询语句为例： <a class="header-anchor" href="#以一个简单的查询语句为例" aria-label="Permalink to &quot;以一个简单的查询语句为例：&quot;">​</a></h3><h4 id="在-persondao-java-中追加接口" tabindex="-1">在 PersonDao.java 中追加接口 <a class="header-anchor" href="#在-persondao-java-中追加接口" aria-label="Permalink to &quot;在 PersonDao.java 中追加接口&quot;">​</a></h4><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">select1</span><span style="color:#89DDFF;">();</span></span></code></pre></div><blockquote><p>目前版本中，接口的返回值类型与方法参数类型，如果是基本类型，仅支持包装类，如 int 请写成 Integer。</p></blockquote><h4 id="在-persondao-xml-中新增一个标签" tabindex="-1">在 PersonDao.xml 中新增一个标签 <a class="header-anchor" href="#在-persondao-xml-中新增一个标签" aria-label="Permalink to &quot;在 PersonDao.xml 中新增一个标签&quot;">​</a></h4><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 如果 space 与 yml 中声明的或 mapper 的 space 一致，可不写 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">select1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">space</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><blockquote><p>Integer result = personDao.select1(); // result : 1</p></blockquote>`,17),p=[o];function t(r,c,i,D,d,y){return s(),e("div",null,p)}const h=a(l,[["render",t]]);export{F as __pageData,h as default};