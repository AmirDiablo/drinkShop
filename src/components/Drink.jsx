import { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useFav } from "../context/FavContext";


const Drink = ({pro}) => {
    const navigate = useNavigate()
    const { addFavCount } = useFav()

    const open = (pro)=> {
        navigate("/productInfo", {state: {product: pro}})
    }

    const addToFav = (id, name, image, price)=> {
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

        const item = {id, name, image, price}
        fav.push(item)
        localStorage.setItem('fav', JSON.stringify(fav))
        addFavCount()
    }

    return ( 
        <div className="drink relative bg-black/5 rounded-2xl aspect-[1/1] w-50 my-20 mx-auto" onClick={()=> open(pro)}>
            <div onClick={()=> addToFav(pro.id, pro.name, pro.image, pro.price)}><FaHeart className="text-black/20 text-[20px] absolute right-5 top-5" /></div>
            <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
                <div className="drinkCan mx-auto" style={{background: `url(/${pro.image}), url(/sodaCan.png)`, backgroundSize: "auto 100%", backgroundPositionX: "170px"}} />
                <p className="text-black/30 text-center w-max my-3">{pro.name}</p>
                <div className="text-center mx-auto bg-blue-200 rounded-2xl w-max py-1 px-5">{pro.price}$</div>
            </div>
            
        </div>
     );
}
 
export default Drink;