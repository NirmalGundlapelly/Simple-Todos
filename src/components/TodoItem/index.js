// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemsList, deleteTodo} = props
  const {id, title} = todoItemsList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="TodoItem">
      <div className="itemsContainer">
        <p className="title">{title}</p>
        <div>
          <button className="deleteButton" onClick={onDelete} type="button">
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
