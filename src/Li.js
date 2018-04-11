import React, { Component } from 'react';
import Comment from './comment/Draft';
import RandomKey from './RandomKey';

import img01 from './img/01.jpg';
import img02 from './img/02.jpg';
const imgArr = [img01, img02]

class Li extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.item
    // this.showComment = this.showComment.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  createMarkup(page) {
    let str = page.replace(/<figure>.+<\/figure>/g, '')
    // console.log(str)
    return { "__html": str }
  }
//   showComment() {
//     this.
//     editorState.data[index].isShowComment = false
//     this.setState({ editorState: editorState })
//   }
  isShowComment(bolen) {
    if (bolen) {
      return <Comment key={(Math.random() * 100000).toFixed(0)} />
    } else {
      return '';
    }
  }
  render() {
    return (<li key={RandomKey()}>
        <div key={RandomKey()} dangerouslySetInnerHTML={this.createMarkup(this.state.target.content)}></div>
        <div><img src={imgArr[(Math.random() * imgArr.length).toFixed(0)]} alt="" /></div>
        {this.isShowComment(this.state.isShowComment)}
        {/* <button onClick={this.showComment}>toggle comment</button> */}
    </li>)
  }
}
export default Li
