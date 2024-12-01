import{_ as a,c as i,R as n,o as l}from"./chunks/framework.UGEFmzor.js";import"./chunks/theme.DO0BlSyy.js";const E=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}'),t={name:"getting-started.md"};function e(h,s,p,k,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本指南将帮助你快速上手 QQ Message Blocker 的核心功能。</p><h2 id="基础屏蔽设置" tabindex="-1">基础屏蔽设置 <a class="header-anchor" href="#基础屏蔽设置" aria-label="Permalink to &quot;基础屏蔽设置&quot;">​</a></h2><h3 id="_1-关键词屏蔽" tabindex="-1">1. 关键词屏蔽 <a class="header-anchor" href="#_1-关键词屏蔽" aria-label="Permalink to &quot;1. 关键词屏蔽&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包含匹配 - 屏蔽包含关键词的消息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockedWords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;测试111&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 会屏蔽所有包含&quot;测试111&quot;的消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 完全匹配 - 只屏蔽完全一致的消息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exactBlockedWords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;测试222&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只会屏蔽消息内容恰好是&quot;测试222&quot;的消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;?&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 可以屏蔽单个字符</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="_2-表情屏蔽" tabindex="-1">2. 表情屏蔽 <a class="header-anchor" href="#_2-表情屏蔽" aria-label="Permalink to &quot;2. 表情屏蔽&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局表情屏蔽</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockedEmojis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    99999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 屏蔽表情ID为99999的表情</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    88888</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 可以同时屏蔽多个表情</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开启超级表情屏蔽</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockSuperEmoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 屏蔽所有超级表情</span></span></code></pre></div><h3 id="_3-图片屏蔽" tabindex="-1">3. 图片屏蔽 <a class="header-anchor" href="#_3-图片屏蔽" aria-label="Permalink to &quot;3. 图片屏蔽&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 按图片特征值屏蔽</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockedImages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;76264f7279cd8e5e2d2c597fa68da8a2.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;bae9b15fd28f626c6b08d01188dfb604.gif&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="用户特定规则" tabindex="-1">用户特定规则 <a class="header-anchor" href="#用户特定规则" aria-label="Permalink to &quot;用户特定规则&quot;">​</a></h2><h3 id="_1-用户消息屏蔽" tabindex="-1">1. 用户消息屏蔽 <a class="header-anchor" href="#_1-用户消息屏蔽" aria-label="Permalink to &quot;1. 用户消息屏蔽&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 针对特定用户的包含匹配</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specialBlockedUsers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;用户1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 屏蔽该用户的所有消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;@&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 屏蔽包含&quot;@&quot;的消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;关键词&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 屏蔽包含特定关键词的消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 针对特定用户的完全匹配</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exactSpecialBlockedUsers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;用户1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;测试444&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 只屏蔽该用户发送的&quot;测试444&quot;消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-用户表情屏蔽" tabindex="-1">2. 用户表情屏蔽 <a class="header-anchor" href="#_2-用户表情屏蔽" aria-label="Permalink to &quot;2. 用户表情屏蔽&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 针对特定用户屏蔽表情</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">specialBlockedUsersEmojis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;用户1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        99999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 屏蔽该用户的特定表情</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        66666</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="配置管理" tabindex="-1">配置管理 <a class="header-anchor" href="#配置管理" aria-label="Permalink to &quot;配置管理&quot;">​</a></h2><h3 id="_1-导出配置" tabindex="-1">1. 导出配置 <a class="header-anchor" href="#_1-导出配置" aria-label="Permalink to &quot;1. 导出配置&quot;">​</a></h3><ul><li>将当前配置导出为 JSON 文件备份</li><li>包含所有屏蔽规则和设置</li></ul><h3 id="_2-导入配置" tabindex="-1">2. 导入配置 <a class="header-anchor" href="#_2-导入配置" aria-label="Permalink to &quot;2. 导入配置&quot;">​</a></h3><ul><li>从 JSON 文件导入配置</li><li>自动合并现有规则</li></ul><h3 id="_3-配置自动加载" tabindex="-1">3. 配置自动加载 <a class="header-anchor" href="#_3-配置自动加载" aria-label="Permalink to &quot;3. 配置自动加载&quot;">​</a></h3><ul><li>QQ 重启后自动加载配置</li><li>规则修改后即时生效</li></ul><h2 id="使用建议" tabindex="-1">使用建议 <a class="header-anchor" href="#使用建议" aria-label="Permalink to &quot;使用建议&quot;">​</a></h2><h3 id="_1-从简单开始" tabindex="-1">1. 从简单开始 <a class="header-anchor" href="#_1-从简单开始" aria-label="Permalink to &quot;1. 从简单开始&quot;">​</a></h3><ul><li>先使用基础的关键词屏蔽</li><li>逐步添加表情和图片屏蔽</li><li>根据需要设置用户特定规则</li></ul><h3 id="_2-规则管理" tabindex="-1">2. 规则管理 <a class="header-anchor" href="#_2-规则管理" aria-label="Permalink to &quot;2. 规则管理&quot;">​</a></h3><ul><li>定期清理无用规则</li><li>保持规则列表整洁</li><li>及时更新过期规则</li></ul><h3 id="_3-配置维护" tabindex="-1">3. 配置维护 <a class="header-anchor" href="#_3-配置维护" aria-label="Permalink to &quot;3. 配置维护&quot;">​</a></h3><ul><li>定期备份配置文件</li><li>谨慎导入未知配置</li><li>保持配置文件整洁</li></ul><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><ol><li>阅读<a href="/features/message-blocking.html">消息屏蔽</a>了解更多屏蔽功能</li><li>探索<a href="/features/emoji-blocking.html">表情屏蔽</a>的高级用法</li><li>学习<a href="/features/user-blocking.html">用户屏蔽</a>的完整功能</li><li>查看<a href="/advanced/config.html">配置导入导出</a>深入了解配置管理</li><li>研究<a href="/advanced/rules.html">自定义规则</a>创建更复杂的规则</li></ol>`,30)]))}const g=a(t,[["render",e]]);export{E as __pageData,g as default};
