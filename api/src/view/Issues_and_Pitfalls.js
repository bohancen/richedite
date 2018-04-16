import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Issues and Pitfalls</h1><div><p>This article addresses some known issues with the Draft editor framework, as
well as some common pitfalls that we have encountered while using the framework
at Facebook.</p>
<h2 id="common-pitfalls">Common Pitfalls</h2>
<h3 id="delayed-state-updates">Delayed state updates</h3>
<p>A common pattern for unidirectional data management is to batch or otherwise
delay updates to data stores, using a setTimeout or another mechanism. Stores are
updated, then emit changes to the relevant React components to propagate
re-rendering.</p>
<p>When delays are introduced to a React application with a Draft editor, however,
it is possible to cause significant interaction problems. This is because the
editor expects immediate updates and renders that stay in sync with the user's typing
behavior. Delays can prevent updates from being propagated through the editor
component tree, which can cause a disconnect between keystrokes and updates.</p>
<p>To avoid this while still using a delaying or batching mechanism, you should
separate the delay behavior from your <code>Editor</code> state propagation. That is,
you must always allow your <code>EditorState</code> to propagate to your <code>Editor</code>
component without delay, and independently perform batched updates that do
not affect the state of your <code>Editor</code> component.</p>
<h3 id="missing-draft-css">Missing Draft.css</h3>
<p>The Draft framework includes a handful of CSS resources intended for use with
the editor, available in a single file via the build, Draft.css.</p>
<p>This CSS should be included when rendering the editor, as these styles set defaults
for text alignment, spacing, and other important features. Without it, you may
encounter issues with block positioning, alignment, and cursor behavior.</p>
<p>If you choose to write your own CSS independent of Draft.css, you will most
likely need to replicate much of the default styling.</p>
<h2 id="known-issues">Known Issues</h2>
<h3 id="custom-osx-keybindings">Custom OSX Keybindings</h3>
<p>Because the browser has no access to OS-level custom keybindings, it is not
possible to intercept edit intent behaviors that do not map to default system
key bindings.</p>
<p>The result of this is that users who use custom keybindings may encounter
issues with Draft editors, since their key commands may not behave as expected.</p>
<h3 id="browser-plugins-extensions">Browser plugins/extensions</h3>
<p>As with any React application, browser plugins and extensions that modify the
DOM can cause Draft editors to break.</p>
<p>Grammar checkers, for instance, may modify the DOM within contentEditable
elements, adding styles like underlines and backgrounds. Since React cannot
reconcile the DOM if the browser does not match its expectations,
the editor state may fail to remain in sync with the DOM.</p>
<p>Certain old ad blockers are also known to break the native DOM Selection
API -- a bad idea no matter what! -- and since Draft depends on this API to
maintain controlled selection state, this can cause trouble for editor
interaction.</p>
<h3 id="ime-and-internet-explorer">IME and Internet Explorer</h3>
<p>As of IE11, Internet Explorer demonstrates notable issues with certain international
input methods, most significantly Korean input.</p>
<h3 id="polyfills">Polyfills</h3>
<p>Some of Draft's code and that of its dependencies make use of ES2015 language
features. Syntax features like <code>class</code> are compiled away via Babel when Draft is
built, but it does not include polyfills for APIs now included in many modern
browsers (for instance: <code>String.prototype.startsWith</code>). We expect your browser
supports these APIs natively or with the assistance of a polyfill. One such
polyfill is <a href="https://github.com/es-shims/es6-shim">es6-shim</a>, which we use in
many examples but you are free to use
<a href="https://babeljs.io/docs/usage/polyfill/">babel-polyfill</a> if that's more
your scene.</p>
<p>When using either polyfill/shim, you should include it as early as possibly in
your application's entrypoint (at the very minimum, before you import Draft).
For instance, using
<a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> and
targeting ie11, <code>src/index.js</code> is probably a good spot to import your polyfill:</p>
<p><strong>src/index.js</strong></p>
<pre class="prism language-undefined"><span class="token keyword">import</span> <span class="token string">'babel-polyfill'</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> <span class="token string">'es6-shim'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></pre><h3 id="mobile-not-yet-supported">Mobile Not Yet Supported</h3>
<p>Draft.js is moving towards full mobile support, but does not officially support
mobile browsers at this point. There are some known issues affecting Android and
iOS - see issues tagged
<a href="https://github.com/facebook/draft-js/labels/android">'android'</a> or
<a href="https://github.com/facebook/draft-js/labels/ios">'ios'</a> for the current status.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-editor.html#content">Next →</a></div></div>
`