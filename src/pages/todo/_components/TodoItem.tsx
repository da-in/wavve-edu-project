export const TodoItem = ({id, task, author, priority}) => {
  return (
    <div className="bg-slate-100 p-1rem w-14rem flex flex-col mb-0.5rem">
      <div className="w-full flex">
        <span className="font-bold mr-0.25rem">{task}</span>
        <span className="text-slate-300">#{id}</span>
      </div>
      <div className="mt-0.25rem">
        <span>{author} / {priority}</span>
      </div>
    </div>
  )
}
