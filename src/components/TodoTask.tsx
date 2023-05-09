import React from 'react'

import { ITask } from '../interfaces/ItaskInterface'
interface Props {
  task: ITask
  deleteTask(taskNameToDelete: string): void
}
const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div>
      {task.taskName}
      {task.deadline}
      <button
        onClick={() => {
          deleteTask(task.taskName)
        }}
      >
        X
      </button>
    </div>
  )
}

export default TodoTask
