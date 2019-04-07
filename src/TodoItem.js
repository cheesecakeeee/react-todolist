import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const { content, test } = this.props
    return (
      <li onClick={this.handleDeleteItem}>
        {test}-{content}
      </li>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem
