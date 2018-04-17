import React from 'react';
export default () => (
   <div dangerouslySetInnerHTML={createMarkup()}></div>
)
function createMarkup() {
   return { __html: strEle };
}

const strEle =`
<div class="inner-content"><a id="content"></a><h1>Editor Component</h1><div><p>This article discusses the API and props of the core controlled contentEditable
component itself, <code>Editor</code>. Props are defined within
<a href="https://github.com/facebook/draft-js/blob/master/src/component/base/DraftEditorProps.js"><code>DraftEditorProps</code></a>.</p>
<h2 id="props">Props</h2>
<h3 id="basics">Basics</h3>
<p>See <a href="/docs/quickstart-api-basics.html">API Basics</a> for an introduction.</p>
<h4 id="editorstate">editorState</h4>
<code class="prism language-undefined">editorState<span class="token punctuation">:</span> EditorState</code><p>The <code>EditorState</code> object to be rendered by the <code>Editor</code>.</p>
<h4 id="onchange">onChange</h4>
<code class="prism language-undefined">onChange<span class="token punctuation">:</span> <span class="token punctuation">(</span>editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></code><p>The <code>onChange</code> function to be executed by the <code>Editor</code> when edits and selection
changes occur.</p>
<h3 id="presentation-optional-">Presentation (Optional)</h3>
<h4 id="placeholder">placeholder</h4>
<code class="prism language-undefined">placeholder<span class="token operator">?</span><span class="token punctuation">:</span> string</code><p>Optional placeholder string to display when the editor is empty.</p>
<p>Note: You can use CSS to style or hide your placeholder as needed. For instance,
in the <a href="https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich">rich editor example</a>,
the placeholder is hidden when the user changes block styling in an empty editor.
This is because the placeholder may not line up with the cursor when the style
is changed.</p>
<h4 id="textalignment">textAlignment</h4>
<code class="prism language-undefined">textAlignment<span class="token operator">?</span><span class="token punctuation">:</span> DraftTextAlignment</code><p>Optionally set the overriding text alignment for this editor. This alignment value will
apply to the entire contents, regardless of default text direction for input text.</p>
<p>You may use this if you wish to center your text or align it flush in one direction
to fit it within your UI design.</p>
<p>If this value is not set, text alignment will be based on the characters within
the editor, on a per-block basis.</p>
<h4 id="textdirectionality">textDirectionality</h4>
<code class="prism language-undefined">textDirectionality<span class="token operator">?</span><span class="token punctuation">:</span> DraftTextDirectionality</code><p>Optionally set the overriding text directionality for this editor. The values
include 'RTL' for right-to-left text, like Hebrew or Arabic, and 'LTR' for
left-to-right text, like English or Spanish. This directionality will apply to
the entire contents, regardless of default text direction for input text.</p>
<p>If this value is not set, text directionality will be based on the characters
within the editor, on a per-block basis.</p>
<h4 id="blockrendererfn">blockRendererFn</h4>
<code class="prism language-undefined">blockRendererFn<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>block<span class="token punctuation">:</span> ContentBlock<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">?</span>Object</code><p>Optionally set a function to define custom block rendering. See
<a href="/docs/advanced-topics-block-components.html">Advanced Topics: Block Components</a>
for details on usage.</p>
<h4 id="blockrenderermap">blockRendererMap</h4>
<code class="prism language-undefined">blockRendererMap<span class="token operator">?</span><span class="token punctuation">:</span> DraftBlockRenderMap</code><p>Provide a map of block rendering configurations. Each block type maps to
element tag and an optional react element wrapper. This configuration
is used for both rendering and paste processing. See
<a href="https://draftjs.org/docs/advanced-topics-custom-block-render-map.html">Advanced Topics: Custom Block Rendering</a>
for details on usage.</p>
<h4 id="blockstylefn">blockStyleFn</h4>
<code class="prism language-undefined">blockStyleFn<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>block<span class="token punctuation">:</span> ContentBlock<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> string</code><p>Optionally set a function to define class names to apply to the given block
when it is rendered. See
<a href="/docs/advanced-topics-block-styling.html">Advanced Topics: Block Styling</a>
for details on usage.</p>
<h4 id="customstylemap">customStyleMap</h4>
<code class="prism language-undefined">customStyleMap<span class="token operator">?</span><span class="token punctuation">:</span> Object</code><p>Optionally define a map of inline styles to apply to spans of text with the specified
style. See
<a href="/docs/advanced-topics-inline-styles.html">Advanced Topics: Inline Styles</a>
for details on usage.</p>
<h4 id="customstylefn">customStyleFn</h4>
<code class="prism language-undefined">customStyleFn<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>style<span class="token punctuation">:</span> DraftInlineStyle<span class="token punctuation">,</span> block<span class="token punctuation">:</span> ContentBlock<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">?</span>Object</code><p>Optionally define a function to transform inline styles to CSS objects that are applied
to spans of text. See
<a href="/docs/advanced-topics-inline-styles.html">Advanced Topics: Inline Styles</a>
for details on usage.</p>
<h3 id="behavior-optional-">Behavior (Optional)</h3>
<h3 id="autocapitalize-string">autoCapitalize?: string</h3>
<code class="prism language-undefined">autoCapitalize<span class="token operator">?</span><span class="token punctuation">:</span> string</code><p>Set if auto capitalization is turned on and how it behaves. More about platform availability and usage can <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocapitalize">be found on mdn</a>.</p>
<h3 id="autocomplete-string">autoComplete?: string</h3>
<code class="prism language-undefined">autoComplete<span class="token operator">?</span><span class="token punctuation">:</span> string</code><p>Set if auto complete is turned on and how it behaves. More about platform availability and usage can <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocomplete">be found on mdn</a>.</p>
<h3 id="autocorrect-string">autoCorrect?: string</h3>
<code class="prism language-undefined">autoCorrect<span class="token operator">?</span><span class="token punctuation">:</span> string</code><p>Set if auto correct is turned on and how it behaves. More about platform availability and usage can <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-autocorrect">be found on mdn</a>.</p>
<h4 id="readonly">readOnly</h4>
<code class="prism language-undefined">readOnly<span class="token operator">?</span><span class="token punctuation">:</span> boolean</code><p>Set whether the editor should be rendered as static DOM, with all editability
disabled.</p>
<p>This is useful when supporting interaction within
<a href="/docs/advanced-topics-block-components.html">custom block components</a>
or if you just want to display content for a static use case.</p>
<p>Default is <code>false</code>.</p>
<h4 id="spellcheck">spellCheck</h4>
<code class="prism language-undefined">spellCheck<span class="token operator">?</span><span class="token punctuation">:</span> boolean</code><p>Set whether spellcheck is turned on for your editor.</p>
<p>Note that in OSX Safari, enabling spellcheck also enables autocorrect, if the user
has it turned on. Also note that spellcheck is always disabled in IE, since the events
needed to observe spellcheck events are not fired in IE.</p>
<p>Default is <code>false</code>.</p>
<h4 id="strippastedstyles">stripPastedStyles</h4>
<code class="prism language-undefined">stripPastedStyles<span class="token operator">?</span><span class="token punctuation">:</span> boolean</code><p>Set whether to remove all information except plaintext from pasted content.</p>
<p>This should be used if your editor does not support rich styles.</p>
<p>Default is <code>false</code>.</p>
<h3 id="dom-and-accessibility-optional-">DOM and Accessibility (Optional)</h3>
<h4 id="tabindex">tabIndex</h4>
<h4 id="aria-props">ARIA props</h4>
<p>These props allow you to set accessibility properties on your editor. See
<a href="https://github.com/facebook/draft-js/blob/master/src/component/base/DraftEditorProps.js">DraftEditorProps</a> for the exhaustive list of supported attributes.</p>
<h4 id="editorkey">editorKey</h4>
<code class="prism language-undefined">editorKey<span class="token operator">?</span><span class="token punctuation">:</span> string</code><p>You probably won't set <code>editorKey</code> on an <code>&lt;Editor /&gt;</code> manually unless you're
rendering a Draft component serverside. If you <em>are</em>, you must set this prop
to avoid server/client mismatches.</p>
<p>If the key is not set, it is generated automatically when the component
renders and assigned as a prop of the Editor's <code>&lt;DraftEditorContents /&gt;</code>
component.</p>
<p>If you _do_ set this prop, the key should be unique <em>per-editor</em>, as it is
used to determine if styles should be preserved when pasting text within an
editor.</p>
<h3 id="cancelable-handlers-optional-">Cancelable Handlers (Optional)</h3>
<p>These prop functions are provided to allow custom event handling for a small
set of useful events. By returning <code>'handled'</code> from your handler, you indicate that
the event is handled and the Draft core should do nothing more with it. By returning
<code>'not-handled'</code>, you defer to Draft to handle the event.</p>
<h4 id="handlereturn">handleReturn</h4>
<code class="prism language-undefined">handleReturn<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> SyntheticKeyboardEvent<span class="token punctuation">,</span> editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle a <code>RETURN</code> keydown event. Example usage: Choosing a mention tag from a
rendered list of results to trigger applying the mention entity to your content.</p>
<h4 id="handlekeycommand">handleKeyCommand</h4>
<code class="prism language-undefined">handleKeyCommand<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>command<span class="token punctuation">:</span> string<span class="token punctuation">,</span> editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle the named editor command. See
<a href="/docs/advanced-topics-key-bindings.html">Advanced Topics: Key Bindings</a>
for details on usage.</p>
<h4 id="handlebeforeinput">handleBeforeInput</h4>
<code class="prism language-undefined">handleBeforeInput<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>chars<span class="token punctuation">:</span> string<span class="token punctuation">,</span> editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle the characters to be inserted from a <code>beforeInput</code> event. Returning <code>'handled'</code>
causes the default behavior of the <code>beforeInput</code> event to be prevented (i.e. it is
the same as calling the <code>preventDefault</code> method on the event).
Example usage: After a user has typed <code>-</code> at the start of a new block, you might
convert that <code>ContentBlock</code> into an <code>unordered-list-item</code>.</p>
<p>At Facebook, we also use this to convert typed ASCII quotes into "smart" quotes,
and to convert typed emoticons into images.</p>
<h4 id="handlepastedtext">handlePastedText</h4>
<code class="prism language-undefined">handlePastedText<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">:</span> string<span class="token punctuation">,</span> html<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">,</span> editorState<span class="token punctuation">:</span> EditorState<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle text and html(for rich text) that has been pasted directly into the editor. Returning true will prevent the default paste behavior.</p>
<h4 id="handlepastedfiles">handlePastedFiles</h4>
<code class="prism language-undefined">handlePastedFiles<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>files<span class="token punctuation">:</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Blob</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle files that have been pasted directly into the editor.</p>
<h4 id="handledroppedfiles">handleDroppedFiles</h4>
<code class="prism language-undefined">handleDroppedFiles<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>selection<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span> files<span class="token punctuation">:</span> Array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Blob</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle files that have been dropped into the editor.</p>
<h4 id="handledrop">handleDrop</h4>
<code class="prism language-undefined">handleDrop<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>selection<span class="token punctuation">:</span> SelectionState<span class="token punctuation">,</span> dataTransfer<span class="token punctuation">:</span> Object<span class="token punctuation">,</span> isInternal<span class="token punctuation">:</span> DraftDragType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DraftHandleValue</code><p>Handle other drop operations.</p>
<h3 id="key-handlers-optional-">Key Handlers (Optional)</h3>
<p>Draft lets you supply a custom <code>keyDown</code> handler that wraps or overrides its
default one.</p>
<h4 id="keybindingfn">keyBindingFn</h4>
<code class="prism language-undefined">keyBindingFn<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> SyntheticKeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">?</span>string</code><p>This prop function exposes <code>keyDown</code> events to a handler of your choosing. If an
event of interest happens, you can perform custom logic and/or return a string
corresponding to a <code>DraftEditorCommand</code> or a custom editor command of your
own creation. Example: At Facebook, this is used to provide keyboard interaction
for the mentions autocomplete menu that appears when typing a friend's name.
You can find a more detailed explanation of this
<a href="/docs/advanced-topics-key-bindings.html">here</a>.</p>
<h3 id="mouse-events">Mouse events</h3>
<h3 id="onfocus">onFocus</h3>
<code class="prism language-undefined">onFocus<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> SyntheticFocusEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></code><h3 id="onblur">onBlur</h3>
<code class="prism language-undefined">onBlur<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> SyntheticFocusEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></code><h2 id="methods">Methods</h2>
<h4 id="focus">focus</h4>
<code class="prism language-undefined"><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code><p>Force focus back onto the editor node.</p>
<h4 id="blur">blur</h4>
<code class="prism language-undefined"><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code><p>Remove focus from the editor node.</p>
</div><div class="docs-prevnext"><a class="docs-next" href="api-reference-editor-change-type.html#content">Next →</a></div></div>
`