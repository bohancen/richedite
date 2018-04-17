import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>AtomicBlockUtils</h1><div><p>The <code>AtomicBlockUtils</code> module is a static set of utility functions for atomic 
block editing.</p>
<p>In each case, these methods accept <code>EditorState</code> objects with relevant
parameters and return <code>EditorState</code> objects.</p>
<h2 id="static-methods">Static Methods</h2>
<h3 id="insertatomicblock">insertAtomicBlock</h3>
<code class="prism language-undefined">insertAtomicBlock<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  entityKey<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  character<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><h3 id="moveatomicblock">moveAtomicBlock</h3>
<code class="prism language-undefined">moveAtomicBlock<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  atomicBlock<span class="token punctuation">:</span> ContentBlock<span class="token punctuation">,</span>
  targetRange<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span>
  insertionMode<span class="token operator">?</span><span class="token punctuation">:</span> DraftInsertionType
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code></div><div class="docs-prevnext"><a class="docs-next" href="api-reference-key-binding-util.html#content">Next →</a></div></div>
`