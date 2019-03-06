import React, { Component } from 'react';

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
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
