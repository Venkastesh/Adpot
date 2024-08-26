import { SlOptionsVertical } from "react-icons/sl";
import { useLocation } from "react-router-dom";
const Header = () => {
    const {pathname} = useLocation()
    return (
        <div className="flex flex-row items-center justify-between w-full p-5 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.3)]">
            <div className="text-2xl font-medium capitalize transition-all">{pathname.replace("/","") || "chats"}</div>
            <SlOptionsVertical />
        </div>
    );
}
 
export default Header;