import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Block Styling</h1><div><p>Within <code>Editor</code>, some block types are given default CSS styles to limit the amount
of basic configuration required to get engineers up and running with custom
editors.</p>
<p>By defining a <code>blockStyleFn</code> prop function for an <code>Editor</code>, it is possible
to specify classes that should be applied to blocks at render time.</p>
<h2 id="draftstyledefault-css">DraftStyleDefault.css</h2>
<p>The Draft library includes default block CSS styles within
<a href="https://github.com/facebook/draft-js/blob/master/src/component/utils/DraftStyleDefault.css">DraftStyleDefault.css</a>. <em>(Note that the annotations on the CSS class names are
artifacts of Facebook's internal CSS module management system.)</em></p>
<p>These CSS rules are largely devoted to providing default styles for list items,
without which callers would be responsible for managing their own default list
styles.</p>
<h2 id="blockstylefn">blockStyleFn</h2>
<p>The <code>blockStyleFn</code> prop on <code>Editor</code> allows you to define CSS classes to
style blocks at render time. For instance, you may wish to style <code>'blockquote'</code>
type blocks with fancy italic text.</p>
<code class="prism language-js"><span class="token keyword">function</span> <span class="token function">myBlockStyleFn</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> contentBlock<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'blockquote'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'superFancyBlockquote'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Then...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">EditorWithFancyBlockquotes</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">...</span> <span class="token attr-name">blockStyleFn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>myBlockStyleFn<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code><p>Then, in your own CSS:</p>
<code class="prism language-css"><span class="token selector">.superFancyBlockquote</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Hoefler Text'</span>, Georgia, serif<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-custom-block-render-map.html#content">Next →</a></div></div>
`