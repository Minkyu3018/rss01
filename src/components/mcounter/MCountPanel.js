

const MCountPanel = ({fn}) => {
    return ( 
        <>
        
        <div className="p-6 bg-red-200 justify-center flex">
            <button 
            className="border-4 text-4xl p-4 m-4 bg-red-200 "
            onClick={() => fn(1)}
            >INC
            </button>

            <button 
            className="border-4 text-4xl p-4 m-4 bg-red-200 "
            onClick={() => fn(-1)}
            >DEC
            </button>
        </div>
        </>
     );
}
 
export default MCountPanel;