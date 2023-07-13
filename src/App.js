// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: [],
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      this.setState({ list: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  updateInput = (value) => {
    this.setState({
      userInput: value,
    });
  };

  addItem = async () => {
    if (this.state.userInput !== '') {
      try {
        const newItem = {
          value: this.state.userInput,
        };

        await axios.post('http://localhost:5000/api/tasks', newItem);
        this.fetchItems();

        this.setState({
          userInput: '',
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      this.fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  editItem = async (id, newValue) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { value: newValue });
      this.fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <hr />
        <div>
          <input
            type="text"
            placeholder="add item . . . "
            value={this.state.userInput}
            onChange={(event) => this.updateInput(event.target.value)}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <div>
          {this.state.list.map((item) => (
            <div key={item._id}>
              <span>{item.value}</span>
              <button onClick={() => this.deleteItem(item._id)}>Delete</button>
              <button
                onClick={() => {
                  const editedTodo = prompt('Edit the todo:');
                  if (editedTodo !== null && editedTodo.trim() !== '') {
                    this.editItem(item._id, editedTodo);
                  }
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

