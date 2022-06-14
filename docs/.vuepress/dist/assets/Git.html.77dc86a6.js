import{c as a}from"./app.734f9e18.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";var s="/blog/assets/gitflow.5c67ec7f.png";const n={},r=a('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> <strong>[Git]</strong></h1><h2 id="_1-gitflow\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_1-gitflow\u89C4\u8303" aria-hidden="true">#</a> 1 GitFlow\u89C4\u8303</h2><p><img src="'+s+`" alt="GitFlow"></p><h3 id="_1-1-master-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-1-master-\u5206\u652F" aria-hidden="true">#</a> 1.1 Master \u5206\u652F</h3><blockquote><p>\u63D0\u4F9B\u57FA\u7840\u5206\u652F\uFF0C\u5176\u4ED6\u7248\u672C\u968F\u65F6\u4ECE\u4E3B\u5206\u652F\u5207\u5206\u51FA\u53BB\u505A\u7248\u672C\u5F00\u53D1;\u53EA\u80FD\u4ECErelease\u548Chotfix\u5206\u652F\u5408\u5E76\u8FC7\u6765\uFF0C\u7814\u53D1\u4E0D\u53EF\u76F4\u63A5commit\u5230\u4E3B\u5206\u652F\u3002 \u7248\u672C\u53D1\u5E03\u4ECE\u5408\u5E76\u540E\u7684\u4E3B\u5206\u652F\u4E0A\u6253tag</p></blockquote><h3 id="_1-2-develop-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-2-develop-\u5206\u652F" aria-hidden="true">#</a> 1.2 Develop \u5206\u652F</h3><blockquote><p>\u8FD9\u4E2A\u5206\u652F\u662F\u5F00\u53D1\u5206\u652F\uFF0C\u65B0\u589E\u529F\u80FD\u65F6\u5019\u9700\u8981\u57FA\u4E8E\u5F00\u53D1\u5206\u652F\u5207\u5206\u51FA Feature \u6216\u4EE5\u81EA\u5DF1\u547D\u540D\u7684\u5206\u652F\uFF0C\u6240\u6709\u7684Feature\u6216\u547D\u540D\u5206\u652F\u90FD\u662F\u4ECE\u8FD9\u4E2A\u5206\u652F\u5207\u51FA\u53BB\u7684\u3002 \u800C Feature \u6216\u547D\u540D\u5206\u652F\u7684\u529F\u80FD\u5B8C\u6210\u540E\uFF0C\u90FD\u4F1A\u518D\u5408\u5E76\u5230\u8FD9\u4E2A\u5206\u652F\u4E0A\u6765\u3002</p></blockquote><h3 id="_1-3-hotfix-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-3-hotfix-\u5206\u652F" aria-hidden="true">#</a> 1.3 Hotfix \u5206\u652F</h3><blockquote><p>\u5BA2\u6237\u7684\u73B0\u573A\u4EA7\u54C1\u7248\u672C\u53D1\u751F\u7D27\u6025\u6545\u969C\u65F6\u5019,\u4F1A\u4ECEMaster\u5206\u652F\u5F00\u4E00\u4E2AHotfix\u5206\u652F\u8FDB\u884C\u4FEE\u590D,Hotfix \u4FEE\u590D\u5B8C\u6210\u540E\u8981\u518D\u5408\u5E76\u5230Master\u548CDevelop \u5206\u652F\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\u5408\u5E76\u56DEDev\u5206\u652F\uFF1F\u9632\u6B62Dev\u5408\u5E76\u5230Master\u5206\u652F\u4F1A\u88AB\u8986\u76D6,\u6545\u969C\u518D\u6B21\u51FA\u73B0\u3002</p></blockquote><blockquote><p>\u4E3A\u4EC0\u4E48\u4E0D\u5728Dev\u5206\u652F\u4FEE\u590D\uFF1FDev\u8FD8\u5728\u5F00\u53D1,\u4F1A\u6709\u5176\u4ED6\u672A\u77E5\u98CE\u9669\u3002</p></blockquote></blockquote><h3 id="_1-4-release-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-4-release-\u5206\u652F" aria-hidden="true">#</a> 1.4 Release \u5206\u652F</h3><blockquote><p>Develop\u5206\u652F\u6210\u719F\u540E\u53EF\u4EE5\u5408\u5E76\u5230 Release \u5206\u652F\u3002\u505A\u5B8C\u6700\u540E\u7684\u6D4B\u8BD5 Release \u5206\u652F\u5C06\u4F1A\u540C\u65F6\u5408\u5E76\u5230 Master \u4EE5\u53CA Develop \u9019\u4E24\u4E2A\u5206\u652F\u4E0A\u3002</p></blockquote><h3 id="_1-5-feature-name-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-5-feature-name-\u5206\u652F" aria-hidden="true">#</a> 1.5 Feature||name \u5206\u652F</h3><blockquote><p>Feature \u5206\u652F\u90FD\u662F\u4ECE Develop \u5206\u652F\u4F86\u7684\uFF0C\u5B8C\u6210\u4E4B\u540E\u4F1A\u5728\u5408\u5E76\u56DE Develop \u5206\u652F\u3002</p></blockquote><h2 id="_2-git-commit-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_2-git-commit-\u89C4\u8303" aria-hidden="true">#</a> 2 git commit \u89C4\u8303</h2><h3 id="_2-1-\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u683C\u5F0F" aria-hidden="true">#</a> 2.1 \u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
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
\`<span class="token variable"><span class="token variable">\`</span>
feat: \u5BA2\u6237\u4EA4\u6613\u91D1\u989D\u540C\u6B65\u81F3\u98CE\u63A7\u5E73\u53F0

<span class="token number">1</span>\u3001\u8C03\u7528\u5206\u63A7\u5E73\u53F0API_XXX
<span class="token number">2</span>\u3001\u8C03\u7528redis\u63A5\u53E3
<span class="token number">3</span>\u3001xxx\u5206\u5E03\u4E00\u81F4\u6027

Close<span class="token comment">#RM-23412</span>
<span class="token variable">\`</span></span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_3-pr\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_3-pr\u89C4\u8303" aria-hidden="true">#</a> 3 PR\u89C4\u8303</h2><p>\u5173\u4E8EPR\u6A21\u677F</p><h2 id="_4-issue\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#_4-issue\u89C4\u8303" aria-hidden="true">#</a> 4 Issue\u89C4\u8303</h2><p>\u5173\u4E8Eissue\u6A21\u677F</p><h2 id="_5-actions" tabindex="-1"><a class="header-anchor" href="#_5-actions" aria-hidden="true">#</a> 5 Actions</h2><p>[\u53C2\u8003]</p><ul><li>https://nvie.com/posts/a-successful-git-branching-model/</li><li>https://github.com/vuejs/core/blob/main/.github/commit-convention.md</li></ul>`,26);function t(l,i){return r}var c=e(n,[["render",t]]);export{c as default};
