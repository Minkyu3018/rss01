import { useState } from "react";

const TodoInput = () => {

    const [obj, setObj] = useState({title:'', content:''})

    const handleChange =(e) => {
        //input=>title
        obj[e.target.name] = e.target.value
        setObj({...obj})
       
    }
    
    
    return ( 

        <>
        <div>
            <label>제목 </label>
            <input 
            className="border-2 border-gray-500"
            type="text" 
            name="title"
            value={obj.title}
            onChange={ handleChange }
            />
        </div>

        <div>
            <label>내용 </label>
            <input
            className="border-2 border-gray-500" 
            type="text"
            name="content"
            value={obj.content}
            onChange={ handleChange }
            />
        </div>
        </>
        

        
     );

     
}
 
export default TodoInput;