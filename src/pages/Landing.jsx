import LandingIntro from "../components/LandingIntro";
import Polygon from "../components/Ploygon";
import orange from "../assets/orange.jfif"
import { PiOrangeSliceLight } from "react-icons/pi";
import { LuDroplets } from "react-icons/lu";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineFire } from "react-icons/ai";
import leaf from "../assets/leaf3.png"
import lemon from "../assets/fresh.png"


const Landing = () => {

    return ( 
        <div>
            
            <section>
                <LandingIntro />
            </section>


           <section className="mt-[20%] px-10">
                 
                <div className=" about gap-3 items-center mx-auto sm:w-[90%] sm:gap-10">
                    <p className="mt-20 text-center col-start-2 row-start-1 row-end-2 font-[600] text-[20px] bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent sm:-mt-12">About Us</p>
                    <div className=" shape col-start-1 col-end-2 row-start-1 row-end-3 max-w-[400px]"></div>
                    <div className=" col-start-1 col-end-3 row-start-3 text-black/50 sm:col-start-2  sm:row-start-2 lg:col-start-2 lg:row-start-2 sm:text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam nam eveniet perspiciatis, vel molestias deleniti. Quisquam repellat deserunt accusantium nostrum! Dolore saepe quas quibusdam, tenetur aut maiores illum ea!</div>
                    <div className=" col-start-2 row-start-2 row-end-2  bg-green-400/70 w-max text-[12px] px-4 py-2 text-center h-max rounded-2xl mx-auto text-white font-[600] sm:col-start-2 sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:row-start-3 lg:row-end-4 sm:-mt-20">Become a Retailer</div>
                </div>

                <div className="info mx-auto flex justify-around mt-5 gap-5">
                    <div>
                        <div className="item1 bg-red-300 text-center text-[30px] p-3"><PiOrangeSliceLight className="text-white -rotate-30" /></div>
                        <p className="text-[10px] text-teal-600 font-[600] w-max">Most Flavorful</p>
                    </div>
                    <div className="-translate-y-[10px]">
                        <div className="bg-orange-300 text-[30px] p-3 item2"><LuDroplets className="text-white"/></div>
                        <p className="text-[10px] text-teal-600 font-[600] w-max">Most Natural</p>
                    </div>
                    <div>
                        <div className="item3 bg-blue-600 text-[40px] p-3 relative"><LiaCertificateSolid className="text-white absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]" /></div>
                        <p className="text-[10px] text-teal-600 font-[600] -translate-y-[9px] w-max">Highest Standards</p>
                    </div>
                    <div>
                        <div className="item4 bg-pink-600 text-[30px] p-3"><AiOutlineFire className="text-white" /></div>
                        <p className="text-[10px] text-teal-600 font-[600] w-max">Zero Calorie</p>
                    </div>
                </div>

           </section>

           <img src={leaf} className="absolute right-10 translate-y-[20px] w-15 z-10 rotate-70 text-center"/>

           <section className="section3 h-max pb-20 bg-emerald-100 relative px-10 sm:pb-25">
            
                <p className="text-center translate-y-[80px] font-[600] text-[20px] bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">Our Products</p>

                <div className="products *:scale-[0.8] mt-10  flex gap-0 items-center  justify-between w-[90%] *:min-w-40 *:h-40 h-75 overflow-x-auto  mx-auto sm:mt-10 sm:gap-15 sm:px-10 xl:w-[80%]">
                    <div className="sodaCon1 relative ">
                        <div className="sodaAds1 absolute left-[50%] -translate-x-[50%] -bottom-5"></div> 
                    </div>

                    <div className="sodaCon2 relative">
                        <div className="sodaAds2 absolute -bottom-5 left-[50%] -translate-x-[50%]"></div>
                    </div>

                    <div className="sodaCon1 relative">
                        <div className="sodaAds1 absolute left-[50%] -translate-x-[50%] -bottom-5"></div> 
                    </div>

                    <div className="sodaCon2 relative">
                        <div className="sodaAds2 absolute -bottom-5 left-[50%] -translate-x-[50%]"></div>
                    </div>
                </div>

                <div className="bg-green-400 text-white font-[600]  p-2 text-center w-50 rounded-2xl mx-auto mt-15 sm:mt-20 ">Learn more</div>

           </section>

           <img src={lemon} className="w-15 absolute z-10 -translate-y-8 translate-x-10 " />

           <section className="section4 bg-teal-600 h-max -mt-10 px-10">

                <div className="about2 md:w-[80%] justify-center-safe lg:w-[70%] xl:w-[60%] pt-25 mx-auto">
                    <p className="text-white col-start-1 row-start-1 w-max text-center font-[700] text-[20px] translate-y-[10px]">Contact Us</p>
                    <div className="shape2 aspect-square -mt-10 w-45 bg-red-400 col-start-2 row-start-1 row-end-3 mx-auto sm:w-70 md:-mr-[1%] lg:w-80 "></div>
                    <div className="bg-green-400 text-white font-[600] w-max text-center p-3 h-max rounded-2xl text-[12px] row-start-2 sm:row-start-3 sm:mt-5 md:mt-0 lg:text-[15px]">Become a Retailer</div>
                    <p className="text-white col-start-1 col-end-3 -mt-5 sm:col-end-2 sm:row-start-2 sm:row-end-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius maiores hic laudantium tenetur. Asperiores nisi, nulla ipsam repellat provident Lorem ipsum dolor</p>
                </div>

           </section>

        </div>
     );
}
 
export default Landing;