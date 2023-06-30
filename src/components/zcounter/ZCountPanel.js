
const ZCountPanel = ({fn}) => {
    
    
    return ( 
        <div className="bg-amber-300 flex p-6">
            <button 
            className="m-6 p-2 bg-violet-500"
            onClick={() => fn(1)}
            >
            INC
            </button>

            <button 
            className="m-6 p-2 bg-violet-500"
            onClick={() => fn(-1)}
            >
            DEC
            </button>
            
        </div>
     );
}
 
export default ZCountPanel;