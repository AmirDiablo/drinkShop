import { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useBag } from "../context/BagContext";

const Fav = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const { addBagCount } = useBag()

    useEffect(()=> {
        setItems(JSON.parse(localStorage.getItem("fav")))
    }, [])

    const open = (item)=> {
        navigate('/productInfo', {state: {product: item}})
    }
    
    const unFav = (id)=> {
        for(let i=0; i<items.length ; i++){
            if(items[i].id === id){
                items.splice(i, 1)
            }
        }

        localStorage.setItem('fav', JSON.stringify(items))
        location.reload()
    }

    const addToBag = (id, name, image, caption, price)=> {
        const orders = JSON.parse(localStorage.getItem("bag") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        let index;
        for(let i=0; i<orders.length; i++){
            if(orders[i].id === id){
                isExist = true
                index = i
            }
        }

        if(isExist){
            orders[index].number += 1
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
        }else{
            const item = { id: id, name: name, price: price, image: image, caption, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
            orders.push(item)
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
            /* location.reload() */
        }
    }

    

    return ( 
        <div className="px-10 pb-20">
            <p className="text-[20px] font-[700]">My Favs</p>

            <div>
                {items.map((item)=> (
                        <div key={item.id} className="rounded-2xl relative my-10 flex items-center justify-between w-[100%] shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff]">
                            <div onClick={()=> open(item)} className="bg-black/5 relative p-20 w-40 aspect-square rounded-2xl">
                                <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] drinkCan scale-[0.8]" style={{background:`url(/${item.image}), url(/sodaCan.png)`, backgroundSize: "auto 100%", backgroundPosition: "170px"}}></div>
                            </div>
                            <div className="flex flex-col px-3 w-[100%]">
                                <div>
                                    <p className="font-[700]">{item.name}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Price</p><p>{item.price}$</p>
                                </div>

                                <div className="flex justify-around bg-black/10 rounded-2xl mt-3 ">
                                    <div className="shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] p-2 aspect-square rounded-full flex justify-center items-center"><GoTrash onClick={()=> unFav(item.id)}/></div>
                                    <div className="shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] p-2 aspect-square rounded-full flex justify-center items-center"><IoBagOutline onClick={()=> addToBag(item.id, item.name, item.image, item.caption, item.price)} /></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
     );
}
 
export default Fav;