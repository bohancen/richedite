import React from 'react';
export default () => (
    <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
    return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>EditorChangeType</h1><div><p><a href="https://github.com/facebook/draft-js/blob/master/src/model/immutable/EditorChangeType.js">EditorChangeType</a>
is an enum that lists the possible set of change operations that can be handled
the Draft model. It is represented as a Flow type, as a union of strings.</p>
<p>It is passed as a parameter to <code>EditorState.push</code>, and denotes the type of
change operation that is being performed by transitioning to the new
<code>ContentState</code>.</p>
<p>Behind the scenes, this value is used to determine appropriate undo/redo
handling, spellcheck behavior, and more. Therefore, while it is possible to
provide an arbitrary string value as the <code>changeType</code> parameter here, you should
avoid doing so.</p>
<p>We highly recommend that you install <a href="http://flowtype.org">Flow</a> to perform
static typechecking on your project. Flow will enforce the use of an appropriate
<code>EditorChangeType</code> value.</p>
<h2 id="values">Values</h2>
<h4 id="adjust-depth"><code>adjust-depth</code></h4>
<p>The <code>depth</code> value of one or more <code>ContentBlock</code> objects is being changed.</p>
<h4 id="apply-entity"><code>apply-entity</code></h4>
<p>An entity is being applied (or removed via <code>null</code>) to one or more characters.</p>
<h4 id="backspace-character"><code>backspace-character</code></h4>
<p>A single character is being backward-removed.</p>
<h4 id="change-block-data"><code>change-block-data</code></h4>
<p>The <code>data</code> value of one or more <code>ContentBlock</code> objects is being changed.</p>
<h4 id="change-block-type"><code>change-block-type</code></h4>
<p>The <code>type</code> value of one or more <code>ContentBlock</code> objects is being changed.</p>
<h4 id="change-inline-style"><code>change-inline-style</code></h4>
<p>An inline style is being applied or removed for one or more characters.</p>
<h4 id="move-block"><code>move-block</code></h4>
<p>A block is being moved within the <a href="https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js">BlockMap</a>.</p>
<h4 id="delete-character"><code>delete-character</code></h4>
<p>A single character is being forward-removed.</p>
<h4 id="insert-characters"><code>insert-characters</code></h4>
<p>One or more characters is being inserted at a selection state.</p>
<h4 id="insert-fragment"><code>insert-fragment</code></h4>
<p>A "fragment" of content (i.e. a
<a href="https://github.com/facebook/draft-js/blob/master/src/model/immutable/BlockMap.js">BlockMap</a>)
is being inserted at a selection state.</p>
<h4 id="redo"><code>redo</code></h4>
<p>A redo operation is being performed. Since redo behavior is handled by the
Draft core, it is unlikely that you will need to use this explicitly.</p>
<h4 id="remove-range"><code>remove-range</code></h4>
<p>Multiple characters or blocks are being removed.</p>
<h4 id="spellcheck-change"><code>spellcheck-change</code></h4>
<p>A spellcheck or autocorrect change is being performed. This is used to inform
the core editor whether to try to allow native undo behavior.</p>
<h4 id="split-block"><code>split-block</code></h4>
<p>A single <code>ContentBlock</code> is being split into two, for instance when the user
presses return.</p>
<h4 id="undo"><code>undo</code></h4>
<p>An undo operation is being performed. Since undo behavior is handled by the
Draft core, it is unlikely that you will need to use this explicitly.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-editor-state.html#content">Next →</a></div></div>
`