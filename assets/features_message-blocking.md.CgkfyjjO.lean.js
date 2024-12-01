import{_ as i,c as a,a as l,o as n}from"./chunks/framework.B6EUWDf0.js";const g=JSON.parse('{"title":"消息屏蔽","description":"","frontmatter":{},"headers":[],"relativePath":"features/message-blocking.md","filePath":"features/message-blocking.md"}'),t={name:"features/message-blocking.md"};function p(e,s,h,k,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="消息屏蔽" tabindex="-1">消息屏蔽 <a class="header-anchor" href="#消息屏蔽" aria-label="Permalink to &quot;消息屏蔽&quot;">​</a></h1><p>QQ Message Blocker 提供了灵活的消息屏蔽功能，支持关键词和图片屏蔽。</p><h2 id="关键词屏蔽" tabindex="-1">关键词屏蔽 <a class="header-anchor" href="#关键词屏蔽" aria-label="Permalink to &quot;关键词屏蔽&quot;">​</a></h2><h3 id="包含匹配" tabindex="-1">包含匹配 <a class="header-anchor" href="#包含匹配" aria-label="Permalink to &quot;包含匹配&quot;">​</a></h3><p>只要消息中包含关键词就会被屏蔽：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包含匹配示例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">INCLUDES_BLOCKED_WORDS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;测试111&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 会屏蔽&quot;测试111&quot;，也会屏蔽&quot;测试111111&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;@某人&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 屏蔽包含&quot;@某人&quot;的消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;广告&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 屏蔽包含&quot;广告&quot;的消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>特点：</p><ul><li>部分匹配即可触发屏蔽</li><li>适合屏蔽包含特定内容的消息</li><li>支持多个关键词组合</li></ul><h3 id="完全匹配" tabindex="-1">完全匹配 <a class="header-anchor" href="#完全匹配" aria-label="Permalink to &quot;完全匹配&quot;">​</a></h3><p>消息内容需要与关键词完全一致才会被屏蔽：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 完全匹配示例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EXACT_BLOCKED_WORDS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;测试222&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只会屏蔽&quot;测试222&quot;，不会屏蔽&quot;测试222222&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;打卡&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只屏蔽&quot;打卡&quot;这条消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;签到&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 只屏蔽&quot;签到&quot;这条消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>特点：</p><ul><li>需要消息内容完全一致</li><li>更精确的控制</li><li>避免误伤其他消息</li></ul><h2 id="图片屏蔽" tabindex="-1">图片屏蔽 <a class="header-anchor" href="#图片屏蔽" aria-label="Permalink to &quot;图片屏蔽&quot;">​</a></h2><p>可以通过图片特征值屏蔽特定图片：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图片屏蔽示例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">INCLUDES_BLOCKED_IMAGES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;76264f7279cd8e5e2d2c597fa68da8a2.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;bae9b15fd28f626c6b08d01188dfb604.gif&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>特点：</p><ul><li>基于图片特征值屏蔽</li><li>支持 jpg、gif 等格式</li><li>相同图片会被自动屏蔽</li></ul><h2 id="替换模式" tabindex="-1">替换模式 <a class="header-anchor" href="#替换模式" aria-label="Permalink to &quot;替换模式&quot;">​</a></h2><p>可以将被屏蔽的内容替换为指定文本：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REPLACEMODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    normalWords: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 普通屏蔽词是否使用替换模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exactWords: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 完全匹配屏蔽词是否使用替换模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    images: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图片是否使用替换模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    replaceword: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[已屏蔽]&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 替换显示的文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用建议" tabindex="-1">使用建议 <a class="header-anchor" href="#使用建议" aria-label="Permalink to &quot;使用建议&quot;">​</a></h2><ol><li><p><strong>选择合适的屏蔽模式</strong></p><ul><li>需要精确屏蔽时使用完全匹配</li><li>需要模糊匹配时使用包含匹配</li><li>根据实际需求选择是否启用替换模式</li></ul></li><li><p><strong>图片屏蔽使用技巧</strong></p><ul><li>按需添加图片特征值</li><li>定期清理不需要的规则</li><li>注意备份重要的屏蔽规则</li></ul></li><li><p><strong>性能优化</strong></p><ul><li>避免添加过多规则</li><li>及时清理无用规则</li><li>保持规则列表简洁</li></ul></li></ol><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ol><li><p><strong>屏蔽规则不生效？</strong></p><ul><li>检查规则格式是否正确</li><li>确认关键词是否准确</li><li>验证是否有冲突规则</li></ul></li><li><p><strong>如何避免误伤？</strong></p><ul><li>优先使用完全匹配模式</li><li>谨慎使用通用关键词</li><li>先小范围测试新规则</li></ul></li><li><p><strong>图片屏蔽不工作？</strong></p><ul><li>确认图片特征值是否正确</li><li>检查图片格式是否支持</li><li>尝试重新获取特征值</li></ul></li></ol>`,25)]))}const c=i(t,[["render",p]]);export{g as __pageData,c as default};