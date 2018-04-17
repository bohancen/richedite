import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>RichUtils</h1><div><p>The <code>RichUtils</code> module is a static set of utility functions for rich text
editing.</p>
<p>In each case, these methods accept <code>EditorState</code> objects with relevant
parameters and return <code>EditorState</code> objects.</p>
<h2 id="static-methods">Static Methods</h2>
<h3 id="currentblockcontainslink">currentBlockContainsLink</h3>
<code class="prism language-undefined"><span class="token function">currentBlockContainsLink</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><h3 id="getcurrentblocktype">getCurrentBlockType</h3>
<code class="prism language-undefined"><span class="token function">getCurrentBlockType</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><h3 id="handlekeycommand">handleKeyCommand</h3>
<code class="prism language-undefined"><span class="token function">handleKeyCommand</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  command<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>EditorState</code><h3 id="insertsoftnewline">insertSoftNewline</h3>
<code class="prism language-undefined"><span class="token function">insertSoftNewline</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="onbackspace">onBackspace</h3>
<code class="prism language-undefined"><span class="token function">onBackspace</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState<span class="token operator">?</span></code><h3 id="ondelete">onDelete</h3>
<code class="prism language-undefined"><span class="token function">onDelete</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState<span class="token operator">?</span></code><h3 id="ontab">onTab</h3>
<code class="prism language-undefined"><span class="token function">onTab</span><span class="token punctuation">(</span>
  event<span class="token punctuation">:</span> SyntheticEvent<span class="token punctuation">,</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  maxDepth<span class="token punctuation">:</span> integer
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="toggleblocktype">toggleBlockType</h3>
<code class="prism language-undefined"><span class="token function">toggleBlockType</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  blockType<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="togglecode">toggleCode</h3>
<code class="prism language-undefined"><span class="token function">toggleCode</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="toggleinlinestyle">toggleInlineStyle</h3>
<code class="prism language-undefined"><span class="token function">toggleInlineStyle</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  inlineStyle<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Toggle the specified inline style for the selection. If the
user's selection is collapsed, apply or remove the style for the
internal state. If it is not collapsed, apply the change directly
to the document state.</p>
<h3 id="togglelink">toggleLink</h3>
<code class="prism language-undefined"><span class="token function">toggleLink</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  targetSelection<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  entityKey<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="trytoremoveblockstyle">tryToRemoveBlockStyle</h3>
<code class="prism language-undefined"><span class="token function">tryToRemoveBlockStyle</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState<span class="token operator">?</span></code></div><div class="docs-prevnext"><a class="docs-next" href="api-reference-atomic-block-utils.html#content">Next →</a></div></div>
`