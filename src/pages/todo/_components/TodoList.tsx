import {TodoItem} from 'src/pages/todo/_components/TodoItem'

export const TodoList = ({ todoList }) => {
    return (
      <div class="mt-1rem">
        {
          todoList.map((todo) => (
            <TodoItem {...todo} key={todo.id} />
          ))
        }
      </div>
    )
  }
