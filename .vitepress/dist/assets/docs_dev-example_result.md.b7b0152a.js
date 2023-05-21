import{_ as s,o as a,c as n,O as l}from"./chunks/framework.dd9db2cc.js";const u=JSON.parse('{"title":"不同返回值类型","description":"","frontmatter":{},"headers":[],"relativePath":"docs/dev-example/result.md","filePath":"docs/dev-example/result.md"}'),o={name:"docs/dev-example/result.md"},p=l(`<h1 id="不同返回值类型" tabindex="-1">不同返回值类型 <a class="header-anchor" href="#不同返回值类型" aria-label="Permalink to &quot;不同返回值类型&quot;">​</a></h1><p>从nebula获得结果后，往往并不能获得业务所需的结果类型，此时，开发者需要告知 ngbatis 具体业务所需的类型。</p><h2 id="原始类型-resultset-com-vesoft-nebula-client-graph-data-resultset" tabindex="-1">原始类型 <a href="https://github.com/vesoft-inc/nebula-java/blob/master/client/src/main/java/com/vesoft/nebula/client/graph/data/ResultSet.java" target="_blank" rel="noreferrer">ResultSet</a> (com.vesoft.nebula.client.graph.data.ResultSet) <a class="header-anchor" href="#原始类型-resultset-com-vesoft-nebula-client-graph-data-resultset" aria-label="Permalink to &quot;原始类型 [ResultSet](https://github.com/vesoft-inc/nebula-java/blob/master/client/src/main/java/com/vesoft/nebula/client/graph/data/ResultSet.java) (com.vesoft.nebula.client.graph.data.ResultSet)&quot;">​</a></h2><p>如果接口返回值为 nebula 的 ResultSet，ngbatis 不做任何处理，直接返回跟调用方，由开发者在调用方中自行处理结果集。</p><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">ResultSet</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnResultSet</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnResultSet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN &#39;You are best&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li><blockquote><p>如果在下列的几种类型中，不能满足开发所需的结果集处理，可以使用获取原始ResultSet类型的返回值，并自行做灵活处理。可阅读<a href="https://github.com/vesoft-inc/nebula-java/blob/master/client/src/main/java/com/vesoft/nebula/client/graph/data/ResultSet.java" target="_blank" rel="noreferrer">ResultSet源码</a>做近一步了解。</p></blockquote></li></ul><h2 id="非集合类型" tabindex="-1">非集合类型 <a class="header-anchor" href="#非集合类型" aria-label="Permalink to &quot;非集合类型&quot;">​</a></h2><p>此时，结果类型已经通过 方法的返回值类型告知 ngbatis，所以无需额外的配置，即可完成类型映射。</p><h3 id="基本类型" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型" aria-label="Permalink to &quot;基本类型&quot;">​</a></h3><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnString</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnString</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN &#39;You are best&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ul><h3 id="pojo-map" tabindex="-1">POJO | Map <a class="header-anchor" href="#pojo-map" aria-label="Permalink to &quot;POJO | Map&quot;">​</a></h3><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnFirst</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 或者 Map returnFirst();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnFirst</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN n</span></span>
<span class="line"><span style="color:#A6ACCD;">    LIMIT 1</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：<div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">birthday</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fri Aug 12 2022 06:39:37 GMT+0800</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// java.util.Date</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul><h2 id="集合类型" tabindex="-1">集合类型 <a class="header-anchor" href="#集合类型" aria-label="Permalink to &quot;集合类型&quot;">​</a></h2><p>因为运行时，方法在字节码中的集合泛型丢失，因此需要通过标签中的 <code>resultType</code> 属性告知 ngbatis，多行中单行结果的类型。</p><h3 id="单栏位返回值" tabindex="-1">单栏位返回值 <a class="header-anchor" href="#单栏位返回值" aria-label="Permalink to &quot;单栏位返回值&quot;">​</a></h3><h4 id="基本类型-1" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型-1" aria-label="Permalink to &quot;基本类型&quot;">​</a></h4><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnNameTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnNameTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">java.lang.String</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN n.person.name</span></span>
<span class="line"><span style="color:#A6ACCD;">    LIMIT 10</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：[ &quot;张三&quot;, &quot;李四&quot;, ... ]</li></ul><h4 id="pojo" tabindex="-1">POJO <a class="header-anchor" href="#pojo" aria-label="Permalink to &quot;POJO&quot;">​</a></h4><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Person</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your.domain.Person</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">      RETURN n</span></span>
<span class="line"><span style="color:#A6ACCD;">      LIMIT 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：<div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">birthday</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fri Aug 12 2022 06:39:37 GMT+0800</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// java.util.Date</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><blockquote><p>当返回值栏位只有一个时，读取内部属性映射到实体类属性</p></blockquote></li></ul><h4 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h4><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Map</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">java.util.Map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">      RETURN n</span></span>
<span class="line"><span style="color:#A6ACCD;">      LIMIT 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：<div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">birthday</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fri Aug 12 2022 06:39:37 GMT+0800</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// java.util.Date</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><blockquote><p>当返回值栏位只有一个时，读取内部属性映射做为 map 的 key</p></blockquote></li></ul><h3 id="多栏位返回值" tabindex="-1">多栏位返回值 <a class="header-anchor" href="#多栏位返回值" aria-label="Permalink to &quot;多栏位返回值&quot;">​</a></h3><h4 id="pojo-1" tabindex="-1">POJO <a class="header-anchor" href="#pojo-1" aria-label="Permalink to &quot;POJO&quot;">​</a></h4><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Person</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnPartTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnPartTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your.domain.Person</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">      RETURN </span></span>
<span class="line"><span style="color:#A6ACCD;">        n.person.name as name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        n.person.age as age</span></span>
<span class="line"><span style="color:#A6ACCD;">      LIMIT 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：<div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">birthday</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div></li></ul><h4 id="map-1" tabindex="-1">Map <a class="header-anchor" href="#map-1" aria-label="Permalink to &quot;Map&quot;">​</a></h4><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Map</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnPartTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnPartTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">java.util.Map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">      RETURN </span></span>
<span class="line"><span style="color:#A6ACCD;">        n.person.name as name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        n.person.age as age</span></span>
<span class="line"><span style="color:#A6ACCD;">      LIMIT 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li>json序列化后，结果为：<div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><blockquote><p>当返回值栏位只有一个时，读取内部属性映射做为 map 的 key</p></blockquote></li></ul><h2 id="复合对象类型-path类型处理方式-三元组" tabindex="-1">复合对象类型（Path类型处理方式，三元组） <a class="header-anchor" href="#复合对象类型-path类型处理方式-三元组" aria-label="Permalink to &quot;复合对象类型（Path类型处理方式，三元组）&quot;">​</a></h2><p><strong>注意</strong>：下列例子是当前版本处理 Path 结果集的举例</p><h3 id="声明复合对象类" tabindex="-1">声明复合对象类： <a class="header-anchor" href="#声明复合对象类" aria-label="Permalink to &quot;声明复合对象类：&quot;">​</a></h3><ul><li>NRN2.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">your</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">domain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NRN2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Like</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> n2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul><h3 id="非集合类型-1" tabindex="-1">非集合类型 <a class="header-anchor" href="#非集合类型-1" aria-label="Permalink to &quot;非集合类型&quot;">​</a></h3><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">NRN2</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnFirstRelation</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnFirst</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    MATCH (n: person)-[r: like]-&gt;(n2: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN n, r, n2</span></span>
<span class="line"><span style="color:#A6ACCD;">    LIMIT 1</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ul><h3 id="集合类型-1" tabindex="-1">集合类型 <a class="header-anchor" href="#集合类型-1" aria-label="Permalink to &quot;集合类型&quot;">​</a></h3><ul><li>PersonDao.java<div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">NRN2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnRelationTop10</span><span style="color:#89DDFF;">();</span></span></code></pre></div></li><li>PersonDao.xml<div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">returnRelationTop10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resultType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your.domain.NRN2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    MATCH (n: person)-[r: like]-&gt;(n2: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN n, r, n2</span></span>
<span class="line"><span style="color:#A6ACCD;">    LIMIT 10</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li><blockquote><p>使用 List&lt;Map&gt; 做为返回值同样奏效，n, r, n2 为 map 的 key</p></blockquote></li></ul>`,33),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{u as __pageData,A as default};