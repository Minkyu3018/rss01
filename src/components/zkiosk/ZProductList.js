


const products = [
    {pno:1, pname:'Americano', price: 7000 , img:"p1.jpg"},
    {pno:2, pname:'Latte', price: 8000 , img:"p2.jpg"},
    {pno:3, pname:'Milk Tea', price: 9000 , img:"p3.jpg"},
    {pno:4, pname:'Green Tea', price: 6000 , img:"p4.jpg"},

]

const ZProductList = ({buyProduct , viewProduct}) => {

    return ( 
        <div className="w-full bg-sb-gray1 text-3xl m-12 p-10" >
            <ul>

                {products.map( p => 
                <li key={p.pno}>
                    {p.pname}
                    <button 
                    className="bg-sb-gary2 border-2 border-black"
                    onClick={() => buyProduct({...p})}
                    >BUY</button>
                    </li>)}

            </ul>
        </div> 
    );

}
 
export default ZProductList;