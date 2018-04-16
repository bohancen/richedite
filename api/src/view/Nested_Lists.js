import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Nested Lists</h1><div><p>The Draft framework provides support for nested lists, as demonstrated in the
Facebook Notes editor. There, you can use <code>Tab</code> and <code>Shift+Tab</code> to add or remove
depth to a list item.</p>
<p>The <a href="/docs/api-reference-rich-utils.html"><code>RichUtils</code></a> module provides a handy <code>onTab</code> method that manages this
behavior, and should be sufficient for most nested list needs. You can use
the <code>onTab</code> prop on your <code>Editor</code> to make use of this utility.</p>
<p>By default, styling is applied to list items to set appropriate spacing and
list style behavior, via <code>DraftStyleDefault.css</code>.</p>
<p>Note that there is currently no support for handling depth for blocks of any type
except <code>'ordered-list-item'</code> and <code>'unordered-list-item'</code>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-text-direction.html#content">Next →</a></div></div>
`