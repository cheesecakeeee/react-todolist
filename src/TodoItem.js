import React, { Component } from 'react'

class TodoItem extends Component{
  constructor (props) {
    super(props)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleDeleteItem() {
    const { index, deleteItem } = this.props
    deleteItem(index)
  }

  render () {
    const { content } = this.props
    return (
      <li onClick={this.handleDeleteItem}>{content}</li>
    )
  }
}

export default TodoItem
