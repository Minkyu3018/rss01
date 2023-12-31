import { useState } from "react";
import TemplatePage from "../layout/TemplatePage";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo = () => {

    // 배열생성(상태)
    const [todoArr, setTodoArr] = useState([])

    const addTodo = (newTodo) => {
        console.log("add todo", newTodo)
        setTodoArr([...todoArr,newTodo])
        
    }

    const removeTodo = (tno) => {
        console.log("removeTodo", tno)

        setTodoArr(todoArr.filter(todo => todo.tno !== tno ))
    }

    return ( 
        <>
        <TemplatePage>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList arr={todoArr} removeFn={removeTodo}></TodoList>
        </TemplatePage>
       
        </>
     );
}
 
export default Todo;