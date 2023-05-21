import{_ as s,o as a,c as n,O as l}from"./chunks/framework.dd9db2cc.js";const i=JSON.parse('{"title":"准备工作","description":"","frontmatter":{},"headers":[],"relativePath":"docs/dev-example/prepare.md","filePath":"docs/dev-example/prepare.md"}'),p={name:"docs/dev-example/prepare.md"},o=l(`<h1 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h1><h2 id="大致介绍" tabindex="-1">大致介绍 <a class="header-anchor" href="#大致介绍" aria-label="Permalink to &quot;大致介绍&quot;">​</a></h2><p>Ngbatis 提供了两种方式为开发者提供便利</p><ul><li>类似于 Mybatis-plus 的方式，提供一个基类让业务的<code>DAO</code>进行继承，不需要自己写 <code>nGQL</code> 就能完成单顶点、单边的增删改查。<br> （详见<a href="./dao-basic.html">使用基类编写</a>）</li><li>类似于 Mybatis 的方式，支持自己编写复杂的 <code>nGQL</code> 或 <code>Cypher</code> 来完成复杂的业务查询与数据写入。（详见<a href="./custom-crud.html">自定义nGQL</a>）</li></ul><p>下面，以 <code>Person</code> 与 <code>Like</code> 为例。</p><h2 id="nebula-graph-中创建的-schema-参考create-tag、create-edge、create-index" tabindex="-1">Nebula Graph 中创建的 Schema （参考<a href="https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/10.tag-statements/1.create-tag/" target="_blank" rel="noreferrer">CREATE TAG</a>、<a href="https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/11.edge-type-statements/1.create-edge/" target="_blank" rel="noreferrer">CREATE EDGE</a>、<a href="https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/14.native-index-statements/1.create-native-index/" target="_blank" rel="noreferrer">CREATE INDEX</a>） <a class="header-anchor" href="#nebula-graph-中创建的-schema-参考create-tag、create-edge、create-index" aria-label="Permalink to &quot;Nebula Graph 中创建的 Schema （参考[CREATE TAG](https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/10.tag-statements/1.create-tag/)、[CREATE EDGE](https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/11.edge-type-statements/1.create-edge/)、[CREATE INDEX](https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/14.native-index-statements/1.create-native-index/)）&quot;">​</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> tag </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">person</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> string </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">  , </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> string </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">  , </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">  , </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthday</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">date</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> edge </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">likeness</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> double </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">  );</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 为查询创建索引</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> TAG </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">i_person_name_age</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">person</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">), </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> TAG </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">i_person_name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">person</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">));</span></span></code></pre></div><h2 id="两种方式都需要的-pojo-类" tabindex="-1">两种方式都需要的 <code>POJO</code> 类 <a class="header-anchor" href="#两种方式都需要的-pojo-类" aria-label="Permalink to &quot;两种方式都需要的 \`POJO\` 类&quot;">​</a></h2><h3 id="person-java" tabindex="-1">Person.java <a class="header-anchor" href="#person-java" aria-label="Permalink to &quot;Person.java&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">your</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">domain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Transient</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">java</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">util</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Date</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lombok</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">person</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Id</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** use @Column to declare field&#39;s schema name in database */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> gender</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Date</span><span style="color:#A6ACCD;"> birthday</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /** use @Transient to declare a field which is not exists in database */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Transient</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> fieldDbNotExists</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="like-java" tabindex="-1">Like.java <a class="header-anchor" href="#like-java" aria-label="Permalink to &quot;Like.java&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">your</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">domain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lombok</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lombok</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Data</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Like</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Double</span><span style="color:#A6ACCD;"> likeness</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="likewithrank-java" tabindex="-1">LikeWithRank.java <a class="header-anchor" href="#likewithrank-java" aria-label="Permalink to &quot;LikeWithRank.java&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">your</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">domain</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">javax</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">persistence</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lombok</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LikeWithRank</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Id</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Long</span><span style="color:#A6ACCD;"> rank</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Double</span><span style="color:#A6ACCD;"> likeness</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>到此，两种使用方式样例所用的 <code>POJO</code> 就已经创建完毕。接下来开始我们的介绍。</p>`,17),e=[o];function t(c,r,C,y,D,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};