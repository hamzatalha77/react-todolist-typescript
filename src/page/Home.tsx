import React, { ChangeEvent, useState } from 'react'
import TodoTask from '../components/TodoTask'
import { ITask } from '../interfaces/ItaskInterface'
const Home = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
    console.log(todoList)
  }
  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete
      })
    )
  }
  return (
    <div className="h-screen w-full bg-[#FFF0F5]">
      <div className="header">
        <div className="inputs">
          <input
            onChange={handlerChange}
            name="task"
            type="text"
            value={task}
            placeholder="Task..."
          />
          <input
            onChange={handlerChange}
            name="deadline"
            value={deadline}
            type="number"
            placeholder="Deadline..."
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}
export default Home
