import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Decorators</h1><div><p>Inline and block styles aren't the only kind of rich styling that we might
want to add to our editor. The Facebook comment input, for example, provides
blue background highlights for mentions and hashtags.</p>
<p>To support flexibility for custom rich text, Draft provides a "decorator"
system. The <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tweet">tweet example</a>
offers a live example of decorators in action.</p>
<h2 id="compositedecorator">CompositeDecorator</h2>
<p>The decorator concept is based on scanning the contents of a given
<a href="/docs/api-reference-content-block.html">ContentBlock</a>
for ranges of text that match a defined strategy, then rendering them
with a specified React component.</p>
<p>You can use the <code>CompositeDecorator</code> class to define your desired
decorator behavior. This class allows you to supply multiple <code>DraftDecorator</code>
objects, and will search through a block of text with each strategy in turn.</p>
<p>Decorators are stored within the <code>EditorState</code> record. When creating a new
<code>EditorState</code> object, e.g. via <code>EditorState.createEmpty()</code>, a decorator may
optionally be provided.</p>
<blockquote>
<p>Under the hood</p>
<p>When contents change in a Draft editor, the resulting <code>EditorState</code> object
will evaluate the new <code>ContentState</code> with its decorator, and identify ranges
to be decorated. A complete tree of blocks, decorators, and inline styles is
formed at this time, and serves as the basis for our rendered output.</p>
<p>In this way, we always ensure that as contents change, rendered decorations
are in sync with our <code>EditorState</code>.</p>
</blockquote>
<p>In the "Tweet" editor example, for instance, we use a <code>CompositeDecorator</code> that
searches for @-handle strings as well as hashtag strings:</p>
<pre class="prism language-js"><span class="token keyword">const</span> compositeDecorator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDecorator</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    strategy<span class="token punctuation">:</span> handleStrategy<span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> HandleSpan<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    strategy<span class="token punctuation">:</span> hashtagStrategy<span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> HashtagSpan<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p>This composite decorator will first scan a given block of text for @-handle
matches, then for hashtag matches.</p>
<pre class="prism language-js"><span class="token comment">// Note: these aren't very good regexes, don't use them!</span>
<span class="token keyword">const</span> HANDLE_REGEX <span class="token operator">=</span> <span class="token regex">/\@[\w]+/g</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HASHTAG_REGEX <span class="token operator">=</span> <span class="token regex">/\#[\w\u0590-\u05ff]+/g</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleStrategy</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> contentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">findWithRegex</span><span class="token punctuation">(</span>HANDLE_REGEX<span class="token punctuation">,</span> contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">hashtagStrategy</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> contentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">findWithRegex</span><span class="token punctuation">(</span>HASHTAG_REGEX<span class="token punctuation">,</span> contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">findWithRegex</span><span class="token punctuation">(</span>regex<span class="token punctuation">,</span> contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> contentBlock<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> matchArr<span class="token punctuation">,</span> start<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>matchArr <span class="token operator">=</span> regex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    start <span class="token operator">=</span> matchArr<span class="token punctuation">.</span>index<span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> matchArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><p>The strategy functions execute the provided callback with the <code>start</code> and
<code>end</code> values of the matching range of text.</p>
<h2 id="decorator-components">Decorator Components</h2>
<p>For your decorated ranges of text, you must define a React component to use
to render them. These tend to be simple <code>span</code> elements with CSS classes or
styles applied to them.</p>
<p>In our current example, the <code>CompositeDecorator</code> object names <code>HandleSpan</code> and
<code>HashtagSpan</code> as the components to use for decoration. These are just basic
stateless components:</p>
<pre class="prism language-js"><span class="token keyword">const</span> <span class="token function-variable function">HandleSpan</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>handle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">HashtagSpan</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>hashtag<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></pre><p>Note that <code>props.children</code> is passed through to the rendered output. This is
done to ensure that the text is rendered within the decorated <code>span</code>.</p>
<p>You can use the same approach for links, as demonstrated in our
<a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link">link example</a>.</p>
<h3 id="beyond-compositedecorator">Beyond CompositeDecorator</h3>
<p>The decorator object supplied to an <code>EditorState</code> need only match the expectations
of the
<a href="https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js">DraftDecoratorType</a>
Flow type definition, which means that you can create any decorator classes
you wish, as long as they match the expected type -- you are not bound by
<code>CompositeDecorator</code>.</p>
<h2 id="setting-new-decorators">Setting new decorators</h2>
<p>Further, it is acceptable to set a new <code>decorator</code> value on the <code>EditorState</code>
on the fly, during normal state propagation -- through immutable means, of course.</p>
<p>This means that during your app workflow, if your decorator becomes invalid or
requires a modification, you can create a new decorator object (or use
<code>null</code> to remove all decorations) and <code>EditorState.set()</code> to make use of the new
decorator setting.</p>
<p>For example, if for some reason we wished to disable the creation of @-handle
decorations while the user interacts with the editor, it would be fine to do the
following:</p>
<pre class="prism language-js"><span class="token keyword">function</span> <span class="token function">turnOffHandleDecorations</span><span class="token punctuation">(</span>editorState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onlyHashtags <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDecorator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    strategy<span class="token punctuation">:</span> hashtagStrategy<span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> HashtagSpan<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> EditorState<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>editorState<span class="token punctuation">,</span> <span class="token punctuation">{</span>decorator<span class="token punctuation">:</span> onlyHashtags<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></pre><p>The <code>ContentState</code> for this <code>editorState</code> will be re-evaluated with the new
decorator, and @-handle decorations will no longer be present in the next
render pass.</p>
<p>Again, this remains memory-efficient due to data persistence across immutable
objects.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-key-bindings.html#content">Next →</a></div></div>
`