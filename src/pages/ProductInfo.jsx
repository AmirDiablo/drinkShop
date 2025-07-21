import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useBag } from "../context/BagContext";
import { useFav } from "../context/FavContext";


const ProductInfo = () => {
    const {state} = useLocation()
    const {product} = state
    const [isOpen, setIsOpen] = useState(false)
    const { addBagCount } = useBag()
    const {addFavCount} = useFav()
    

    const open = ()=> {
        if(isOpen) {
            document.querySelector(".arrow").style.transform = "rotate(0deg)"
        }else{
            document.querySelector(".arrow").style.transform = "rotate(180deg)"
        }
        setIsOpen(!isOpen)
    }

    const addToFav = (id, name, image, caption, price)=> {
        const fav = JSON.parse(localStorage.getItem("fav") || "[]") //if there is no data in localStorage yet, return am empty array
        let isExist;
        for(let i=0; i<fav.length; i++){
            if(fav[i].id === id){
                isExist = true
            }
        }

        if(isExist){
            return
        }

        const item = {id, name, image, caption, price}
        fav.push(item)
        localStorage.setItem('fav', JSON.stringify(fav))
        addFavCount()
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
            const item = { id: id, name: name, price: price, image, caption, number: 1} //maybe i should contain the color of this shoe as an string like "white/black"
            orders.push(item)
            localStorage.setItem('bag', JSON.stringify(orders))
            addBagCount()
            /* location.reload() */
        }
    }

    return ( 
        <div>

            <div className="pt-5 pb-10 sm:grid sm:grid-cols-2 sm:grid-rows-3 productGrid">
                <div className="bg-black/5 relative p-20 w-[90%] aspect-square rounded-2xl mx-auto mt-10 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-4 sm:max-w-150">
                    <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] drinkCan scale-[1.5]" style={{background:`url(/${product.image}), url(/sodaCan.png)`, backgroundSize: "auto 100%", backgroundPosition: "170px"}}></div>
                </div>

                <p className="text-[30px] font-[700] text-center h-max sm:col-start-2 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:mt-10">{product.name}</p>
                <p className="text-[20px] text-center w-[90%] mx-auto">{product.caption}</p>

                <div className="w-[90%] h-[1px] bg-black/30 mx-auto my-5"></div>

                <details className="px-10 relative mb-10 sm:col-start-2 sm:-mt-15" onClick={open}>
                    <summary className="text-[20px] font-[700] flex items-center "><IoIosArrowDown className="transition-transform duration-200 arrow text-[20px] font-[700] absolute z-3 right-10" />View Nutrition Facts</summary>

                    <div className="w-[100%] bg-black/5 p-5">
                        <p className="text-[30px] font-[700]">Nutrition Facts</p>
                        <p className="text-[20px] font-[700]">1 serving per container</p>
                        <div className="bg-black/20 w-[100%] h-2 my-5"></div>
                        <div className="text-[20px] font-[700] flex justify-between">
                            <p>Serving Size</p>
                            <p>1 Can</p>
                        </div>
                        <div className="w-[100%] h-[1px] bg-black/20 my-5"></div>
                        <div className="text-[20px] font-[700] flex justify-between">
                            <p>Calories</p>
                            <p>0</p>
                        </div>
                        <div className="w-[100%] h-[1px] bg-black/20 my-5"></div>
                        <p className="text-[20px] font-[700] text-end">Daily Value</p>
                        <table className="text-[17px] font-[700] *:flex *:justify-between w-[100%]">
                            <thead>
                                <tr>
                                    <th>Nutritional Composition</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tr>
                                <td>Total Fat 0g</td>
                                <td>0%</td>
                            </tr>

                            <tr>
                                <td>Sodium 75mg</td>
                                <td>3%</td>
                            </tr>

                            <tr>
                                <td>Total Carbohydrate 0g</td>
                                <td>0%</td>
                            </tr>

                            <tr>
                                <td>Total Sugars 0g</td>
                                
                            </tr>

                            <tr>
                                <td>Includes Added Sugars 0g</td>
                                <td>0%</td>
                            </tr>

                            <tr>
                                <td>Protein 0g</td>
                            </tr>
                        </table>

                        <div className="w-[100%] h-[1px] bg-black/20 my-5"></div>

                        <p className="text-[20px] font-[700]">Ingredients</p>
                        <p>CARBONATED WATER, CARAMEL COLOR, NATURAL FLAVORS, PHOSPHORIC ACID, SODIUM BENZOATE (TO PROTECT TASTE), ACESULFAME POTASSIUM, SODIUM CITRATE, SODIUM CHLORIDE, ASPARTAME, CAFFEINE, SUCRALOSE.</p>

                    </div>
                </details>

                <button className="bg-black text-white font-[700] text-[20px] px-5 py-2 rounded-2xl w-[90%] text-center block mx-auto sm:col-start-2 col-end-2 hover:cursor-pointer" onClick={()=> addToBag(product.id, product.name, product.image, product.caption, product.price)}>Add to bag</button>
                <button className="border-1 border-black text-[20px] font-[700] px-5 py-2 rounded-2xl w-[90%] text-center block mx-auto mt-2 sm:col-start-2 hover:cursor-pointer" onClick={()=> addToFav(product.id, product.name, product.img, product.caption, product.price)}>Add to favorite</button>
            </div>
            
        </div>
     );
}
 
export default ProductInfo;