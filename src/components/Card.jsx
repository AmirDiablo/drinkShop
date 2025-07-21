

const Card = ({image, color}) => {
    return (
        <div className={`flex justify-between bg-${color} p-5 rounded-2xl`}>
            <div className=" w-[60%] p-2 text-white">
                <p className="text-[20px] font-[700]">Fresh fruits</p>
                <p className="text-[10px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem neque natus tenetur unde voluptatem omnis repellat illo, eum in impedit veritatis</p>
            </div>
            
            <img src={image} className="w-[40%] rounded-2xl aspect-square" />
        </div>
     );
}
 
export default Card;