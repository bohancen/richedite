import React from 'react';
// import ScrollArea from 'react-scrollbar';
// import FreeScrollBar from 'react-free-scrollbar';
import { Scrollbars } from 'react-custom-scrollbars';

import { Editor, EditorState, Modifier, RichUtils } from 'draft-js';
import './Draft.css';

class ColorfulEditorExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };

        // this.focus = () => this.editor.focus();
        this.setDomEditorRef = ref => this.domEditor = ref;
        this.onChange = (editorState) => this.setState({ editorState });
        this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
    }
    componentDidMount() {
        // this.domEditor.focus()
        window.callbackEditorAutofocus=function(){
            console.log(1111)
            alert('callbackEditorAutofocus')
            this.domEditor.focus();
            // window.editorAutofocus()
        }.bind(this)
        // window.emitEditorAutofocus = window.emitEditorAutofocus || function(){}
        window.emitEditorAutofocus()
        // window.editorAutofocus = this.domEditor.focus;
    }
    _toggleColor(toggledColor) {
        const { editorState } = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }

        this.onChange(nextEditorState);
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className="rich-root" style={styles.root}>
                <div className="rich-editor" style={styles.editor} onClick={this.focus}>
                    <Scrollbars style={{ width: '100%', height: '100%' }}>
                        <Editor
                            customStyleMap={colorStyleMap}
                            editorState={editorState}
                            onChange={this.onChange}
                            placeholder="Write something colorful..."
                            ref={this.setDomEditorRef}
                        />
                    </Scrollbars>
                </div>
                <ColorControls
                    key={(Math.random() * 10000).toFixed(0)}
                    editorState={editorState}
                    onToggle={this.toggleColor}
                />
            </div>
        );
    }
}

class StyleButton extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let style;
        if (this.props.active) {
            style = { ...styles.styleButton, ...colorStyleMap[this.props.style] };
        } else {
            style = styles.styleButton;
        }

        return (
            <span style={style} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        );
    }
}

var COLORS = [
    { label: 'Red', style: 'red' },
    { label: 'Orange', style: 'orange' },
    { label: 'Yellow', style: 'yellow' },
    { label: 'Green', style: 'green' },
    { label: 'Blue', style: 'blue' },
    { label: 'Indigo', style: 'indigo' },
    { label: 'Violet', style: 'violet' },
];

const ColorControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div
            className="rich-controls" 
            style={styles.controls}>
            {COLORS.map(type =>
                <StyleButton
                    key={(Math.random()*10000).toFixed(0)}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

// This object provides the styling information for our custom color
// styles.
const colorStyleMap = {
    red: {
        color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)',
    },
};

const styles = {
    root: {
        // backgroundColor:'#fff',
        // fontFamily: '\'Georgia\', serif',
        // fontSize: 14,
        // padding: 20,
        // width: '100%',
    },
    editor: {
        // borderTop: '1px solid #ddd',
        // cursor: 'text',
        // fontSize: 16,
        // padding: 10,
        // overflow:'auto',
        // minHeight: 100,
        // maxHeight: 100,
        // overflowScrolling: 'touch'
    },
    controls: {
        // wordBreak:'break-word',
        // fontFamily: '\'Helvetica\', sans-serif',
        // fontSize: 14,
        // padding:10,
        // userSelect: 'none',
    },
    styleButton: {
        color: '#999',
        cursor: 'pointer',
        // marginRight: 16,
        // padding: '2px 0',
    },
};


export default ColorfulEditorExample