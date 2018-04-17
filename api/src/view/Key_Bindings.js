import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Key Bindings</h1><div><p>The <code>Editor</code> component offers flexibility to define custom key bindings
for your editor, via the <code>keyBindingFn</code> prop. This allows you to match key
commands to behaviors in your editor component.</p>
<h3 id="defaults">Defaults</h3>
<p>The default key binding function is <code>getDefaultKeyBinding</code>.</p>
<p>Since the Draft framework maintains tight control over DOM rendering and
behavior, basic editing commands must be captured and routed through the key
binding system.</p>
<p><code>getDefaultKeyBinding</code> maps known OS-level editor commands to <code>DraftEditorCommand</code>
strings, which then correspond to behaviors within component handlers.</p>
<p>For instance, <code>Ctrl+Z</code> (Win) and <code>Cmd+Z</code> (OSX) map to the <code>'undo'</code> command,
which then routes our handler to perform an <code>EditorState.undo()</code>.</p>
<h3 id="customization">Customization</h3>
<p>You may provide your own key binding function to supply custom command strings.</p>
<p>It is recommended that your function use <code>getDefaultKeyBinding</code> as a
fall-through case, so that your editor may benefit from default commands.</p>
<p>With your custom command string, you may then implement the <code>handleKeyCommand</code>
prop function, which allows you to map that command string to your desired
behavior. If <code>handleKeyCommand</code> returns <code>'handled'</code>, the command is considered
handled. If it returns <code>'not-handled'</code>, the command will fall through.</p>
<h3 id="example">Example</h3>
<p>Let's say we have an editor that should have a "Save" mechanism to periodically
write your contents to the server as a draft copy.</p>
<p>First, let's define our key binding function:</p>
<code class="prism language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>getDefaultKeyBinding<span class="token punctuation">,</span> KeyBindingUtil<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>hasCommandModifier<span class="token punctuation">}</span> <span class="token operator">=</span> KeyBindingUtil<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myKeyBindingFn</span><span class="token punctuation">(</span>e<span class="token punctuation">:</span> SyntheticKeyboardEvent<span class="token punctuation">)</span><span class="token punctuation">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">83</span> <span class="token comment">/* \`S\` key */</span> <span class="token operator">&amp;&amp;</span> <span class="token function">hasCommandModifier</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'myeditor-save'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">getDefaultKeyBinding</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code><p>Our function receives a key event, and we check whether it matches our criteria:
it must be an <code>S</code> key, and it must have a command modifier, i.e. the command
key for OSX, or the control key otherwise.</p>
<p>If the command is a match, return a string that names the command. Otherwise,
fall through to the default key bindings.</p>
<p>In our editor component, we can then make use of the command via the
<code>handleKeyCommand</code> prop:</p>
<code class="prism language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Editor<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'draft-js'</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyEditor</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>

  <span class="token function">handleKeyCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> DraftHandleValue <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">===</span> <span class="token string">'myeditor-save'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Perform a request to save your contents, set</span>
      <span class="token comment">// a new \`editorState\`, etc.</span>
      <span class="token keyword">return</span> <span class="token string">'handled'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">'not-handled'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
        <span class="token attr-name">editorState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>editorState<span class="token punctuation">}</span></span>
        <span class="token attr-name">handleKeyCommand</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyCommand<span class="token punctuation">}</span></span>
        <span class="token attr-name">keyBindingFn</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>myKeyBindingFn<span class="token punctuation">}</span></span>
        <span class="token attr-name">...</span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code><p>The <code>'myeditor-save'</code> command can be used for our custom behavior, and returning
<code>'handled'</code> instructs the editor that the command has been handled and no more work
is required.</p>
<p>By returning <code>'not-handled'</code> in all other cases, default commands are able to fall
through to default handler behavior.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-managing-focus.html#content">Next →</a></div></div>
`