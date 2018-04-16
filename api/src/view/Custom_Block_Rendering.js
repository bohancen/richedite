import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Custom Block Rendering</h1><div><p>This article discusses how to customize Draft default block rendering.
The block rendering is used to define supported block types and their respective
renderers, as well as converting pasted content to known Draft block types.</p>
<p>When pasting content or when using the
<a href="/docs/api-reference-data-conversion.html#convertfromhtml">convertFromHTML</a>
Draft will then convert the pasted content to the respective block rendering type
by matching the Draft block render map with the matched tag.</p>
<h2 id="draft-default-block-render-map">Draft default block render map</h2>
<table>
<thead>
<tr>
<th>HTML element</th>
<th>Draft block type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;h1/&gt;</code></td>
<td>header-one</td>
</tr>
<tr>
<td><code>&lt;h2/&gt;</code></td>
<td>header-two</td>
</tr>
<tr>
<td><code>&lt;h3/&gt;</code></td>
<td>header-three</td>
</tr>
<tr>
<td><code>&lt;h4/&gt;</code></td>
<td>header-four</td>
</tr>
<tr>
<td><code>&lt;h5/&gt;</code></td>
<td>header-five</td>
</tr>
<tr>
<td><code>&lt;h6/&gt;</code></td>
<td>header-six</td>
</tr>
<tr>
<td><code>&lt;blockquote/&gt;</code></td>
<td>blockquote</td>
</tr>
<tr>
<td><code>&lt;pre/&gt;</code></td>
<td>code-block</td>
</tr>
<tr>
<td><code>&lt;figure/&gt;</code></td>
<td>atomic</td>
</tr>
<tr>
<td><code>&lt;li/&gt;</code></td>
<td>unordered-list-item,ordered-list-item**</td>
</tr>
<tr>
<td><code>&lt;div/&gt;</code></td>
<td>unstyled***</td>
</tr>
</tbody>
</table>
<p>** - Block type will be based on the parent <code>&lt;ul/&gt;</code> or <code>&lt;ol/&gt;</code></p>
<p>*** -  Any block that is not recognized by the block rendering mapping will be treated as unstyled</p>
<h2 id="configuring-block-render-map">Configuring block render map</h2>
<p>Draft default block render map can be overwritten, by passing an
<a href="http://facebook.github.io/immutable-js/docs/#/Map">Immutable Map</a> to
the editor blockRender props.</p>
<p><em>example of overwritting default block render map:</em></p>
<pre class="prism language-js"><span class="token comment">// The example below deliberately only allows</span>
<span class="token comment">// 'heading-two' as the only valid block type and</span>
<span class="token comment">// updates the unstyled element to also become a h2.</span>
<span class="token keyword">const</span> blockRenderMap <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">'header-two'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">:</span> <span class="token string">'h2'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'unstyled'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">:</span> <span class="token string">'h2'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">RichEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">blockRenderMap</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>blockRenderMap<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>There are cases where instead of overwriting the defaults we just want to add new block types;
this can be done by using the DefaultDraftBlockRenderMap reference to create a new blockRenderMap</p>
<p><em>example of extending default block render map:</em></p>
<pre class="prism language-js"><span class="token keyword">const</span> blockRenderMap <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">'section'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">:</span> <span class="token string">'section'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Include 'paragraph' as a valid block and updated the unstyled element but</span>
<span class="token comment">// keep support for other draft default block types</span>
<span class="token keyword">const</span> extendedBlockRenderMap <span class="token operator">=</span> Draft<span class="token punctuation">.</span>DefaultDraftBlockRenderMap<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>blockRenderMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">RichEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">blockRenderMap</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>extendedBlockRenderMap<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>When Draft parses pasted HTML, it maps from HTML elements back into
Draft block types. If you want to specify other HTML elements that map to a
particular block type, you can add an array <code>aliasedElements</code> to the block config.</p>
<p><em>example of unstyled block type alias usage:</em></p>
<pre class="prism language-undefined"><span class="token string">'unstyled'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  aliasedElements<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'p'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></pre><h2 id="custom-block-wrappers">Custom block wrappers</h2>
<p>By default the html element is used to wrap block types however a react component
can also be provided to the <em>blockRenderMap</em> to wrap the EditorBlock.</p>
<p>During pasting or when using the
<a href="/docs/api-reference-data-conversion.html#convertfromhtml">convertFromHTML</a>
the html will be scanned for matching tag elements. A wrapper will be used when there is a definition for
it on the <em>blockRenderMap</em> to wrap that particular block type. For example:</p>
<p>Draft uses wrappers to wrap <code>&lt;li/&gt;</code> inside either <code>&lt;ol/&gt;</code> or <code>&lt;ul/&gt;</code> but wrappers can also be used
to wrap any other custom block type</p>
<p><em>example of extending default block render map to use a react component for a custom block:</em></p>
<pre class="prism language-js"><span class="token keyword">class</span> <span class="token class-name">MyCustomBlock</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>MyCustomBlock<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">{</span><span class="token comment">/* here, this.props.children contains a &lt;section&gt; container, as that was the matching element */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> blockRenderMap <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">'MyCustomBlock'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// element is used during paste or html conversion to auto match your component;</span>
    <span class="token comment">// it is also retained as part of this.props.children and not stripped out</span>
    element<span class="token punctuation">:</span> <span class="token string">'section'</span><span class="token punctuation">,</span>
    wrapper<span class="token punctuation">:</span> MyCustomBlock<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// keep support for other draft default block types and add our myCustomBlock type</span>
<span class="token keyword">const</span> extendedBlockRenderMap <span class="token operator">=</span> Draft<span class="token punctuation">.</span>DefaultDraftBlockRenderMap<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>blockRenderMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">RichEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">...</span>
        <span class="token attr-name">blockRenderMap</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>extendedBlockRenderMap<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre></div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-block-components.html#content">Next →</a></div></div>
`