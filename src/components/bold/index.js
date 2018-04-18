import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        // this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.setDomEditorRef = ref => this.domEditor = ref;
    }

    _onBoldClick() {
        console.log('BOLD')
        // this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
        this.onChange(RichUtils.insertSoftNewline(
            this.state.editorState
        ));
        
    }
    componentDidMount() {
        window.emitEditorAutofocus()
        this.domEditor.focus()
    }

    render() {
        return (
            <div>
                <span onMouseDown={(e)=>{
                    this._onBoldClick()
                    e.preventDefault();
                }}>Bold</span>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                    ref={this.setDomEditorRef}
                    placeholder="Tell a story..."
                />
            </div>
        );
    }
}

export default MyEditor