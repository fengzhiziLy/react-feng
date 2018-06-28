import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    const { content, test } = this.props
    // jsx => createElement -> 虚拟DOM (js对象) => 真实的DOM
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
  }
  handleClick () {
    const { deleteItem, index } = this.props
    deleteItem(index)
    // this.props.deleteItem(this.props.index)
    // alert(this.props.index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello feng'
}

export default TodoItem