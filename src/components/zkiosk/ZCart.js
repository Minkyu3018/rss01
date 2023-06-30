import ZCartItem from "./ZCartItem";

const ZCart = ({arr , changeQty}) => {

    console.log("arr",arr)

    if(arr === null || arr.length === 0){
        return (
            <></>
        )
    }

    return ( 
        <div>
            <ul>
                {arr.map( (cartItem, idx) => 
                <li key={idx}>
                    <ZCartItem {...cartItem} changeQty={changeQty}></ZCartItem>
                </li>)}
            </ul>
        </div> 
    );
}


 
export default ZCart;