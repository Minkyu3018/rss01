import { useState } from "react"

const products = [
    {pno:1, pname:'Americano', price: 7000 , img:"p1.jpg"},
    {pno:2, pname:'Latte', price: 8000 , img:"p2.jpg"},
    {pno:3, pname:'Milk Tea', price: 9000 , img:"p3.jpg"},
    {pno:4, pname:'Green Tea', price: 6000 , img:"p4.jpg"},

]

const getTotal = (arr) => {

    if(!arr || arr.length === 0){
        return 0
    }

    let sum = 0;
    // reduce으로 다시해보기
    for(const ele of arr ){
        sum += (ele.price * ele.qty)
    }
    // --------위의 포문을 reduce로 변경--------
    //reduce 의 기본형을 알아보자
    // array.reduce((acc,cur,index,element) => { return 결과 }, 초기값);
    // 위와 같이 기본 틀이다.
    // 누적값,현재값,인덱스,요소를 품고있다.
    // 코드를 보도록하자

    // const array1 = [1, 2, 3, 4];
    // // 0 + 1 + 2 + 3 + 4
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    // (accumulator, currentValue) => accumulator + currentValue, initialValue
    // );


    // let result = arr.reduce((acc,ele,i) => {
    //     return acc + cur;
    // }, 0);

    return sum

}






const Kiosk = () => {

    const [items, setItems] = useState([])
    const [current, setCurrent] = useState(null)

    // const productItemRead = (p) => {

    // infos.detailInfo = ""

    //     if(p.pno === 0) {
    //         setInfo([{...p, detailInfo: "아메리카노 - 진한 에스프레소에 시원한 정수물을 더하여 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피"}])
    //         console.log("잘들어왔나?" , infos)
    //         return
    //     }
    //     if(p.pno === 1) {
    //         setInfo([{...p, detailInfo: "라떼 - 풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"}])
    //         return
    //     }
    //     if(p.pno === 2) {
    //         setInfo([ {...p, detailInfo: "밀크 티 - 진한 홍차에 부드러운 우유와 연유 시럽으로 향긋하고 달콤하게 맛을 낸 밀크 티"}])
    //         return
    //     }
    //     if(p.pno === 3) {
    //         setInfo([ {...p, detailInfo: "그린 티 - 우수한 품질의 제주도 유기농 녹차로 만든 맑은 수색과 신선한 향, 맛이 뛰어난 녹차 "}])
    //         return
    //     }

    // }

    const handleClickBuy = (product) => {
        console.log({...product, qty:1})

        const result = items.filter( ele => ele.pno === product.pno )

        console.log("result", result)

        if(result.length === 0) {
            setItems([...items, {...product, qty:1}])
            return
        }

        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])

    }


    const handleClickQty = (pno , amount) => {

        console.log("pno" , pno , "amount" , amount)
        const target = items.filter( item => item.pno === pno )[0]

        console.log(target)


        if(amount === 1){
            target.qty += 1
            setItems([...items])
        }else {
            if(target.qty === 1){
                setItems( items.filter(ele => ele.pno !== pno) )
                return
            }
            target.qty -= 1
            setItems([...items])
        }

    }

    const handleClickView = (product) => {
        console.log(product)
        setCurrent(product)
    }

    return ( 

        <div className="w-full bg-white flex"> 
            <div className="w-2/3 bg-sb-green ">
                <div className="text-4xl font-extrabold font-[Sans-Bold] p-2">Menu</div>
                
                <ul className="font-[Sans-Bold]">
                    {products.map( p => 
                    <li
                        key={p.pno} 
                        className="text-2xl  m-3 p-3 bg-sb-green border-2 border-black"
                        onClick={() => {handleClickView(p)}}
                    >
                        <div className="">
                        <img className="w-20" src={p.img}/>&nbsp;&nbsp;{p.pno}. &nbsp;{p.pname}&nbsp;:&nbsp;{p.price}
                    <button 
                    className="border-1  m-2 p-2 rounded-lg bg-gray-300 h-10"
                    onClick={() => {handleClickBuy(p)}}
                    >GET</button>
                        </div>
                    </li>)}
                </ul>

                <div>
                    <div>View</div>
                    {current ? 
                    <div>
                        current
                    <div>{current.pno}</div>
                    </div>
                    :
                    <></>
                    }
                </div>
    
            </div>
            <div className="w-1/3 bg-sb-gray1 ml-3">
                
            <div className="text-4xl font-extrabold font-[Sans-Bold]" >Cart</div>

            <div className="bg-sb-gary2 text-5xl font-[Sans-Bold]">
                Total {getTotal(items)}
            </div>


            <ul>
                {items.map( (item, idx) => 
                <li 
                    key={idx} className="border-2"
                >
                    <div className="text-3xl m-4 p-4">
                        <div><img className="w-28 m-auto mb-7" src={item.img} /></div>
                        <div className="flex justify-center font-bold">
                            <div>{item.pno}. </div>
                            <div>&nbsp;{item.pname}</div>
                            <div>&nbsp;: {item.price}</div>
                        </div>

                    </div>
                    <div className="flex justify-center text-2xl">
                        <button 
                            className="rounded-lg bg-gray-300 p-4 m-1 h-13"
                            onClick={() => handleClickQty(item.pno, 1)}
                        
                        >
                            +
                        </button>
                        <p className="m-2 text-red-700 p-2">{item.qty}</p>
                        <button 
                            className="rounded-lg bg-gray-300 p-4 m-1 h-13"
                            onClick={() => handleClickQty(item.pno, -1)}
                        >
                            -
                        </button>
                    </div>
                </li> )}
            </ul>

            
            </div>
        </div>
       

     );
}
 
export default Kiosk;