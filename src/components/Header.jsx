import { SlOptionsVertical } from "react-icons/sl";
import { useLocation } from "react-router-dom";
const Header = () => {
    const {pathname} = useLocation()
    return (
        <div className="flex flex-row items-center justify-between w-full p-5 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.3)]">
            <div className="text-3xl font-medium capitalize transition-all title bg-gradient-to-r from-[#f9ce34] to-[#ee2a7b]  bg-clip-text text-transparent tracking-wider">{pathname.replace("/","") || "Naad"}</div>
            <SlOptionsVertical />
        </div>
    );
}
 
export default Header;