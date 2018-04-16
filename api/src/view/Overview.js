import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle};
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Overview</h1><div><p>Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.</p>
<p>Draft.js makes it easy to build any type of rich text input, whether you're just looking to support a few inline text styles or building a complex text editor for composing long-form articles.</p>
<p>Draft.js was introduced at <a href="http://conf.reactjs.com/">React.js Conf</a> in February 2016.</p>
<iframe width="650" height="365" src="https://www.youtube.com/embed/feUYwoLhE_4" frameborder="0" allowfullscreen=""></iframe>

<h3 id="installation">Installation</h3>
<p>Draft.js is distributed via npm. It depends on React and React DOM which must also be installed.</p>
<pre class="prism language-sh">npm install <span class="token operator">--</span>save draft<span class="token operator">-</span>js react react<span class="token operator">-</span>dom
# or alternately
yarn add draft<span class="token operator">-</span>js react react<span class="token operator">-</span>dom</pre><p>Draft.js uses some modern ecmascript features which are not available to IE11 and not part of create-react-app's default babel config. If you're running into problems out-of-the-box try installing a shim or polyfill alongside Draft.</p>
<pre class="prism language-sh">npm install <span class="token operator">--</span>save draft<span class="token operator">-</span>js react react<span class="token operator">-</span>dom babel<span class="token operator">-</span>polyfill
# or
yarn add draft<span class="token operator">-</span>js react react<span class="token operator">-</span>dom es6<span class="token operator">-</span>shim</pre><p>Learn more about <a href="/docs/advanced-topics-issues-and-pitfalls.html#polyfills">using a shim with Draft</a>.</p>
<h3 id="api-changes-notice">API Changes Notice</h3>
<p>Before getting started, please be aware that we recently changed the API of
Entity storage in Draft. The latest version, <code>v0.10.0</code>, supports both the old
and new API.  Following that up will be <code>v0.11.0</code> which will remove the old API.
If you are interested in helping out, or tracking the progress, please follow
<a href="https://github.com/facebook/draft-js/issues/839">issue 839</a>.</p>
<h3 id="usage">Usage</h3>
<pre class="prism language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">,</span> EditorState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">.</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>editorState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyEditor</span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p>Because Draft.js supports unicode, you must have the following meta tag in the <code>&lt;head&gt;&lt;/head&gt;</code> block of your HTML file:</p>
<pre class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></pre><p><code>Draft.css</code> should be included when rendering the editor. Learn more about <a href="/docs/advanced-topics-issues-and-pitfalls.html#missing-draft-css">why</a>.</p>
<p>Next, let's go into the basics of the API and learn what else you can do with Draft.js.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="quickstart-api-basics.html#content">Next →</a></div></div>
`