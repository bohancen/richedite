import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>SelectionState</h1><div><p><code>SelectionState</code> is an Immutable
<a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Record</a> that
represents a selection range in the editor.</p>
<p>The most common use for the <code>SelectionState</code> object is via <code>EditorState.getSelection()</code>,
which provides the <code>SelectionState</code> currently being rendered in the editor.</p>
<h3 id="keys-and-offsets">Keys and Offsets</h3>
<p>A selection range has two points: an <strong>anchor</strong> and a <strong>focus</strong>. (Read more on
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Selection#Glossary">MDN</a>).</p>
<p>The native DOM approach represents each point as a Node/offset pair, where the offset
is a number corresponding either to a position within a Node's <code>childNodes</code> or, if the
Node is a text node, a character offset within the text contents.</p>
<p>Since Draft maintains the contents of the editor using <code>ContentBlock</code> objects,
we can use our own model to represent these points. Thus, selection points are
tracked as key/offset pairs, where the <code>key</code> value is the key of the <code>ContentBlock</code>
where the point is positioned and the <code>offset</code> value is the character offset
within the block.</p>
<h3 id="start-end-vs-anchor-focus">Start/End vs. Anchor/Focus</h3>
<p>The concept of <strong>anchor</strong> and <strong>focus</strong> is very useful when actually rendering
a selection state in the browser, as it allows us to use forward and backward
selection as needed. For editing operations, however, the direction of the selection
doesn't matter. In this case, it is more appropriate to think in terms of
<strong>start</strong> and <strong>end</strong> points.</p>
<p>The <code>SelectionState</code> therefore exposes both anchor/focus values and
start/end values. When managing selection behavior, we recommend that
you work with <em>anchor</em> and <em>focus</em> values to maintain selection direction.
When managing content operations, however, we recommend that you use <em>start</em>
and <em>end</em> values.</p>
<p>For instance, when extracting a slice of text from a block based on a
<code>SelectionState</code>, it is irrelevant whether the selection is backward:</p>
<code class="prism language-undefined"><span class="token keyword">var</span> selectionState <span class="token operator">=</span> editorState<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> anchorKey <span class="token operator">=</span> selectionState<span class="token punctuation">.</span><span class="token function">getAnchorKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> currentContent <span class="token operator">=</span> editorState<span class="token punctuation">.</span><span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> currentContentBlock <span class="token operator">=</span> currentContent<span class="token punctuation">.</span><span class="token function">getBlockForKey</span><span class="token punctuation">(</span>anchorKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> start <span class="token operator">=</span> selectionState<span class="token punctuation">.</span><span class="token function">getStartOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> end <span class="token operator">=</span> selectionState<span class="token punctuation">.</span><span class="token function">getEndOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> selectedText <span class="token operator">=</span> currentContentBlock<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span></code><p>Note that <code>SelectionState</code> itself tracks only <em>anchor</em> and <em>focus</em> values.
<em>Start</em> and <em>end</em> values are derived.</p>
<h2 id="overview">Overview</h2>
<p><em>Static Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#createempty">
      <code>static createEmpty(blockKey)</code>
    </a>
  </li>
</ul>

<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#getstartkey">
      <code>getStartKey()</code>
    </a>
  </li>
  <li>
    <a href="#getstartoffset">
      <code>getStartOffset()</code>
    </a>
  </li>
  <li>
    <a href="#getendkey">
      <code>getEndKey()</code>
    </a>
  </li>
  <li>
    <a href="#getendoffset">
      <code>getEndOffset()</code>
    </a>
  </li>
  <li>
    <a href="#getanchorkey">
      <code>getAnchorKey()</code>
    </a>
  </li>
  <li>
    <a href="#getanchoroffset">
      <code>getAnchorOffset()</code>
    </a>
  </li>
  <li>
    <a href="#getfocuskey">
      <code>getFocusKey()</code>
    </a>
  </li>
  <li>
    <a href="#getfocusoffset">
      <code>getFocusOffset()</code>
    </a>
  </li>
  <li>
    <a href="#getisbackward">
      <code>getIsBackward()</code>
    </a>
  </li>
  <li>
    <a href="#gethasfocus">
      <code>getHasFocus()</code>
    </a>
  </li>
  <li>
    <a href="#iscollapsed">
      <code>isCollapsed()</code>
    </a>
  </li>
  <li>
    <a href="#hasedgewithin">
      <code>hasEdgeWithin(blockKey, start, end)</code>
    </a>
  </li>
  <li>
    <a href="#serialize">
      <code>serialize()</code>
    </a>
  </li>
</ul>

<p><em>Properties</em></p>
<blockquote>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Immutable Map API</a> to
set properties.</p>
</blockquote>
<ul class="apiIndex">
  <li>
    <a href="#anchorkey">
      <code>anchorKey</code>
    </a>
  </li>
  <li>
    <a href="#anchoroffset">
      <code>anchorOffset</code>
    </a>
  </li>
  <li>
    <a href="#focuskey">
      <code>focusKey</code>
    </a>
  </li>
  <li>
    <a href="#focusoffset">
      <code>focusOffset</code>
    </a>
  </li>
  <li>
    <a href="#isbackward">
      <code>isBackward</code>
    </a>
  </li>
  <li>
    <a href="#hasfocus">
      <code>hasFocus</code>
    </a>
  </li>
</ul>

<h2 id="static-methods">Static Methods</h2>
<h3 id="createempty-">createEmpty()</h3>
<code class="prism language-undefined"><span class="token function">createEmpty</span><span class="token punctuation">(</span>blockKey<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> SelectionState</code><p>Create a <code>SelectionState</code> object at the zero offset of the provided block key
and <code>hasFocus</code> set to false.</p>
<h2 id="methods">Methods</h2>
<h3 id="getstartkey-">getStartKey()</h3>
<code class="prism language-undefined"><span class="token function">getStartKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the key of the block containing the start position of the selection range.</p>
<h3 id="getstartoffset-">getStartOffset()</h3>
<code class="prism language-undefined"><span class="token function">getStartOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the block-level character offset of the start position of the selection range.</p>
<h3 id="getendkey-">getEndKey()</h3>
<code class="prism language-undefined"><span class="token function">getEndKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the key of the block containing the end position of the selection range.</p>
<h3 id="getendoffset-">getEndOffset()</h3>
<code class="prism language-undefined"><span class="token function">getEndOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the block-level character offset of the end position of the selection range.</p>
<h3 id="getanchorkey-">getAnchorKey()</h3>
<code class="prism language-undefined"><span class="token function">getAnchorKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the key of the block containing the anchor position of the selection range.</p>
<h3 id="getanchoroffset-">getAnchorOffset()</h3>
<code class="prism language-undefined"><span class="token function">getAnchorOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the block-level character offset of the anchor position of the selection range.</p>
<h3 id="getfocuskey-">getFocusKey()</h3>
<code class="prism language-undefined"><span class="token function">getFocusKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the key of the block containing the focus position of the selection range.</p>
<h3 id="getfocusoffset-">getFocusOffset()</h3>
<code class="prism language-undefined"><span class="token function">getFocusOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the block-level character offset of the focus position of the selection range.</p>
<h3 id="getisbackward-">getIsBackward()</h3>
<code class="prism language-undefined"><span class="token function">getIsBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether the focus position is before the anchor position in the document.</p>
<p>This must be derived from the key order of the active <code>ContentState</code>, or if the selection
range is entirely within one block, a comparison of the anchor and focus offset values.</p>
<h3 id="gethasfocus-">getHasFocus()</h3>
<code class="prism language-undefined"><span class="token function">getHasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether the editor has focus.</p>
<h3 id="iscollapsed-">isCollapsed()</h3>
<code class="prism language-undefined"><span class="token function">isCollapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether the selection range is collapsed, i.e. a caret. This is true
when the anchor and focus keys are the same /and/ the anchor and focus offsets
are the same.</p>
<h3 id="hasedgewithin-">hasEdgeWithin()</h3>
<code class="prism language-undefined"><span class="token function">hasEdgeWithin</span><span class="token punctuation">(</span>blockKey<span class="token punctuation">:</span> string<span class="token punctuation">,</span> start<span class="token punctuation">:</span> number<span class="token punctuation">,</span> end<span class="token punctuation">:</span> number<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether the selection range has an edge that overlaps with the specified
start/end range within a given block.</p>
<p>This is useful when setting DOM selection within a block after contents are
rendered.</p>
<h3 id="serialize-">serialize()</h3>
<code class="prism language-undefined"><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns a serialized version of the <code>SelectionState</code>. Useful for debugging.</p>
<h2 id="properties">Properties</h2>
<blockquote>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Immutable Map API</a> to
set properties.</p>
</blockquote>
<code class="prism language-undefined"><span class="token keyword">var</span> selectionState <span class="token operator">=</span> SelectionState<span class="token punctuation">.</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> updatedSelection <span class="token operator">=</span> selectionState<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  focusKey<span class="token punctuation">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
  focusOffset<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> anchorKey <span class="token operator">=</span> updatedSelection<span class="token punctuation">.</span><span class="token function">getAnchorKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'foo'</span>
<span class="token keyword">var</span> focusKey <span class="token operator">=</span> updatedSelection<span class="token punctuation">.</span><span class="token function">getFocusKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'bar'</span></code><h3 id="anchorkey">anchorKey</h3>
<p>The block containing the anchor end of the selection range.</p>
<h3 id="anchoroffset">anchorOffset</h3>
<p>The offset position of the anchor end of the selection range.</p>
<h3 id="focuskey">focusKey</h3>
<p>The block containing the focus end of the selection range.</p>
<h3 id="focusoffset">focusOffset</h3>
<p>The offset position of the focus end of the selection range.</p>
<h3 id="isbackward">isBackward</h3>
<p>If the anchor position is lower in the document than the focus position, the
selection is backward. Note: The <code>SelectionState</code> is an object with
no knowledge of the <code>ContentState</code> structure. Therefore, when updating
<code>SelectionState</code> values, you are responsible for updating <code>isBackward</code> as well.</p>
<h3 id="hasfocus">hasFocus</h3>
<p>Whether the editor currently has focus.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-composite-decorator.html#content">Next →</a></div></div>
`