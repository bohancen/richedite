import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Data Conversion</h1><div><p>Because a text editor doesn't exist in a vacuum and it's important to save
contents for storage or transmission, you will want to be able to
convert a <code>ContentState</code> into raw JS, and vice versa.</p>
<p>To that end, we provide a couple of utility functions that allow you to perform
these conversions.</p>
<p>Note that the Draft library does not currently provide utilities to convert to
and from markdown or markup, since different clients may have different requirements
for these formats. We instead provide JavaScript objects that can be converted
to other formats as needed.</p>
<p>The Flow type <a href="https://github.com/facebook/draft-js/blob/master/src/model/encoding/RawDraftContentState.js"><code>RawDraftContentState</code></a>
denotes the expected structure of the raw format of the contents. The raw state
contains a list of content blocks, as well as a map of all relevant entity
objects.</p>
<h2 id="functions">Functions</h2>
<h3 id="convertfromraw">convertFromRaw</h3>
<code class="prism language-undefined"><span class="token function">convertFromRaw</span><span class="token punctuation">(</span>rawState<span class="token punctuation">:</span> RawDraftContentState<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Given a raw state, convert it to a <code>ContentState</code>. This is useful when
restoring contents to use within a Draft editor.</p>
<h3 id="converttoraw">convertToRaw</h3>
<code class="prism language-undefined"><span class="token function">convertToRaw</span><span class="token punctuation">(</span>contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">)</span><span class="token punctuation">:</span> RawDraftContentState</code><p>Given a <code>ContentState</code> object, convert it to a raw JS structure. This is useful
when saving an editor state for storage, conversion to other formats, or
other usage within an application.</p>
<h3 id="convertfromhtml">convertFromHTML</h3>
<code class="prism language-undefined"><span class="token keyword">const</span> sampleMarkup <span class="token operator">=</span>
  <span class="token string">'&lt;b&gt;Bold text&lt;/b&gt;, &lt;i&gt;Italic text&lt;/i&gt;&lt;br/ &gt;&lt;br /&gt;'</span> <span class="token operator">+</span>
  <span class="token string">'&lt;a href="http://www.facebook.com"&gt;Example link&lt;/a&gt;'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> blocksFromHTML <span class="token operator">=</span> <span class="token function">convertFromHTML</span><span class="token punctuation">(</span>sampleMarkup<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> ContentState<span class="token punctuation">.</span><span class="token function">createFromBlockArray</span><span class="token punctuation">(</span>
  blocksFromHTML<span class="token punctuation">.</span>contentBlocks<span class="token punctuation">,</span>
  blocksFromHTML<span class="token punctuation">.</span>entityMap
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">.</span><span class="token function">createWithContent</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></code><p>Given an HTML fragment, convert it to an object with two keys; one holding the
array of <code>ContentBlock</code> objects, and the other holding a reference to the
entityMap. Construct content state from the array of block elements and the
entityMap, and then update the editor state with it. Full example available
<a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/convertFromHTML">here</a>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-rich-utils.html#content">Next →</a></div></div>
`