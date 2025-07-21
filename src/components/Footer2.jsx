import { Link } from "react-router-dom"
import { FaRegCopyright } from "react-icons/fa";

const Footer2 = () => {
    return ( 
        <div className="footer bg-gray-950 mt-25 flex-col px-10 py-10 translate-y-[300px] absolute left-0 right-0 bottom-0">
            <div className="flex gap-[10vw]">
                <div>
                    <p className="text-white p-4">Resources</p>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Find A Store</Link>
                        <Link>Become A Member</Link>
                        <Link>Product Advice</Link>
                        <Link>Send Us Feedback</Link>
                    </div>
                </div>
                <div>
                    <p className="text-white p-4">Help</p>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>Get Help</Link>
                        <Link>Order Status</Link>
                        <Link>Delivery</Link>
                        <Link>Returns</Link>
                        <Link>Payment Options</Link>
                        <Link>Contact Us On Bevora.com Inquiries</Link>
                    </div>
                </div>
                <div>
                    <p className="text-white p-4">Company</p>
                    <div className="flex flex-col p-4 gap-2 text-gray-400">
                        <Link>About Bevora</Link>
                        <Link>News</Link>
                        <Link>Careers</Link>
                        <Link>Investors</Link>
                        <Link>Sustainability</Link>
                        <Link>Report a Concern</Link>
                    </div>
                </div>
            </div>
            <div className="text-gray-400 p-4 flex flex-row gap-4">
                <div className="flex items-center gap-1 mr-[3vw]">
                    <FaRegCopyright /> 2025 Bevora, Inc. All rights reserved
                </div>
                <div className="flex flex-row gap-[3vw]">
                    <Link>Terms of Sale</Link>
                    <Link>Trems of Use</Link>
                    <Link>Bevora Privacy Policy</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer2;