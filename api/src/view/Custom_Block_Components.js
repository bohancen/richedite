import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Custom Block Components</h1><div><p>Draft is designed to solve problems for straightforward rich text interfaces
like comments and chat messages, but it also powers richer editor experiences
like <a href="https://www.facebook.com/notes/">Facebook Notes</a>.</p>
<p>Users can embed images within their Notes, either loading from their existing
Facebook photos or by uploading new images from the desktop. To that end,
the Draft framework supports custom rendering at the block level, to render
content like rich media in place of plain text.</p>
<p>The <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tex">TeX editor</a>
in the Draft repository provides a live example of custom block rendering, with
TeX syntax translated on the fly into editable embedded formula rendering via the
<a href="https://khan.github.io/KaTeX/">KaTeX library</a>.</p>
<p>A <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/media">media example</a> is also
available, which showcases custom block rendering of audio, image, and video.</p>
<p>By using a custom block renderer, it is possible to introduce complex rich
interactions within the frame of your editor.</p>
<h2 id="custom-block-components">Custom Block Components</h2>
<p>Within the <code>Editor</code> component, one may specify the <code>blockRendererFn</code> prop.
This prop function allows a higher-level component to define custom React
rendering for <code>ContentBlock</code> objects, based on block type, text, or other
criteria.</p>
<p>For instance, we may wish to render <code>ContentBlock</code> objects of type <code>'atomic'</code>
using a custom <code>MediaComponent</code>.</p>
<pre class="prism language-js"><span class="token keyword">function</span> <span class="token function">myBlockRenderer</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> contentBlock<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'atomic'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      component<span class="token punctuation">:</span> MediaComponent<span class="token punctuation">,</span>
      editable<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      props<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        foo<span class="token punctuation">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Then...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">EditorWithMedia</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">...</span> <span class="token attr-name">blockRendererFn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>myBlockRenderer<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>If no custom renderer object is returned by the <code>blockRendererFn</code> function,
<code>Editor</code> will render the default <code>DraftEditorBlock</code> text block component.</p>
<p>The <code>component</code> property defines the component to be used, while the optional
<code>props</code> object includes props that will be passed through to the rendered
custom component via the <code>props.blockProps</code> sub property object. In addition,
the optional <code>editable</code> property determines whether the custom component is
<code>contentEditable</code>.</p>
<p>It is strongly recommended that you use <code>editable: false</code> if your custom
component will not contain text.</p>
<p>If your component contains text as provided by your <code>ContentState</code>, your custom
component should compose a <code>DraftEditorBlock</code> component. This will allow the
Draft framework to properly maintain cursor behavior within your contents.</p>
<p>By defining this function within the context of a higher-level component,
the props for this custom component may be bound to that component, allowing
instance methods for custom component props.</p>
<h2 id="defining-custom-block-components">Defining custom block components</h2>
<p>Within <code>MediaComponent</code>, the most likely use case is that you will want to
retrieve entity metadata to render your custom block. You may apply an entity
key to the text within a <code>'atomic'</code> block during <code>EditorState</code> management,
then retrieve the metadata for that key in your custom component <code>render()</code>
code.</p>
<pre class="prism language-js"><span class="token keyword">class</span> <span class="token class-name">MediaComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>block<span class="token punctuation">,</span> contentState<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>blockProps<span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">getEntityAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Return a &lt;figure&gt; or some other content using this data.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>The <code>ContentBlock</code> object and the <code>ContentState</code> record are made available
within the custom component, along with the props defined at the top level. By
extracting entity information from the <code>ContentBlock</code> and the <code>Entity</code> map, you
can obtain the metadata required to render your custom component.</p>
<p><em>Retrieving the entity from the block is admittedly a bit of an awkward API,
and is worth revisiting.</em></p>
<h2 id="recommendations-and-other-notes">Recommendations and other notes</h2>
<p>If your custom block renderer requires mouse interaction, it is often wise
to temporarily set your <code>Editor</code> to <code>readOnly={true}</code> during this
interaction. In this way, the user does not trigger any selection changes within
the editor while interacting with the custom block. This should not be a problem
with respect to editor behavior, since interacting with your custom block
component is most likely mutually exclusive from text changes within the editor.</p>
<p>The recommendation above is especially important for custom block renderers
that involve text input, like the TeX editor example.</p>
<p>It is also worth noting that within the Facebook Notes editor, we have not
tried to perform any special SelectionState rendering or management on embedded
media, such as rendering a highlight on an embedded photo when selecting it.
This is in part because of the rich interaction provided on the media
itself, with resize handles and other controls exposed to mouse behavior.</p>
<p>Since an engineer using Draft has full awareness of the selection state
of the editor and full control over native Selection APIs, it would be possible
to build selection behavior on static embedded media if desired. So far, though,
we have not tried to solve this at Facebook, so we have not packaged solutions
for this use case into the Draft project at this time.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-inline-styles.html#content">Next →</a></div></div>
`