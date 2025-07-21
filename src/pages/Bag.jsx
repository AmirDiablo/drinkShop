import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { useBag } from "../context/BagContext";
import { useFav } from "../context/FavContext";

const Bag = () => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const { addBagCount, reduce } = useBag()
    const { addFavCount } = useFav()
    
        useEffect(()=> {
            setItems(JSON.parse(localStorage.getItem("bag")) || null)
        }, [])
    
        useEffect(()=> {
            let totalPrice = 0;
            
            for(let i=0; i<items.length ; i++){
                totalPrice = totalPrice + (items[i].price * items[i].number)
            }
            setTotal(totalPrice)
            
        }, [items])
    
        const deleteFromBag = (shoeId)=> {
            for(let i=0; i<items.length ; i++){
                if(items[i].id === shoeId){
                    items.splice(i, 1)
                    reduce()
                }
            }
    
            localStorage.setItem('bag', JSON.stringify(items))
            /* location.reload() */
        }
    
        const addNumber = (shoeId)=> {
            for(let i=0; i<items.length; i++){
                if(items[i].id === shoeId){
                    items[i].number += 1
                    addBagCount()
                }
            }
    
            localStorage.setItem('bag', JSON.stringify(items))
            /* location.reload() */
        }
        
        const countItems = ()=> {
            let totalNumber = 0;
            for(let i=0; i<items.length ; i++){
                totalNumber = totalNumber + items[i].number
            }
            
            return totalNumber
        }
    
        const reduceNumber = (id)=> {
            for(let i=0; i<items.length ; i++){
                if(items[i].id === id){
                    items[i].number -= 1
                    reduce()
                }
            }
    
            localStorage.setItem('bag', JSON.stringify(items))
            /* location.reload() */
        }
    
        const addToFav = (shoeId, shoeName, shoeImg, shoePrice, shoeColor, shoeCategory)=> {
            const fav = JSON.parse(localStorage.getItem("fav") || "[]") //if there is no data in localStorage yet, return am empty array
            let isExist;
            for(let i=0; i<fav.length; i++){
                if(fav[i].id === shoeId && fav[i].category === shoeCategory){
                    isExist = true
                }
            }
    
            if(isExist){
                return
            }
            
            const item = {name: shoeName, price: shoePrice, img: shoeImg, category: shoeCategory, color: shoeColor, id: shoeId, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
            fav.push(item)
            localStorage.setItem("fav", JSON.stringify(fav))
            addFavCount()
        }


    return ( 
        <div className="px-10">
            <p className="text-[20px] font-[700]">My Bag</p>

            <div className=" md:grid md:grid-cols-10 md:grid-rows-10 md:gap-10">

                <div className="mt-10 mb-10 md:col-start-1 col-span-6">
                    {items.map((item)=> (
                            <div className="rounded-2xl relative my-10 flex items-center justify-between w-[100%] shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff]">
                                <div className="bg-black/5 relative p-20 w-40 aspect-square rounded-2xl">
                                    <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] drinkCan scale-[0.8]" style={{background:`url(/${item.image}), url(/sodaCan.png)`, backgroundSize: "auto 100%", backgroundPosition: "170px"}}></div>
                                </div>
                                <div className="flex flex-col px-3 w-[100%]">
                                    <div className="flex justify-between">
                                        <p>Price</p><p>{item.price}$</p>
                                    </div>
                                    <div  className="flex justify-between">
                                        <p>QTY</p> <p>{item.number}</p>
                                    </div>
                                    <div  className="flex justify-between">
                                        <p>Total price</p> <p>{item.number * item.price}$</p>
                                    </div>

                                    <div className="flex justify-around bg-black/10 rounded-2xl mt-3 ">
                                        <div className="shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] p-2 aspect-square rounded-full flex justify-center items-center">{item.number === 1 ? <GoTrash onClick={()=> deleteFromBag(item.id, item.size)}/>  : <FiMinus onClick={()=> reduceNumber(item.id)}/>}</div>
                                        <div className="shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] p-2 aspect-square rounded-full flex justify-center items-center"><LuPlus onClick={()=> addNumber(item.id)} /></div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>

                <div className="my-20 md:col-start-7 md:col-span-4 ">
                    <div className="*:flex *:justify-between">
                        <div className="text-[20px] font-[600]"><p>items</p> <p>{countItems()}</p></div>
                        <div className="text-[20px] font-[600]"><p>Fee</p><p>11$</p></div>
                        <div className="text-[20px] font-[600]"><p>Total Price</p><p>283$</p></div>
                    </div>
                    <button className="bg-black mt-5 rounded-full text-white text-[20px] font-[600] px-5 py-2 w-[100%]">Sumbit order</button>
                </div>

            </div>
            
        </div>
     );
}
 
export default Bag;
