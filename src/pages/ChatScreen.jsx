import { useLocation } from "react-router-dom";

const ChatScreen = () => {
    const pathname = useLocation()
    console.log(pathname)
  return (
    <div className="flex flex-col bg-[#fcfcfc] w-full absolute top-0 left-0 h-full">
        <div className="h-[90px] w-full top-0 left-0"></div>
        <div className="bg-[#fff6ed] flex-1 w-full px-5">
        </div>
        <div className="px-5 py-2 bg-[#fff6ed]">
        <input className="w-full h-12 outline-none border rounded-md" placeholder="Type ypur Message..." type="text" />
        </div>
    </div>
  );
};

export default ChatScreen;
