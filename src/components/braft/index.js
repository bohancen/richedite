import React from 'react'
import ReactDOM from 'react-dom'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import './style.css'



class Demo extends React.Component {
    constructor(props){
        super(props);
        window.toggleSelectionBlockType = this.toggleSelectionBlockType.bind(this);
        window.toggleSelectionInlineStyle = this.toggleSelectionInlineStyle.bind(this);
        window.insertMedias = this.insertMedias.bind(this);
        window.focusDraftInstance = this.focusDraftInstance.bind(this)
        window.callbackEditorAutofocus = this.focusDraftInstance.bind(this)
        // 放弃使用的方法
        window.ol = this.toggleSelectionBlockType.bind(this, 'ordered-list-item');
        window.insertImg = this.insertMedias.bind(this);
    }
    render() {

        const editorProps = {
            height: '100vh',
            contentFormat: 'html',
            placeholder: '请输入正文...',
            onChange: this.handleChange,
            controls:[],
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

    componentDidMount(){
        window.emitEditorAutofocus()
        console.log(arguments)
    }
    
    // 使编辑器获得焦点
    focusDraftInstance(){
        // alert('focusDraftInstance')
        const draftInstance = this.editorInstance.getDraftInstance()
        draftInstance.focus()
    }

    // 切换选中内容的区块类型
    toggleSelectionBlockType(type){
        if(!type){
            return ;
        }
        // 可用区块类型
        // [
        //     'header-one',
        //     'header-two',
        //     'header-three',
        //     'header-four',
        //     'header-five',
        //     'header-six',
        //     'unstyled',
        //     'blockquote',引用
        //     'code-block',代码块
        //     'unordered-list-item',无序列表
        //     'ordered-list-item'有序列表
        // ]
        this.editorInstance.toggleSelectionBlockType(type)
    }

    // 切换选中内容的行内样式
    toggleSelectionInlineStyle(type){
        if (!type) {
            return;
        }
        // type:BOLD,ITALIC
        this.editorInstance.toggleSelectionInlineStyle(type)
    }
    
    // 插入媒体内容到编辑器，medias为数组
    insertMedias(array){
        if (!array){
            return ;
        }
        console.log(array)
        this.editorInstance.insertMedias(array)
        this.focusDraftInstance()
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

}
export default Demo