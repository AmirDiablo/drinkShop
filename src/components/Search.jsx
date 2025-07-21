import { RiSearchLine } from "react-icons/ri";

const Search = ({closeSearch}) => {

    const close = ()=> {
        closeSearch()
    }

    return ( 
        <div className="absolute h-[80px] top-0 w-screen left-0 right-0 bg-white flex items-center justify-center z-12">
            <div className="w-[80%] relative">
                <input type="search" className="w-[80%] mx-10 p-2 pl-12 rounded-full border-1 border-black" />
                <div className="absolute top-0 left-10 p-2 aspect-square w-10 flex justify-center items-center bg-black/5 rounded-full hover:cursor-pointer hover:bg-black/10"><RiSearchLine /></div>
            </div>
            <p className="text-[20px] p-2 hover:bg-black/20 mr-10 hover:cursor-pointer rounded-2xl" onClick={close}>Cancel</p>
        </div>
     );
}
 
export default Search;