import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Text Direction</h1><div><p>Facebook supports dozens of languages, which means that our text inputs need
to be flexible enough to handle considerable variety.</p>
<p>For example, we want input behavior for RTL languages such as Arabic and Hebrew
to meet users' expectations. We also want to be able to support editor contents
with a mixture of LTR and RTL text.</p>
<p>To that end, Draft uses a bidi algorithm to determine appropriate
text alignment and direction on a per-block basis.</p>
<p>Text is rendered with an LTR or RTL direction automatically as the user types.
You should not need to do anything to set direction yourself.</p>
<h2 id="text-alignment">Text Alignment</h2>
<p>While languages are automatically aligned to the left or right during composition,
as defined by the content characters, it is also possible for engineers to
manually set the text alignment for an editor's contents.</p>
<p>This may be useful, for instance, if an editor requires strictly centered
contents, or needs to keep text aligned flush against another UI element.</p>
<p>The <code>Editor</code> component therefore provides a <code>textAlignment</code> prop, with a
simple set of values: <code>'left'</code>, <code>'center'</code>, and <code>'right'</code>. Using these values,
the contents of your editor will be aligned to the specified direction regardless
of language and character set.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-editorstate-race-conditions.html#content">Next →</a></div></div>
`