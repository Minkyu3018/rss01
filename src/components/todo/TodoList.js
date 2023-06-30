

const TodoList = ({arr, removeFn}) => {
    return ( 
        <div>
        Todo List
        <ul>
            {arr.map(todo => 
            <li key={todo.tno} className="m-3 text-3xl p-3">
                {todo.tno} - {todo.title} 
                <button 
                onClick={() => removeFn(todo.tno)}
                className="bg-red-700"
                >
                    DEL
                </button>
            </li>)}
        </ul>
        </div>
     );
}
 
export default TodoList;