import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Entities</h1><div><p>This article discusses the Entity system, which Draft uses for annotating
ranges of text with metadata. Entities introduce levels of richness beyond
styled text. Links, mentions, and embedded content can all be implemented 
using entities.</p>
<p>In the Draft repository, the
<a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link">link editor</a>
and
<a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/entity">entity demo</a>
provide live code examples to help clarify how entities can be used, as well
as their built-in behavior.</p>
<p>The <a href="/docs/api-reference-entity.html">Entity API Reference</a> provides
details on the static methods to be used when creating, retrieving, or updating
entity objects.</p>
<p>For information about recent changes to the Entity API, and examples of how to
update your application,
<a href="/docs/v0-10-api-migration.html#content">see our v0.10 API Migration Guide</a>.</p>
<h2 id="introduction">Introduction</h2>
<p>An entity is an object that represents metadata for a range of text within a
Draft editor. It has three properties:</p>
<ul>
<li><strong>type</strong>: A string that indicates what kind of entity it is, e.g. <code>'LINK'</code>,
<code>'MENTION'</code>, <code>'PHOTO'</code>.</li>
<li><strong>mutability</strong>: Not to be confused with immutability a la <code>immutable-js</code>, this
property denotes the behavior of a range of text annotated with this entity
object when editing the text range within the editor. This is addressed in
greater detail below.</li>
<li><strong>data</strong>: An optional object containing metadata for the entity. For instance,
a <code>'LINK'</code> entity might contain a <code>data</code> object that contains the <code>href</code> value
for that link.</li>
</ul>
<p>All entities are stored in the ContentState record. The entities are referenced
by key within <code>ContentState</code> and React components used to decorate annotated
ranges. (We are currently deprecating a previous API for accessing Entities; see
issue
<a href="https://github.com/facebook/draft-js/issues/839">#839</a>.)</p>
<p>Using <a href="/docs/advanced-topics-decorators.html">decorators</a> or
<a href="/docs/advanced-topics-block-components.html">custom block components</a>, you can
add rich rendering to your editor based on entity metadata.</p>
<h2 id="creating-and-retrieving-entities">Creating and Retrieving Entities</h2>
<p>Entities should be created using <code>contentState.createEntity</code>, which accepts the
three properties above as arguments. This method returns a <code>ContentState</code> record updated to include the newly created entity, then you can call <code>contentState.getLastCreatedEntityKey</code> to get the key of the newly created entity record.</p>
<p>This key is the value that should be used when applying entities to your
content. For instance, the <code>Modifier</code> module contains an <code>applyEntity</code> method:</p>
<code class="prism language-js"><span class="token keyword">const</span> contentState <span class="token operator">=</span> editorState<span class="token punctuation">.</span><span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contentStateWithEntity <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">createEntity</span><span class="token punctuation">(</span>
  <span class="token string">'LINK'</span><span class="token punctuation">,</span>
  <span class="token string">'MUTABLE'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>url<span class="token punctuation">:</span> <span class="token string">'http://www.zombo.com'</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> entityKey <span class="token operator">=</span> contentStateWithEntity<span class="token punctuation">.</span><span class="token function">getLastCreatedEntityKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contentStateWithLink <span class="token operator">=</span> Modifier<span class="token punctuation">.</span><span class="token function">applyEntity</span><span class="token punctuation">(</span>
  contentStateWithEntity<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">,</span>
  entityKey
<span class="token punctuation">)</span><span class="token punctuation">;</span></code><p>For a given range of text, then, you can extract its associated entity key by using
the <code>getEntityAt()</code> method on a <code>ContentBlock</code> object, passing in the target
offset value.</p>
<code class="prism language-js"><span class="token keyword">const</span> blockWithLinkAtBeginning <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">getBlockForKey</span><span class="token punctuation">(</span><span class="token string">'...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> linkKey <span class="token operator">=</span> blockWithLinkAtBeginning<span class="token punctuation">.</span><span class="token function">getEntityAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contentState <span class="token operator">=</span> editorState<span class="token punctuation">.</span><span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> linkInstance <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span>linkKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>url<span class="token punctuation">}</span> <span class="token operator">=</span> linkInstance<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code><h2 id="mutability">"Mutability"</h2>
<p>Entities may have one of three "mutability" values. The difference between them
is the way they behave when the user makes edits to them.</p>
<p>Note that <code>DraftEntityInstance</code> objects are always immutable Records, and this
property is meant only to indicate how the annotated text may be "mutated" within
the editor. <em>(Future changes may rename this property to ward off potential
confusion around naming.)</em></p>
<h3 id="immutable">Immutable</h3>
<p>This text cannot be altered without removing the entity annotation
from the text. Entities with this mutability type are effectively atomic.</p>
<p>For instance, in a Facebook input, add a mention for a Page (i.e. Barack Obama).
Then, either add a character within the mentioned text, or try to delete a character.
Note that when adding characters, the entity is removed, and when deleting character,
the entire entity is removed.</p>
<p>This mutability value is useful in cases where the text absolutely must match
its relevant metadata, and may not be altered.</p>
<h3 id="mutable">Mutable</h3>
<p>This text may be altered freely. For instance, link text is
generally intended to be "mutable" since the href and linkified text are not
tightly coupled.</p>
<h3 id="segmented">Segmented</h3>
<p>Entities that are "segmented" are tightly coupled to their text in much the
same way as "immutable" entities, but allow customization via deletion.</p>
<p>For instance, in a Facebook input, add a mention for a friend. Then, add a
character to the text. Note that the entity is removed from the entire string,
since your mentioned friend may not have their name altered in your text.</p>
<p>Next, try deleting a character or word within the mention. Note that only the
section of the mention that you have deleted is removed. In this way, we can
allow short names for mentions.</p>
<h2 id="modifying-entities">Modifying Entities</h2>
<p>Since <code>DraftEntityInstance</code> records are immutable, you may not update the <code>data</code>
property on an instance directly.</p>
<p>Instead, two <code>Entity</code> methods are available to modify entities: <code>mergeData</code> and
<code>replaceData</code>. The former allows updating data by passing in an object to merge,
while the latter completely swaps in the new data object.</p>
<h2 id="using-entities-for-rich-content">Using Entities for Rich Content</h2>
<p>The next article in this section covers the usage of decorator objects, which
can be used to retrieve entities for rendering purposes.</p>
<p>The <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link">link editor example</a>
provides a working example of entity creation and decoration in use.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="v0-10-api-migration.html#content">Next →</a></div></div>
`