
const TemplatePage = ({children}) => {

    console.log("children")
    console.log(children)

    const [header, main, footer] = children


    return ( 
        <div className="w-100 bg-green-100 justify-center items-center h-[100vh]">
            <div className="h-[20vh] bg-indigo-400">
                {header}
            </div>
            <div className="h-[60vh] bg-amber-300">
                {main}
            </div>
            <div className="h-[20vh] bg-green-300">
                {footer}
            </div>
        </div>
     );
}
 
export default TemplatePage;