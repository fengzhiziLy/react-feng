import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
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
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange () {
    const value = this.input.value
    // const value = e.target.value
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
    // setState是异步的
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
    
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