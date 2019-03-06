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
    this.setState({
      inputValue: e.target.value
    })
    console.log(e.target.value)
  }

  handleAddClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete(i) {
    const list = [...this.state.list]
    list.splice(i, 1)
    this.setState({list})
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddClick}>add</button>
        </div>
        <ul>
          {
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
          }
        </ul>
      </div>
    );
  }
}

export default App;
