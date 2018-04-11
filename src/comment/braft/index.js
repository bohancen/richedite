import React from 'react'
import ReactDOM from 'react-dom'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import './style.css'



class Demo extends React.Component {
    constructor(props){
        super(props);
        window.editorInstance = this.editorInstance.bind(this);
        window.toggleSelectionBlockType = this.toggleSelectionBlockType.bind(this);
        // window.ol = this.applyControl.bind(this, 'ordered-list-item', 'block-type')
        window.ol = this.toggleSelectionBlockType.bind(this, 'ordered-list-item');
        window.insertImg = this.editorInstance.bind(this);
    }
    render() {

        const editorProps = {
            height: '100%',
            contentFormat: 'html',
            initialContent: '<p>Hello World!</p>',
            onChange: this.handleChange,
            imageControls: {
                floatLeft: false,
                floatRight: false,
                alignLeft: false,
                alignCenter: false,
                alignRight: false,
                link: false,
                size: false
            },
            onRawChange: this.handleRawChange
        }


        return (
            <div className="demo">
                <BraftEditor {...editorProps} ref={instance => this.editorInstance = instance} />
            </div>
        )

    }
    
    toggleSelectionBlockType(type){
        // 可用区块类型
        // [
        //     'header-one',
        //     'header-two',
        //     'header-three',
        //     'header-four',
        //     'header-five',
        //     'header-six',
        //     'unstyled',
        //     'blockquote',
        //     'code-block',
        //     'unordered-list-item',
        //     'ordered-list-item'
        // ]
        this.editorInstance.toggleSelectionBlockType(type)
    }
    
    editorInstance(url){
        var obj = {
            type: 'IMAGE',
            name: 'New Photo',
            url: 'http://p5.qhimg.com/t0182b617fd876c2153.png'
        }
        if(url){
            obj.url = url
        }
        this.editorInstance.insertMedias([
            obj
        ])
    }
    handleChange = (content) => {
        // console.log(this)
        // console.log(this.editorInstance.getEditorState())
        // this.editorInstance.insertMedias([
        //     {
        //         type: 'IMAGE',
        //         name: 'New Photo',
        //         url: 'http://p5.qhimg.com/t0182b617fd876c2153.png'
        //     }
        // ])
    }

    handleRawChange = (rawContent) => {
        // console.log(rawContent)
    }

//     this.editorInstance.insertMedias([
//     {
//         type: 'IMAGE',
//         name: 'New Photo',
//         url: 'http://path/to/image.png'
//     }, {
//         type: 'VIDEO',
//         name: 'New Video',
//         url: 'http://path/to/image-2.mp4'
//     }, {
//         type: 'AUDIO',
//         name: 'New Audio',
//         url: 'http://path/to/image-2.mp3'
//     }
// ])

}
export default Demo