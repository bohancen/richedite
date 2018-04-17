import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>ContentState</h1><div><p><code>ContentState</code> is an Immutable
<a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Record</a> that
represents the full state of:</p>
<ul>
<li>The entire <strong>contents</strong> of an editor: text, block and inline styles, and entity ranges.</li>
<li>Two <strong>selection states</strong> of an editor: before and after the rendering of these contents.</li>
</ul>
<p>The most common use for the <code>ContentState</code> object is via <code>EditorState.getCurrentContent()</code>,
which provides the <code>ContentState</code> currently being rendered in the editor.</p>
<p>An <code>EditorState</code> object maintains undo and redo stacks comprised of <code>ContentState</code>
objects.</p>
<h2 id="overview">Overview</h2>
<p><em>Static Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#createfromtext">
      <code>static createFromText(text: string): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#createfromblockarray">
      <code>static createFromBlockArray(blocks: Array<contentblock>): ContentState</contentblock></code>
    </a>
  </li>
</ul>

<p><em>Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#getentitymap">
      <code>getEntityMap()</code>
    </a>
  </li>
  <li>
    <a href="#getblockmap">
      <code>getBlockMap()</code>
    </a>
  </li>
  <li>
    <a href="#getselectionbefore">
      <code>getSelectionBefore()</code>
    </a>
  </li>
  <li>
    <a href="#getselectionafter">
      <code>getSelectionAfter()</code>
    </a>
  </li>
  <li>
    <a href="#getblockforkey">
      <code>getBlockForKey(key)</code>
    </a>
  </li>
  <li>
    <a href="#getkeybefore">
      <code>getKeyBefore(key)</code>
    </a>
  </li>
  <li>
    <a href="#getkeyafter">
      <code>getKeyAfter(key)</code>
    </a>
  </li>
  <li>
    <a href="#getblockbefore">
      <code>getBlockBefore(key)</code>
    </a>
  </li>
  <li>
    <a href="#getblockafter">
      <code>getBlockAfter(key)</code>
    </a>
  </li>
  <li>
    <a href="#getblocksasarray">
      <code>getBlocksAsArray()</code>
    </a>
  </li>
  <li>
    <a href="#getfirstblock">
      <code>getFirstBlock()</code>
    </a>
  </li>
  <li>
    <a href="#getlastblock">
      <code>getLastBlock()</code>
    </a>
  </li>
  <li>
    <a href="#getplaintext">
      <code>getPlainText(delimiter)</code>
    </a>
  </li>
  <li>
    <a href="#getlastcreatedentitykey">
      <code>getLastCreatedEntityKey()</code>
    </a>
  </li>
  <li>
    <a href="#hastext">
      <code>hasText()</code>
    </a>
  </li>
  <li>
    <a href="#createentity">
      <code>createEntity(...)</code>
    </a>
  </li>
  <li>
    <a href="#getentity">
      <code>getEntity(...)</code>
    </a>
  </li>
  <li>
    <a href="#mergeentitydata">
      <code>mergeEntityData(...)</code>
    </a>
  </li>
  <li>
    <a href="#replaceentitydata">
      <code>replaceEntityData(...)</code>
    </a>
  </li>
  <li>
    <a href="#addentity">
      <code>addEntity(...)</code>
    </a>
  </li>
</ul>

<p><em>Properties</em></p>
<blockquote>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Map">Immutable Map API</a> to
set properties.</p>
</blockquote>
<ul class="apiIndex">
  <li>
    <a href="#blockmap">
      <code>blockMap</code>
    </a>
  </li>
  <li>
    <a href="#selectionbefore">
      <code>selectionBefore</code>
    </a>
  </li>
  <li>
    <a href="#selectionafter">
      <code>selectionAfter</code>
    </a>
  </li>
</ul>

<h2 id="static-methods">Static Methods</h2>
<h3 id="createfromtext">createFromText</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">createFromText</span><span class="token punctuation">(</span>
  text<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  delimiter<span class="token operator">?</span><span class="token punctuation">:</span> string
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Generates a <code>ContentState</code> from a string, with a delimiter to split the string
into <code>ContentBlock</code> objects. If no delimiter is provided, '<code>\n</code>' is used.</p>
<h3 id="createfromblockarray">createFromBlockArray</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">createFromBlockArray</span><span class="token punctuation">(</span>
  blocks<span class="token punctuation">:</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentBlock</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
  entityMap<span class="token punctuation">:</span> <span class="token operator">?</span>OrderedMap
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Generates a <code>ContentState</code> from an array of <code>ContentBlock</code> objects. The default
<code>selectionBefore</code> and <code>selectionAfter</code> states have the cursor at the start of
the content.</p>
<h2 id="methods">Methods</h2>
<h3 id="getentitymap">getEntityMap</h3>
<code class="prism language-undefined"><span class="token function">getEntityMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> EntityMap</code><p>Returns an object store containing all <code>DraftEntity</code> records that have been
created.  In upcoming v0.11.0 the map returned will be an Immutable ordered map
of <code>DraftEntity</code> records.</p>
<p>In most cases, you should be able to use the convenience methods below to target
specific <code>DraftEntity</code> records or obtain information about the state of the
content.</p>
<h3 id="getblockmap">getBlockMap</h3>
<code class="prism language-undefined"><span class="token function">getBlockMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> BlockMap</code><p>Returns the full ordered map of <code>ContentBlock</code> objects representing the state
of an entire document.</p>
<p>In most cases, you should be able to use the convenience methods below to target
specific <code>ContentBlock</code> objects or obtain information about the state of the content.</p>
<h3 id="getselectionbefore">getSelectionBefore</h3>
<code class="prism language-undefined"><span class="token function">getSelectionBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> SelectionState</code><p>Returns the <code>SelectionState</code> displayed in the editor before rendering <code>blockMap</code>.</p>
<p>When performing an <code>undo</code> action in the editor, the <code>selectionBefore</code> of the current
<code>ContentState</code> is used to place the selection range in the appropriate position.</p>
<h3 id="getselectionafter">getSelectionAfter</h3>
<code class="prism language-undefined"><span class="token function">getSelectionAfter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> SelectionState</code><p>Returns the <code>SelectionState</code> displayed in the editor after rendering <code>blockMap</code>.</p>
<p>When performing any action in the editor that leads to this <code>blockMap</code> being rendered,
the selection range will be placed in the <code>selectionAfter</code> position.</p>
<h3 id="getblockforkey">getBlockForKey</h3>
<code class="prism language-undefined"><span class="token function">getBlockForKey</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentBlock</code><p>Returns the <code>ContentBlock</code> corresponding to the given block key.</p>
<h4 id="example">Example</h4>
<code class="prism language-undefined"><span class="token keyword">var</span> <span class="token punctuation">{</span>editorState<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
<span class="token keyword">var</span> startKey <span class="token operator">=</span> editorState<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getStartKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> selectedBlockType <span class="token operator">=</span> editorState
  <span class="token punctuation">.</span><span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getBlockForKey</span><span class="token punctuation">(</span>startKey<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code><h3 id="getkeybefore">getKeyBefore</h3>
<code class="prism language-undefined"><span class="token function">getKeyBefore</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>string</code><p>Returns the key before the specified key in <code>blockMap</code>, or null if this is the first key.</p>
<h3 id="getkeyafter">getKeyAfter</h3>
<code class="prism language-undefined"><span class="token function">getKeyAfter</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>string</code><p>Returns the key after the specified key in <code>blockMap</code>, or null if this is the last key.</p>
<h3 id="getblockbefore">getBlockBefore</h3>
<code class="prism language-undefined"><span class="token function">getBlockBefore</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>ContentBlock</code><p>Returns the <code>ContentBlock</code> before the specified key in <code>blockMap</code>, or null if this is
the first key.</p>
<h3 id="getblockafter">getBlockAfter</h3>
<code class="prism language-undefined"><span class="token function">getBlockAfter</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span>ContentBlock</code><p>Returns the <code>ContentBlock</code> after the specified key in <code>blockMap</code>, or null if this is the last key.</p>
<h3 id="getblocksasarray">getBlocksAsArray</h3>
<code class="prism language-undefined"><span class="token function">getBlocksAsArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentBlock</span><span class="token punctuation">&gt;</span></span></code><p>Returns the values of <code>blockMap</code> as an array.</p>
<p>You generally won't need to use this method, since <code>getBlockMap</code> provides an <code>OrderedMap</code> that you should use for iteration.</p>
<h3 id="getfirstblock">getFirstBlock</h3>
<code class="prism language-undefined"><span class="token function">getFirstBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> ContentBlock</code><p>Returns the first <code>ContentBlock</code>.</p>
<h3 id="getlastblock">getLastBlock</h3>
<code class="prism language-undefined"><span class="token function">getLastBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> ContentBlock</code><p>Returns the last <code>ContentBlock</code>.</p>
<h3 id="getplaintext">getPlainText</h3>
<code class="prism language-undefined"><span class="token function">getPlainText</span><span class="token punctuation">(</span>delimiter<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the full plaintext value of the contents, joined with a delimiter. If no
delimiter is specified, the line feed character (<code>\u000A</code>) is used.</p>
<h3 id="getlastcreatedentitykey">getLastCreatedEntityKey</h3>
<code class="prism language-undefined"><span class="token function">getLastCreatedEntityKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string</code><p>Returns the string key that can be used to reference the most recently created
<code>DraftEntity</code> record. This is because entities are referenced by their string
key in ContentState. The string value should be used within CharacterMetadata
objects to track the entity for annotated characters.</p>
<h3 id="hastext">hasText</h3>
<code class="prism language-undefined"><span class="token function">hasText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Returns whether the contents contain any text at all.</p>
<h3 id="createentity">createEntity</h3>
<code class="prism language-undefined"><span class="token function">createEntity</span><span class="token punctuation">(</span>
  type<span class="token punctuation">:</span> DraftEntityType<span class="token punctuation">,</span>
  mutability<span class="token punctuation">:</span> DraftEntityMutability<span class="token punctuation">,</span>
  data<span class="token operator">?</span><span class="token punctuation">:</span> Object
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Returns <code>ContentState</code> record updated to include the newly created
DraftEntity record in it's <code>EntityMap</code>. Call <code>getLastCreatedEntityKey</code> to get
the key of the newly created <code>DraftEntity</code> record.</p>
<h3 id="getentity">getEntity</h3>
<code class="prism language-undefined"><span class="token function">getEntity</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftEntityInstance</code><p>Returns the DraftEntityInstance for the specified key. Throws if no instance exists for that key.</p>
<h3 id="mergeentitydata">mergeEntityData</h3>
<code class="prism language-undefined"><span class="token function">mergeEntityData</span><span class="token punctuation">(</span>
  key<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  toMerge<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Since DraftEntityInstance objects are immutable, you cannot update an entity's
metadata through typical mutative means.</p>
<p>The mergeData method allows you to apply updates to the specified entity.</p>
<h3 id="replaceentitydata">replaceEntityData</h3>
<code class="prism language-undefined"><span class="token function">replaceEntityData</span><span class="token punctuation">(</span>
  key<span class="token punctuation">:</span> string<span class="token punctuation">,</span>
  newData<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>The replaceData method is similar to the mergeData method, except it will totally discard the existing data value for the instance and replace it with the specified newData.</p>
<h3 id="addentity">addEntity</h3>
<code class="prism language-undefined"><span class="token function">addEntity</span><span class="token punctuation">(</span>instance<span class="token punctuation">:</span> DraftEntityInstance<span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>In most cases, you will use contentState.createEntity(). This is a convenience
method that you probably will not need in typical Draft usage.</p>
<p>The add function is useful in cases where the instances have already been
created, and now need to be added to the Entity store. This may occur in cases
where a vanilla JavaScript representation of a ContentState is being revived for
editing.</p>
<h2 id="properties">Properties</h2>
<blockquote>
<p>Use <a href="http://facebook.github.io/immutable-js/docs/#/Map">Immutable Map API</a> to
set properties.</p>
</blockquote>
<h3 id="blockmap">blockMap</h3>
<p>See <code>getBlockMap()</code>.</p>
<h3 id="selectionbefore">selectionBefore</h3>
<p>See <code>getSelectionBefore()</code>.</p>
<h3 id="selectionafter">selectionAfter</h3>
<p>See <code>getSelectionAfter()</code>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-content-block.html#content">Next →</a></div></div>
`