
// import logo from './logo.svg';

// import './App.css';
// import './list.css';

// import Li from "./Li";

// console.log(Data)
// import Data from './data'


// import RandomKey from './RandomKey';

import React, { Component } from 'react';
// import Bold from "./components/bold/";
// import Bold from "./components/bold";
// import Draft from "./components/braft";
import './comment/Draft.css';
import Draft from "./components/rich";




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
      <Draft />
    )
  }
}

export default App;
