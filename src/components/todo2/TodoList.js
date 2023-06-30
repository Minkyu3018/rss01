const TodoList = ({arr , deleteTodo}) => {

    return ( 
        <>
            <ul>
                {arr.map( todo => 
                    <li 
                        key={todo.tno}
                    > {todo.tno} - {todo.title} - {todo.content}
                    <button className="border-8"
                        onClick={() => deleteTodo(todo.tno)}>버튼</button>
                    </li>
                    
                )}
            </ul>
        </>
     );
}
 
export default TodoList;