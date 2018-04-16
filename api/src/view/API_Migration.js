import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>v0.10 API Migration</h1><div><p>The Draft.js v0.10 release includes a change to the API for managing
<code>DraftEntity</code> data; the global 'DraftEntity' module is being deprecated and
<code>DraftEntity</code> instances will be managed as part of <code>ContentState</code>. This means
that the methods which were previously accessed on <code>DraftEntity</code> are now moved
to the <code>ContentState</code> record.</p>
<p>This API improvement unlocks the path for many benefits that will be available in v0.11:</p>
<ul>
<li>DraftEntity instances and storage will be immutable.</li>
<li>DraftEntity will no longer be globally accessible.</li>
<li>Any changes to entity data will trigger a re-render.</li>
</ul>
<h2 id="quick-overview">Quick Overview</h2>
<p>Here is a quick list of what has been changed and how to update your application:</p>
<h3 id="creating-an-entity">Creating an entity</h3>
<p><strong>Old Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> entityKey <span class="token operator">=</span> Entity<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
  urlType<span class="token punctuation">,</span>
  <span class="token string">'IMMUTABLE'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>src<span class="token punctuation">:</span> urlValue<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p><strong>New Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> contentStateWithEntity <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">createEntity</span><span class="token punctuation">(</span>
  urlType<span class="token punctuation">,</span>
  <span class="token string">'IMMUTABLE'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>src<span class="token punctuation">:</span> urlValue<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> entityKey <span class="token operator">=</span> contentStateWithEntity<span class="token punctuation">.</span><span class="token function">getLastCreatedEntityKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre><h3 id="getting-an-entity">Getting an Entity</h3>
<p><strong>Old Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> entityInstance <span class="token operator">=</span> Entity<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>entityKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// entityKey is a string key associated with that entity when it was created</span></pre><p><strong>New Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> entityInstance <span class="token operator">=</span> contentState<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span>entityKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// entityKey is a string key associated with that entity when it was created</span></pre><h3 id="decorator-strategy-arguments-change">Decorator Strategy arguments change</h3>
<p><strong>Old Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> compositeDecorator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDecorator</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    strategy<span class="token punctuation">:</span> <span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">exampleFindTextRange</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> ExampleTokenComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p><strong>New Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">const</span> compositeDecorator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDecorator</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    strategy<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      contentBlock<span class="token punctuation">,</span>
      callback<span class="token punctuation">,</span>
      contentState
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">exampleFindTextRange</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> contentState<span class="token punctuation">)</span><span class="token punctuation">,</span>
    component<span class="token punctuation">:</span> ExampleTokenComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre><p>Note that ExampleTokenComponent will receive contentState as a prop.</p>
<p>Why does the 'contentState' get passed into the decorator strategy now? Because we may need it if our strategy is to  find certain entities in the contentBlock:</p>
<pre class="prism language-undefined"><span class="token keyword">const</span> <span class="token function-variable function">mutableEntityStrategy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> contentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  contentBlock<span class="token punctuation">.</span><span class="token function">findEntityRanges</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>character<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> entityKey <span class="token operator">=</span> character<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>entityKey <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// To look for certain types of entities,</span>
      <span class="token comment">// or entities with a certain mutability,</span>
      <span class="token comment">// you may need to get the entity from contentState.</span>
      <span class="token comment">// In this example we get only mutable entities.</span>
      <span class="token keyword">return</span> contentState<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span>entityKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMutability</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'MUTABLE'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    callback<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></pre><h3 id="decorator-strategies-that-find-entities">Decorator Strategies that find Entities</h3>
<p><strong>Old Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">function</span> <span class="token function">findLinkEntities</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  contentBlock<span class="token punctuation">.</span><span class="token function">findEntityRanges</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>character<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> entityKey <span class="token operator">=</span> character<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        entityKey <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        Entity<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>entityKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'LINK'</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    callback<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></pre><p><strong>New Syntax</strong></p>
<pre class="prism language-undefined"><span class="token keyword">function</span> <span class="token function">findLinkEntities</span><span class="token punctuation">(</span>contentBlock<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> contentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  contentBlock<span class="token punctuation">.</span><span class="token function">findEntityRanges</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>character<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> entityKey <span class="token operator">=</span> character<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        entityKey <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        contentState<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span>entityKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'LINK'</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    callback<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></pre><h2 id="more-information">More Information</h2>
<p>For more information see the <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0">updated examples</a>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-decorators.html#content">Next →</a></div></div>
`