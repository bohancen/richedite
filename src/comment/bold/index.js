import React from 'react';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import './bold.css';

class RichEditorExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);

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
        const { editorState } = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        // var contentState = editorState.getCurrentContent();
        // if (!contentState.hasText()) {
        //     if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        //         className += ' RichEditor-hidePlaceholder';
        //     }
        // }

        return (
            <div className="RichEditor-root">
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <div className={className}>
                    <Editor
                        // 自定义block style
                        // blockStyleFn={getBlockStyle}
                        // 自定义内联样式
                        // customStyleMap={styleMap}
                        editorState={editorState}
                        // 处理命名的编辑器命令。有关 使用的详细信息，请
                        // handleKeyCommand={this.handleKeyCommand}
                        // keyBindingFn={this.mapKeyToEditorCommand}
                        onChange={this.onChange}
                        placeholder="Tell a story..."
                        // ref="editor"
                        // spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}


class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            // console.log(this.props.style)
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



var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
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