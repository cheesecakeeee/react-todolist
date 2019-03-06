import React, { Component } from 'react'

class TodoItem extends Component{
  render () {
    const { content } = this.props
    return (
      <li>{content}</li>
    )
  }
}

export default TodoItem
