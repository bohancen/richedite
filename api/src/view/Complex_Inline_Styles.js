import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Complex Inline Styles</h1><div><p>Within your editor, you may wish to provide a wide variety of inline style
behavior that goes well beyond the bold/italic/underline basics. For instance,
you may want to support variety with color, font families, font sizes, and more.
Further, your desired styles may overlap or be mutually exclusive.</p>
<p>The <a href="http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich">Rich Editor</a> and
<a href="http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/color">Colorful Editor</a>
examples demonstrate complex inline style behavior in action.</p>
<h3 id="model">Model</h3>
<p>Within the Draft model, inline styles are represented at the character level,
using an immutable <code>OrderedSet</code> to define the list of styles to be applied to
each character. These styles are identified by string. (See <a href="/docs/api-reference-character-metadata.html">CharacterMetadata</a>
for details.)</p>
<p>For example, consider the text "Hello <strong>world</strong>". The first six characters of
the string are represented by the empty set, <code>OrderedSet()</code>. The final five
characters are represented by <code>OrderedSet.of('BOLD')</code>. For convenience, we can
think of these <code>OrderedSet</code> objects as arrays, though in reality we aggressively
reuse identical immutable objects.</p>
<p>In essence, our styles are:</p>
<pre class="prism language-js"><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// H</span>
  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// e</span>
  <span class="token operator">...</span>
  <span class="token punctuation">[</span><span class="token string">'BOLD'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// w</span>
  <span class="token punctuation">[</span><span class="token string">'BOLD'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// o</span>
  <span class="token comment">// etc.</span>
<span class="token punctuation">]</span></pre><h3 id="overlapping-styles">Overlapping Styles</h3>
<p>Now let's say that we wish to make the middle range of characters italic as well:
"He_llo <strong>wo</strong>_<strong>rld</strong>". This operation can be performed via the
<a href="/docs/api-reference-modifier.html">Modifier</a> API.</p>
<p>The end result will accommodate the overlap by including <code>'ITALIC'</code> in the
relevant <code>OrderedSet</code> objects as well.</p>
<pre class="prism language-js"><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// H</span>
  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// e</span>
  <span class="token punctuation">[</span><span class="token string">'ITALIC'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// l</span>
  <span class="token operator">...</span>
  <span class="token punctuation">[</span><span class="token string">'BOLD'</span><span class="token punctuation">,</span> <span class="token string">'ITALIC'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// w</span>
  <span class="token punctuation">[</span><span class="token string">'BOLD'</span><span class="token punctuation">,</span> <span class="token string">'ITALIC'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// o</span>
  <span class="token punctuation">[</span><span class="token string">'BOLD'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// r</span>
  <span class="token comment">// etc.</span>
<span class="token punctuation">]</span></pre><p>When determining how to render inline-styled text, Draft will identify
contiguous ranges of identically styled characters and render those characters
together in styled <code>span</code> nodes.</p>
<h3 id="mapping-a-style-string-to-css">Mapping a style string to CSS</h3>
<p>By default, <code>Editor</code> provides support for a basic list of inline styles:
<code>'BOLD'</code>, <code>'ITALIC'</code>, <code>'UNDERLINE'</code>, and <code>'CODE'</code>. These are mapped to simple CSS
style objects, which are used to apply styles to the relevant ranges.</p>
<p>For your editor, you may define custom style strings to include with these
defaults, or you may override the default style objects for the basic styles.</p>
<p>Within your <code>Editor</code> use case, you may provide the <code>customStyleMap</code> prop
to define your style objects. (See
<a href="http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/color">Colorful Editor</a>
for a live example.)</p>
<p>For example, you may want to add a <code>'STRIKETHROUGH'</code> style. To do so, define a
custom style map:</p>
<pre class="prism language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styleMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'STRIKETHROUGH'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    textDecoration<span class="token punctuation">:</span> <span class="token string">'line-through'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">customStyleMap</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styleMap<span class="token punctuation">}</span></span>
        <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
        <span class="token attr-name">...</span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>When rendered, the <code>textDecoration: line-through</code> style will be applied to all
character ranges with the <code>STRIKETHROUGH</code> style.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-nested-lists.html#content">Next →</a></div></div>
`