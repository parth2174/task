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



// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '') {
//       try {
//         const newItem = {
//           value: this.state.userInput,
//         };

//         await axios.post('http://localhost:5000/api/tasks', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`http://localhost:5000/api/tasks/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>TODO LIST</h1>
//         <hr />
//         <div>
//           <input
//             type="text"
//             placeholder="add item . . . "
//             value={this.state.userInput}
//             onChange={(event) => this.updateInput(event.target.value)}
//           />
//           <button onClick={this.addItem}>Add</button>
//         </div>
//         <div>
//           {this.state.list.map((item) => (
//             <div key={item._id}>
//               <span>{item.value}</span>
//               <button onClick={() => this.deleteItem(item._id)}>Delete</button>
//               <button
//                 onClick={() => {
//                   const editedTodo = prompt('Edit the todo:');
//                   if (editedTodo !== null && editedTodo.trim() !== '') {
//                     this.editItem(item._id, editedTodo);
//                   }
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   // isDayDisabled = (date) => {
//   //   const dayOfWeek = date.getDay();
//   //   return dayOfWeek ===  1|| dayOfWeek === 0; // Wednesday = 3, Friday = 5
//   // };

//   // isDayEnabled = (date) => {
//   //   //return !this.isDayDisabled(date);
//   //   return false;
//   // };


//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       // if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//       //   alert('Cannot add task on Wednesday or Friday');
//       //   return;
//       // }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('http://localhost:5000/api/tasks', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`/api/items/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>TODO LIST</h1>
//         <hr />
//         <div>
//           <input
//             type="text"
//             placeholder="add item . . . "
//             value={this.state.userInput}
//             onChange={(event) => this.updateInput(event.target.value)}
//           />
//           <DatePicker
//             selected={this.state.startDate}
//             onChange={this.handleStartDateChange}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Select start date"
//             filterDate={this.isDayDisabled}
//           />
//           <DatePicker
//             selected={this.state.endDate}
//             onChange={this.handleEndDateChange}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Select end date"
//             filterDate={this.isDayDisabled}
//           />
//           <button onClick={this.addItem}>Add</button>
//         </div>
//         <div>
//           {this.state.list.map((item) => (
//             <div key={item._id}>
//               <span>{item.value}</span>
//               <button onClick={() => this.deleteItem(item._id)}>Delete</button>
//               <button
//                 onClick={() => {
//                   const editedTodo = prompt('Edit the todo:');
//                   if (editedTodo !== null && editedTodo.trim() !== '') {
//                     this.editItem(item._id, editedTodo);
//                   }
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;





// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import Tasks from './Tasks';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('/api/items');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   isDayDisabled = (date) => {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//         alert('Cannot add a task on Wednesday or Friday');
//         return;
//       }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('/api/items', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`/api/items/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//           </ul>

//           <hr />

//           <Route exact path="/">
//             <div>
//               <h1>TODO LIST</h1>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="add item . . . "
//                   value={this.state.userInput}
//                   onChange={(event) => this.updateInput(event.target.value)}
//                 />
//                 <DatePicker
//                   selected={this.state.startDate}
//                   onChange={this.handleStartDateChange}
//                   dateFormat="yyyy-MM-dd"
//                   placeholderText="Select start date"
//                   filterDate={this.isDayDisabled}
//                 />
//                 <DatePicker
//                   selected={this.state.endDate}
//                   onChange={this.handleEndDateChange}
//                   dateFormat="yyyy-MM-dd"
//                   placeholderText="Select end date"
//                   filterDate={this.isDayDisabled}
//                 />
//                 <button onClick={this.addItem}>Add</button>
//               </div>
//               <div>
//                 {this.state.list.map((item) => (
//                   <div key={item._id}>
//                     <span>{item.value}</span>
//                     <button onClick={() => this.deleteItem(item._id)}>Delete</button>
//                     <button
//                       onClick={() => {
//                         const editedTodo = prompt('Edit the todo:');
//                         if (editedTodo !== null && editedTodo.trim() !== '') {
//                           this.editItem(item._id, editedTodo);
//                         }
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Route>

//           <Route path="/tasks">
//             <Tasks />
//           </Route>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;





// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import Tasks from './Tasks';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   isDayDisabled = (date) => {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//         alert('Cannot add a task on Wednesday or Friday');
//         return;
//       }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('http://localhost:5000/api/tasks', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`http://localhost:5000/api/tasks/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//           </ul>

//           <hr />
//           <Routes>
//           <Route exact path="/">
//             <div>
//               <h1>TODO LIST</h1>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="add item . . . "
//                   value={this.state.userInput}
//                   onChange={(event) => this.updateInput(event.target.value)}
//                 />
//                 <DatePicker
//                   selected={this.state.startDate}
//                   onChange={this.handleStartDateChange}
//                   dateFormat="yyyy-MM-dd"
//                   placeholderText="Select start date"
//                   filterDate={this.isDayDisabled}
//                 />
//                 <DatePicker
//                   selected={this.state.endDate}
//                   onChange={this.handleEndDateChange}
//                   dateFormat="yyyy-MM-dd"
//                   placeholderText="Select end date"
//                   filterDate={this.isDayDisabled}
//                 />
//                 <button onClick={this.addItem}>Add</button>
//               </div>
//               <div>
//                 {this.state.list.map((item) => (
//                   <div key={item._id}>
//                     <span>{item.value}</span>
//                     <button onClick={() => this.deleteItem(item._id)}>Delete</button>
//                     <button
//                       onClick={() => {
//                         const editedTodo = prompt('Edit the todo:');
//                         if (editedTodo !== null && editedTodo.trim() !== '') {
//                           this.editItem(item._id, editedTodo);
//                         }
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Route>

         
//           <Route path="/tasks">
//             <Tasks tasks={this.state.list} />
//           </Route>
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import Tasks from './Tasks';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   isDayDisabled = (date) => {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//         alert('Cannot add a task on Wednesday or Friday');
//         return;
//       }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('/api/items', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`/api/items/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//           </ul>

//           <hr />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div>
//                   <h1>TODO LIST</h1>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="add item . . . "
//                       value={this.state.userInput}
//                       onChange={(event) => this.updateInput(event.target.value)}
//                     />
//                     <DatePicker
//                       selected={this.state.startDate}
//                       onChange={this.handleStartDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select start date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <DatePicker
//                       selected={this.state.endDate}
//                       onChange={this.handleEndDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select end date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <button onClick={this.addItem}>Add</button>
//                   </div>
//                   <div>
//                     {this.state.list.map((item) => (
//                       <div key={item._id}>
//                         <span>{item.value}</span>
//                         <button onClick={() => this.deleteItem(item._id)}>Delete</button>
//                         <button
//                           onClick={() => {
//                             const editedTodo = prompt('Edit the todo:');
//                             if (editedTodo !== null && editedTodo.trim() !== '') {
//                               this.editItem(item._id, editedTodo);
//                             }
//                           }}
//                         >
//                           Edit
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               }
//             />
//             <Route path="/tasks" element={<Tasks tasks={this.state.list} />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import Tasks from './Tasks';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   isDayDisabled = (date) => {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//         alert('Cannot add a task on Wednesday or Friday');
//         return;
//       }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('/api/items', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`/api/items/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//           </ul>

//           <hr />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div>
//                   <h1>TODO LIST</h1>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="add item . . . "
//                       value={this.state.userInput}
//                       onChange={(event) => this.updateInput(event.target.value)}
//                     />
//                     <DatePicker
//                       selected={this.state.startDate}
//                       onChange={this.handleStartDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select start date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <DatePicker
//                       selected={this.state.endDate}
//                       onChange={this.handleEndDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select end date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <button onClick={this.addItem}>Add</button>
//                   </div>
//                   <Tasks
//                     tasks={this.state.list}
//                     deleteItem={this.deleteItem}
//                     editItem={this.editItem}
//                   />
//                 </div>
//               }
//             />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;






// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import Tasks from './Tasks';
// import TaskDetail from './TaskDetail';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchItems();
//   }

//   fetchItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ list: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   updateInput = (value) => {
//     this.setState({
//       userInput: value,
//     });
//   };

//   handleStartDateChange = (date) => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   handleEndDateChange = (date) => {
//     this.setState({
//       endDate: date,
//     });
//   };

//   isDayDisabled = (date) => {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
//   };

//   addItem = async () => {
//     if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//       const startDate = this.state.startDate.toISOString().split('T')[0];
//       const endDate = this.state.endDate.toISOString().split('T')[0];

//       if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
//         alert('Cannot add a task on Wednesday or Friday');
//         return;
//       }

//       try {
//         const newItem = {
//           value: this.state.userInput,
//           startDate,
//           endDate,
//         };

//         await axios.post('/api/items', newItem);
//         this.fetchItems();

//         this.setState({
//           userInput: '',
//           startDate: null,
//           endDate: null,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   deleteItem = async (id) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   editItem = async (id, newValue) => {
//     try {
//       await axios.put(`/api/items/${id}`, { value: newValue });
//       this.fetchItems();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//           </ul>

//           <hr />

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div>
//                   <h1>TODO LIST</h1>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="add item . . . "
//                       value={this.state.userInput}
//                       onChange={(event) => this.updateInput(event.target.value)}
//                     />
//                     <DatePicker
//                       selected={this.state.startDate}
//                       onChange={this.handleStartDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select start date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <DatePicker
//                       selected={this.state.endDate}
//                       onChange={this.handleEndDateChange}
//                       dateFormat="yyyy-MM-dd"
//                       placeholderText="Select end date"
//                       filterDate={this.isDayDisabled}
//                     />
//                     <button onClick={this.addItem}>Add</button>
//                   </div>
//                   <Tasks
//                     tasks={this.state.list}
//                     deleteItem={this.deleteItem}
//                     editItem={this.editItem}
//                   />
//                 </div>
//               }
//             />
//             <Route
//               path= "/tasks/:id"
//               element={<TaskDetail tasks={this.state.list} />}
//             />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Tasks from './Tasks';
import TaskDetail from './TaskDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      startDate: null,
      endDate: null,
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

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  isDayDisabled = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday = 3, Friday = 5
  };

  addItem = async () => {
    if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
      const startDate = this.state.startDate.toISOString().split('T')[0];
      const endDate = this.state.endDate.toISOString().split('T')[0];

      if (this.isDayDisabled(this.state.startDate) || this.isDayDisabled(this.state.endDate)) {
        alert('Cannot add a task on Wednesday or Friday');
        return;
      }

      try {
        const newItem = {
          value: this.state.userInput,
          startDate,
          endDate,
        };

        await axios.post('/api/items', newItem);
        this.fetchItems();

        this.setState({
          userInput: '',
          startDate: null,
          endDate: null,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  deleteItem = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      this.fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  editItem = async (id, newValue) => {
    try {
      await axios.put(`/api/items/${id}`, { value: newValue });
      this.fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>TODO LIST</h1>
                  <div>
                    <input
                      type="text"
                      placeholder="add item . . . "
                      value={this.state.userInput}
                      onChange={(event) => this.updateInput(event.target.value)}
                    />
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleStartDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Select start date"
                      filterDate={this.isDayDisabled}
                    />
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleEndDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Select end date"
                      filterDate={this.isDayDisabled}
                    />
                    <button onClick={this.addItem}>Add</button>
                  </div>
                </div>
              }
            />
            <Route
              path="/tasks"
              element={<Tasks tasks={this.state.list} deleteItem={this.deleteItem} editItem={this.editItem} />}
            />
            <Route
              path="/tasks/:id"
              element={<TaskDetail tasks={this.state.list} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


