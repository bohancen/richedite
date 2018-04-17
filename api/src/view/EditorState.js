import React from 'react';
export default () => (
    <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
    return { __html: strEle };
}

const strEle = `
<div class="inner-content"><a id="content"></a><h1>EditorState</h1><div><p><code>EditorState</code> is the top-level state object for the editor.</p>
<p>It is an Immutable <a href="http://facebook.github.io/immutable-js/docs/#/Record/Record">Record</a>
that represents the entire state of a Draft editor, including:</p>
<ul>
<li>The current text content state</li>
<li>The current selection state</li>
<li>The fully decorated representation of the contents</li>
<li>Undo/redo stacks</li>
<li>The most recent type of change made to the contents</li>
</ul>
<blockquote>
<p>Note</p>
<p>You should not use the Immutable API when using EditorState objects.
Instead, use the instance getters and static methods below.</p>
</blockquote>
<h2 id="overview">Overview</h2>
<p><em>Common instance methods</em></p>
<p>The list below includes the most commonly used instance methods for <code>EditorState</code> objects.</p>
<ul class="apiIndex">
  <li>
    <a href="#getcurrentcontent">
      <code>getCurrentContent(): ContentState</code>
    </a>
  </li>
  <li>
    <a href="#getselection">
      <code>getSelection(): SelectionState</code>
    </a>
  </li>
  <li>
    <a href="#getcurrentinlinestyle">
      <code>getCurrentInlineStyle(): DraftInlineStyle</code>
    </a>
  </li>
  <li>
    <a href="#getblocktree">
      <code>getBlockTree(): OrderedMap</code>
    </a>
  </li>
</ul>

<p><em>Static Methods</em></p>
<ul class="apiIndex">
  <li>
    <a href="#createempty">
      <code>static createEmpty(?decorator): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#createwithcontent">
      <code>static createWithContent(contentState, ?decorator): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#create">
      <code>static create(config): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#push">
      <code>static push(editorState, contentState, changeType): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#undo">
      <code>static undo(editorState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#redo">
      <code>static redo(editorState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#acceptselection">
      <code>static acceptSelection(editorState, selectionState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#forceselection">
      <code>static forceSelection(editorState, selectionState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#moveselectiontoend">
      <code>static moveSelectionToEnd(editorState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#movefocustoend">
      <code>static moveFocusToEnd(editorState): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#setinlinestyleoverride">
      <code>static setInlineStyleOverride(editorState, inlineStyleOverride): EditorState</code>
    </a>
  </li>
  <li>
    <a href="#set">
      <code>static set(editorState, EditorStateRecordType): EditorState</code>
    </a>
  </li>
</ul>

<p><em>Properties</em></p>
<blockquote>
<p>Note</p>
<p>Use the static <code>EditorState</code> methods to set properties, rather than using
the Immutable API directly.</p>
</blockquote>
<ul class="apiIndex">
  <li>
    <a href="#allowundo">
      <code>allowUndo</code>
    </a>
  </li>
  <li>
    <a href="#currentcontent">
      <code>currentContent</code>
    </a>
  </li>
  <li>
    <a href="#decorator">
      <code>decorator</code>
    </a>
  </li>
  <li>
    <a href="#directionmap">
      <code>directionMap</code>
    </a>
  </li>
  <li>
    <a href="#forceselection">
      <code>forceSelection</code>
    </a>
  </li>
  <li>
    <a href="#incompositionmode">
      <code>inCompositionMode</code>
    </a>
  </li>
  <li>
    <a href="#inlinestyleoverride">
      <code>inlineStyleOverride</code>
    </a>
  </li>
  <li>
    <a href="#lastchangetype">
      <code>lastChangeType</code>
    </a>
  </li>
  <li>
    <a href="#nativelyrenderedcontent">
      <code>nativelyRenderedContent</code>
    </a>
  </li>
  <li>
    <a href="#redostack">
      <code>redoStack</code>
    </a>
  </li>
  <li>
    <a href="#selection">
      <code>selection</code>
    </a>
  </li>
  <li>
    <a href="#treemap">
      <code>treeMap</code>
    </a>
  </li>
  <li>
    <a href="#undostack">
      <code>undoStack</code>
    </a>
  </li>
</ul>

<h2 id="common-instance-methods">Common Instance Methods</h2>
<h3 id="getcurrentcontent">getCurrentContent</h3>
<code class="prism language-undefined"><span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> ContentState</code><p>Returns the current contents of the editor.</p>
<h3 id="getselection">getSelection</h3>
<code class="prism language-undefined"><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> SelectionState</code><p>Returns the current cursor/selection state of the editor.</p>
<h3 id="getcurrentinlinestyle">getCurrentInlineStyle</h3>
<code class="prism language-undefined"><span class="token function">getCurrentInlineStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DraftInlineStyle</code><p>Returns an <code>OrderedSet&lt;string&gt;</code> that represents the "current" inline style
for the editor.</p>
<p>This is the inline style value that would be used if a character were inserted
for the current <code>ContentState</code> and <code>SelectionState</code>, and takes into account
any inline style overrides that should be applied.</p>
<h3 id="getblocktree">getBlockTree</h3>
<code class="prism language-undefined"><span class="token function">getBlockTree</span><span class="token punctuation">(</span>blockKey<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> List<span class="token punctuation">;</span></code><p>Returns an Immutable <code>List</code> of decorated and styled ranges. This is used for
rendering purposes, and is generated based on the <code>currentContent</code> and
<code>decorator</code>.</p>
<p>At render time, this object is used to break the contents into the appropriate
block, decorator, and styled range components.</p>
<h2 id="static-methods">Static Methods</h2>
<h3 id="createempty">createEmpty</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">createEmpty</span><span class="token punctuation">(</span>decorator<span class="token operator">?</span><span class="token punctuation">:</span> DraftDecoratorType<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with an empty <code>ContentState</code> and default
configuration.</p>
<h3 id="createwithcontent">createWithContent</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">createWithContent</span><span class="token punctuation">(</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  decorator<span class="token operator">?</span><span class="token punctuation">:</span> DraftDecoratorType
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object based on the <code>ContentState</code> and decorator
provided.</p>
<h3 id="create">create</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">:</span> EditorStateCreationConfig<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object based on a configuration object. Use this
if you need custom configuration not available via the methods above.</p>
<h3 id="push">push</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">push</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  contentState<span class="token punctuation">:</span> ContentState<span class="token punctuation">,</span>
  changeType<span class="token punctuation">:</span> EditorChangeType
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the specified <code>ContentState</code> applied
as the new <code>currentContent</code>. Based on the <code>changeType</code>, this <code>ContentState</code>
may be regarded as a boundary state for undo/redo behavior.</p>
<p>All content changes must be applied to the EditorState with this method.</p>
<p><em>To be renamed.</em></p>
<h3 id="undo">undo</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">undo</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the top of the undo stack applied
as the new <code>currentContent</code>.</p>
<p>The existing <code>currentContent</code> is pushed onto the <code>redo</code> stack.</p>
<h3 id="redo">redo</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">redo</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the top of the redo stack applied
as the new <code>currentContent</code>.</p>
<p>The existing <code>currentContent</code> is pushed onto the <code>undo</code> stack.</p>
<h3 id="acceptselection">acceptSelection</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">acceptSelection</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the specified <code>SelectionState</code> applied,
but without requiring the selection to be rendered.</p>
<p>For example, this is useful when the DOM selection has changed outside of our
control, and no re-renders are necessary.</p>
<h3 id="forceselection">forceSelection</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">forceSelection</span><span class="token punctuation">(</span>
  editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span>
  selectionState<span class="token punctuation">:</span> SelectionState
<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the specified <code>SelectionState</code> applied,
forcing the selection to be rendered.</p>
<p>This is useful when the selection should be manually rendered in the correct
location to maintain control of the rendered output.</p>
<h3 id="moveselectiontoend">moveSelectionToEnd</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">moveSelectionToEnd</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the selection at the end.</p>
<p>Moves selection to the end of the editor without forcing focus.</p>
<h3 id="movefocustoend">moveFocusToEnd</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">moveFocusToEnd</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with selection at the end and forces focus.</p>
<p>This is useful in scenarios where we want to programmatically focus the input
and it makes sense to allow the user to continue working seamlessly.</p>
<h3 id="setinlinestyleoverride">setInlineStyleOverride</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token function">setInlineStyleOverride</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span> inlineStyleOverride<span class="token punctuation">:</span> DraftInlineStyle<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with the specified <code>DraftInlineStyle</code> applied
as the set of inline styles to be applied to the next inserted characters.</p>
<h3 id="set">set</h3>
<code class="prism language-undefined"><span class="token keyword">static</span> <span class="token keyword">set</span><span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">,</span> options<span class="token punctuation">:</span> EditorStateRecordType<span class="token punctuation">)</span><span class="token punctuation">:</span> EditorState</code><p>Returns a new <code>EditorState</code> object with new options passed in. The method is
inherited from the Immutable <code>record</code> API.</p>
<h2 id="properties-and-getters">Properties and Getters</h2>
<p>In most cases, the instance and static methods above should be sufficient to
manage the state of your Draft editor.</p>
<p>Below is the full list of properties tracked by an <code>EditorState</code>, as well as
their corresponding getter methods, to better provide detail on the scope of the
state tracked in this object.</p>
<blockquote>
<p>Note</p>
<p>You should not use the Immutable API when using EditorState objects.
Instead, use the instance getters and static methods above.</p>
</blockquote>
<h3 id="allowundo">allowUndo</h3>
<code class="prism language-undefined">allowUndo<span class="token punctuation">:</span> boolean<span class="token punctuation">;</span>
<span class="token function">getAllowUndo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>Whether to allow undo/redo behavior in this editor. Default is <code>true</code>.</p>
<p>Since the undo/redo stack is the major source of memory retention, if you have
an editor UI that does not require undo/redo behavior, you might consider
setting this to <code>false</code>.</p>
<h3 id="currentcontent">currentContent</h3>
<code class="prism language-undefined">currentContent<span class="token punctuation">:</span> ContentState<span class="token punctuation">;</span>
<span class="token function">getCurrentContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>The currently rendered <code>ContentState</code>. See <a href="#getcurrentcontent">getCurrentContent()</a>.</p>
<h3 id="decorator">decorator</h3>
<code class="prism language-undefined">decorator<span class="token punctuation">:</span> <span class="token operator">?</span>DraftDecoratorType<span class="token punctuation">;</span>
<span class="token function">getDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>The current decorator object, if any.</p>
<p>Note that the <code>ContentState</code> is independent of your decorator. If a decorator
is provided, it will be used to decorate ranges of text for rendering.</p>
<h3 id="directionmap">directionMap</h3>
<code class="prism language-undefined">directionMap<span class="token punctuation">:</span> BlockMap<span class="token punctuation">;</span>
<span class="token function">getDirectionMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>A map of each block and its text direction, as determined by UnicodeBidiService.</p>
<p>You should not manage this manually.</p>
<h3 id="forceselection">forceSelection</h3>
<code class="prism language-undefined">forceSelection<span class="token punctuation">:</span> boolean<span class="token punctuation">;</span>
<span class="token function">mustForceSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>Whether to force the current <code>SelectionState</code> to be rendered.</p>
<p>You should not set this property manually -- see
<a href="#forceselection">forceSelection()</a>.</p>
<h3 id="incompositionmode">inCompositionMode</h3>
<code class="prism language-undefined">inCompositionMode<span class="token punctuation">:</span> boolean<span class="token punctuation">;</span>
<span class="token function">isInCompositionMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>Whether the user is in IME composition mode. This is useful for rendering the
appropriate UI for IME users, even when no content changes have been committed
to the editor. You should not set this property manually.</p>
<h3 id="inlinestyleoverride">inlineStyleOverride</h3>
<code class="prism language-undefined">inlineStyleOverride<span class="token punctuation">:</span> DraftInlineStyle<span class="token punctuation">;</span>
<span class="token function">getInlineStyleOverride</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>An inline style value to be applied to the next inserted characters. This is
used when keyboard commands or style buttons are used to apply an inline style
for a collapsed selection range.</p>
<p><code>DraftInlineStyle</code> is a type alias for an immutable <code>OrderedSet</code> of strings,
each of which corresponds to an inline style.</p>
<h3 id="lastchangetype">lastChangeType</h3>
<code class="prism language-undefined">lastChangeType<span class="token punctuation">:</span> EditorChangeType<span class="token punctuation">;</span>
<span class="token function">getLastChangeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>The type of content change that took place in order to bring us to our current
<code>ContentState</code>. This is used when determining boundary states for undo/redo.</p>
<h3 id="nativelyrenderedcontent">nativelyRenderedContent</h3>
<code class="prism language-undefined">nativelyRenderedContent<span class="token punctuation">:</span> <span class="token operator">?</span>ContentState<span class="token punctuation">;</span>
<span class="token function">getNativelyRenderedContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>During edit behavior, the editor may allow certain actions to render natively.
For instance, during normal typing behavior in the contentEditable-based component,
we can typically allow key events to fall through to print characters in the DOM.
In doing so, we can avoid extra re-renders and preserve spellcheck highlighting.</p>
<p>When allowing native rendering behavior, it is appropriate to use the
<code>nativelyRenderedContent</code> property to indicate that no re-render is necessary
for this <code>EditorState</code>.</p>
<h3 id="redostack">redoStack</h3>
<code class="prism language-undefined">redoStack<span class="token punctuation">:</span> Stack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token function">getRedoStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>An immutable stack of <code>ContentState</code> objects that can be resurrected for redo
operations. When performing an undo operation, the current <code>ContentState</code> is
pushed onto the <code>redoStack</code>.</p>
<p>You should not manage this property manually. If you would like to disable
undo/redo behavior, use the <code>allowUndo</code> property.</p>
<p>See also <a href="#undostack">undoStack</a>.</p>
<h3 id="selection">selection</h3>
<code class="prism language-undefined">selection<span class="token punctuation">:</span> SelectionState<span class="token punctuation">;</span>
<span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>The currently rendered <code>SelectionState</code>. See <a href="#acceptselection">acceptSelection()</a>
and <a href="#forceselection">forceSelection()</a>.</p>
<p>You should not manage this property manually.</p>
<h3 id="treemap">treeMap</h3>
<code class="prism language-undefined">treeMap<span class="token punctuation">:</span> OrderedMap<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> List<span class="token operator">&gt;</span><span class="token punctuation">;</span></code><p>The fully decorated and styled tree of ranges to be rendered in the editor
component. The <code>treeMap</code> object is generated based on a <code>ContentState</code> and an
optional decorator (<code>DraftDecoratorType</code>).</p>
<p>At render time, components should iterate through the <code>treeMap</code> object to
render decorated ranges and styled ranges, using the <a href="#getblocktree">getBlockTree()</a>
method.</p>
<p>You should not manage this property manually.</p>
<h3 id="undostack">undoStack</h3>
<code class="prism language-undefined">undoStack<span class="token punctuation">:</span> Stack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token function">getUndoStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code><p>An immutable stack of <code>ContentState</code> objects that can be restored for undo
operations.</p>
<p>When performing operations that modify contents, we determine whether the
current <code>ContentState</code> should be regarded as a "boundary" state that the user
can reach by performing an undo operation. If so, the <code>ContentState</code> is pushed
onto the <code>undoStack</code>. If not, the outgoing <code>ContentState</code> is simply discarded.</p>
<p>You should not manage this property manually. If you would like to disable
undo/redo behavior, use the <code>allowUndo</code> property.</p>
<p>See also <a href="#redostack">redoStack</a>.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-content-state.html#content">Next →</a></div></div>
`