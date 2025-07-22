import img1 from "../assets/ads.jfif"
import img2 from "../assets/ads2.jfif"
import img3 from "../assets/adver.jfif"
import StackedCard from "../components/StackedCard";
import OfferBanner from "../assets/width1960.png"
import OfferBAnner2 from "../assets/width767.png"
import offer1 from "../assets/offer1.jfif"
import offer2 from "../assets/offer2.jfif"
import offer3 from "../assets/offer3.jfif"
import spriteTea from "../assets/spriteTea.jpg"
import sprite from '../assets/sprite.png'

const Offers = () => {
    
    const images = [
      { id: 1, img: img1 },
      { id: 2, img: img2 },
      { id: 3, img: img3 },
      { id: 4, img: img2 }
    ];

  return ( 
    <div className=" px-10 overflow-x-hidden pb-20">

        <p className="text-[30px] font-[700] text-center">Explore a World of Possibilities with Bevora®</p>
        <p className="mb-10 text-center text-[17px] ">Welcome to your one-stop shop for promotions, sweepstakes, and fun across all your favorite Bevora brands.</p>
        <picture>
          <source srcSet={OfferBAnner2} media="(max-width: 600px)" />
          <source srcSet={OfferBanner} media="(min-width: 770px)" />
          <img className="rounded-2xl mx-auto" src={OfferBAnner2}  />
        </picture>

        <p className="mt-10 text-center text-[30px] font-[700]">All Promotions. All Good.</p>
        <p className="text-center text-[17px]">Take advantage now of these special promotions, and check back often so you don’t miss out!</p>

        <div className=" mt-15">
          <StackedCard img1={offer1} img2={offer2} img3={offer3} />
        </div>

        <p className="text-[30px] font-[700] text-center">Discover a refreshing world of more</p>
        <p className="text-center text-[17px]">Each time you make a purchase with your mobile wallet at select Coca‑Cola vending machines, you’ll be one step closer to earning a drink reward.</p>


        <div className="mt-30 md:mt-[30vw] md:mb-[40vw] flex flex-col gap-20 md:gap-[60vw]">

          <div className="mt-10 w-[100%] mx-auto md:flex md:flex-col md:justify-center md:relative">
            <img src={spriteTea} className="rounded-t-2xl text-center mx-auto md:rounded-2xl md:w-[50%] md:absolute md:left-[50%] md:max-w-[600px] md:-translate-x-[40px] md:-translate-y-[20px] "/>

            <div className="p-10 flex flex-col justify-between bg-gray-100 rounded-b-2xl md:rounded-2xl md:w-[50%] md:absolute md:right-[50%] md:max-w-[600px] md:translate-x-[40px] md:max-h-[500px] md:h-[40vw] md:translate-y-[30px] lg:p-20">
              <div>
                <p  className="text-[25px] font-[700] lg:text-[35px]">A Refreshing Take on Tea</p>
                <p className=" text-[15px] lg:text-[20px]">Sprite + Tea is exactly as it sounds, a mighty collision of lemon-lime and natural tea flavors. Still caffeine-free and delicious. Try some.</p>
              </div>
              <div className="border-2 rounded-full text-center p-2 bg-white hover:bg-black/10 mt-10">Want it now</div>
            </div>
          </div>

          <div className="mt-10 w-[100%] mx-auto md:flex md:flex-col md:justify-center md:relative">
            <img src={sprite} className="rounded-t-2xl text-center mx-auto md:rounded-2xl md:w-[50%] md:absolute md:right-[50%] md:max-w-[600px] md:translate-x-[40px] md:max-h-[500px] md:h-[40vw] md:translate-y-[30px] "/>

            <div className="p-10 flex flex-col justify-between bg-gray-100 rounded-b-2xl md:rounded-2xl md:w-[50%] md:absolute md:left-[50%] md:max-w-[600px] md:max-h-[500px] md:-translate-x-[40px] md:h-[40vw] -translate-y-[20px] lg:p-20">
              <div>
                <p  className="text-[25px] font-[700] lg:text-[35px]">A Refreshing Take on Tea</p>
                <p className=" text-[15px] lg:text-[20px]">Sprite + Tea is exactly as it sounds, a mighty collision of lemon-lime and natural tea flavors. Still caffeine-free and delicious. Try some.</p>
              </div>
              <div className="border-2 rounded-full text-center p-2 bg-white hover:bg-black/10 mt-10">Want it now</div>
            </div>
          </div>

        </div>

    </div>
   );
}
 
export default Offers;