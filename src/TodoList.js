import React, { Component, Fragment } from 'react'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render () {
    return (
      <Fragment>
        {/* 注释的写法 */}
        {
          // 注释的写法
        }
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
    // this.state.inputValue = e.target.value
    // console.log(this)  undefined 若没有在函数中绑定this
    // console.log(e.target.value)
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete (index) {
    // console.log(index)
    // immutable => state不允许做任何改变
    // this.state.list.splice(index, 1)  故这种写法不正确
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList