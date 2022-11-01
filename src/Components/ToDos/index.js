
import ToDo from '../ToDo'

function ToDos(props) {

  const {list, toggleComplete} = props;

  return (
    <>
      {list.map((item, idx) => (
        <ToDo key={`todo-${idx}`} item={item} toggleComplete={toggleComplete}/>
      ))}
    </>
  )
}

export default ToDos
