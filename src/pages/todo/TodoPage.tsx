import {todoList} from './todo.ts'
import {useEffect, useMemo, useState} from 'react'
import {TodoList} from 'src/pages/todo/_components/TodoList'
import {TodoFilter} from 'src/pages/todo/_components/TodoFilter'
export const TodoPage = () => {
  const [author, setAuthor] = useState('all')
  const [priority, setPriority] = useState('all')
  const [filteredTodoList, setFilteredTodoList] = useState([])

  const authorOptions = useMemo(()=>{
    const authors = todoList?.map((todo) => todo.author) ?? []
    return ['all', ...new Set(authors)]
  }, [TodoList])

  useEffect(()=>{
    const filtered = todoList.filter((item) => (author==='all' || item.author === author) && (priority === 'all' || item.priority===priority))
    setFilteredTodoList(filtered)
  }, [author, priority])

  return (
    <div>
      <TodoFilter authorOptions={authorOptions} setPriority={setPriority} setAuthor={setAuthor} />
      <TodoList todoList={filteredTodoList} />
    </div>
  )
}
