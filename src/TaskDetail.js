import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();

  const task = tasks.find((task) => task._id === id);

  if (!task) {
    return <div>Task not found.</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <div>
        <span>{task.value}</span>
        <span>Start Date: {task.startDate}</span>
        <span>End Date: {task.endDate}</span>
      </div>
    </div>
  );
};

export default TaskDetail;
