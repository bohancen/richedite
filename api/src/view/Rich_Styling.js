import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Rich Styling</h1><div><p>Now that we have established the basics of the top-level API, we can go a step
further and examine how basic rich styling can be added to a <code>Draft</code> editor.</p>
<p>A <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich">rich text example</a>
is also available to follow along.</p>
<h2 id="editorstate-yours-to-command">EditorState: Yours to Command</h2>
<p>The previous article introduced the <code>EditorState</code> object as a snapshot of the
full state of the editor, as provided by the <code>Editor</code> core via the
<code>onChange</code> prop.</p>
<p>However, since your top-level React component is responsible for maintaining the
state, you also have the freedom to apply changes to that <code>EditorState</code> object
in any way you see fit.</p>
<p>For inline and block style behavior, for example, the <a href="/docs/api-reference-rich-utils.html"><code>RichUtils</code></a> module
provides a number of useful functions to help manipulate state.</p>
<p>Similarly, the <a href="/docs/api-reference-modifier.html">Modifier</a> module also provides a
number of common operations that allow you to apply edits, including changes
to text, styles, and more. This module is a suite of edit functions that
compose simpler, smaller edit functions to return the desired <code>EditorState</code>
object.</p>
<p>For this example, we'll stick with <code>RichUtils</code> to demonstrate how to apply basic
rich styling within the top-level component.</p>
<h2 id="richutils-and-key-commands">RichUtils and Key Commands</h2>
<p><code>RichUtils</code> has information about the core key commands available to web editors,
such as Cmd+B (bold), Cmd+I (italic), and so on.</p>
<p>We can observe and handle key commands via the <code>handleKeyCommand</code> prop, and
hook these into <code>RichUtils</code> to apply or remove the desired style.</p>
<pre class="prism language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">,</span> EditorState<span class="token punctuation">,</span> RichUtils<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">.</span><span class="token function">createEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>editorState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handleKeyCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> editorState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newState <span class="token operator">=</span> RichUtils<span class="token punctuation">.</span><span class="token function">handleKeyCommand</span><span class="token punctuation">(</span>editorState<span class="token punctuation">,</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>newState<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token string">'handled'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">'not-handled'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleKeyCommand</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre><blockquote>
<p>handleKeyCommand</p>
<p>The <code>command</code> argument supplied to <code>handleKeyCommand</code> is a string value, the
name of the command to be executed. This is mapped from a DOM key event. The
<code>editorState</code> argument represents the latest editor state as it might be
changed internally by draft when handling the key. Use this instance of the
editor state inside <code>handleKeyCommand</code>. See
<a href="/docs/advanced-topics-key-bindings.html">Advanced Topics - Key Binding</a> for more
on this, as well as details on why the function returns <code>handled</code> or <code>not-handled</code>.</p>
</blockquote>
<h2 id="styling-controls-in-ui">Styling Controls in UI</h2>
<p>Within your React component, you can add buttons or other controls to allow
the user to modify styles within the editor. In the example above, we are using
known key commands, but we can add more complex UI to provide these rich
features.</p>
<p>Here's a super-basic example with a "Bold" button to toggle the <code>BOLD</code> style.</p>
<pre class="prism language-js"><span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// …</span>

  <span class="token function">_onBoldClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>RichUtils<span class="token punctuation">.</span><span class="token function">toggleInlineStyle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">,</span> <span class="token string">'BOLD'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_onBoldClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Bold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
          <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
          <span class="token attr-name">handleKeyCommand</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand<span class="token punctuation">}</span></span>
          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre></div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-entities.html#content">Next →</a></div></div>
`