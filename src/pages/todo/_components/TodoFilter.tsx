export const TodoFilter = ({authorOptions, setAuthor, setPriority}) => {
  const onChangeAuthor = (event) => {
    setAuthor(event.target.value)
  }

  const onChangePriority = (event) => {
    setPriority(event.target.value)
  }
  return (
    <div>
      <select name="author" id="author" onChange={onChangeAuthor}>
        {
          authorOptions?.map((author) => (
            <option value={author} key={author}>{author}</option>
          ))
        }
      </select>
      <select name="priority" id="priority" onChange={onChangePriority}>
        <option value={'all'}>all</option>
        <option value={'high'}>high</option>
        <option value={'medium'}>medium</option>
        <option value={'low'}>low</option>
      </select>
    </div>
  )
}
