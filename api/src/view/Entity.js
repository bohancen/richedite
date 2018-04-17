import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Entity</h1><div><p><code>Entity</code> is a static module containing the API for creating, retrieving, and
updating entity objects, which are used for annotating text ranges with metadata.
This module also houses the single store used to maintain entity data.</p>
<p>This article is dedicated to covering the details of the API. See the
<a href="/docs/advanced-topics-entities.html">advanced topics article on entities</a>
for more detail on how entities may be used.</p>
<p>Please note that the API for entity storage and management has changed recently;
for details on updating your application
<a href="/docs/v0-10-api-migration.html#content">see our v0.10 API Migration Guide</a>.</p>
<p>Entity objects returned by <code>Entity</code> methods are represented as
<a href="https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js">DraftEntityInstance</a> immutable records. These have a simple set of getter functions and should
be used only for retrieval.</p>
<h2 id="overview">Overview</h2>
<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#create">
      <code>create(...): DraftEntityInstance</code>
    </a>
  </li>
  <li>
    <a href="#add">
      <code>add(instance: DraftEntityInstance): string</code>
    </a>
  </li>
  <li>
    <a href="#get">
      <code>get(key: string): DraftEntityInstance</code>
    </a>
  </li>
  <li>
    <a href="#mergedata">
      <code>mergeData(...): DraftEntityInstance</code>
    </a>
  </li>
  <li>
    <a href="#replacedata">
      <code>replaceData(...): DraftEntityInstance</code>
    </a>
  </li>
</ul>

<h2 id="methods">Methods</h2>
<h3 id="create">create</h3>
<code class="prism language-undefined"><span class="token function">create</span><span class="token punctuation">(</span>
  type<span class="token punctuation">:</span> DraftEntityType<span class="token punctuation">,</span>
  mutability<span class="token punctuation">:</span> DraftEntityMutability<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token punctuation">:</span> Object
<span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>The <code>create</code> method should be used to generate a new entity object with the
supplied properties.</p>
<p>Note that a string is returned from this function. This is because entities
are referenced by their string key in <code>ContentState</code>. The string value should
be used within <code>CharacterMetadata</code> objects to track the entity for annotated
characters.</p>
<h3 id="add">add</h3>
<code class="prism language-undefined"><span class="token function">add</span><span class="token punctuation">(</span>instance<span class="token punctuation">:</span> DraftEntityInstance<span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>In most cases, you will use <code>Entity.create()</code>. This is a convenience method
that you probably will not need in typical Draft usage.</p>
<p>The <code>add</code> function is useful in cases where the instances have already been
created, and now need to be added to the <code>Entity</code> store. This may occur in cases
where a vanilla JavaScript representation of a <code>ContentState</code> is being revived
for editing.</p>
<h3 id="get">get</h3>
<code class="prism language-undefined"><span class="token keyword">get</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftEntityInstance</code><p>Returns the <code>DraftEntityInstance</code> for the specified key. Throws if no instance
exists for that key.</p>
<h3 id="mergedata">mergeData</h3>
<code class="prism language-undefined"><span class="token function">mergeData</span><span class="token punctuation">(</span>
  key<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  toMerge<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftEntityInstance</code><p>Since <code>DraftEntityInstance</code> objects are immutable, you cannot update an entity's
metadata through typical mutative means.</p>
<p>The <code>mergeData</code> method allows you to apply updates to the specified entity.</p>
<h3 id="replacedata">replaceData</h3>
<code class="prism language-undefined"><span class="token function">replaceData</span><span class="token punctuation">(</span>
  key<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  newData<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftEntityInstance</code><p>The <code>replaceData</code> method is similar to the <code>mergeData</code> method, except it will
totally discard the existing <code>data</code> value for the instance and replace it with
the specified <code>newData</code>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-selection-state.html#content">Next →</a></div></div>
`