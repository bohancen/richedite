import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>API Basics</h1><div><p>This document provides an overview of the basics of the <code>Draft</code> API. A
<a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext">working example</a>
is also available to follow along.</p>
<h2 id="controlled-inputs">Controlled Inputs</h2>
<p>The <code>Editor</code> React component is built as a controlled ContentEditable component,
with the goal of providing a top-level API modeled on the familiar React
<em>controlled input</em> API.</p>
<p>As a brief refresher, controlled inputs involve two key pieces:</p>
<ol>
<li>A <em>value</em> to represent the state of the input</li>
<li>An <em>onChange</em> prop function to receive updates to the input</li>
</ol>
<p>This approach allows the component that composes the input to have strict
control over the state of the input, while still allowing updates to the DOM
to provide information about the text that the user has written.</p>
<code class="prism language-js"><span class="token keyword">class</span> <span class="token class-name">MyInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>evt<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> evt<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code><p>The top-level component can maintain control over the input state via this
<code>value</code> state property.</p>
<h2 id="controlling-rich-text">Controlling Rich Text</h2>
<p>In a React rich text scenario, however, there are two clear problems:</p>
<ol>
<li>A string of plaintext is insufficient to represent the complex state of
a rich editor.</li>
<li>There is no such <code>onChange</code> event available for a ContentEditable element.</li>
</ol>
<p>State is therefore represented as a single immutable
<a href="/docs/api-reference-editor-state.html">EditorState</a> object, and
<code>onChange</code> is implemented within the <code>Editor</code> core to provide this state
value to the top level.</p>
<p>The <code>EditorState</code> object is a complete snapshot of the state of the editor,
including contents, cursor, and undo/redo history. All changes to content and
selection within the editor will create new <code>EditorState</code> objects. Note that
this remains efficient due to data persistence across immutable objects.</p>
<code class="prism language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">,</span> EditorState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">.</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>editorState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code><p>For any edits or selection changes that occur in the editor DOM, your <code>onChange</code>
handler will execute with the latest <code>EditorState</code> object based on those changes.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="quickstart-rich-styling.html#content">Next →</a></div></div>
`