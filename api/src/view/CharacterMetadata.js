import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>CharacterMetadata</h1><div><p><code>CharacterMetadata</code> is an Immutable
<a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Record</a> that
represents inline style and entity information for a single character.</p>
<p><code>CharacterMetadata</code> objects are aggressively pooled and shared. If two characters
have the same inline style and entity, they are represented with the same
<code>CharacterMetadata</code> object. We therefore need only as many objects as combinations
of utilized inline style sets with entity keys, keeping our memory footprint
small even as the contents grow in size and complexity.</p>
<p>To that end, you should create or apply changes to <code>CharacterMetadata</code> objects
via the provided set of static methods, which will ensure that pooling is utilized.</p>
<p>Most Draft use cases are unlikely to use these static methods, since most common edit
operations are already implemented and available via utility modules. The getter
methods, however, may come in handy at render time.</p>
<p>See the API reference on
<a href="/docs/api-reference-content-block.html#representing-styles-and-entities">ContentBlock</a>
for information on how <code>CharacterMetadata</code> is used within <code>ContentBlock</code>.</p>
<h2 id="overview">Overview</h2>
<p><em>Static Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#create">
      <code>static create(...): CharacterMetadata</code>
    </a>
  </li>
  <li>
    <a href="#applystyle">
      <code>static applyStyle(...): CharacterMetadata</code>
    </a>
  </li>
  <li>
    <a href="#removestyle">
      <code>static removeStyle(...): CharacterMetadata</code>
    </a>
  </li>
  <li>
    <a href="#applyentity">
      <code>static applyEntity(...): CharacterMetadata</code>
    </a>
  </li>
</ul>

<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#getstyle">
      <code>getStyle(): DraftInlineStyle</code>
    </a>
  </li>
  <li>
    <a href="#hasstyle">
      <code>hasStyle(style: string): boolean</code>
    </a>
  </li>
  <li>
    <a href="#getentity">
      <code>getEntity(): ?string</code>
    </a>
  </li>
</ul>

<h2 id="static-methods">Static Methods</h2>
<p>Under the hood, these methods will utilize pooling to return a matching object,
or return a new object if none exists.</p>
<h3 id="create">create</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token punctuation">:</span> CharacterMetadataConfig<span class="token punctuation">)</span><span class="token punctuation">:</span> CharacterMetadata</code><p>Generates a <code>CharacterMetadata</code> object from the provided configuration. This
function should be used in lieu of a constructor.</p>
<p>The configuration will be used to check whether a pooled match for this
configuration already exists. If so, the pooled object will be returned.
Otherwise, a new <code>CharacterMetadata</code> will be pooled for this configuration,
and returned.</p>
<h3 id="applystyle">applyStyle</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">applyStyle</span><span class="token punctuation">(</span>
  record<span class="token punctuation">:</span> CharacterMetadata<span class="token punctuation">,</span>
  style<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> CharacterMetadata</code><p>Apply an inline style to this <code>CharacterMetadata</code>.</p>
<h3 id="removestyle">removeStyle</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">removeStyle</span><span class="token punctuation">(</span>
  record<span class="token punctuation">:</span> CharacterMetadata<span class="token punctuation">,</span>
  style<span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> CharacterMetadata</code><p>Remove an inline style from this <code>CharacterMetadata</code>.</p>
<h3 id="applyentity">applyEntity</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">applyEntity</span><span class="token punctuation">(</span>
  record<span class="token punctuation">:</span> CharacterMetadata<span class="token punctuation">,</span>
  entityKey<span class="token punctuation">:</span> <span class="token operator">?</span>string
<span class="token punctuation">)</span><span class="token punctuation">:</span> CharacterMetadata</code><p>Apply an entity key -- or provide <code>null</code> to remove an entity key -- on this
<code>CharacterMetadata</code>.</p>
<h2 id="methods">Methods</h2>
<h3 id="getstyle">getStyle</h3>
<code class="prism language-undefined"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DraftInlineStyle</code><p>Returns the <code>DraftInlineStyle</code> for this character, an <code>OrderedSet</code> of strings
that represents the inline style to apply for the character at render time.</p>
<h3 id="hasstyle">hasStyle</h3>
<code class="prism language-undefined"><span class="token function">hasStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether this character has the specified style.</p>
<h3 id="getentity">getEntity</h3>
<code class="prism language-undefined"><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>string</code><p>Returns the entity key (if any) for this character, as mapped to the global set of
entities tracked by the <a href="https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntity.js"><code>Entity</code></a>
module.</p>
<p>By tracking a string key here, we can keep the corresponding metadata separate
from the character representation.</p>
<p>If null, no entity is applied for this character.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-entity.html#content">Next →</a></div></div>
`