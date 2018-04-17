import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>ContentBlock</h1><div><p><code>ContentBlock</code> is an Immutable
<a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Record</a> that
represents the full state of a single block of editor content, including:</p>
<ul>
<li>Plain text contents of the block</li>
<li>Type, e.g. paragraph, header, list item</li>
<li>Entity, inline style, and depth information</li>
</ul>
<p>A <code>ContentState</code> object contains an <code>OrderedMap</code> of these <code>ContentBlock</code> objects,
which together comprise the full contents of the editor.</p>
<p><code>ContentBlock</code> objects are largely analogous to block-level HTML elements like
paragraphs and list items. The available types are:</p>
<ul>
<li>unstyled</li>
<li>paragraph</li>
<li>header-one</li>
<li>header-two</li>
<li>header-three</li>
<li>header-four</li>
<li>header-five</li>
<li>header-six</li>
<li>unordered-list-item</li>
<li>ordered-list-item</li>
<li>blockquote</li>
<li>code-block</li>
<li>atomic</li>
</ul>
<p>New <code>ContentBlock</code> objects may be created directly using the constructor.
Expected Record values are detailed below.</p>
<h3 id="representing-styles-and-entities">Representing styles and entities</h3>
<p>The <code>characterList</code> field is an immutable <code>List</code> containing a <code>CharacterMetadata</code>
object for every character in the block. This is how we encode styles and
entities for a given block.</p>
<p>By making heavy use of immutability and data persistence for these lists and
<code>CharacterMetadata</code> objects, edits to the content generally have little impact
on the memory footprint of the editor.</p>
<p>By encoding inline styles and entities together in this way, a function that
performs edits on a <code>ContentBlock</code> can perform slices, concats, and other List
methods on a single <code>List</code> object.</p>
<p>When creating a new <code>ContentBlock</code> containing <code>text</code> and without <code>characterList</code>
it then will default to a <code>characterList</code> with empty <code>CharacterMetadata</code> for the
supplied text.</p>
<h2 id="overview">Overview</h2>
<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#getkey">
      <code>getKey(): string</code>
    </a>
  </li>
  <li>
    <a href="#gettype">
      <code>getType(): DraftBlockType</code>
    </a>
  </li>
  <li>
    <a href="#gettext">
      <code>getText(): string</code>
    </a>
  </li>
  <li>
    <a href="#getcharacterlist">
      <code>getCharacterList(): List<charactermetadata></charactermetadata></code>
    </a>
  </li>
  <li>
    <a href="#getlength">
      <code>getLength(): number</code>
    </a>
  </li>
  <li>
    <a href="#getdepth">
      <code>getDepth(): number</code>
    </a>
  </li>
  <li>
    <a href="#getinlinestyleat">
      <code>getInlineStyleAt(offset: number): DraftInlineStyle</code>
    </a>
  </li>
  <li>
    <a href="#getentityat">
      <code>getEntityAt(offset: number): ?string</code>
    </a>
  </li>
  <li>
    <a href="#getdata">
      <code>getData(): Map&lt;any, any&gt;</code>
    </a>
  </li>
  <li>
    <a href="#findstyleranges">
      <code>findStyleRanges(filterFn: Function, callback: Function): void</code>
    </a>
  </li>
  <li>
    <a href="#findentityranges">
      <code>findEntityRanges(filterFn: Function, callback: Function): void</code>
    </a>
  </li>
</ul>

<p><em>Properties</em></p>
<blockquote>
<p>Note</p>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Map">Immutable Map API</a>
for the <code>ContentBlock</code> constructor or to set properties.</p>
</blockquote>
<ul class="apiIndex">
  <li>
    <a href="#key">
      <code>key: string</code>
    </a>
  </li>
  <li>
    <a href="#type">
      <code>type: DraftBlockType</code>
    </a>
  </li>
  <li>
    <a href="#text">
      <code>text: string</code>
    </a>
  </li>
  <li>
    <a href="#characterlist">
      <code>characterList: List<charactermetadata></charactermetadata></code>
    </a>
  </li>
  <li>
    <a href="#depth">
      <code>depth: number</code>
    </a>
  </li>
  <li>
    <a href="#data">
      <code>data: Map&lt;any, any&gt;</code>
    </a>
  </li>
</ul>

<h2 id="methods">Methods</h2>
<h3 id="getkey-">getKey()</h3>
<code class="prism language-undefined"><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the string key for this <code>ContentBlock</code>.</p>
<h3 id="gettype-">getType()</h3>
<code class="prism language-undefined"><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DraftBlockType</code><p>Returns the type for this <code>ContentBlock</code>. Type values are largely analogous to
block-level HTML elements.</p>
<h3 id="gettext-">getText()</h3>
<code class="prism language-undefined"><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the full plaintext for this <code>ContentBlock</code>. This value does not contain
any styling, decoration, or HTML information.</p>
<h3 id="getcharacterlist-">getCharacterList()</h3>
<code class="prism language-undefined"><span class="token function">getCharacterList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CharacterMetadata</span><span class="token punctuation">&gt;</span></span></code><p>Returns an immutable <code>List</code> of <code>CharacterMetadata</code> objects, one for each
character in the <code>ContentBlock</code>. (See <a href="/docs/api-reference-character-metadata.html">CharacterMetadata</a>
for details.)</p>
<p>This <code>List</code> contains all styling and entity information for the block.</p>
<h3 id="getlength-">getLength()</h3>
<code class="prism language-undefined"><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the length of the plaintext for the <code>ContentBlock</code>.</p>
<p>This value uses the standard JavaScript <code>length</code> property for the string, and
is therefore not Unicode-aware -- surrogate pairs will be counted as two
characters.</p>
<h3 id="getdepth-">getDepth()</h3>
<code class="prism language-undefined"><span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> number</code><p>Returns the depth value for this block, if any. This is currently used only
for list items.</p>
<h3 id="getinlinestyleat-">getInlineStyleAt()</h3>
<code class="prism language-undefined"><span class="token function">getInlineStyleAt</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> number<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftInlineStyle</code><p>Returns the <code>DraftInlineStyle</code> value (an <code>OrderedSet&lt;string&gt;</code>) at a given offset
within this <code>ContentBlock</code>.</p>
<h3 id="getentityat-">getEntityAt()</h3>
<code class="prism language-undefined"><span class="token function">getEntityAt</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> number<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>string</code><p>Returns the entity key value (or <code>null</code> if none) at a given offset within this
<code>ContentBlock</code>.</p>
<h3 id="getdata-">getData()</h3>
<code class="prism language-undefined"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Map<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span></code><p>Returns block-level metadata.</p>
<h3 id="findstyleranges-">findStyleRanges()</h3>
<code class="prism language-undefined"><span class="token function">findStyleRanges</span><span class="token punctuation">(</span>
  filterFn<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> CharacterMetadata<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">,</span>
  callback<span class="token punctuation">:</span> <span class="token punctuation">(</span>start<span class="token punctuation">:</span> number<span class="token punctuation">,</span> end<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code><p>Executes a callback for each contiguous range of styles within this
<code>ContentBlock</code>.</p>
<h3 id="findentityranges-">findEntityRanges()</h3>
<code class="prism language-undefined"><span class="token function">findEntityRanges</span><span class="token punctuation">(</span>
  filterFn<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> CharacterMetadata<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean<span class="token punctuation">,</span>
  callback<span class="token punctuation">:</span> <span class="token punctuation">(</span>start<span class="token punctuation">:</span> number<span class="token punctuation">,</span> end<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code><p>Executes a callback for each contiguous range of entities within this
<code>ContentBlock</code>.</p>
<h2 id="properties">Properties</h2>
<blockquote>
<p>Note</p>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Map">Immutable Map API</a>
for the <code>ContentBlock</code> constructor or to set properties.</p>
</blockquote>
<h3 id="key">key</h3>
<p>See <code>getKey()</code>.</p>
<h3 id="text">text</h3>
<p>See <code>getText()</code>.</p>
<h3 id="type">type</h3>
<p>See <code>getType()</code>.</p>
<h3 id="characterlist">characterList</h3>
<p>See <code>getCharacterList()</code>.</p>
<h3 id="depth">depth</h3>
<p>See <code>getDepth()</code>.</p>
<h3 id="data">data</h3>
<p>See <code>getData()</code>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-character-metadata.html#content">Next →</a></div></div>
`