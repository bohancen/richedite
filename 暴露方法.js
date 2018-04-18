// 有序列表
window.toggleSelectionBlockType('ordered-list-item')
// 无序列表
window.toggleSelectionBlockType('unordered-list-item')
// 引用
window.toggleSelectionBlockType('blockquote')
// 代码块
window.toggleSelectionBlockType('code-block')

// 选中加粗
window.toggleSelectionInlineStyle('BOLD')
// 选中斜体
window.toggleSelectionInlineStyle('ITALIC')

// 插入媒体
window.insertMedias([
    {
        type: 'IMAGE',
        name: 'New Photo',
        url: 'http://p1.qhimg.com/t013a10d685a82d20b5.webp'
    },
    {
        type: 'IMAGE',
        name: 'New Photo',
        url: 'http://path/to/image.png'
    }
])

// web 测试
window.insertMedias([{
    type: 'IMAGE',
    name: 'New Photo',
    url: 'http://p1.qhimg.com/t013a10d685a82d20b5.webp'
}])