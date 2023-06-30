import { useState } from "react";
import ZProductList from "./ZProductList";
import ZCart from "./ZCart";

const ZKiosk = () => {

    const [items , setItems] = useState([]);
    const buyProduct = (product) => {
        console.log("buy Product........................", product)
        
        // 해당 상품이 카트에 있는지?
        const targetArr = items.filter(item => item.pno === product.pno)

        if(targetArr.length === 0) {

            setItems([...items, {...product , qty:1}])
            return
        }

        targetArr[0].qty += 1
        setItems([...items])
        
    }

    const viewProduct = () => {
        console.log("view Product........................")
    }

    const changeQty = (pno, amount) => {
        console.log("changeQty........................")

        const targetItem = items.filter(item => item.pno === pno)[0]
        // 수량변경
        targetItem.qty += amount

        if(targetItem.qty === 0){
            setItems(items.filter(item => item.pno !== pno))
            return
        }

        setItems([...items])

    }


    return ( 
        <>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>

        </>
     );
}
 
export default ZKiosk;