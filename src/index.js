import React from './react';
import ReactDOM from './react-dom';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  render () {
    return (
      <div>
        <h1>count:{ this.state.num }</h1>
        <button onClick={() => this.onClick()}>add</button>
      </div>
    )
  }
  onClick () {
    this.setState({
      num: this.state.num + 1
    })
  }
}

// react-jsx-plugin  将DOM变成虚拟dom
ReactDOM.render( // 第一个参数是虚拟dom render将虚拟dom挂载到真实dom上去
  <div>
    Hello 
    <span className="rt" onClick="console.log('kkk')" style={{fontSize:20, fontWeight:'bold',color:'red'}}>World!</span>
    <Counter />
  </div>
  ,
   document.getElementById('root'))
