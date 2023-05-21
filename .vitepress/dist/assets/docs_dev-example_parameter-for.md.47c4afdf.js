import{_ as s,o as n,c as a,O as l}from"./chunks/framework.786f5604.js";const u=JSON.parse('{"title":"参数循环","description":"","frontmatter":{},"headers":[],"relativePath":"docs/dev-example/parameter-for.md","filePath":"docs/dev-example/parameter-for.md"}'),p={name:"docs/dev-example/parameter-for.md"},e=l(`<h1 id="参数循环" tabindex="-1">参数循环 <a class="header-anchor" href="#参数循环" aria-label="Permalink to &quot;参数循环&quot;">​</a></h1><blockquote><p>遍历的部分跟 mybatis 的差异比较大，使用了 Beetl 的遍历语法。具体可参考官方文档【<a href="https://www.kancloud.cn/xiandafu/beetl3_guide/2138952" target="_blank" rel="noreferrer">1.10 循环语句</a>】 因配置的差异，文档中如涉及界定符，则由文档中的 &lt;% %&gt; 替换成 @ \\n，如：</p></blockquote><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &lt;%for ( item in list ) { </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">                         </span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> } %&gt;                </span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> @for ( item in list ) {</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">                       </span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> @}</span></span></code></pre></div><h2 id="对map的遍历-可用于动态查询" tabindex="-1">对Map的遍历，可用于动态查询 <a class="header-anchor" href="#对map的遍历-可用于动态查询" aria-label="Permalink to &quot;对Map的遍历，可用于动态查询&quot;">​</a></h2><ul><li><p>PersonDao.java</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// org.springframework.data.repository.query.Param</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// person: { &quot;name&quot;: &quot;张三&quot;, &quot;gender&quot;: &quot;F&quot; }</span></span>
<span class="line"><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">selectByPerson</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Param</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Person</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">);</span></span></code></pre></div></li><li><p>PersonDao.xml</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">selectByPerson</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    MATCH (n: person)</span></span>
<span class="line"><span style="color:#A6ACCD;">    WHERE 1 == 1 </span></span>
<span class="line"><span style="color:#A6ACCD;">    @for ( entry in p ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      @if ( isNotEmpty( entry.value ) ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        AND n.person.\`\${ entry.key }\` == $p.\${ entry.key }</span></span>
<span class="line"><span style="color:#A6ACCD;">      @}</span></span>
<span class="line"><span style="color:#A6ACCD;">    @}</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN n</span></span>
<span class="line"><span style="color:#A6ACCD;">    LIMIT 1</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">## 对 List 遍历，可用于批处理</span></span>
<span class="line"><span style="color:#A6ACCD;">- PersonDao.java</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`java</span></span>
<span class="line"><span style="color:#A6ACCD;">        // org.springframework.data.repository.query.Param</span></span>
<span class="line"><span style="color:#A6ACCD;">        // personList: [{&quot;gender&quot;:&quot;F&quot;,&quot;name&quot;:&quot;张三&quot;},{&quot;gender&quot;:&quot;M&quot;,&quot;name&quot;:&quot;王五&quot;},{&quot;gender&quot;:&quot;F&quot;,&quot;name&quot;:&quot;赵六&quot;}]</span></span>
<span class="line"><span style="color:#A6ACCD;">        void insertPersonList( @Param(&quot;personList&quot;) List&lt;Person&gt; personList );</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 参数为：</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`json</span></span>
<span class="line"><span style="color:#A6ACCD;">      :param personList =&gt; [{&quot;gender&quot;:&quot;F&quot;,&quot;name&quot;:&quot;张三&quot;},{&quot;gender&quot;:&quot;M&quot;,&quot;name&quot;:&quot;王五&quot;},{&quot;gender&quot;:&quot;F&quot;,&quot;name&quot;:&quot;赵六&quot;}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- PersonDao.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`xml</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;insert id=&quot;insertPersonList&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            @for ( p in personList ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              INSERT VERTEX \`person\` ( name, gender ) VALUES &#39;\${ p.name }&#39; : ( &#39;\${ p.name }&#39;, &#39;\${ p.gender }&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">            @}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/insert&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 执行的语句为：</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`sql</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender ) VALUES &#39;张三&#39; : ( &#39;张三&#39;, &#39;F&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender ) VALUES &#39;王五&#39; : ( &#39;王五&#39;, &#39;M&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender ) VALUES &#39;赵六&#39; : ( &#39;赵六&#39;, &#39;F&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- </span></span>
<span class="line"><span style="color:#A6ACCD;">### nebula &gt;= v3.2.0  起，多了下面的用法，在修改数据的时候可以传参数变量名给数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">  - PersonDao.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`xml</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;insert id=&quot;insertPersonList&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            @for ( p in personList ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              INSERT VERTEX \`person\` ( name, gender )</span></span>
<span class="line"><span style="color:#A6ACCD;">                VALUES &#39;\${ p.name }&#39; : ( &#39;$personList[\${pLP.dataIndex}].name&#39;, &#39;$personList[\${pLP.dataIndex}].gender&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">            @}</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/insert&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; 此处，当前元素是 xxx 时，\`LP\` 做为后缀，可用于多种循环变量的获取</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.index：当前索引，从1开始</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.dataIndex：当前索引，从0开始</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.size：集合的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.first：是否是第一个</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.last：是否是最后一个</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.even：索引是否是偶数</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt; - xxxLP.odd：索引是否是奇数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - 执行的语句为：</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`sql</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender )</span></span>
<span class="line"><span style="color:#A6ACCD;">          VALUES &#39;张三&#39; : ( &#39;$personList[0].name&#39;, &#39;$personList[0].gender&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender )</span></span>
<span class="line"><span style="color:#A6ACCD;">          VALUES &#39;王五&#39; : ( &#39;$personList[1].name&#39;, &#39;$personList[1].gender&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">        INSERT VERTEX \`person\` ( name, gender )</span></span>
<span class="line"><span style="color:#A6ACCD;">          VALUES &#39;赵六&#39; : ( &#39;$personList[2].name&#39;, &#39;$personList[2].gender&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">--&gt;</span></span></code></pre></div>`,6),o=[e];function t(r,c,i,C,A,y){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
