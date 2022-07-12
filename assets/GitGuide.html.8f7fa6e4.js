import{r as p,o as l,c,a as n,b as e,w as t,F as r,d as s,e as o}from"./app.6c58dd1d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var u="/blog/assets/gitflow.5c67ec7f.png";const b={},m=n("h1",{id:"gitguide",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitguide","aria-hidden":"true"},"#"),s(),n("strong",null,"[GitGuide]")],-1),k={class:"table-of-contents"},d=s("1 GitFlow\u89C4\u8303"),h=s("2 git commit \u89C4\u8303"),g=s("2.1 \u683C\u5F0F"),_=s("2.2 \u6848\u4F8B\u8BF4\u660E"),f=s("3 Actions"),y=s("3.1 \u6982\u5FF5"),v=s("3.2 \u6848\u4F8B"),x=o('<hr><h2 id="_1-gitflow\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_1-gitflow\u89C4\u8303" aria-hidden="true">#</a> 1 GitFlow\u89C4\u8303</h2><p><img src="'+u+`" alt="GitFlow"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1 Master \u5206\u652F
\u63D0\u4F9B\u57FA\u7840\u5206\u652F\uFF0C\u5176\u4ED6\u7248\u672C\u968F\u65F6\u4ECE\u4E3B\u5206\u652F\u5207\u5206\u51FA\u53BB\u505A\u7248\u672C\u5F00\u53D1;\u53EA\u80FD\u4ECErelease\u548Chotfix\u5206\u652F\u5408\u5E76\u8FC7\u6765\uFF0C\u7814\u53D1\u4E0D\u53EF\u76F4\u63A5commit\u5230\u4E3B\u5206\u652F\u3002
\u7248\u672C\u53D1\u5E03\u4ECE\u5408\u5E76\u540E\u7684\u4E3B\u5206\u652F\u4E0A\u6253tag

# 2 Develop \u5206\u652F
\u8FD9\u4E2A\u5206\u652F\u662F\u5F00\u53D1\u5206\u652F\uFF0C\u65B0\u589E\u529F\u80FD\u65F6\u5019\u9700\u8981\u57FA\u4E8E\u5F00\u53D1\u5206\u652F\u5207\u5206\u51FA Feature \u6216\u4EE5\u81EA\u5DF1\u547D\u540D\u7684\u5206\u652F\uFF0C\u6240\u6709\u7684Feature\u6216\u547D\u540D\u5206\u652F\u90FD\u662F\u4ECE\u8FD9\u4E2A\u5206\u652F\u5207\u51FA\u53BB\u7684\u3002
\u800C Feature \u6216\u547D\u540D\u5206\u652F\u7684\u529F\u80FD\u5B8C\u6210\u540E\uFF0C\u90FD\u4F1A\u518D\u5408\u5E76\u5230\u8FD9\u4E2A\u5206\u652F\u4E0A\u6765\u3002

# 3 Hotfix \u5206\u652F
\u5BA2\u6237\u7684\u73B0\u573A\u4EA7\u54C1\u7248\u672C\u53D1\u751F\u7D27\u6025\u6545\u969C\u65F6\u5019,\u4F1A\u4ECEMaster\u5206\u652F\u5F00\u4E00\u4E2AHotfix\u5206\u652F\u8FDB\u884C\u4FEE\u590D,Hotfix \u4FEE\u590D\u5B8C\u6210\u540E\u8981\u518D\u5408\u5E76\u5230Master\u548CDevelop \u5206\u652F\u3002
\u4E3A\u4EC0\u4E48\u5408\u5E76\u56DEDev\u5206\u652F\uFF1F\u9632\u6B62Dev\u5408\u5E76\u5230Master\u5206\u652F\u4F1A\u88AB\u8986\u76D6,\u6545\u969C\u518D\u6B21\u51FA\u73B0\u3002
\u4E3A\u4EC0\u4E48\u4E0D\u5728Dev\u5206\u652F\u4FEE\u590D\uFF1FDev\u8FD8\u5728\u5F00\u53D1,\u4F1A\u6709\u5176\u4ED6\u672A\u77E5\u98CE\u9669\u3002

# 4 Release \u5206\u652F
Develop\u5206\u652F\u6210\u719F\u540E\u53EF\u4EE5\u5408\u5E76\u5230 Release \u5206\u652F\u3002\u505A\u5B8C\u6700\u540E\u7684\u6D4B\u8BD5 Release \u5206\u652F\u5C06\u4F1A\u540C\u65F6\u5408\u5E76\u5230 Master \u4EE5\u53CA Develop \u9019\u4E24\u4E2A\u5206\u652F\u4E0A\u3002

# 5 Feature||name \u5206\u652F
Feature \u5206\u652F\u90FD\u662F\u4ECE Develop \u5206\u652F\u4F86\u7684\uFF0C\u5B8C\u6210\u4E4B\u540E\u4F1A\u5728\u5408\u5E76\u56DE Develop \u5206\u652F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5E38\u9A7B\u5206\u652F\u53EA\u6709\u4E24\u4E2Amaster\u3001develop;\u5176\u4E2Dmaster\u662F\u6700\u65B0\u7684\uFF0C\u53D1\u5E03\u540E\u9700\u8981\u5728master\u4E0A\u6253\u7248\u672Ctag\uFF0Cdevelop\u6570\u636E\u5F00\u53D1\u5206\u652F \u4E34\u65F6\u5206\u652F\u6709\u4E09\u4E2ARelease\u3001Feature\u3001Hotfix\uFF1B\u5176\u4E2Drelease\u5C5E\u4E8E\u5F00\u53D1\u9636\u6BB5\u7528\u4E8E\u8D28\u91CF\u6D4B\u8BD5\u7684\u4E34\u65F6\u5206\u652F\uFF0Cfeature\u5C5E\u4E8E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u65B0\u4F5C\u7684\u529F\u80FD\uFF0Chotfix\u5C5E\u4E8E\u53D1\u5E03\u7248\u672C\u540E\u518D\u53D1\u73B0\u7684\u95EE\u9898\u4FEE\u590D</p><h2 id="_2-git-commit-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_2-git-commit-\u89C4\u8303" aria-hidden="true">#</a> 2 git commit \u89C4\u8303</h2><h3 id="_2-1-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u683C\u5F0F" aria-hidden="true">#</a> 2.1 \u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token comment"># \u7A7A\u4E00\u884C</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token comment"># \u7A7A\u4E00\u884C</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><ul><li>feat\uFF1A\u65B0\u7279\u6027</li><li>fix: \u4FEE\u590Dbug</li><li>docs\uFF1A \u6587\u6863</li><li>style\uFF1A\u683C\u5F0F</li><li>refactor\uFF1A\u91CD\u6784\uFF08\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u662F\u4FEE\u6539bug\u7684\u4EE3\u7801\u53D8\u52A8\uFF09</li><li>perf\uFF1A\u4F18\u5316\u76F8\u5173\uFF0C\u6BD4\u5982\u63D0\u5347\u6027\u80FD\u3001\u4F53\u9A8C</li><li>test\uFF1A\u589E\u52A0\u6D4B\u8BD5</li><li>chore\uFF1A\u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</li><li>revert\uFF1A\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C</li><li>merge\uFF1A\u4EE3\u7801\u5408\u5E76</li><li>sync\uFF1A\u540C\u6B65\u5206\u652F\u4EE3\u7801</li></ul><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4><ul><li>scope\u7528\u4E8E\u8BF4\u660E commit \u5F71\u54CD\u7684\u8303\u56F4\uFF0C\u6BD4\u5982\u6570\u636E\u5C42\u3001\u63A7\u5236\u5C42\u3001\u89C6\u56FE\u5C42\u7B49\u7B49\uFF0C\u89C6\u9879\u76EE\u4E0D\u540C\u800C\u4E0D\u540C</li></ul><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><ul><li>subject\u662F commit \u76EE\u7684\u7684\u7B80\u77ED\u63CF\u8FF0\uFF0C\u4E0D\u8D85\u8FC750\u4E2A\u5B57\u7B26</li></ul><h4 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h4><ul><li>\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u53EF\u4EE5\u7701\u7565</li></ul><h4 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h4><ul><li>\u987B\u5173\u95ED\u7684Jira\u53F7\u6216\u8005\u94FE\u63A5</li></ul></div><h3 id="_2-2-\u6848\u4F8B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6848\u4F8B\u8BF4\u660E" aria-hidden="true">#</a> 2.2 \u6848\u4F8B\u8BF4\u660E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1\u3001\u5192\u53F7\u540E\u548C&lt;subject&gt;\u8981\u52A0\u4E00\u4E2A\u7A7A\u683C\uFF0C\u76EE\u7684\u662F\u5728IDEA\u5386\u53F2\u8BB0\u5F55\u91CC\u770B\u4E0A\u53BB\u5E72\u51C0</span>
fix<span class="token punctuation">(</span>DAO<span class="token punctuation">)</span>: \u7528\u6237\u67E5\u8BE2\u7F3A\u5C11username\u5C5E\u6027 Close<span class="token comment">#BUG-23412</span>

<span class="token comment"># 2\u3001\u5982\u679C\u8BBE\u8BA1\u4FEE\u6539\u5C0F\u4E8E3\u4E2A\u6587\u4EF6\u53EF\u4EE5\u7528\uFF5C\u7B26\u53F7\u9694\u79BB</span>
feat<span class="token punctuation">(</span>UserController<span class="token operator">|</span>UserService<span class="token punctuation">)</span>: \u7528\u6237\u67E5\u8BE2\u63A5\u53E3\u5F00\u53D1 Close<span class="token comment">#RM-23412</span>

<span class="token comment"># 3\u3001\u5982\u679C\u6D89\u53CA\u591A\u4E2A\u6587\u4EF6\u7684\u4FEE\u6539\u53EF\u4EE5\u5FFD\u7565(&lt;scope&gt;)\u5B57\u6BB5</span>
feat: \u7528\u6237\u67E5\u8BE2\u63A5\u53E3\u5F00\u53D1 Close<span class="token comment">#RM-23412</span>

<span class="token comment"># 4\u3001\u5982\u679Csubject\u65E0\u6CD5\u8BF4\u660E\u672C\u6B21\u63D0\u4EA4\u53EF\u4EE5\u8003\u8651body\u63CF\u8FF0\u8BE6\u7EC6\u4FE1\u606F</span>
<span class="token variable"><span class="token variable">\`</span>
feat: \u5BA2\u6237\u4EA4\u6613\u91D1\u989D\u540C\u6B65\u81F3\u98CE\u63A7\u5E73\u53F0

<span class="token number">1</span>\u3001\u8C03\u7528\u5206\u63A7\u5E73\u53F0API_XXX
<span class="token number">2</span>\u3001\u8C03\u7528redis\u63A5\u53E3
<span class="token number">3</span>\u3001xxx\u5206\u5E03\u4E00\u81F4\u6027

Close<span class="token comment">#RM-23412</span>
<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_3-actions" tabindex="-1"><a class="header-anchor" href="#_3-actions" aria-hidden="true">#</a> 3 Actions</h2><h3 id="_3-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6982\u5FF5" aria-hidden="true">#</a> 3.1 \u6982\u5FF5</h3><h3 id="_3-2-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6848\u4F8B" aria-hidden="true">#</a> 3.2 \u6848\u4F8B</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>

  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>
            
      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build dns<span class="token punctuation">-</span>info site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          yarn
          yarn build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html</p><p>[\u53C2\u8003]</p><ul><li>https://nvie.com/posts/a-successful-git-branching-model/</li><li>https://github.com/vuejs/core/blob/main/.github/commit-convention.md</li><li>https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html</li></ul>`,18);function w(D,F){const a=p("RouterLink");return l(),c(r,null,[m,n("nav",k,[n("ul",null,[n("li",null,[e(a,{to:"#_1-gitflow\u89C4\u8303"},{default:t(()=>[d]),_:1})]),n("li",null,[e(a,{to:"#_2-git-commit-\u89C4\u8303"},{default:t(()=>[h]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_2-1-\u683C\u5F0F"},{default:t(()=>[g]),_:1})]),n("li",null,[e(a,{to:"#_2-2-\u6848\u4F8B\u8BF4\u660E"},{default:t(()=>[_]),_:1})])])]),n("li",null,[e(a,{to:"#_3-actions"},{default:t(()=>[f]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_3-1-\u6982\u5FF5"},{default:t(()=>[y]),_:1})]),n("li",null,[e(a,{to:"#_3-2-\u6848\u4F8B"},{default:t(()=>[v]),_:1})])])])])]),x],64)}var R=i(b,[["render",w]]);export{R as default};