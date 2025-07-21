import { useEffect, useState } from "react";
import Drink from "../components/Drink";



const Products = () => {

    const products = [
        {
            "image": "peach.jfif",
            "name": "peach juice",
            "id": 1,
            "price": 20,
            "caption": "Coca‑Cola® Zero Sugar OREO Limited Edition Creations® is a delicious duo that celebrates friendship with every sip. We’re combining the best traits of Coca‑Cola® Zero Sugar and OREO to help you find a new friend with all the flavor.",
            "number": 100
        },
        {
            "image": "watermelon.jfif",
            "name": "watermelon juice",
            "id": 2,
            "price": 20,
            "caption": "Coca‑Cola® Zero Sugar OREO Limited Edition Creations® is a delicious duo that celebrates friendship with every sip. We’re combining the best traits of Coca‑Cola® Zero Sugar and OREO to help you find a new friend with all the flavor.",
            "number": 100
        },
        {
            "image": "mango.jfif",
            "name": "mango juice",
            "id": 3,
            "price": 20,
            "caption": "Coca‑Cola® Zero Sugar OREO Limited Edition Creations® is a delicious duo that celebrates friendship with every sip. We’re combining the best traits of Coca‑Cola® Zero Sugar and OREO to help you find a new friend with all the flavor.",
            "number": 100
        },
        {
            "image": "pineapple.jfif",
            "name": "pineapple juice",
            "id": 4,
            "price": 20,
            "caption": "Coca‑Cola® Zero Sugar OREO Limited Edition Creations® is a delicious duo that celebrates friendship with every sip. We’re combining the best traits of Coca‑Cola® Zero Sugar and OREO to help you find a new friend with all the flavor.",
            "number": 100
        }
    ]


    return ( 
        <div className="px-10 py-5 sm:flex sm:flex-wrap sm:gap-3">
            {products.map((item)=> (
                <Drink key={item.id} pro={item} />
            ))}
        </div>
     );
}
 
export default Products;