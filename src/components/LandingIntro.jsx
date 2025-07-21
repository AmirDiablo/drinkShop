import { useEffect, useState } from "react";
import flatWood from "../assets/wood.png"
import fallingOrange from "../assets/fallingOrange.png"
import fallingStrawbery from "../assets/strawbery.png"
import beach from "../assets/beachBack2.jfif"
import leaf from "../assets/leaf5.png"

const LandingIntro = () => {
    const [status, setStatus] = useState(false)

    const hoverHandler = (isOn)=> {
        if(isOn) {
            setStatus(true)
            document.querySelector('.landing').style.backgroundColor = "orange"
            document.querySelector(".fruit").style.transform = "translateY(-50px)"
        }else{
            setStatus(false)
            document.querySelector('.landing').style.backgroundColor = "#eb6d6d" //cc4444
            document.querySelector(".fruit").style.transform = "translateY(0px)"
        }
    }

    return ( 
        <div className="transition-colors duration-500 pointer-events-none  landing relative overflow-hidden">

            <img src={leaf} className="absolute top-20 rotate-45 z-10 w-70 leafLeft" />
            <img src={leaf} className="absolute top-30 right-0 -rotate-45 z-10 w-70 leafRight" />
            
            <div className="banner pointer-events-auto">
                {/* <img src={status==true ? fallingOrange : fallingStrawbery} className="w-100 absolute translate-y-[50px] left-[50%] -translate-x-[50%] fruit" /> */}
                <div className="product peer @min-[400px]:top-[90px]">
                    <div className="soda1 soda"></div>
                    <div className="soda2 soda"></div>
                </div>

                {/* <img src={flatWood} className="absolute bottom-36 w-80 left-[50%] -translate-x-[50%] flatWood peer-has-hover:translate-y-[50px]"/> */}

            </div>

            
            
        </div>
     );
}
 
export default LandingIntro;