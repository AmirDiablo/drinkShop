import { createContext, useState, useContext } from "react";

const FavContext = createContext()

export const FavProvider = ({ children })=> {
    const [favCount, setFavCount] = useState(0)

    const addFavCount = ()=> {
        setFavCount(favCount + 1)
    }

    const reduceFav = ()=> {
        setFavCount(favCount - 1)
    }

    const setFavNumber = (num)=> {
        setFavCount(num)
    }
    
    return (
        <FavContext.Provider value={{favCount, addFavCount, reduceFav, setFavNumber}}>
            {children}
        </FavContext.Provider>
    )
}

//hook
export const useFav = ()=> {
    return useContext(FavContext)
}