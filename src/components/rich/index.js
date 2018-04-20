import "./style.css";
import React from 'react';
import { Editor, EditorState, Modifier, RichUtils, getDefaultKeyBinding, DefaultDraftBlockRenderMap} from 'draft-js';
import { setBlockData, getSelectionEntity, removeAllInlineStyles } from 'draftjs-utils'
import { Map } from 'immutable'
      // 自定义块 样式
      const MyCustomBlock = (props) => {
        return (
          <div className="MyCustomBlock">
            {props.children}
          </div>
        )
      }
      const blockRenderMap = Map({
          'genius': {
            element: 'div',
            wrapper: <MyCustomBlock/>,
          }
      });
      const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

      function getBlockStyle(block) {
        // console.log(block.getType())
        switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          case 'genius': return 'RichEditor-genius';
          default: return null;
        }
      }

      class RichEditorExample extends React.Component {
        constructor(props) {
          super(props);
          this.state = {editorState: EditorState.createEmpty()};

          this.focus = () => this.refs.editor.focus();
          this.onChange = (editorState) => this.setState({editorState});

          this.handleKeyCommand = this._handleKeyCommand.bind(this);
          this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
          this.toggleBlockType = this._toggleBlockType.bind(this);
          this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
          window.toggleBlockType = this._toggleBlockType.bind(this);
          window.insertText = this._insertText.bind(this);
        }

        _insertText(text, replace = true){

          // const currentSelectedBlockType = this.getSelectionBlockType()

          // if (currentSelectedBlockType === 'atomic') {
          //   return this
          // }
          // console.log(this.selectionState)

          // 判断下 文字是否有选中状态
          // console.log(this.state.editorState.getSelection().isCollapsed())
          if (this.state.editorState.getSelection().isCollapsed()){
            return this.onChange(EditorState.push(this.state.editorState, Modifier.insertText(
              this.state.editorState.getCurrentContent(), this.state.editorState.getSelection(), text
            ), 'insert-text'))
          }else{
            return this.onChange(EditorState.push(this.state.editorState, Modifier.replaceText(
              this.state.editorState.getCurrentContent(), this.state.editorState.getSelection(), text
            ), 'replace-text'))
          }
          
          // Modifier.insertText (
          //   contentState : ContentState ,
          //   targetRange : SelectionState ,
          //   text : string ,
          //   inlineStyle ？: DraftInlineStyle ,
          //   entityKey ？: ？ string
          // )

          // if (!this.selectionState.isCollapsed()) {
          //   return replace ? this.onChange(EditorState.push(this.editorState, Modifier.replaceText(
          //     this.contentState, this.selectionState, text
          //   ), 'replace-text')) : this
          // } else {
          //   return this.onChange(EditorState.push(this.editorState, Modifier.insertText(
          //     this.contentState, this.selectionState, text
          //   ), 'insert-text'))
          // }

        }

        _handleKeyCommand(command, editorState) {
          const newState = RichUtils.handleKeyCommand(editorState, command);
          if (newState) {
            this.onChange(newState);
            return true;
          }
          return false;
        }

        _mapKeyToEditorCommand(e) {
          if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
              e,
              this.state.editorState,
              4, /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
              this.onChange(newEditorState);
            }
            return;
          }
          return getDefaultKeyBinding(e);
        }

        _toggleBlockType(blockType) {
          console.log(blockType)
          this.onChange(
            RichUtils.toggleBlockType(
              this.state.editorState,
              blockType
            )
          );
        }

        _toggleInlineStyle(inlineStyle) {
          console.log(inlineStyle)
          this.onChange(
            RichUtils.toggleInlineStyle(
              this.state.editorState,
              inlineStyle
            )
          );
        }

        render() {
          const {editorState} = this.state;

          // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
          let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }
          console.log(contentState.getBlockMap())

          return (
            <div className="RichEditor-root">
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />
              <button onMouseDown={(e) => 
                {
                  e.preventDefault()
                  // console.log(window.getSelection())
                  var selObj = window.getSelection();
                  console.log(selObj);
                  var range = selObj.getRangeAt(0);
                  console.log(range)
                  range.startOffset
                  range.endOffset
                  // this._insertText('test txt')
                }
              }>insertText</button>
              <div className={className} onClick={this.focus}>
                <Editor
                  blockRenderMap={extendedBlockRenderMap}
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  keyBindingFn={this.mapKeyToEditorCommand}
                  onChange={this.onChange}
                  placeholder="Tell a story..."
                  ref="editor"
                  spellCheck={true}
                />
              </div>
            </div>
          );
        }
      }

      // Custom overrides for "code" style.
      const styleMap = {
        CODE: {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 16,
          padding: 2,
        },
      };



      class StyleButton extends React.Component {
        constructor() {
          super();
          this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
          };
        }

        render() {
          let className = 'RichEditor-styleButton';
          if (this.props.active) {
            className += ' RichEditor-activeButton';
          }

          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }

      const BLOCK_TYPES = [
        {label: 'H1', style: 'header-one'},
        {label: 'H2', style: 'header-two'},
        {label: 'H3', style: 'header-three'},
        {label: 'H4', style: 'header-four'},
        {label: 'H5', style: 'header-five'},
        {label: 'H6', style: 'header-six'},
        {label: 'Blockquote', style: 'blockquote'},
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'},
        {label: 'Code Block', style: 'code-block'},
      ];

      const BlockStyleControls = (props) => {
        const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();

        return (
          <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };

      var INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'},
      ];

      const InlineStyleControls = (props) => {
        const currentStyle = props.editorState.getCurrentInlineStyle();
        
        
        return (
          <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) =>
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };

export default RichEditorExample