import { useEffect, useState } from "react"
import Raspberry from "../assets/raspberry2.png"
import blueBerry from "../assets/blueBerry4.png"

const MovingCan = () => {
    const [index, setIndex] = useState(0)
    const [left, setLeft] = useState(200)
    const [pos, setPos] = useState(0)


    window.onscroll = ()=> {
        /* const start = 851.1705322265625
        const path = end - start */
        const soda = document.querySelectorAll(".newSoda")
        const sodaRect = soda.getBoundingClientRect()

        const end = 1079

        if(sodaRect.top <= 200) {
            if(pos < end){
            setPos(pos+5)
            if(1163 == Math.abs(sodaRect.top+window.scrollY)) {
                soda.style.transform = "rotateX(45deg)"
            }
            console.log(sodaRect.top+window.scrollY)
            soda.style.transform = `translateY(${pos}px)`
            console.log(pos)
        }
        }

    }
    

    let Arr = [".soda4", ".soda5"]

    const handleClick = ()=> {
        document.querySelector(".product2").style.setProperty("--left", `${left+1000}px`)
        document.querySelector(Arr[index]).style.opacity = "1"
        if(index < 1) {
            setIndex(index+1)
            setLeft(left+1000)
        }
    }

    return ( 
        <div>

            <div className="banner2 pointer-events-auto ">
                <div className="product2 peer">
                    <div className="soda3 rotate-25 newSoda scale-[0.9]"></div>
                    <div className="soda4 rotate-25 newSoda"></div>
                    <div className="soda5 rotate-25 newSoda"></div>
                </div>
            </div>
 
            <div className="-translate-y-[1000px] px-10">
                <div className="relative">

                    <p className="topic w-max text-[40px] font-[600] absolute -top-40 left-[50%] -translate-x-[50%]">Raspberry Riot</p>

                    <div className="w-50 -translate-y-[90px]">
                        <p className="text-[12px] font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque corrupti eos fuga animi nihil blanditiis accusantium perspiciatis</p>
                    </div>

                    <img src={Raspberry} className="w-60 absolute left-[50%] -translate-x-[50%] -translate-y-[100px]" />

                    <div className="w-30 absolute right-0  scale-[0.7]">
                        <p className="font-[700] pb-3">310 ml</p>
                        <hr className="text-black/20 pt-3" />
                        <p className="pb-5 text-[12px] font-[400]">Lorem ipsum dolo lore do the </p>

                        <p className="text-[12px] font-[400]">Fresh and juicy Raspberry</p>
                        <hr className="text-black/20"/>
                        <p className="text-[12px] font-[400px]">Lorem ipsum dolor sit</p>
                    </div>
                </div>
            </div>




            <div className="-translate-y-[500px] px-10">
                <div className="relative">

                    <p className="topic w-max text-[40px] font-[600] absolute -top-40 left-[50%] -translate-x-[50%]">Blue berry</p>

                    <div className=" w-50  -translate-y-[90px] absolute right-0">
                        <p className="text-[12px] font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque corrupti eos fuga animi</p>
                    </div>

                    <img src={blueBerry} className="w-50  absolute left-[50%] -translate-x-[50%] " />

                    <div className="w-30 absolute left-0  scale-[0.7] top-10">
                        <p className="font-[700] pb-3">310 ml</p>
                        <hr className="text-black/20 pt-3" />
                        <p className="pb-5 text-[12px] font-[400]">Lorem ipsum dolo lore do the </p>

                        <p className="text-[12px] font-[400]">Fresh and juicy Raspberry</p>
                        <hr className="text-black/20"/>
                        <p className="text-[12px] font-[400px]">Lorem ipsum dolor sit</p>
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default MovingCan;