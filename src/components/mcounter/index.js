import { useState } from "react";
import MCountDisplay from "./MCountDisplay";
import MCountPanel from "./MCountPanel";


const MCounter = () => {

    const [obj, setObj] = useState({num:10})

    const changeObj = (amount) => {
        obj.num += amount
        setObj({...obj})

        console.log(obj.num)

    }
        
    

    return ( 
        

        <div className="w-2/3 h-100 bg-yellow-300 justify-center">
        <MCountDisplay value={obj.num}></MCountDisplay>
        <MCountPanel fn={ changeObj }></MCountPanel>
        </div>
        
      

        
     );
}
 
export default MCounter;