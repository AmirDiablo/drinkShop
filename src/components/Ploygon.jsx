import { useState } from "react"


const Polygon = () => {
    const [left, setLeft] = useState(210)
    const [index, setIndex] = useState(0)
    const [move, setMove] = useState(0)
    const [pos, setPos] = useState(0)

    window.onscroll = ()=> {
        let scroll = window.scrollY
        let soda = document.querySelector(".soda3")
        

        if(scroll > pos) {
            soda.style.setProperty("--left", `${left+1}px`)
       
            if(window.scrollY >= 900) {
                soda.style.transform = "rotate(-45deg)"
                soda.style.transform = `translateX(${move+0.2}px)`
                setMove(move+0.2)
            }else{
                soda.style.transform = "rotate(0deg)"
                soda.style.transfrom = `translateX(${move-0.2}px)`
                setMove(move-0.2)
            }

            setLeft(left+1)
        }else{
            soda.style.setProperty("--left", `${left-1}px`)
       
            if(window.scrollY >= 900) {
                soda.style.transform = "rotate(-45deg)"
            }else{
                soda.style.transform = "rotate(0deg)"
            }

            setLeft(left-1)
        }

        const sodaRect = soda.getBoundingClientRect()

        /* if(sodaRect.left <= 100) {
            soda.style.transform = `translateX(${move+1}px)`
            setMove(move+1)
        }else{
            soda.style.transform = `translateX(${move-1}px)`
            setMove(move-1)
        } */

       
        setPos(scroll)
        
    }

    

    const handleClick = ()=> {
        document.querySelector(".product2").style.setProperty("--left", `${left+1000}px`)
        document.querySelector(Arr[index]).style.opacity = "1"
        if(index < 1) {
            setIndex(index+1)
            setLeft(left+1000)
        }
    }

    return ( 
        <div className="px-10 py-20 h-1000 overflow-visible relative">


            {/* <div className="box bg-red-200 " > 
                    <p className="font-[600] text-[80px] text-black/40 absolute left-[50%] -translate-x-[50%]">Raspberry</p>  
                    <div className="newSoda  rotate-25 translate-y-[10px] translate-x-[30px] scale-[1] -z-4"></div>
            </div> */}

            <div className="box bg-red-200" > 
                    <p className="font-[600] text-[80px] text-black/40 absolute left-[50%] -translate-x-[50%]">Raspberry</p>  
                    
            </div>

            <div className="newSoda soda3 rotate-25 -translate-y-[200px] translate-x-[100px] scale-[1]  "></div>
        </div>
     );
}
 
export default Polygon;