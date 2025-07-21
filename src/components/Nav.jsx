import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo3.png"
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useBag } from "../context/BagContext";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchIsOpen, setSearchIsOpen] = useState(false)
    const { bagCount, setNumber } = useBag()
    const navigate = useNavigate()

    const openMenu = ()=> {
        if(isOpen) {
            const menu = document.querySelector(".menu")
            menu.style.transform = "translateX(0px)"
        }else{
            const menu = document.querySelector(".menu")
            menu.style.transform = "translateX(-300px)"
        }
        setIsOpen(!isOpen)
    }

    const close = ()=> {
        const menu = document.querySelector(".menu")
        menu.style.transform = "translateX(0px)"
        setIsOpen(false)
    }

    const openSearch = ()=> {
        setSearchIsOpen(true)
    }

    const closeSearch = ()=> {
        setSearchIsOpen(false)
    }

    const count = (bag)=> {
        const bagCount = (bag ?? []).length

        let totalNumber = 0;
        for(let i=0; i<bagCount ; i++){
            totalNumber = totalNumber + bag[i].number
        }
        
        setNumber(totalNumber)
    }

    useEffect(()=> {
        const bag = JSON.parse(localStorage.getItem("bag"))
        count(bag)
    },[])

    return ( 
        <div className="flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-20">
            <Link to="/"><img src={logo} className="w-20" /></Link>
            <div className="flex  mx-5 *:hover:bg-black/20 *:p-2 *:rounded-full *:hover:cursor-pointer">
                <div className="text-[20px]" onClick={openSearch}><RiSearchLine /></div>
                <Link className="text-[20px]"><IoPersonOutline /></Link>
                <button disabled={bagCount===0 ? true : false} className="text-[20px] relative" onClick={()=> navigate("/bag")}><IoBagOutline /> <p className="text-[9px] absolute top-5 right-1 text-center bg-black text-white rounded-full px-[5px]  aspect-square">{bagCount}</p></button>
                <div className="text-[20px]" onClick={openMenu}><IoReorderThreeOutline /></div>
            </div>

            {searchIsOpen && <Search closeSearch={closeSearch} />}

            <div className="menu absolute pt-10 bg-white h-screen top-0 w-60 right-0 *:flex *:items-center z-10 translate-x-[300px] transition-transform duration-300 *:hover:cursor-pointer">
                <div className="absolute right-5 top-5" onClick={close}><RxCross1 /></div>
                <Link to="" className="mt-5 px-5"><IoPersonOutline className="mr-2"/> <p>Hi Amir</p></Link>
                <div className="w-[90%] mx-auto h-[1px] bg-black/20 my-5"></div>
                <Link to="/products" className="py-2 px-5">Shop</Link>
                <Link className="py-2 px-5">Brands</Link>
                <Link to="/offers" className="py-2 px-5">Offers</Link>
                <Link className="py-2 px-5">About Us</Link>
                <div className="w-[90%] mx-auto h-[1px] bg-black/20 my-5"></div>
                <Link to="/fav" className="px-5 py-2"><FaRegHeart className="mr-2"/><p>Favorite</p></Link>
                <Link to="/bag" className="px-5 py-2"><IoBagOutline className="mr-2"/> <p>Bag</p></Link>
                <Link className="px-5 py-2"><BsBoxSeam className="mr-2"/> <p>Orders</p></Link>
                <Link className="px-5 py-2"><IoStorefrontOutline className="mr-2"/> <p>Find a store</p></Link>
            </div>

            {isOpen && <div className="bg-black/20 w-screen h-screen absolute top-0 z-5"></div>}
        </div>
    );
}
 
export default Nav;