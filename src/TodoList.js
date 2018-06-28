import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
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
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange (e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
    // this.state.inputValue = e.target.value
    // console.log(this)  undefined 若没有在函数中绑定this
    // console.log(e.target.value)
  }

  handleBtnClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete (index) {
    // console.log(index)
    // immutable => state不允许做任何改变
    // this.state.list.splice(index, 1)  故这种写法不正确
    // const list = [...this.state.list]
    // list.splice(index, 1)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList



// {/* this.state.list.map((item, index) => {
//   return (
//     <div>
//       <TodoItem 
//         content={item} 
//         index={index}
//         deleteItem={this.handleItemDelete}
//       />
//       {/* <li 
//         key={index} 
//         onClick={this.handleItemDelete.bind(this, index)}
//         dangerouslySetInnerHTML={{__html: item}}
//       >
//       </li>
//     </div> 
//   )
// }) */}