// import React, { Component } from 'react';
// import axios from 'axios';

// class Tasks extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tasks: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchTasks();
//   }

//   fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tasks');
//       this.setState({ tasks: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Tasks</h1>
//         <div>
//           {this.state.tasks.map((task) => (
//             <div key={task._id}>
//               <span>{task.value}</span>
//               <span>Start Date: {task.startDate}</span>
//               <span>End Date: {task.endDate}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Tasks;



// import React from 'react';

// const Tasks = ({ tasks }) => {
//   return (
//     <div>
//       <h1>Tasks</h1>
//       <div>
//         {tasks.map((task) => (
//           <div key={task._id}>
//             <span>{task.value}</span>
//             <span>Start Date: {task.startDate}</span>
//             <span>End Date: {task.endDate}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React from 'react';

// const Tasks = ({ tasks, deleteItem, editItem }) => {
//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       deleteItem(id);
//     }
//   };

//   const handleEdit = (id) => {
//     const editedTodo = prompt('Edit the todo:');
//     if (editedTodo !== null && editedTodo.trim() !== '') {
//       editItem(id, editedTodo);
//     }
//   };

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <div>
//         {tasks.map((task) => (
//           <div key={task._id}>
//             <span>{task.value}</span>
//             <span>Start Date: {task.startDate}</span>
//             <span>End Date: {task.endDate}</span>
//             <button onClick={() => handleDelete(task._id)}>Delete</button>
//             <button onClick={() => handleEdit(task._id)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Tasks = ({ tasks, deleteItem, editItem }) => {
//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       deleteItem(id);
//     }
//   };

//   const handleEdit = (id) => {
//     const editedTodo = prompt('Edit the todo:');
//     if (editedTodo !== null && editedTodo.trim() !== '') {
//       editItem(id, editedTodo);
//     }
//   };

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <div>
//         {tasks.map((task) => (
//           <div key={task._id}>
//             <span>{task.value}</span>
//             <span>Start Date: {task.startDate}</span>
//             <span>End Date: {task.endDate}</span>
//             <button onClick={() => handleDelete(task._id)}>Delete</button>
//             <button onClick={() => handleEdit(task._id)}>Edit</button>
//             <Link to={`/tasks/${task._id}`}>View</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;





import React from 'react';
import { Link } from 'react-router-dom';

const Tasks = ({ tasks, deleteItem, editItem }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteItem(id);
    }
  };

  const handleEdit = (id) => {
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
      editItem(id, editedTodo);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <span>{task.value}</span>
            <span>Start Date: {task.startDate}</span>
            <span>End Date: {task.endDate}</span>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
            <button onClick={() => handleEdit(task._id)}>Edit</button>
            <Link to={`/tasks/${task._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;



