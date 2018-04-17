import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>KeyBindingUtil</h1><div><p>The <code>KeyBindingUtil</code> module is a static set of utility functions for 
defining key bindings.</p>
<h2 id="static-methods">Static Methods</h2>
<h3 id="isctrlkeycommand">isCtrlKeyCommand</h3>
<code class="prism language-undefined">isCtrlKeyCommand<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  e<span class="token punctuation">:</span> SyntheticKeyboardEvent
<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><p>Check whether the <code>ctrlKey</code> modifier is <em>not</em> being used in conjunction with
the <code>altKey</code> modifier. If they are combined, the result is an <code>altGraph</code>
key modifier, which is not handled by this set of key bindings.</p>
<h3 id="isoptionkeycommand">isOptionKeyCommand</h3>
<code class="prism language-undefined">isOptionKeyCommand<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  e<span class="token punctuation">:</span> SyntheticKeyboardEvent
<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code><h3 id="hascommandmodifier">hasCommandModifier</h3>
<code class="prism language-undefined">hasCommandModifier<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  e<span class="token punctuation">:</span> SyntheticKeyboardEvent
<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean</code></div><div class="docs-prevnext"><a class="docs-next" href="api-reference-modifier.html#content">Next →</a></div></div>
`