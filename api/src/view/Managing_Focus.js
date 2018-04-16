import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>Managing Focus</h1><div><p>Managing text input focus can be a tricky task within React components. The browser
focus/blur API is imperative, so setting or removing focus via declarative means
purely through <code>render()</code> tends to feel awkward and incorrect, and it requires
challenging attempts at controlling focus state.</p>
<p>With that in mind, at Facebook we often choose to expose <code>focus()</code> methods
on components that wrap text inputs. This breaks the declarative paradigm,
but it also simplifies the work needed for engineers to successfully manage
focus behavior within their apps.</p>
<p>The <code>Editor</code> component follows this pattern, so there is a public <code>focus()</code>
method available on the component. This allows you to use a ref within your
higher-level component to call <code>focus()</code> directly on the component when needed.</p>
<p>The event listeners within the component will observe focus changes and
propagate them through <code>onChange</code> as expected, so state and DOM will remain
correctly in sync.</p>
<h2 id="translating-container-clicks-to-focus">Translating container clicks to focus</h2>
<p>Your higher-level component will most likely wrap the <code>Editor</code> component in a
container of some kind, perhaps with padding to style it to match your app.</p>
<p>By default, if a user clicks within this container but outside of the rendered
<code>Editor</code> while attempting to focus the editor, the editor will have no awareness
of the click event. It is therefore recommended that you use a click listener
on your container component, and use the <code>focus()</code> method described above to
apply focus to your editor.</p>
<p>The <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext">plaintext editor example</a>,
for instance, uses this pattern.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="advanced-topics-block-styling.html#content">Next →</a></div></div>
`