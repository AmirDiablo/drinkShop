import { createContext, useContext, useState } from "react";

const BagContext = createContext()

export const BagProvider = ({ children })=> {
    const [bagCount, setBagCount] = useState(0)

    const addBagCount = ()=> {
        setBagCount(bagCount + 1)
    }

    const reduce = ()=> {
        setBagCount(bagCount - 1)
    }

    const setNumber = (num)=> {
        setBagCount(num)
    }
    
    return (
        <BagContext.Provider value={{bagCount, addBagCount, reduce, setNumber}}>
            {children}
        </BagContext.Provider>
    )
}

//hook
export const useBag = ()=> {
    return useContext(BagContext)
}