import "./style.css";
import React from 'react';
import {
    AtomicBlockUtils,
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    // 装饰器
    CompositeDecorator,
} from 'draft-js';

class MediaEditorExample extends React.Component {
    constructor(props) {
        super(props);
        // 初始化时候，声明一个装饰器 传入createEmpty
        const compositeDecorator = new CompositeDecorator([
            {
                strategy: handleStrategy,
                component: HandleSpan,
            },
            {
                strategy: hashtagStrategy,
                component: HashtagSpan,
            },
        ]);

        this.state = {
            editorState: EditorState.createEmpty(compositeDecorator),
            showURLInput: false,
            url: '',
            urlType: '',
        };

        this.focus = () => this.refs.editor.focus();
        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();
            console.log(convertToRaw(content));
        };
        this.onChange = (editorState) => this.setState({ editorState });
        this.onChange = (editorState) => {
            // console.log(editorState)
            this.setState({ editorState })
        };
        this.onURLChange = (e) => this.setState({ urlValue: e.target.value });

        this.addAudio = this._addAudio.bind(this);
        this.addImage = this._addImage.bind(this);
        this.addVideo = this._addVideo.bind(this);
        this.confirmMedia = this._confirmMedia.bind(this);
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.onURLInputKeyDown = this._onURLInputKeyDown.bind(this);
        window.insertMedias = this._insertMedias.bind(this);
    }

    componentDidMount() {
        console.log('did')
        console.log(this.state)
        // this.setState({editorState});
        window.emitEditorAutofocus()
    }
    _insertMedias(array){
        console.log(array)
        this.setState({ urlValue: array[0].url, urlType: 'image'});
        this.confirmMedia()
    }

    _handleKeyCommand(command, editorState) {
        console.log(command)
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    // 提交媒体数据
    _confirmMedia(e) {
        if(e){
            e.preventDefault();
        }
        const { editorState, urlValue, urlType } = this.state;
        // #getCurrentContent:返回编辑器的当前内容。
        const contentState = editorState.getCurrentContent();
        console.warn('contentState')
        console.log(contentState)
        // #createEntity:返回ContentState记录更新，
        // 以在其EntityMap中包含新创建的DraftEntity记录。
        // 调用getLastCreatedEntityKey来获取新创建的DraftEntity记录的关键字。
        const contentStateWithEntity = contentState.createEntity(
            urlType,
            'IMMUTABLE',
            { src: urlValue }
            // { src: 'http://p1.qhimg.com/t013a10d685a82d20b5.webp' }
        );
        console.warn('contentStateWithEntity')
        console.log(contentStateWithEntity)
        // getLastCreatedEntityKey:返回可用于引用最近创建的DraftEntity记录的字符串键。
        // 这是因为实体被ContentState中的字符串键引用。
        // 应该在 CharacterMetadata:对象中使用字符串值来跟踪注释字符的实体。
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        console.warn('entityKey')
        console.log(entityKey)
        // 返回传入了新选项的新的EditorState对象。该方法从不可变记录API继承。
        const newEditorState = EditorState.set(
            editorState,
            { currentContent: contentStateWithEntity }
        );
        console.warn('newEditorState')
        console.log(newEditorState)
        this.setState({
            // AtomicBlockUtils模块是用于原子块编辑的一组静态功能函数。 
            // 在每种情况下，这些方法接受带有相关参数的EditorState对象并返回EditorState对象。
            editorState: AtomicBlockUtils.insertAtomicBlock(
                newEditorState,
                entityKey,
                ' '
            ),
            showURLInput: false,
            urlValue: '',
        }, () => {
            setTimeout(() => this.focus(), 0);
        });
    }

    _onURLInputKeyDown(e) {
        // 如果是回车 提交
        if (e.which === 13) {
            this._confirmMedia(e);
        }
    }
    // 修改状态 显示对应input框 
    _promptForMedia(type) {
        this.setState({
            showURLInput: true,
            urlValue: '',
            urlType: type,
        }, () => {
            setTimeout(() => this.refs.url.focus(), 0);
        });
    }

    _addAudio() {
        this._promptForMedia('audio');
    }

    _addImage() {
        this._promptForMedia('image');
    }

    _addVideo() {
        this._promptForMedia('video');
    }

    render() {
        let urlInput;
        if (this.state.showURLInput) {
            urlInput =
                <div style={styles.urlInputContainer}>
                    <input
                        onChange={this.onURLChange}
                        ref="url"
                        style={styles.urlInput}
                        type="text"
                        value={this.state.urlValue}
                        onKeyDown={this.onURLInputKeyDown}
                    />
                    <button onMouseDown={this.confirmMedia}>
                        Confirm
                </button>
                </div>;
        }

        return (
            <div style={styles.root}>
                <div style={{ marginBottom: 10 }}>
                    Use the buttons to add audio, image, or video.
              </div>
                <div style={{ marginBottom: 10 }}>
                    Here are some local examples that can be entered as a URL:
                <ul>
                        <li>media.mp3</li>
                        <li>media.png</li>
                        <li>media.mp4</li>
                    </ul>
                </div>
                <div style={styles.buttons}>
                    <button onMouseDown={this.addAudio} style={{ marginRight: 10 }}>
                        Add Audio
                </button>
                    <button onMouseDown={this.addImage} style={{ marginRight: 10 }}>
                        Add Image
                </button>
                    <button onMouseDown={this.addVideo} style={{ marginRight: 10 }}>
                        Add Video
                </button>
                </div>
                {urlInput}
                <div style={styles.editor} onClick={this.focus}>
                    <Editor
                        blockRendererFn={mediaBlockRenderer}
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        placeholder="Enter some text..."
                        ref="editor"
                    />
                </div>
                <input
                    onClick={this.logState}
                    style={styles.button}
                    type="button"
                    value="Log State"
                />
            </div>
        );
    }
    
}




// @ #等功能实现
const HANDLE_REGEX = /@[\w]+/g;
const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

function handleStrategy(contentBlock, callback, contentState) {
    findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback, contentState) {
    findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}

const HandleSpan = (props) => {
    return (
        <span
            style={styles.handle}
            data-offset-key={props.offsetKey}
        >
            {props.children}
        </span>
    );
};

const HashtagSpan = (props) => {
    return (
        <span
            style={styles.hashtag}
            data-offset-key={props.offsetKey}
        >
            {props.children}
        </span>
    );
};
// @# 结束

function mediaBlockRenderer(block) {
    console.log(block)
    console.log(block.getType())
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false,
        };
    }

    return null;
}

const Audio = (props) => {
    return <audio controls src={props.src} style={styles.media} />;
};

const Image = (props) => {
    return <img src={props.src} style={styles.media} />;
};

const Video = (props) => {
    return <video controls src={props.src} style={styles.media} />;
};

const Media = (props) => {
    console.log(props)
    const entity = props.contentState.getEntity(
        props.block.getEntityAt(0)
    );
    const { src } = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'audio') {
        media = <Audio src={src} />;
    } else if (type === 'image') {
        media = <Image src={src} />;
    } else if (type === 'video') {
        media = <Video src={src} />;
    }

    return media;
};

const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        // padding: 20,
        width: '100%',
    },
    buttons: {
        marginBottom: 10,
    },
    urlInputContainer: {
        marginBottom: 10,
    },
    urlInput: {
        fontFamily: '\'Georgia\', serif',
        marginRight: 10,
        padding: 3,
    },
    editor: {
        // border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        // padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
    media: {
        width: '100%',
        // Fix an issue with Firefox rendering video controls
        // with 'pre-wrap' white-space
        whiteSpace: 'initial'
    },
    // @#样式
    handle: {
        color: 'rgba(98, 177, 254, 1.0)',
        direction: 'ltr',
        unicodeBidi: 'bidi-override',
    },
    hashtag: {
        color: 'rgba(95, 184, 138, 1.0)',
    },
};

export default MediaEditorExample