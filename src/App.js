import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        'learn react',
        'learn vue'
      ]
    }
  }

  render() {
    return (
      <div>
        <div>
          <input/>
          <button>add</button>
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
