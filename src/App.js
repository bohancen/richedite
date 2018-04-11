import React, { Component } from 'react';
// import logo from './logo.svg';

// import './App.css';
import './list.css';

// import Li from "./Li";

// console.log(Data)
// import Data from './data'


import Comment from './comment/braft/index';
import RandomKey from './RandomKey';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   // this.state = { editorState: Data};
  // }
  render() {
    // const { editorState } = this.state;
    // return (
    //   <div className="App">
    //     <ul className="list">
    //       {editorState.data.map((item,index) =>{
    //         return <Li key={(Math.random() * 100000).toFixed(0)} item={item} />
    //       })}
    //     </ul>
    //   </div>
    // );
    return (
      <Comment key="RandomKey()" />
    )
  }
}

export default App;
