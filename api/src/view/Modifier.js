import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Modifier</h1><div><p>The <code>Modifier</code> module is a static set of utility functions that encapsulate common
edit operations on <code>ContentState</code> objects. It is highly recommended that you use
these methods for edit operations.</p>
<p>These methods also take care of removing or modifying entity ranges appropriately,
given the mutability types of any affected entities.</p>
<p>In each case, these methods accept <code>ContentState</code> objects with relevant
parameters and return <code>ContentState</code> objects. The returned <code>ContentState</code>
will be the same as the input object if no edit was actually performed.</p>
<h2 id="overview">Overview</h2>
<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#replacetext">
      <code>replaceText(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#inserttext">
      <code>insertText(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#movetext">
      <code>moveText(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#replacewithfragment">
      <code>replaceWithFragment(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#removerange">
      <code>removeRange(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#splitblock">
      <code>splitBlock(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#applyinlinestyle">
      <code>applyInlineStyle(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#removeinlinestyle">
      <code>removeInlineStyle(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#setblocktype">
      <code>setBlockType(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#setblockdata">
      <code>setBlockData(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#mergeblockdata">
      <code>mergeBlockData(...): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#applyentity">
      <code>applyEntity(...): ContentState</code>
    </a>
  </li>
</ul>

<h2 id="static-methods">Static Methods</h2>
<h3 id="replacetext">replaceText</h3>
<code class="prism language-undefined"><span class="token function">replaceText</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  rangeToReplace<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  text<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  inlineStyle<span class="token operator">?</span><span class="token punctuation">:</span> DraftInlineStyle<span class="token punctuation">,</span>
  entityKey<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token operator">?</span>string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Replaces the specified range of this <code>ContentState</code> with the supplied string,
with the inline style and entity key applied to the entire inserted string.</p>
<p>Example: On Facebook, when replacing <code>@abraham lincoln</code> with a mention of
Abraham Lincoln, the entire old range is the target to replace and the mention
entity should be applied to the inserted string.</p>
<h3 id="inserttext">insertText</h3>
<code class="prism language-undefined"><span class="token function">insertText</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  targetRange<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  text<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  inlineStyle<span class="token operator">?</span><span class="token punctuation">:</span> DraftInlineStyle<span class="token punctuation">,</span>
  entityKey<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token operator">?</span>string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Identical to <code>replaceText</code>, but enforces that the target range is collapsed
so that no characters are replaced. This is just for convenience, since text
edits are so often insertions rather than replacements.</p>
<h3 id="movetext">moveText</h3>
<code class="prism language-undefined"><span class="token function">moveText</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  removalRange<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  targetRange<span class="token punctuation">:</span> SelectionState
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Moves the "removal" range to the "target" range, replacing the target text.</p>
<h3 id="replacewithfragment">replaceWithFragment</h3>
<code class="prism language-undefined"><span class="token function">replaceWithFragment</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  targetRange<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  fragment<span class="token punctuation">:</span> BlockMap
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>A "fragment" is a section of a block map, effectively just an
<code>OrderedMap&lt;string, ContentBlock&gt;</code> much the same as the full block map of a
<code>ContentState</code> object.</p>
<p>This method will replace the "target" range with the fragment.</p>
<p>Example: When pasting content, we convert the paste into a fragment to be inserted
into the editor, then use this method to add it.</p>
<h3 id="removerange">removeRange</h3>
<code class="prism language-undefined"><span class="token function">removeRange</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  rangeToRemove<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  removalDirection<span class="token punctuation">:</span> DraftRemovalDirection
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Remove an entire range of text from the editor. The removal direction is important
for proper entity deletion behavior.</p>
<h3 id="splitblock">splitBlock</h3>
<code class="prism language-undefined"><span class="token function">splitBlock</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Split the selected block into two blocks. This should only be used if the
selection is collapsed.</p>
<h3 id="applyinlinestyle">applyInlineStyle</h3>
<code class="prism language-undefined"><span class="token function">applyInlineStyle</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  inlineStyle<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Apply the specified inline style to the entire selected range.</p>
<h3 id="removeinlinestyle">removeInlineStyle</h3>
<code class="prism language-undefined"><span class="token function">removeInlineStyle</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  inlineStyle<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Remove the specified inline style from the entire selected range.</p>
<h3 id="setblocktype">setBlockType</h3>
<code class="prism language-undefined"><span class="token function">setBlockType</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  blockType<span class="token punctuation">:</span> DraftBlockType
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Set the block type for all selected blocks.</p>
<h3 id="setblockdata">setBlockData</h3>
<code class="prism language-undefined"><span class="token function">setBlockData</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  blockData<span class="token punctuation">:</span> Map<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Set the block data for all selected blocks.</p>
<h3 id="mergeblockdata">mergeBlockData</h3>
<code class="prism language-undefined"><span class="token function">mergeBlockData</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  blockData<span class="token punctuation">:</span> Map<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Update block data for all selected blocks.</p>
<h3 id="applyentity">applyEntity</h3>
<code class="prism language-undefined"><span class="token function">applyEntity</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  entityKey<span class="token punctuation">:</span> <span class="token operator">?</span>string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Apply an entity to the entire selected range, or remove all entities from the
range if <code>entityKey</code> is <code>null</code>.</p>
</div><div class="docs-prevnext"></div></div>
`