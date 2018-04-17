import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>EditorState Race Conditions</h1><div><p>Draft <code>Editor</code> is a <em>controlled input</em> component (you can read about this in detail in the <a href="/docs/quickstart-api-basics.html">API Basics</a> section), meaning that changes made to the <code>Editor</code> state are propagated upwards through <code>onChange</code> and it's up to the app to feed it back to the <code>Editor</code> component.</p>
<p>This cycle usually looks like:</p>
<code class="prism language-undefined"><span class="token operator">...</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>editorState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>editorState<span class="token punctuation">:</span> editorState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
  <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter some text...<span class="token punctuation">"</span></span>
<span class="token punctuation">/&gt;</span></span></code><p>Different browser events can trigger the <code>Editor</code> to create a new state and call <code>onChange</code>. For instance, when the user pastes text into it, Draft parses the new content and creates the necessary data structure to represent it.</p>
<p>This cycle works great, however, it is an asynchronous operation because of the <code>setState</code> call. This introduces a delay between setting the state and rendering the <code>Editor</code> with the new state. During this time period other JS code can be executed.
<img src="/img/editorstate-race-condition-1-handler.png" alt="">
Non-atomic operations like this can potentially introduce race conditions.
Here's an example: Suppose you want to remove all the text styles that come from the paste. This can be implemented by listening to the onPaste event and removing all styles from the <code>EditorState</code>:</p>
<code class="prism language-undefined"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onPaste</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    editorState<span class="token punctuation">:</span> <span class="token function">removeEditorStyles</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code><p>However, this won't work as expected. You now have two event handlers that set a new <code>EditorState</code> in the exact same browser event. Since the event handlers will run one after the other only the last <code>setState</code> will prevail. Here's how it looks like in the JS timeline:
<img src="/img/editorstate-race-condition-2-handlers.png" alt="">
As you can see, since <code>setState</code> is an asynchronous operation, the second <code>setState</code> will override whatever it was set on the first one making the <code>Editor</code> lose all the contents from the pasted text.</p>
<p>You can observe and explore the race condition in <a href="https://jsfiddle.net/qecccw3r/">this running example</a>. The example also has logging to highlight the JS timeline so make sure to open the developer tools.</p>
<p>As a rule of thumb avoid having different event handlers for the same event that manipulate the <code>EditorState</code>. Using setTimeout to run <code>setState</code> might also land you in the same situation.
Anytime you feel you're “losing state” make sure you're not overriding it before the <code>Editor</code> re-rendering.</p>
<h2 id="best-practices">Best Practices</h2>
<p>Now that you understand the problem, what can you do to avoid it? In general be mindful of where you're getting the <code>EditorState</code> from. If you're using a local one (stored in <code>this.state</code>) then there's the potential for it to not be up to date.
To minimize this problem Draft offers the latest <code>EditorState</code> instance in most of its callback functions. In your code you should use the provided <code>EditorState</code> instead of your local one to make sure you're basing your changes on the latest one.
Here's a list of supported callbacks on the <code>Editor</code>:</p>
<ul>
<li><code>handleReturn(event, editorState)</code></li>
<li><code>handleKeyCommand(command, editorState)</code></li>
<li><code>handleBeforeInput(chars, editorState)</code></li>
<li><code>handlePastedText(text, html, editorState)</code></li>
</ul>
<p>The paste example can then be re-written in a race condition free way by using these methods:</p>
<code class="prism language-undefined"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">handlePastedText</span> <span class="token operator">=</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> styles<span class="token punctuation">,</span> editorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    editorState<span class="token punctuation">:</span> <span class="token function">removeEditorStyles</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> editorState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
  <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>
  <span class="token attr-name">handlePastedText</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlePastedText<span class="token punctuation">}</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter some text...<span class="token punctuation">"</span></span>
<span class="token punctuation">/&gt;</span></span></code><p>With <code>handlePastedText</code> you can implement the paste behavior by yourself.</p>
<p>NOTE: If you need to have this behavior in your Editor there is a much easier way to achieve this. Just set the <code>Editor</code>'s <code>stripPastedStyles</code> property to <code>true</code>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-issues-and-pitfalls.html#content">Next →</a></div></div>
`