import React, { Component } from 'react'
import TodoItem from './TodoItem'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        'learn react',
        'learn vue'
      ],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleAddClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleDelete(i) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(i, 1)
      return {list}
    })
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleDelete}
          />
        )
      })
    )
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddClick}>add</button>
        </div>
        <ul>
          { this.getTodoItem() }
        </ul>
      </div>
    );
  }
}

export default App;
