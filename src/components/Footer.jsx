import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

    /* bg-linear-to-t from-black from-40% to-white/1 */
    return ( 
        <div className="bg-gray-950 py-20 cursor-pointer footer -mt-10">
            <div className=" mt-10 mx-5 *:border-none">
                <details className="text-white detail1" onClick={()=> {
                    const check = document.querySelector(".detail1").hasAttribute("open")
                    const arrow = document.querySelector(".arrow")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Resources</p>
                        <IoIosArrowDown className="arrow transition-transform duration-300"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Find A Store</Link>
                        <Link>Become A Member</Link>
                        <Link>Product Advice</Link>
                        <Link>Send Us Feedback</Link>
                    </div>
                </details>

                <details className="text-white detail2" onClick={()=> {
                    const check = document.querySelector(".detail2").hasAttribute("open")
                    const arrow = document.querySelector(".arrow2")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Help</p>
                        <IoIosArrowDown className="arrow2 transition-transform duration-300"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Get Help</Link>
                        <Link>Order Status</Link>
                        <Link>Delivery</Link>
                        <Link>Returns</Link>
                        <Link>Payment Options</Link>
                        <Link>Contact Us On Bevora.com Inquiries</Link>
                    </div>
                </details>

                <details className="text-white detail3" onClick={()=> {
                    const check = document.querySelector(".detail3").hasAttribute("open")
                    const arrow = document.querySelector(".arrow3")
                    arrow.style.transform = "rotate(180deg)"
                    if(check){
                        arrow.style.transform = "rotate(0deg)"
                    }
                }}>
                    <summary className="flex items-center justify-between p-4">
                        <p>Company</p>
                        <IoIosArrowDown className="arrow3 transition-transform duration-300"/>
                    </summary>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>About Bevora</Link>
                        <Link>News</Link>
                        <Link>Careers</Link>
                        <Link>Investors</Link>
                        <Link>Sustainability</Link>
                        <Link>Report a Concern</Link>
                    </div>
                </details>
            </div>
            <div className="text-gray-400 p-4 flex flex-col gap-4">
                <div className="flex items-center gap-1">
                    <FaRegCopyright /> 2025 Bevora, Inc. All rights reserved
                </div>
                <div className="flex flex-col gap-2">
                    <Link>Terms of Sale</Link>
                    <Link>Trems of Use</Link>
                    <Link>Bevora Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;